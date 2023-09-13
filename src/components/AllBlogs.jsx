import React, { useEffect, useState } from 'react';
import Blog from './shared/Blog';
import axios from 'axios';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);

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

    return (
        <div
            className='px-10 py-20'>
            <h2 className='text-5xl font-montserrat font-semibold text-[#fff] text-center'>
                Let’s check my Blogs
            </h2>
            <p className='text-md text-[#C4C4C4] text-center mt-4 w-[40%] mb-8 mx-auto'>As a firm believer in continuous learning, I stay up-to-date with the latest advancements in web technologies.</p>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="grid lg:md:grid-cols-3 grid-cols-1 pb-8 gap-5">
                {
                    blogs.map(blog =>  <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
          
        </div>
    );
};

export default AllBlogs;