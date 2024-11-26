import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'; // Import useEffect from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import GIF from '@/components/shared/GIF';
import HomeIcon from '@/components/shared/HomeIcon';
import { randomBlob } from '@/hooks/randomBlob';
import Head from 'next/head';
import Footer from '@/components/Footer';

const SingleBlog = () => {
    const router = useRouter()
    const blobRef = useRef(null);
    useEffect(() => {
        const blob = blobRef.current;
        const handleResize = () => {
            randomBlob(blobRef);
        };

        // Randomize the initial position
        randomBlob(blobRef);

        window.addEventListener('resize', handleResize);

        const intervalId = setInterval(() => {
            randomBlob(blobRef);
        }, 4000);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get(`https://afnan-portfolio-server.vercel.app/api/v1/blogs/${router?.query?.id}`);
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

    return (
        <div>
            <Head>
                <title>{blog.title} || Afnan || Nanopien</title>
            </Head>
            <div style={{ background: '#0F192E' }} className=' rounded-xl flex flex-col items-center px-10 relative py-8 max-w-[1380px] mx-auto w-full lg:md:pt-6'>
                <div
                    ref={blobRef}
                    className='blob2'
                    style={{ filter: 'blur(100px)' }}
                ></div>
                <Image
                    className='rounded-xl lg:md:h-[80vh] h-[50vh] w-full'
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={200}
                />
                <div>
                    <div className='flex items-center gap-x-4 py-4'>
                        {blog?.tags?.map((tag) => (
                            <h2
                                className='text-[#E0DEDE] bg-[rgba(217,217,217,0.1)] p-2 font-montserrat font-normal lg:md:text-md text-[12px] rounded-xl'
                                key={tag}
                            >
                                {tag}
                            </h2>
                        ))}
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className='font-montserrat font-semibold lg:md:text-2xl text-xl text-[#FFFFFF] mb-4'>{blog.title}</h2>
                        <h2 className='text-[#C4C4C4] lg:md:text-md text-[12px]'> {daysSinceCreation === 0
                            ? 'Created today'
                            : `Created ${daysSinceCreation} ${daysSinceCreation === 1 ? 'day' : 'days'
                            } ago`} </h2>
                    </div>

                    <p className='text-[#C4C4C4] py-6 lg:md:text-[16px] text-[12px]'>{blog?.content}</p>

                    <div className="flex gap-x-2 items-center">
                        <div className="avatar">
                            <div className="lg:md:w-20 w-14 rounded-full">
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
                            <h2 className='font-montserrat font-medium text-[#fff] lg:md:text-lg text-md'>Afnan Ferdousi</h2>
                            <span className='text-sm font-montserrat text-[#C4C4C4]'>Co-Founder & Software Engineer at <a href='https://www.dreabuild.com/' target="_blank" noopener className='font-bold underline'>Dreabuild</a> </span>
                        </div>

                    </div>
                </div>
                {/* <GIF/> */}
                <HomeIcon />

            </div>

            <Footer/>
        </div>
    );
};

export default SingleBlog;