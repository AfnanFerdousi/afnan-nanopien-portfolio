import React, { useEffect, useState, useRef } from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { RiEnglishInput } from 'react-icons/ri';
import { MdClass } from 'react-icons/md';
import { FiArrowUpRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { randomBlob } from '@/hooks/randomBlob';


const Service = () => {
    const isSmMd = useMediaQuery({ query: '(max-width: 768px)' }); // Define your breakpoint here (e.g., 768px for sm and md devices)
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
    const [services, setServices] = useState([])
    const icons = {
        BsCodeSlash: <BsCodeSlash />,
        RiEnglishInput: <RiEnglishInput />,
        MdClass: <MdClass />,
        FiArrowUpRight: <FiArrowUpRight />,
    };
    useEffect(() => {
        const getServices = async () => {
            try {
                const res = await axios.get('https://afnan-portfolio-server.vercel.app/api/v1/services');
                setServices(res?.data?.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        getServices();
    }, []);


    return (
        <div className="lg:md:px-8 px-4 lg:md:py-30 py-20">
            <div
                ref={blobRef}
                className='blob'
                style={{ filter: 'blur(100px)' }}
            ></div>
            <div
                data-aos="fade-down"
                data-aos-duration="2000"
                className="lg:md:flex justify-between lg:md:text-start text-center">
                <h2 className="font-Raleway font-bold lg:md:text-5xl text-3xl flex flex-col text-[#fff]">
                    Expertise service!
                    <span>Let’s check it out.</span>
                </h2>
                <p className="font-montserrat lg:md:text-lg text-[12px] text-[#C4C4C4] lg:md:w-[50%] w-[100%] lg:md:text-start text-center lg:md:mt-0 mt-4">
                    As a firm believer in continuous learning, I stay up-to-date with the latest advancements in web technologies. I am enthusiastic about taking on new challenges. I am enthusiastic about taking on new challenges.
                </p>
            </div>
            {isSmMd ? (
                <Swiper
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    pagination={true} modules={[Pagination]} className="mySwiper lg:md:mt-0 mt-10">
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[25px] mt-16'>
                        {services?.map((data) => (
                            <SwiperSlide key={data?._id}>
                                <div
                                    className="p-6 rounded-xl serviceCard "
                                    style={{ background: 'rgba(217, 217, 217, 0.1)' }}
                                >
                                    <div className="">
                                        <h2 className="w-fit p-[10px] text-4xl rounded-full border-[#fff] border-[2px] text-[#fff]" style={{ background: 'rgba(255, 255, 255, 0.12)' }}>{icons[data?.icon]} </h2>

                                        <div className="py-10">
                                            <h2 className="font-Raleway font-semibold text-2xl text-[#fff] ">{data?.title}</h2>
                                            <p className="font-montserrat lg:md:text-md text-[#C4C4C4] pt-6 text-[12px]">{data?.desc}</p>
                                        </div>

                                        {/* <button
                                        onClick={router.push(`/services/${data?._id}`)}
                                         className="font-montserrat text-md font-bold text-[#fff] mb-10 flex ">Learn More <FiArrowUpRight className="text-2xl font-thin" /></button> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            ) : (
                <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className='grid lg:grid-cols-3 grid-cols-1 gap-[25px] mt-16'>
                    {services?.map((data) => (
                        <div key={data?._id} className="p-6 rounded-xl serviceCard " style={{ background: 'rgba(217, 217, 217, 0.1)' }}>
                            <div className="">
                                <h2 className="w-fit p-[10px] text-4xl rounded-full border-[#fff] border-[2px] text-[#fff]" style={{ background: 'rgba(255, 255, 255, 0.12)' }}>{icons[data?.icon]} </h2>

                                <div className="py-10">
                                    <h2 className="font-Raleway font-semibold text-2xl text-[#fff] ">{data?.title}</h2>
                                    <p className="font-montserrat text-md text-[#C4C4C4] pt-6">{data?.desc}</p>
                                </div>

                                {/* <button
                                onClick={router.push(`/services/${data?._id}`)}
                                 className="font-montserrat text-md font-bold text-[#fff] mb-10 flex ">Learn More <FiArrowUpRight className="text-2xl font-thin" /></button> */}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Service;
