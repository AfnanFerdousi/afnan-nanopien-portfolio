/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import fb from '../../public/fb.png'
import github from '../../public/github.png'
import insta from '../../public/insta.png'
import linkedin from '../../public/linkedin.png'
import { randomBlob } from '@/hooks/randomBlob';

const Stats = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    const socials = [
        {
            icon: github,
            link: "https://github.com/afnanFerdousi",
        },
        {
            icon: linkedin,
            link: "https://www.linkedin.com/in/afnanferdousi550/",
        },
        {
            icon: insta,
            link: "https://www.instagram.com/afnanferdousi130/"
        },
        {
            icon: fb,
            link: "https://www.facebook.com/afnanferdousi2006"
        }
    ];
    const blobRef = useRef(null);
    useEffect(() => {
        const blob = blobRef.current;
        const handleResize = () => {
            setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0); // Update the window width when it changes
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
    const isSmallDevice = windowWidth <= 480;
    return (
        <div className="max-w-[1380px] w-full mx-auto">

            <div className='flex items-center justify-center px-8 lg:md:h-[70vh] h-[50vh] lg:md:gap-[8rem] gap-[3rem]'>
                <div
                    ref={blobRef}
                    className='blob2'
                    style={{ filter: 'blur(100px)' }}
                ></div>
                <div
                    {...(!isSmallDevice ? {
                        "data-aos": "fade-right",
                        "data-aos-duration": "3000",
                        "data-aos-offset": "100",
                    } : {
                        "data-aos": "fade-up",
                        "data-aos-duration": "3000",
                        "data-aos-offset": "100",
                    })}
                    className='flex flex-col items-start'
                // data-aos-easing="ease-in-sine"
                >
                    <div className="relative flex flex-col items-end">
                        <div className="absolute top-0 lg:md:right-[-32px] right-[23px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} className="lg:md:w-[40px] lg:md:h-[40px] w-[20px] h-[20px]" />
                        </div>
                        <div className="pb-8">
                            <h2 className='font-montserrat font-semibold lg:md:text-8xl text-4xl'>40</h2>
                            <p className="lg:md:text-lg text-[12px] w-max">Projects Finished</p>
                        </div>
                    </div>

                    <hr className="lg:md:w-42 lg:md:block hidden border-t-2 border-gray-700" /> {/* Add a short horizontal line here */}
                    <div className="relative flex flex-col items-end">
                        <div className="absolute top-[30px] lg:md:right-[-32px] right-[12px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} className="lg:md:w-[40px] lg:md:h-[40px] w-[20px] h-[20px]" />
                        </div>
                        <div className="pt-8">
                            <h2 className='font-montserrat font-semibold lg:md:text-8xl text-4xl'>80</h2>
                            <p className="lg:md:text-lg text-[12px] w-max">Video Created</p>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-duration="4000"
                    data-aos-easing="ease-in-sine"
                    data-aos-offset="100">
                    <Image src="https://i.ibb.co/vXMvzdy/logo.png" alt="blob" height={200} width={200} />
                </div>
                <div
                     {...(!isSmallDevice ? {
                        "data-aos": "fade-left",
                        "data-aos-duration": "3000",
                        "data-aos-offset": "100",
                    } : {
                        "data-aos": "fade-up",
                        "data-aos-duration": "3000",
                        "data-aos-offset": "100",
                    })}
                    className="flex flex-col items-end"
                // data-aos-easing="ease-in-sine"
                >
                    <div className="relative flex flex-col items-end">
                        <div className="absolute  lg:md:right-[-32px] right-[-3px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} className="lg:md:w-[40px] lg:md:h-[40px] w-[20px] h-[20px]" />
                        </div>
                        <div className="pb-8">
                            <h2 className='font-montserrat font-semibold lg:md:text-8xl text-4xl'>03</h2>
                            <p className="lg:md:text-lg text-[12px] w-max">Companies</p>
                        </div>
                    </div>
                    <hr className="lg:md:w-42 lg:md:block hidden  border-t-2 border-gray-700" /> {/* Add a short horizontal line here */}
                    <div className="relative flex flex-col items-end">
                        <div className="absolute top-[30px] lg:md:right-[-32px] right-[12px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} className="lg:md:w-[40px] lg:md:h-[40px] w-[20px] h-[20px]" />
                        </div>
                        <div className="pt-8">
                            <h2 className='font-montserrat font-semibold lg:md:text-8xl text-4xl'>75</h2>
                            <p className="lg:md:text-lg text-[12px] w-max">Github Repo's</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* social links */}
            <div
                data-aos="fade-zoom-in"
                data-aos-duration="3000"
                className="my-28 px-[40px]">
                <div className="grid lg:md:grid-cols-4 grid-cols-2 lg:md:gap-[32px] gap-2 items-center lg:md:justify-center justify-even">
                    {socials.map((social, index) => (
                        <div
                            style={{ background: 'rgba(217, 217, 217, 0.1)' }}
                            className="cursor-pointer rounded-xl lg:md:px-24 px-8 py-[10px] mx-auto lg:md:h-[100%] h-[70px] flex items-center transform transition-transform hover:scale-110"
                            key={index}
                        >
                            <a href={social.link} target="_blank" rel="noopener noreferrer">
                                <Image src={social.icon} alt={`Social Media ${index}`} className="" width={150} height={40} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;