import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLaptop, BsArrowRightShort } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import { randomBlob } from '@/hooks/randomBlob';

const Projects = () => {
    const isSmMd = useMediaQuery({ query: '(max-width: 768px)' });
    const [limit, setLimit] = useState(7);
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
    const [projects, setProjects] = useState([])
    // Mockup data for projects
    useEffect(() => {
        const getProjects = async () => {
            try {
                const res = await axios.get('https://afnan-portfolio-server.vercel.app/api/v1/projects');
                setProjects(res?.data?.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        getProjects();
    }, []);
    // Define different card sizes based on position
    const displayedProjects = projects && projects?.length > 0 ? projects.slice(0, limit) : [];
    const cardSizes = ['w-1/2', 'w-1/3', 'w-1/4', 'w-1/3', 'w-1/4', 'w-1/2', 'w-1/3', 'w-1/4', 'w-1/3', 'w-1/4'];
    return (
        <div className="lg:md:px-8 px-4 lg:md:py-30 py-20 max-w-[1440px] w-full mx-auto" >
            <div>
                <div
                    ref={blobRef}
                    className='blob'
                    style={{ filter: 'blur(80px)' }}
                ></div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className='text-center max-w-[1380px] mx-auto w-full'>
                    <h2 className='font-Raleway font-bold lg:md:text-5xl text-3xl flex flex-col text-[#fff] text-center'>
                        Check Out My projects
                    </h2>
                    <p className='font-montserrat lg:md:text-lg text-[12px] text-[#C4C4C4] lg:md:w-[50%] w-[100%] text-center mt-4 lg:md:mx-auto'>Few projects of mine that illustrates my technical experience</p>
                    {
                        isSmMd ? (
                            <Swiper
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                pagination={true} modules={[Pagination]} className="mySwiper lg:md:mt-0 mt-10">
                                {displayedProjects.map((project, index) => (
                                    <SwiperSlide key={project._id} className=" pb-4">
                                        <div className={`mx-2 py-4 h-full cursor-pointer`} >
                                            <div className="relative bg-gray-700 shadow-lg rounded-lg overflow-hidden group transition-transform transform scale-100 hover:scale-105 hover:shadow hover:bg-[#333]">
                                                <Image
                                                    src={project.imageUrl}
                                                    alt={project.title}
                                                    width={500} // Set the width of the image
                                                    height={300} // Set the height of the image
                                                    objectFit="cover" // Adjust objectFit as needed
                                                    className="w-full h-[300px]  object-cover object-center"
                                                />
                                                <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80 transition-opacity group-hover:opacity-80"></div>
                                                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <h2 className=" font-semibold text-lg text-white">
                                                        {project.title}
                                                    </h2>
                                                    <p className="mt-2 text-gray-200 text-sm">
                                                        {project.description}
                                                    </p>
                                                    <div className="mt-4 flex space-x-4">
                                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                            <BsLaptop className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-300" />
                                                        </a>
                                                        {/* <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                        <AiOutlineGithub className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-300" />
                                                    </a> */}
                                                    </div>
                                                    {/* <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-4 flex gap-x-2 items-center text-[#fff] transition-colors duration-300 text-md font-montserrat hover:text-[#EF4765]"
                                                >
                                                    Learn More <BsArrowRightShort className="text-2xl" />
                                                </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <div className="flex flex-wrap justify-center pb-8">
                                {displayedProjects.map((project, index) => (
                                    <div key={project._id} className={`mx-2 py-4 h-full cursor-pointer ${cardSizes[index]}`} >
                                        <div className="relative bg-gray-700 shadow-lg rounded-lg overflow-hidden group transition-transform transform scale-100 hover:scale-105 hover:shadow hover:bg-[#333]">
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.title}
                                                width={500} // Set the width of the image
                                                height={300} // Set the height of the image
                                                objectFit="cover" // Adjust objectFit as needed
                                                className="w-full h-[320px]  object-cover object-center"
                                            />
                                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80 transition-opacity group-hover:opacity-80"></div>
                                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <h2 className=" font-semibold text-lg text-white">
                                                    {project.title}
                                                </h2>
                                                <p className="mt-2 text-gray-200 text-sm w-[70%]">
                                                    {project.description}
                                                </p>
                                                <div className="mt-4 flex space-x-4">
                                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                        <BsLaptop className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-300" />
                                                    </a>
                                                    {/* <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                    <AiOutlineGithub className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-300" />
                                                </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    }

                    <button
                        onClick={() => setLimit(limit >= projects.length ? 7 : limit + 3)}
                        className="py-4 px-8 text-[15px] font-medium rounded-lg text-[#E0DEDE] border-[1px] border-[#E0DEDE] mx-auto flex justify-center transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white hover:scale-105"
                    >
                        {limit >= projects.length ? 'Show Less' : 'Show More'}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Projects;
