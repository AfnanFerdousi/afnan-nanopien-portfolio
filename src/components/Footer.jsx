import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            };
            setCurrentTime(now.toLocaleDateString('en-US', options));
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socials = [
        { icon: FaGithub, link: "https://github.com/afnanFerdousi", label: "GitHub" },
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/afnanferdousi550/", label: "LinkedIn" },
        { icon: FaInstagram, link: "https://www.instagram.com/afnanferdousi130/", label: "Instagram" },
        { icon: FaTwitter, link: "https://twitter.com/afnanferdousi", label: "Twitter" },
    ];

    const quickLinks = [
        { name: "About", href: "#resume" },
        { name: "Projects", href: "#projects" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-transparent to-gray-900/50 pt-16 pb-8 px-4 md:px-8">
            <div className="max-w-[1440px] mx-auto">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Afnan<span className="text-[#EF4765]">.</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Building digital experiences that make a difference.
                            Always learning, always creating.
                        </p>
                        <div className="flex gap-3">
                            {socials.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#EF4765]/20 transition-all"
                                >
                                    <social.icon className="text-lg" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:text-center"
                    >
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <div className="flex flex-wrap md:justify-center gap-x-6 gap-y-2">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-400 hover:text-[#EF4765] transition-colors text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Time & Version */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:text-right"
                    >
                        <div className="mb-4">
                            <h4 className="text-gray-500 text-sm mb-1">Local Time</h4>
                            <p className="text-white text-sm">{currentTime}</p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 text-sm mb-1">Version</h4>
                            <p className="text-white text-sm">December 2024 - v4.0</p>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                            Made with <FaHeart className="text-[#EF4765] animate-pulse" /> by Afnan Ferdousi
                        </p>
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: showScrollTop ? 1 : 0,
                    scale: showScrollTop ? 1 : 0
                }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#EF4765] to-[#FF6B6B] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#EF4765]/25 z-40 hover:shadow-[#EF4765]/40 transition-shadow"
            >
                <FaArrowUp />
            </motion.button>
        </footer>
    );
};

export default Footer;
