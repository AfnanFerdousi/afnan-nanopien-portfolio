import React from 'react';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLaptop, BsArrowRightShort } from 'react-icons/bs';

const Projects = () => {
    // Mockup data for projects
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "Description for Project 1",
            imageUrl: "https://i.ibb.co/rmKCBKP/perfumo-mock-up.png", // Replace with your image URL
            liveLink: "https://example.com/project1", // Replace with your live link URL
            githubLink: "https://github.com/yourusername/project1", // Replace with your GitHub link URL
        },
        {
            id: 2,
            title: "Project 2",
            description: "Description for Project 2",
            imageUrl: "https://i.ibb.co/rmKCBKP/perfumo-mock-up.png", // Replace with your image URL
            liveLink: "https://example.com/project2", // Replace with your live link URL
            githubLink: "https://github.com/yourusername/project2", // Replace with your GitHub link URL
        },
        {
            id: 3,
            title: "Project 3",
            description: "Description for Project 3",
            imageUrl: "https://i.ibb.co/rmKCBKP/perfumo-mock-up.png", // Replace with your image URL
            liveLink: "https://example.com/project3", // Replace with your live link URL
            githubLink: "https://github.com/yourusername/project3", // Replace with your GitHub link URL
        },
        {
            id: 4,
            title: "Project 4",
            description: "Description for Project 4",
            imageUrl: "https://i.ibb.co/rmKCBKP/perfumo-mock-up.png", // Replace with your image URL
            liveLink: "https://example.com/project4", // Replace with your live link URL
            githubLink: "https://github.com/yourusername/project4", // Replace with your GitHub link URL
        },
        {
            id: 5,
            title: "Project 5",
            description: "Description for Project 5",
            imageUrl: "https://i.ibb.co/rmKCBKP/perfumo-mock-up.png", // Replace with your image URL
            liveLink: "https://example.com/project5", // Replace with your live link URL
            githubLink: "https://github.com/yourusername/project5", // Replace with your GitHub link URL
        },
    ];

    // Define different card sizes based on position
    const cardSizes = ['w-1/2', 'w-1/3', 'w-1/4', 'w-1/3', 'w-1/4'];

return (
    <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className='py-12'>
            <h2 className='text-5xl font-montserrat font-semibold text-[#fff] text-center'>
                Let’s check my projects
            </h2>
            <p className='text-md text-[#C4C4C4] text-center mt-4 w-[40%] mb-8 mx-auto'>As a firm believer in continuous learning, I stay up-to-date with the latest advancements in web technologies.</p>
            <div className="flex flex-wrap justify-center pb-8">
                {projects.map((project, index) => (
                    <div key={project.id} className={`mx-2 py-4 h-full cursor-pointer ${cardSizes[index]}`} >
                        <div className="relative bg-gray-700 shadow-lg rounded-lg overflow-hidden group transition-transform transform scale-100 hover:scale-105 hover:shadow hover:bg-[#333]">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                width={500} // Set the width of the image
                                height={300} // Set the height of the image
                                objectFit="cover" // Adjust objectFit as needed
                                className="w-full h-[300px]  object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80 transition-opacity group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <h2 className="text-gray-900 font-semibold text-lg text-white">
                                    {project.title}
                                </h2>
                                <p className="mt-2 text-gray-200 text-sm">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex space-x-4">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                        <BsLaptop className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-300" />
                                    </a>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <AiOutlineGithub className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-300" />
                                    </a>
                                </div>
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 flex gap-x-2 items-center text-[#fff] transition-colors duration-300 text-md font-montserrat hover:text-[#EF4765]"
                                >
                                    Learn More <BsArrowRightShort className="text-2xl"/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        <button
            className='py-4 px-8 text-[15px] font-medium rounded-lg text-[#E0DEDE] border-[1px] border-[#E0DEDE] mx-auto flex justify-center transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white hover:scale-105'
        >
            Show All
        </button>
        </div>
    );
};

export default Projects;
