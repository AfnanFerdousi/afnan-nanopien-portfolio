import React, { useEffect, useState, useRef } from 'react';
import Blog from './shared/Blog';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { randomBlob } from '@/hooks/randomBlob';

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
            className='px-10 pt-10 pb-20'>
                 <div
                    ref={blobRef}
                    className='blob'
                    style={{ filter: 'blur(100px)' }}
                ></div>
            <h2 className='font-Raleway font-bold lg:md:text-5xl text-3xl flex flex-col text-[#fff] text-center'>
                Let’s check my Blogs
            </h2>
            <p className='font-montserrat lg:md:text-lg text-[12px] text-[#C4C4C4] lg:md:w-[50%] w-[100%] lg:md:text-start text-center lg:md:mt-0 mt-4'>Embark on a Journey Through My Diverse and Informative Blog Posts, Where I Share Insights, Ideas, and Knowledge on Various Topics of Interest.</p>
            {
                isSmMd ? (
                    <Swiper
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        pagination={true} modules={[Pagination]} className="mySwiper lg:md:mt-0 mt-10">
                        {
                            blogs.map(blog => <SwiperSlide key={blog._id} className=" pb-8"><Blog blog={blog}></Blog></SwiperSlide>)
                        }
                    </Swiper>
                ) : (
                    <div className="grid lg:md:grid-cols-3 grid-cols-1 pb-8 gap-5">
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