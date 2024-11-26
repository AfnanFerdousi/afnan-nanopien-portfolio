import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import Blog from './shared/Blog';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { randomBlob } from '@/hooks/randomBlob';

const Blogs = ({ limit }) => {
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
    const router = useRouter();

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get('https://afnan-portfolio-server.vercel.app/api/v1/blogs');
                setBlogs(res?.data?.data)
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        getBlogs();
    }, []);

    // Limit the number of displayed blogs to the specified limit
    const displayedBlogs = blogs && blogs?.length > 0 ? blogs.slice(0, 3) : [];
    console.log(blogs)
    return (
        <div className='lg:md:px-8 px-4 lg:md:py-30 py-20 max-w-[1440px] w-full mx-auto'>
        <div
            // data-aos="fade-up"
            // data-aos-duration="3000"
            className='lg:md:px-8 px-4 lg:md:py-30 py-20 text-center max-w-[1440px] w-full mx-auto'>
            <div
                ref={blobRef}
                className='blob2'
                style={{ filter: 'blur(100px)' }}
            ></div>
              <div
                data-aos="fade-down"
                data-aos-duration="2000"
                className="lg:md:flex justify-between items-center lg:md:text-start text-center w-full">
                <h2 className="font-Raleway font-bold lg:md:text-5xl text-3xl flex flex-col text-[#fff] ">
                    My View On Things 
                    <span>Check It Out!</span>
                </h2>
                <p className="font-montserrat lg:md:text-lg text-[12px] text-[#C4C4C4] lg:md:w-[50%] w-[100%] lg:md:text-start text-center lg:md:mt-0 mt-4">
                 Here are some articles I wrote on various things I am interested on. You can read them to learn more about me and how I think 
                </p>
            </div>
            {
                isSmMd ? (
                    <Swiper
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        pagination={true} modules={[Pagination]} className="mySwiper lg:md:mt-16 mt-10">
                        {
                            displayedBlogs.map(blog => <SwiperSlide key={blog._id} className=" pb-8"><Blog blog={blog}></Blog></SwiperSlide>)
                        }
                    </Swiper>
                ) : (
                    <div className="grid lg:md:grid-cols-3 grid-cols-1 pb-8 gap-5 lg:md:mt-16 mt-10">
                        {
                            displayedBlogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                        }
                    </div>
                )
            }
            {router.pathname !== '/blogs' && (
                <button
                    onClick={() => router.push('/blogs')}
                    className='py-4 px-8 text-[15px] font-medium rounded-lg text-[#E0DEDE] border-[1px] border-[#E0DEDE] mx-auto flex justify-center transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white hover:scale-105'
                >
                    Show All
                </button>
            )}
        </div>
        </div>
    );
};

export default Blogs;
