import Image from 'next/image';
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
        <div style={{ background: 'rgba(217, 217, 217, 0.1)' }} className='p-4 rounded-xl flex flex-col items-center'>
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
                <h2 className='font-montserrat font-semibold text-2xl text-[#FFFFFF] mb-4'>
                    {blog.title}
                </h2>
                <p className='text-[#C4C4C4]'>
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
