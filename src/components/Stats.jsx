import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
    const socials = [
        { icon: FaGithub, link: "https://github.com/afnanFerdousi", label: "GitHub", color: "#fff" },
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/afnanferdousi550/", label: "LinkedIn", color: "#0A66C2" },
        { icon: FaInstagram, link: "https://www.instagram.com/afnanferdousi130/", label: "Instagram", color: "#E4405F" },
        { icon: FaFacebook, link: "https://www.facebook.com/afnanferdousi2006", label: "Facebook", color: "#1877F2" },
    ];

    const stats = [
        { value: 40, label: "Projects Completed", suffix: "+" },
        { value: 3, label: "Years Experience", suffix: "+" },
        { value: 80, label: "Videos Created", suffix: "+" },
        { value: 75, label: "GitHub Repos", suffix: "+" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto" id="stats">
            {/* Stats Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-20"
            >
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <span className="text-[#EF4765] font-medium text-sm uppercase tracking-wider">Numbers</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4765] to-[#4764e9]">Achievements</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#EF4765]/20 to-[#4764e9]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-6 md:p-8 border border-white/5 hover:border-[#EF4765]/30 transition-all duration-300 text-center">
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#EF4765] to-[#FF6B6B] bg-clip-text text-transparent">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </h3>
                                <p className="text-gray-400 mt-2 text-sm md:text-base">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Social Links Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h3 className="text-xl font-semibold text-white mb-6">Let&apos;s Connect</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {socials.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#EF4765] to-[#4764e9] rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-[#EF4765]/50 transition-all duration-300">
                                <social.icon className="text-2xl md:text-3xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {social.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Stats;
