import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BsLaptop, BsGithub, BsArrowRight, BsX, BsCheckCircle, BsLightningCharge, BsTools } from 'react-icons/bs';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript, SiPrisma, SiFirebase, SiOpenai } from 'react-icons/si';

// Enhanced project data with detailed information
const projectsData = [
    {
        id: 1,
        title: "KOC Freelancing",
        shortDescription: "A platform for freelancing and job opportunities",
        fullDescription: "A comprehensive freelancing platform designed to connect employers with skilled freelancers efficiently. Built with scalability in mind to handle thousands of concurrent users.",
        imageUrl: "https://i.ibb.co.com/7J6T0Kv/image.png",
        liveLink: "http://kocfreelancing.com/",
        githubLink: "#",
        myRole: "Lead Full Stack Developer",
        whatIDid: [
            "Architected the entire backend system using Node.js and Express",
            "Implemented real-time messaging using Socket.io",
            "Built a secure payment integration system",
            "Designed and implemented the database schema with MongoDB"
        ],
        proudOf: "Successfully handling 1000+ concurrent users with optimized database queries and implementing a robust escrow payment system that increased platform trust by 40%.",
        challenges: "Building a real-time bidding system that could handle multiple simultaneous bids without race conditions. Solved using optimistic locking and Redis caching.",
        techStack: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Node.js", icon: FaNodeJs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Tailwind", icon: SiTailwindcss }
        ],
        category: "Full Stack",
        featured: true
    },
    {
        id: 2,
        title: "Amber Alert Bangladesh",
        shortDescription: "Child safety rapid response system",
        fullDescription: "An initiative modeled on the global AMBER Alert system, focusing on child safety and rapid responses to abduction cases in Bangladesh. A social impact project with real-world implications.",
        imageUrl: "https://i.ibb.co.com/vcLsf0n/image.png",
        liveLink: "http://amberalert4bangladesh.org/",
        githubLink: "#",
        myRole: "Frontend Lead & Project Coordinator",
        whatIDid: [
            "Designed and implemented the responsive UI/UX",
            "Built the alert notification system",
            "Integrated with SMS gateways for emergency alerts",
            "Coordinated with NGOs for system requirements"
        ],
        proudOf: "Creating a system that has the potential to save lives. The platform received recognition from local authorities and NGOs for its impact on child safety awareness.",
        challenges: "Ensuring the alert system works reliably in areas with poor internet connectivity. Implemented offline-first approach with progressive web app features.",
        techStack: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Firebase", icon: SiFirebase }
        ],
        category: "Social Impact",
        featured: true
    },
    {
        id: 3,
        title: "BloodLink Platform",
        shortDescription: "Blood donation management ecosystem",
        fullDescription: "A comprehensive platform for connecting blood donors and recipients, with mobile app and web support for managing donations. Helping bridge the gap between those who need blood and those who can donate.",
        imageUrl: "https://i.ibb.co.com/RyRS4Yc/image.png",
        liveLink: "https://www.bloodlinkapp.org/",
        githubLink: "#",
        myRole: "Full Stack Developer",
        whatIDid: [
            "Built the donor matching algorithm based on blood type and location",
            "Implemented geolocation features for finding nearby donors",
            "Created the admin dashboard for blood bank management",
            "Developed API for mobile app integration"
        ],
        proudOf: "The matching algorithm that reduced average donor search time from 2 hours to 15 minutes, potentially saving lives in emergency situations.",
        challenges: "Handling sensitive medical data with HIPAA-like compliance standards while maintaining fast search performance. Implemented encrypted data storage with optimized indexing.",
        techStack: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Prisma", icon: SiPrisma },
            { name: "MongoDB", icon: SiMongodb }
        ],
        category: "Healthcare",
        featured: true
    },
    {
        id: 4,
        title: "BloodLink Mobile App",
        shortDescription: "Mobile companion for BloodLink",
        fullDescription: "Native mobile application providing on-the-go access to the BloodLink platform with push notifications for urgent blood requests.",
        imageUrl: "https://i.ibb.co.com/NsdmKQS/image.png",
        liveLink: "https://bloodlink.app/",
        githubLink: "#",
        myRole: "API Developer & Backend Engineer",
        whatIDid: [
            "Designed RESTful APIs for mobile app consumption",
            "Implemented push notification system",
            "Built real-time location tracking for nearby donors",
            "Optimized API responses for mobile networks"
        ],
        proudOf: "Achieving sub-200ms API response times even on slow 3G networks through careful optimization and edge caching.",
        challenges: "Ensuring real-time updates while minimizing battery drain on mobile devices. Used efficient WebSocket connections with intelligent reconnection strategies.",
        techStack: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Firebase", icon: SiFirebase }
        ],
        category: "Mobile Backend",
        featured: false
    },
    {
        id: 5,
        title: "HF Consultancy",
        shortDescription: "Modern consultancy website",
        fullDescription: "A modern consultancy website for delivering professional services in business strategy and management with an elegant, conversion-focused design.",
        imageUrl: "https://i.ibb.co.com/Yk7J2Yt/image.png",
        liveLink: "https://hfconsultancy.net/",
        githubLink: "#",
        myRole: "Frontend Developer",
        whatIDid: [
            "Designed and implemented responsive UI components",
            "Built contact form with email integration",
            "Optimized for SEO and Core Web Vitals",
            "Implemented smooth scroll animations"
        ],
        proudOf: "Achieving a 95+ score on Google Lighthouse for performance, accessibility, and SEO, leading to improved organic traffic.",
        challenges: "Balancing rich animations with performance. Used intersection observers and lazy loading to maintain smooth 60fps animations.",
        techStack: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind", icon: SiTailwindcss }
        ],
        category: "Corporate",
        featured: false
    },
    {
        id: 6,
        title: "Syscomatic Musical",
        shortDescription: "Creative portfolio showcase",
        fullDescription: "A creative portfolio website showcasing a variety of projects with a focus on UI/UX and interactive design elements.",
        imageUrl: "https://i.ibb.co.com/yqnsVN2/image.png",
        liveLink: "https://syscomatic-musical.vercel.app/",
        githubLink: "#",
        myRole: "UI/UX Developer",
        whatIDid: [
            "Crafted unique visual animations",
            "Implemented 3D elements using Three.js",
            "Built custom audio visualizer",
            "Created interactive project galleries"
        ],
        proudOf: "The immersive user experience that keeps visitors engaged, with an average session duration of 4+ minutes.",
        challenges: "Creating smooth 3D animations that work across all devices and browsers. Used progressive enhancement to gracefully degrade on lower-end devices.",
        techStack: [
            { name: "React", icon: FaReact },
            { name: "Tailwind", icon: SiTailwindcss }
        ],
        category: "Creative",
        featured: false
    },
    {
        id: 7,
        title: "DigiMarketing",
        shortDescription: "Digital marketing landing page",
        fullDescription: "A high-converting landing page for digital marketing services, featuring creative designs and responsive layouts optimized for lead generation.",
        imageUrl: "https://i.ibb.co.com/4M15CTq/image.png",
        liveLink: "https://digimarketing-client.vercel.app/",
        githubLink: "#",
        myRole: "Frontend Developer",
        whatIDid: [
            "Designed conversion-optimized layouts",
            "Implemented A/B testing capabilities",
            "Built lead capture forms with validation",
            "Added analytics tracking"
        ],
        proudOf: "Increasing the client's conversion rate by 35% through strategic CTA placement and optimized form flows.",
        challenges: "Balancing visual appeal with fast load times. Implemented image optimization and critical CSS extraction.",
        techStack: [
            { name: "React", icon: FaReact },
            { name: "Tailwind", icon: SiTailwindcss }
        ],
        category: "Marketing",
        featured: false
    },
    {
        id: 8,
        title: "Coder Squad",
        shortDescription: "Coding bootcamp platform",
        fullDescription: "A collaborative platform for coding bootcamps, workshops, and learning management systems with interactive coding challenges.",
        imageUrl: "https://i.ibb.co.com/hRjQgTS/image.png",
        liveLink: "https://coder-squad-client.vercel.app/",
        githubLink: "#",
        myRole: "Full Stack Developer",
        whatIDid: [
            "Built the course management system",
            "Implemented code editor with syntax highlighting",
            "Created progress tracking dashboard",
            "Developed quiz and assessment modules"
        ],
        proudOf: "Building an integrated code editor that allows real-time code execution and feedback, improving the learning experience.",
        challenges: "Safely executing user-submitted code without security vulnerabilities. Implemented sandboxed code execution using Docker containers.",
        techStack: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Node.js", icon: FaNodeJs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Docker", icon: FaDocker }
        ],
        category: "EdTech",
        featured: false
    },
    {
        id: 9,
        title: "Eternal Prints",
        shortDescription: "E-commerce print platform",
        fullDescription: "An e-commerce platform for personalized print products, offering a smooth shopping experience with custom design tools.",
        imageUrl: "https://i.ibb.co.com/g3v5Gvf/image.png",
        liveLink: "https://eternalprints.net/",
        githubLink: "#",
        myRole: "Backend Developer",
        whatIDid: [
            "Built product customization backend",
            "Implemented payment processing with Stripe",
            "Created order management system",
            "Developed inventory tracking"
        ],
        proudOf: "The robust order processing system that handles 500+ daily orders without failures.",
        challenges: "Managing complex product variants and custom designs. Built a flexible schema that handles unlimited customization options.",
        techStack: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "AWS", icon: FaAws }
        ],
        category: "E-commerce",
        featured: false
    }
];

const categories = ["All", "Full Stack", "Social Impact", "Healthcare", "Corporate", "Creative", "EdTech", "E-commerce"];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleProjects, setVisibleProjects] = useState(6);

    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);

    const displayedProjects = filteredProjects.slice(0, visibleProjects);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto" id="projects">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="text-[#EF4765] font-medium text-sm uppercase tracking-wider">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4765] to-[#4764e9]">Projects</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    A showcase of my work demonstrating expertise in full-stack development,
                    problem-solving, and delivering impactful solutions.
                </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 mb-12"
            >
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => {
                            setActiveCategory(category);
                            setVisibleProjects(6);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                            ? 'bg-gradient-to-r from-[#EF4765] to-[#FF6B6B] text-white shadow-lg shadow-[#EF4765]/25'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                            }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="wait">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            layout
                            className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-[#EF4765]/30 transition-all duration-500 ${project.featured ? 'ring-2 ring-[#EF4765]/20' : ''
                                }`}
                        >
                            {project.featured && (
                                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-[#EF4765] to-[#FF6B6B] rounded-full text-xs font-semibold text-white">
                                    Featured
                                </div>
                            )}

                            {/* Project Image */}
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                                {/* Quick Actions */}
                                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 bg-[#EF4765] text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-[#d93d5a] transition-colors"
                                    >
                                        <BsLaptop /> Live Demo
                                    </a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <span className="text-[#EF4765] text-xs font-medium uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-[#EF4765] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.shortDescription}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                                        >
                                            <tech.icon className="text-sm" />
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>

                                {/* Role Badge */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">{project.myRole}</span>
                                    <motion.button
                                        onClick={() => setSelectedProject(project)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-[#EF4765] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Details <BsArrowRight />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Load More Button */}
            {visibleProjects < filteredProjects.length && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-12"
                >
                    <motion.button
                        onClick={() => setVisibleProjects(prev => prev + 3)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border-2 border-[#EF4765]/50 text-[#EF4765] font-semibold rounded-full hover:bg-[#EF4765]/10 transition-all duration-300"
                    >
                        Load More Projects
                    </motion.button>
                </motion.div>
            )}

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="relative h-64 md:h-80">
                                <Image
                                    src={selectedProject.imageUrl}
                                    alt={selectedProject.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                                >
                                    <BsX className="text-2xl" />
                                </button>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="text-[#EF4765] text-sm font-medium">{selectedProject.category}</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mt-1">{selectedProject.title}</h3>
                                    <p className="text-gray-300 mt-2">{selectedProject.myRole}</p>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 md:p-8 space-y-8">
                                {/* Description */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-lg bg-[#EF4765]/20 flex items-center justify-center">
                                            <BsLightningCharge className="text-[#EF4765]" />
                                        </span>
                                        About the Project
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed">{selectedProject.fullDescription}</p>
                                </div>

                                {/* What I Did */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-lg bg-[#4764e9]/20 flex items-center justify-center">
                                            <BsTools className="text-[#4764e9]" />
                                        </span>
                                        My Contributions
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedProject.whatIDid.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400">
                                                <BsCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* What I'm Proud Of */}
                                <div className="bg-gradient-to-r from-[#EF4765]/10 to-transparent p-5 rounded-xl border border-[#EF4765]/20">
                                    <h4 className="text-lg font-semibold text-white mb-2">What I&apos;m Proud Of</h4>
                                    <p className="text-gray-400">{selectedProject.proudOf}</p>
                                </div>

                                {/* Challenges */}
                                <div className="bg-gradient-to-r from-[#4764e9]/10 to-transparent p-5 rounded-xl border border-[#4764e9]/20">
                                    <h4 className="text-lg font-semibold text-white mb-2">Challenges & Solutions</h4>
                                    <p className="text-gray-400">{selectedProject.challenges}</p>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-gray-300 border border-white/10"
                                            >
                                                <tech.icon className="text-xl text-[#EF4765]" />
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                                    <motion.a
                                        href={selectedProject.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 min-w-[200px] py-3 bg-gradient-to-r from-[#EF4765] to-[#FF6B6B] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#EF4765]/25"
                                    >
                                        <BsLaptop /> View Live Project
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
