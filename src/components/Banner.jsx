import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import Head from 'next/head';
import Image from 'next/image';

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

        const randomizeBlobPosition = () => {
            if (blob) {
                const maxX = window.innerWidth - blob.clientWidth;
                const maxY = window.innerHeight - blob.clientHeight;

                const randomX = Math.random() * maxX;
                const randomY = Math.random() * maxY;

                blob.style.transition = '4s';
                blob.style.transform = `translate(${randomX}px, ${randomY}px)`;
            }
        };

        randomizeBlobPosition();

        const intervalId = setInterval(() => {
            randomizeBlobPosition();
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Afnan || Nanopien</title>
            </Head>
            <div className='h-screen w-screen relative overflow-hidden'>
                {/* Blurry background */}
                <div
                    ref={blobRef}
                    className='blob'
                    style={{ filter: 'blur(80px)' }}
                ></div>

                {/* Content */}
                <div className='h-full flex flex-col justify-center items-center relative z-10'>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <Image
                                src="https://i.ibb.co/whYZChx/afnan.jpg"
                                alt="Afnan Ferdousi"
                                objectFit="cover"
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

                    <div className='mt-8 text-Raleway text-[#fff] text-5xl'>
                        <h2 id="typewriter-container"></h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
