import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaDownload } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiBootstrap, SiTypescript, SiRedux, SiFirebase, SiPrisma, SiOpenai, SiSocketdotio } from 'react-icons/si';

const Resume = () => {
    const experience = [
        {
            id: 1,
            title: 'Co-founder & Software Engineer',
            company: 'Dreabuild',
            logo: '/dreabuild.png',
            date: 'Oct 2024 - Present',
            description: 'Leading technical development and architecture decisions for client projects.',
            current: true
        },
        {
            id: 2,
            title: 'Subject Matter Specialist (MERN)',
            company: 'Ostad',
            logo: '/ostad.png',
            date: 'March 2023 - Feb 2024',
            description: 'Created comprehensive course content and mentored 500+ students in MERN stack.',
            current: false
        },
        {
            id: 3,
            title: 'Front End Developer',
            company: 'GenRes',
            logo: '/genres.png',
            date: 'June 2022 - Feb 2023',
            description: 'Built responsive web applications and improved UI/UX for various projects.',
            current: false
        },
    ];

    const skills = [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#fff" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
        { name: "OpenAI", icon: SiOpenai, color: "#412991" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
    ];

    const tools = [
        { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" },
        { name: "GitHub", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
        { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "MongoDB Compass", logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
        { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto" id="resume">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="text-[#EF4765] font-medium text-sm uppercase tracking-wider">About Me</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4765] to-[#4764e9]">Resume</span>
                </h2>
            </motion.div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - About & Experience */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {/* About Card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-6 md:p-8 border border-white/5"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white">Afnan Ferdousi</h3>
                                <p className="text-[#EF4765]">Software Engineer</p>
                            </div>
                            <div className="text-right">
                                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EF4765] to-[#FF6B6B]">3+</span>
                                <p className="text-gray-400 text-sm">Years Exp.</p>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            A passionate software developer who thrives on building things that work beautifully.
                            With 3+ years of experience in front-end technologies like Next.js, React, and TailwindCSS,
                            plus solid back-end skills with Node.js, I enjoy solving real-world challenges through code.
                            I believe in learning by doing, and I&apos;m always exploring new technologies to create
                            smarter, more impactful applications.
                        </p>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#EF4765] to-[#FF6B6B] text-white font-medium rounded-xl shadow-lg shadow-[#EF4765]/25"
                        >
                            <FaDownload /> Download CV
                        </motion.a>
                    </motion.div>

                    {/* Experience */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-[#EF4765]/20 flex items-center justify-center">
                                <FaBriefcase className="text-[#EF4765]" />
                            </span>
                            Experience
                        </h3>
                        <div className="space-y-4">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    whileHover={{ x: 5 }}
                                    className="relative pl-6 border-l-2 border-gray-700 hover:border-[#EF4765] transition-colors"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-700 border-2 border-gray-900"></div>
                                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 rounded-xl p-4 border border-white/5">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h4 className="font-semibold text-white">{exp.title}</h4>
                                                <p className="text-gray-400 text-sm">{exp.company}</p>
                                                <p className="text-gray-500 text-xs mt-1">{exp.description}</p>
                                            </div>
                                            <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${exp.current
                                                ? 'bg-[#EF4765] text-white'
                                                : 'bg-gray-700 text-gray-300'
                                                }`}>
                                                {exp.date}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column - Skills & Tools */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {/* Skills */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-[#4764e9]/20 flex items-center justify-center">
                                <FaGraduationCap className="text-[#4764e9]" />
                            </span>
                            Technical Skills
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {skills.map((skill, index) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-xl p-3 border border-white/5 hover:border-white/20 transition-all text-center"
                                    >
                                        <Icon className="text-2xl mx-auto mb-2 transition-colors" style={{ color: skill.color }} />
                                        <span className="text-gray-400 text-xs group-hover:text-white transition-colors">{skill.name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Tools */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-semibold text-white mb-6">Tools I Use Daily</h3>
                        <div className="flex flex-wrap gap-4">
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="group relative"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-xl border border-white/5 flex items-center justify-center p-3 group-hover:border-white/20 transition-all">
                                        <Image
                                            src={tool.logo}
                                            alt={tool.name}
                                            width={32}
                                            height={32}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {tool.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Highlight Card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-r from-[#EF4765]/20 to-[#4764e9]/20 rounded-2xl p-6 border border-white/10"
                    >
                        <h4 className="text-lg font-semibold text-white mb-3">What Sets Me Apart</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#EF4765] rounded-full"></span>
                                Strong focus on clean, maintainable code
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#EF4765] rounded-full"></span>
                                Experience with AI integration in applications
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#EF4765] rounded-full"></span>
                                Passion for creating impactful user experiences
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#EF4765] rounded-full"></span>
                                Quick learner who adapts to new technologies fast
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
