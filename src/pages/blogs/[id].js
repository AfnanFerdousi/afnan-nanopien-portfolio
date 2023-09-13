import axios from 'axios';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter, useEffect } from 'next/router'
const SingleBlog = () => {
      const router = useRouter()
    const [blog, setBlog] = useState([]);
console.log(router)
    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get(`https://afnan-portfolio-server.vercel.app/api/v1/blogs/${router?.query?.id}`);
                console.log(res?.data?.data)
                setBlog(res?.data?.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        getBlogs();
    }, [router?.query?.id]);
    const getTimeDifference = (createdAt) => {
        const createdDate = new Date(createdAt);
        const currentDate = new Date();
        const timeDifference = currentDate - createdDate;

        // Calculate time difference in days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        return daysDifference;
    };

    const daysSinceCreation = getTimeDifference(blog.createdAt);

    console.log(blog)
    return (
        <div style={{ background: 'rgba(217, 217, 217, 0.1)' }} className='p-4 rounded-xl flex flex-col items-center px-10'>
             <Image
                className='rounded-xl h-[50vh] w-full'
                src={blog.image}
                alt={blog.title}
                width={300}
                height={200}
            />
            <div>
                <div className='flex items-center gap-x-4 py-4'>
                    {blog.tags.map((tag) => (
                        <h2
                            className='text-[#E0DEDE] bg-[rgba(217,217,217,0.1)] p-2 font-montserrat font-normal text-md rounded-xl'
                            key={tag}
                        >
                            {tag}
                        </h2>
                    ))}
                </div>
                 <div className="flex items-center justify-between">
                    <h2 className='font-montserrat font-semibold text-2xl text-[#FFFFFF] mb-4'>{blog.title}</h2>
                    <h2 className='text-[#C4C4C4] text-md'> {daysSinceCreation === 0
                        ? 'Created today'
                        : `Created ${daysSinceCreation} ${daysSinceCreation === 1 ? 'day' : 'days'
                        } ago`} </h2>
                </div>

                <p className='text-[#C4C4C4] py-6'>{blog?.content}</p>

                <div className="flex gap-x-2 items-center">
                     <div className="avatar">
                        <div className="w-24 rounded-full">
                            <Image
                                src="https://i.ibb.co/whYZChx/afnan.jpg"
                                alt="Afnan Ferdousi"
                                objectFit="cover"
                                objectPosition="center"
                                quality={100}
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className='font-montserrat font-medium text-[#fff] text-lg'>Afnan Ferdousi</h2>
                        <span className='text-sm font-montserrat text-[#C4C4C4]'>Subject Matter Specialist (MERN) at <a href='http://ostad.app/' target="_blank" noopener>Ostad</a> </span>
                   </div>

                </div>
            </div>
            
        </div>
    );
};

export default SingleBlog;