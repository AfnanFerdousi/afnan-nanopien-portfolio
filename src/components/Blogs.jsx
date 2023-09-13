import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from './shared/Blog';
import { useRouter } from 'next/router';

const Blogs = ({ limit }) => {
    console.log(limit)
    const [blogs, setBlogs] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get('https://afnan-portfolio-server.vercel.app/api/v1/blogs');
                console.log(res?.data?.data)
                setBlogs(res?.data?.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        getBlogs();
    }, []);

    // Limit the number of displayed blogs to the specified limit
    const displayedBlogs = blogs && blogs?.length > 0 ? blogs.slice(0, limit) : [];

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className='px-10 py-40'>
            <h2 className='text-5xl font-montserrat font-semibold text-[#fff] text-center'>
                Let’s check my Blogs
            </h2>
            <p className='text-md text-[#C4C4C4] text-center mt-4 w-[40%] mb-8 mx-auto'>As a firm believer in continuous learning, I stay up-to-date with the latest advancements in web technologies.</p>
            <div className="grid lg:md:grid-cols-3 grid-cols-1 pb-8 gap-5">
                {
                    displayedBlogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
            {router.pathname !== '/blogs' && (
                <button
                    onClick={() => router.push('/blogs')}
                    className='py-4 px-8 text-[15px] font-medium rounded-lg text-[#E0DEDE] border-[1px] border-[#E0DEDE] mx-auto flex justify-center transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white hover:scale-105'
                >
                    Show All
                </button>
            )}
        </div>
    );
};

export default Blogs;
