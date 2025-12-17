import React from 'react';
import { motion } from 'framer-motion';
import { RiCodeSSlashLine, RiRobot2Line, RiPlugLine, RiPaletteLine, RiLightbulbLine, RiServerLine } from 'react-icons/ri';

const Services = () => {
    const services = [
        {
            title: "Full Stack Development",
            description: "End-to-end web application development using React, Next.js, Node.js, and modern databases. Building scalable solutions from concept to deployment.",
            icon: RiCodeSSlashLine,
            color: "#EF4765",
            features: ["React/Next.js", "Node.js/Express", "MongoDB/PostgreSQL", "REST APIs"]
        },
        {
            title: "AI Integration",
            description: "Incorporating cutting-edge AI technologies like OpenAI, LangChain, and custom ML models into your applications for intelligent automation.",
            icon: RiRobot2Line,
            color: "#4764e9",
            features: ["OpenAI/GPT", "LangChain", "Custom ML Models", "Chatbots"]
        },
        {
            title: "API Development",
            description: "Designing and building robust, secure, and well-documented RESTful and GraphQL APIs that power modern applications.",
            icon: RiPlugLine,
            color: "#10B981",
            features: ["RESTful APIs", "GraphQL", "API Security", "Documentation"]
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive, accessible, and visually stunning user interfaces that deliver exceptional user experiences across all devices.",
            icon: RiPaletteLine,
            color: "#F59E0B",
            features: ["Responsive Design", "Figma/Adobe XD", "Accessibility", "Prototyping"]
        },
        {
            title: "Backend Architecture",
            description: "Designing scalable backend systems with microservices, event-driven architecture, and cloud-native solutions.",
            icon: RiServerLine,
            color: "#8B5CF6",
            features: ["Microservices", "Cloud Services", "Caching", "Message Queues"]
        },
        {
            title: "Technical Consulting",
            description: "Providing expert guidance on technology stack selection, architecture decisions, and best practices for your digital projects.",
            icon: RiLightbulbLine,
            color: "#EC4899",
            features: ["Tech Stack Review", "Code Audits", "Performance", "Security"]
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#050f25] to-[#020817]" id="services">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-[1fr,1.5fr] gap-8 md:gap-16 mb-16"
                >
                    <div>
                        <span className="text-[#EF4765] font-medium text-sm uppercase tracking-wider">What I Do</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                            Services I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4765] to-[#4764e9]">Provide</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Comprehensive digital solutions tailored to bring your vision to life.
                            From concept to deployment, I deliver excellence at every step.
                        </p>
                    </div>
                    <div className="hidden lg:flex items-end justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-[#EF4765]/20 to-[#4764e9]/20 rounded-2xl p-6 border border-white/10"
                        >
                            <p className="text-gray-300 text-lg italic">
                                &ldquo;Quality is not an act, it is a habit.&rdquo;
                            </p>
                            <p className="text-[#EF4765] mt-2">- Aristotle</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                {/* Glow Effect */}
                                <div
                                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                                    style={{ background: service.color }}
                                ></div>

                                {/* Card */}
                                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/5 hover:border-white/20 transition-all duration-300 h-full">
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                                        style={{ background: `${service.color}20` }}
                                    >
                                        <Icon className="text-3xl" style={{ color: service.color }} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/10"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Decorative Element */}
                                    <div
                                        className="absolute top-6 right-6 w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                                        style={{ background: service.color }}
                                    ></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
