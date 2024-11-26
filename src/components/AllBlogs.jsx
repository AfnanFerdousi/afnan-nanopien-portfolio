import React, { useEffect, useState, useRef } from 'react';
import Blog from './shared/Blog';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { randomBlob } from '@/hooks/randomBlob';
import Link from 'next/link';
import { IoArrowBack } from "react-icons/io5";

const AllBlogs = () => {
        const isSmMd = useMediaQuery({ query: '(max-width: 768px)' });
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
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get('https://afnan-portfolio-server.vercel.app/api/v1/blogs');
                setBlogs(res?.data?.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        getBlogs();
    }, []);

    return (
        <div
            className='px-8 pt-10 pb-20 max-w-[1440px] w-full mx-auto'>
                 <div
                    ref={blobRef}
                    className='blob'
                    style={{ filter: 'blur(100px)' }}
                ></div>
                <Link href="/" className="font-montserrat font-bold lg:md:text-[18px] text-[16px] text-[#fff] flex items-center gap-x-2"> <IoArrowBack /><span>Back</span></Link>
            <h2 className='font-Raleway font-bold lg:md:text-5xl text-3xl flex flex-col text-[#fff] text-center lg:md:mt-6'>
                Let’s check my Blogs
            </h2>
            <p className='font-montserrat lg:md:text-lg text-[12px] text-[#C4C4C4] lg:md:w-[50%] w-[100%] text-center lg:md:mt-2 mt-4 mx-auto'>Here are some articles I wrote on various things I am interested on</p>
            {
                isSmMd ? (
                    <Swiper
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        pagination={true} modules={[Pagination]} className="mySwiper lg:md:mt-16 mt-10">
                        {
                            blogs.map(blog => <SwiperSlide key={blog._id} className=" pb-8"><Blog blog={blog}></Blog></SwiperSlide>)
                        }
                    </Swiper>
                ) : (
                    <div className="grid lg:md:grid-cols-3 grid-cols-1 pb-8 gap-5 lg:md:mt-16 mt-10">
                        {
                            blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                        }
                    </div>
                )
            }
          
        </div>
    );
};

export default AllBlogs;