import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaTimes, FaCheckCircle } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendEmail = async (data) => {
        try {
            await axios.post('https://afnan-portfolio-server.vercel.app/api/v1/contact/sendEmail', data);
            toast.success('Message sent successfully!', {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
            });
            reset();
            setIsModalOpen(false);
        } catch (error) {
            toast.error("Failed to send message. Please try again.", {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
            });
        }
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: "Email",
            value: "afnan@example.com",
            color: "#EF4765"
        },
        {
            icon: FaMapMarkerAlt,
            label: "Location",
            value: "Bangladesh",
            color: "#4764e9"
        },
        {
            icon: FaPhone,
            label: "Availability",
            value: "Available for freelance",
            color: "#10B981"
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8" id="contact">
            <div className="max-w-[1440px] mx-auto">
                {/* Main CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl"
                >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F192E] via-[#1a2744] to-[#C23E5A] opacity-90"></div>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

                    {/* Floating Elements */}
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#EF4765]/30 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#4764e9]/30 rounded-full blur-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10 py-16 px-6 md:px-12 lg:px-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 mb-6"
                                >
                                    Available for new opportunities
                                </motion.span>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                                >
                                    Let&apos;s Build
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                        Something Amazing
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-gray-300 text-lg mb-8 max-w-lg"
                                >
                                    Have a project in mind? I&apos;d love to hear about it.
                                    Let&apos;s discuss how we can work together to bring your ideas to life.
                                </motion.p>

                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    onClick={() => setIsModalOpen(true)}
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(239, 71, 101, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-8 py-4 bg-white text-gray-900 font-semibold rounded-full flex items-center gap-3 hover:bg-gray-100 transition-all"
                                >
                                    Get In Touch
                                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>

                            {/* Right Content - Contact Info */}
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                                    >
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                                            style={{ background: `${info.color}30` }}
                                        >
                                            <info.icon className="text-xl" style={{ color: info.color }} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">{info.label}</p>
                                            <p className="text-white font-medium">{info.value}</p>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Quick Stats */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="grid grid-cols-3 gap-4 pt-4"
                                >
                                    {[
                                        { value: "24h", label: "Response Time" },
                                        { value: "100%", label: "Satisfaction" },
                                        { value: "40+", label: "Projects Done" }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                                            <p className="text-gray-400 text-xs">{stat.label}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Contact Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-lg w-full p-8 border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <FaTimes />
                            </button>

                            <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
                            <p className="text-gray-400 mb-6">I&apos;ll get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit(sendEmail)} className="space-y-5">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-[#EF4765] focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                        {...register("name", { required: "Name is required" })}
                                    />
                                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-[#EF4765] focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                        {...register("email", { required: "Email is required" })}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Your Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-[#EF4765] focus:outline-none transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                        {...register("message", { required: "Message is required" })}
                                    />
                                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-gradient-to-r from-[#EF4765] to-[#FF6B6B] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#EF4765]/25 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>Sending...</>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
