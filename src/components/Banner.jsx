import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import Head from 'next/head';
import Image from 'next/image';
import { randomBlob } from '@/hooks/randomBlob';

const Banner = () => {
    const blobRef = useRef(null);

    useEffect(() => {
        const typewriter = new Typewriter('#typewriter-container', {
            strings: [
                'The Only Nanopien Alive',
                'Next Gen Developer',
                'Aspire To Be a Leader',
            ],
            autoStart: true,
            loop: true,
        });

        return () => {
            typewriter.stop();
        };
    }, []);

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

    return (
        <>
            <Head>
                <title>Afnan || Nanopien</title>
            </Head>
            <div className='lg:md:h-screen h-[80vh] w-screen relative'>
                {/* Blurry background */}
                <div
                    ref={blobRef}
                    className='blob overflow-x-hidden'
                    style={{ filter: 'blur(80px)' }}
                ></div>

                {/* Content */}
                <div className='h-full flex flex-col justify-center items-center relative z-10'>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <Image
                                src="https://i.ibb.co/CHL8JRC/6b1b42ec-16cf-44a3-87da-49c5fbddba5f.jpg"
                                alt="Afnan Ferdousi"
                                objectPosition="center"
                                quality={100}
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>

                    <h1 className='font-Inconsolata text-2xl mt-4 text-[#fff]'>
                        Afnan Ferdousi
                    </h1>

                    <div className='mt-8 text-Raleway text-[#fff] lg:md:text-5xl text-3xl'>
                        <div
                            id="typewriter-container"
                            style={{
                                height: '60px', // Set a fixed height for the container
                                overflow: 'hidden', // Handle overflow
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
