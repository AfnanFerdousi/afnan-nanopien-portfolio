import React, { useEffect, useRef, Suspense } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const FloatingShapes = dynamic(() => import('./3D/FloatingShapes'), {
    ssr: false,
    loading: () => null
});

const Banner = () => {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter-container', {
            strings: [
                'Full Stack Developer',
                'Software Engineer',
                'UI/UX Enthusiast',
                'Problem Solver',
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
        });

        return () => {
            typewriter.stop();
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    };

    const floatAnimation = {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <>
            <Head>
                <title>Afnan Ferdousi | Software Engineer</title>
                <meta name="description" content="Afnan Ferdousi - Full Stack Developer specializing in React, Next.js, Node.js. Building exceptional digital experiences." />
            </Head>
            <div className='min-h-screen w-screen relative overflow-hidden'>
                {/* 3D Background */}
                <Suspense fallback={null}>
                    <FloatingShapes />
                </Suspense>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050f25]/50 to-[#050f25] z-[1]"></div>

                {/* Content */}
                <motion.div
                    className='h-screen flex flex-col justify-center items-center relative z-10 px-4'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Status Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#EF4765]/20 to-[#4764e9]/20 border border-[#EF4765]/30 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-sm text-gray-300 font-medium">Available for opportunities</span>
                        </span>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        variants={imageVariants}
                        animate={floatAnimation}
                        className="relative mb-6"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#EF4765] to-[#4764e9] rounded-full blur-xl opacity-50 animate-pulse"></div>
                        <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#EF4765]/50 ring-offset-4 ring-offset-[#050f25]">
                            <Image
                                src="https://i.ibb.co/CHL8JRC/6b1b42ec-16cf-44a3-87da-49c5fbddba5f.jpg"
                                alt="Afnan Ferdousi - Software Engineer"
                                fill
                                style={{ objectFit: 'cover' }}
                                quality={100}
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className='font-Raleway text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center'
                    >
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Afnan Ferdousi
                        </span>
                    </motion.h1>

                    {/* Typewriter */}
                    <motion.div
                        variants={itemVariants}
                        className='text-[#EF4765] font-Raleway text-xl md:text-3xl lg:text-4xl font-medium h-12 flex items-center'
                    >
                        <div id="typewriter-container"></div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className='mt-6 text-gray-400 text-center max-w-2xl text-base md:text-lg leading-relaxed px-4'
                    >
                        Crafting exceptional digital experiences with modern technologies.
                        3+ years of expertise in building scalable web applications that
                        make an impact.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className='mt-8 flex flex-wrap gap-4 justify-center'
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 71, 101, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-[#EF4765] to-[#FF6B6B] text-white font-semibold rounded-full shadow-lg shadow-[#EF4765]/25 transition-all duration-300"
                        >
                            Hire Me
                        </motion.a>
                        <motion.a
                            href="https://drive.google.com/file/d/1234/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                        >
                            <FaDownload className="text-sm" />
                            Resume
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className='mt-8 flex gap-4'
                    >
                        {[
                            { icon: FaGithub, link: "https://github.com/afnanFerdousi", label: "GitHub" },
                            { icon: FaLinkedin, link: "https://www.linkedin.com/in/afnanferdousi550/", label: "LinkedIn" },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#EF4765]/30 transition-colors duration-300"
                                aria-label={social.label}
                            >
                                <social.icon className="text-xl" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <a href="#stats" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
                            <span className="text-sm mb-2">Scroll Down</span>
                            <HiArrowDown className="text-2xl" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Banner;
