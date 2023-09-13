import Image from 'next/image';
import React from 'react';
import dots from '../../public/dots.png';
import ostad from '../../public/ostad.png';
import ph from '../../public/ph.png';
import genres from '../../public/genres.png';
const Resume = () => {
    const experience = [
        {
            id: 1,
            title: 'Subject Matter Specialist(MERN)',
            company: 'Ostad',
            logo: ostad,
            date: 'March 2023 - Present',
            width: 35, // Use a number instead of a string
        },
        {
            id: 2,
            title: 'Head of Media and Communication',
            company: 'Programming Hero',
            logo: ph,
            date: 'Aug 2023 - Present',
            width: 55, // Use a number instead of a string
        },
        {
            id: 3,
            title: "Front End Developer",
            company: 'GenRes',
            logo: genres,
            date: 'June 2022 - Feb 2023',
            width: 50, 
        },
    ];
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJs",
        "NextJs",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "MySQL",
        "Tailwind",
        "Bootstrap",
        "Mongoose",
        "Typescript",
        "Redux",
        "Firebase",
        "Prisma",        
    ]
    const tools = [
        {
            id: 1,
            name: "VsCode",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
        {
            id: 2,
            name: "Github",
            logo: "https://cutewallpaper.org/24/github-logo-png/github-logo-icon-free-download-on-iconfinder.png",
        },
        {
            id: 3,
            name: "Figma",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png"
        },
        {
            id: 4,
            name: "Postman",
            logo: "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png"
        },
        {
            id: 5,
            name: "MongoDb Compass",
            logo: "https://static.macupdate.com/products/62461/m/mongodb-compass-logo.png?v=1663508519"
        },
        {
            id: 6,
            name: "PgAdmin 4",
            logo: "https://dl2.macupdate.com/images/icons256/60968.png?time=1663919426",
        },
        {
            id: 7,
            name: "Trello",
            logo: "https://assets.stickpng.com/images/58482beecef1014c0b5e4a36.png"
        },
        {
            id: 8,
            name: "Vercel",
            logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png"
        },
        {
            id: 9,
            name: "Swagger",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png"
        }
    ]

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="px-10 lg:md:py-40 py-20">
            <div className="rounded-xl px-6 py-12" style={{ background: 'rgba(217, 217, 217, 0.1)' }}>
                {/* header */}
                <div className="flex items-center justify-between">
                    <h2 className="font-Raleway font-semibold text-2xl text-[#fff]">Resume</h2>
                    <Image src={dots} alt="dots" height={50} width={50} />
                </div>

                {/* content part 1 */}
                <div className="grid lg:md:grid-cols-2 lg:md:gap-x-28 py-8">
                    <div>
                        <div className="flex items-center justify-between pb-6">
                            <h2 className="flex flex-col font-montserrat">
                                <span className="lg:md:text-xl text-lg font-medium text-[#fff]">Afnan Ferdousi</span>
                                <span className="lg:md:text-md text-[12px] text-[#C4C4C4]">MERN Stack Developer</span>
                            </h2>
                            <h2 className="font-montserrat flex items-center gap-x-2">
                                <span className="text-[#EF4765] lg:md:text-6xl text-5xl font-bold">2</span>
                                <span className="flex flex-col text-[#C4C4C4] lg:md:text-md text-[12px]">
                                    Years
                                    <span className="text-[#fff]">Experience </span>
                                </span>
                            </h2>
                        </div>
                        <hr className="w-42  border-t-2 border-gray-700" />
                        <p className="pt-6 lg:md:text-[16px] text-[12px]">
                            As a firm believer in continuous learning, I stay up-to-date with the latest advancements in web technologies. I am enthusiastic about taking on new challenges.
                        </p>
                    </div>
                    <hr className="w-42  border-t-2 border-gray-700 mt-12 mb-6 lg:md:hidden block" />
                    <div>
                        {experience.map((exp) => (
                            <div key={exp?.id}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="lg:md:text-lg text-md font-montserrat font-medium text-[#fff] mb-2">{exp?.title}</h2>
                                        <Image style={{ width: `${exp?.width}%` }} className={`h-auto`} src={exp?.logo} alt="ostad" width="" height="" />
                                    </div>
                                    <h2 className={`py-2 px-6 lg:md:text-[15px] text-[12px] font-medium rounded-lg ${exp?.date.includes('Present') ? 'bg-[#EF4765] text-[#E0DEDE]' : 'bg-[#343957] text-[#E0DEDE]'
                                        }`}>
                                        {exp?.date}
                                    </h2>
                                </div>
                                <hr className="w-42  border-t-2 border-gray-700 mt-4 mb-6" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* content part 2 */}
                <div className="grid lg:md:grid-cols-2 lg:md:gap-x-28 py-8">
                    <div>
                        <h2 className='lg:md:text-xl text-lg font-medium text-[#fff] font-montserrat '>Skills</h2>
                        <hr className="w-42  border-t-2 border-gray-700 mb-6 mt-4" />
                        <div className="grid lg:md:grid-cols-5 grid-cols-3 lg:md:gap-4  gap-2 items-center justify-between pb-6">
                            {
                                skills.map((skill) => (
                                    <div key={skill} style={{ background: 'rgba(255, 255, 255, 0.12)' }} className='rounded-lg'>
                                        <h2 className="lg:md:text-md text-[12px] font-montserrat font-medium text-[#fff] p-2 text-center">{skill}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className='lg:md:text-xl text-lg font-medium text-[#fff] font-montserrat '>Tools I use every day</h2>
                        <hr className="w-42  border-t-2 border-gray-700 mb-6 mt-4" />
                        <div className='grid lg:md:grid-cols-6 grid-cols-4 gap-4'>
                            {tools.map((tool) => (
                                <div key={tool?.id} className='rounded-lg'>
                                    <Image
                                        src={tool?.logo}
                                        alt={tool?.name}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* content part 3 */}
                <div>
                    <h2 className='lg:md:text-xl text-lg font-medium text-[#fff] font-montserrat '>Freelance clients</h2>
                    <hr className="w-42  border-t-2 border-gray-700 mb-6 mt-4" />

                    <h2 className='lg:md:text-2xl text-xl font-Raleway  '>Loading...</h2>
                </div>
            </div>
        </div>
    );
};

export default Resume;
