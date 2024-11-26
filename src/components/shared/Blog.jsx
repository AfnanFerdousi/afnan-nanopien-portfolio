import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = ({ blog }) => {
    // Function to calculate the time difference
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
        <div style={{ background: 'rgba(217, 217, 217, 0.1)' }} className='p-4 rounded-xl flex flex-col '>
            <Image
                className='rounded-xl lg:md:h-full h-[35vh] w-full object-cover'
                src={blog.image}
                alt={blog.title}
                objectFit="cover"
                width={300}
                height={200}
            />

            <div>
                <div className='flex items-center gap-x-4 py-4 justify-start'>
                    {blog.tags.map((tag) => (
                        <h2
                            className='text-[#E0DEDE] bg-[rgba(217,217,217,0.1)] p-2 font-montserrat font-normal lg:md:text-md text-[12px] rounded-xl'
                            key={tag}
                        >
                            {tag}
                        </h2>
                    ))}
                </div>
            <Link href={`/blogs/${blog._id}`}>
                <h2 className='text-start font-montserrat font-semibold lg:md:text-2xl text-xl text-[#FFFFFF] mb-4'>
                    {blog.title}
                </h2>
            </Link>

               <p className='text-[#C4C4C4] text-start my-2'>{blog.content.split(' ').slice(0, 10).join(' ')}...</p>

                <p className='text-[#fff] text-start flex items-end text-sm w-full'>
                    {daysSinceCreation === 0
                        ? 'Created today'
                        : `Created ${daysSinceCreation} ${daysSinceCreation === 1 ? 'day' : 'days'
                        } ago`}
                </p>
            </div>
        </div>
    );
};

export default Blog;
