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

    return (
        <div className="px-8 py-40">
            <div className="rounded-xl px-6 py-12" style={{ background: 'rgba(217, 217, 217, 0.1)' }}>
                {/* header */}
                <div className="flex items-center justify-between">
                    <h2 className="font-Raleway font-semibold text-2xl text-[#fff]">Resume</h2>
                    <Image src={dots} alt="dots" height={50} width={50} />
                </div>

                {/* content part 1 */}
                <div className="grid grid-cols-2 lg:md:gap-x-28 py-8">
                    <div>
                        <div className="flex items-center justify-between pb-6">
                            <h2 className="flex flex-col font-montserrat">
                                <span className="text-xl font-medium text-[#fff]">Afnan Ferdousi</span>
                                <span className="text-md text-[#C4C4C4]">MERN Stack Developer</span>
                            </h2>
                            <h2 className="font-montserrat flex items-center gap-x-2">
                                <span className="text-[#EF4765] text-6xl font-bold">2</span>
                                <span className="flex flex-col text-[#C4C4C4] text-md">
                                    Years
                                    <span className="text-[#fff]">Experience </span>
                                </span>
                            </h2>
                        </div>
                        <hr className="w-42  border-t-2 border-gray-700" />
                        <p className="pt-6">
                            As a firm believer in continuous learning, I stay up-to-date with the latest advancements in web technologies. I am enthusiastic about taking on new challenges.
                        </p>
                    </div>
                    <div>
                        {experience.map((exp) => (
                            <div key={exp?.id}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-lg font-montserrat font-medium text-[#fff] mb-2">{exp?.title}</h2>
                                        <Image style={{ width: `${exp?.width}%` }} className={`h-auto`} src={exp?.logo} alt="ostad" width="" height="" />
                                    </div>
                                    <h2 className={`py-2 px-6 text-[15px] font-medium rounded-lg ${exp?.date.includes('Present') ? 'bg-[#EF4765] text-[#E0DEDE]' : 'bg-[#343957] text-[#E0DEDE]'
                                        }`}>
                                        {exp?.date}
                                    </h2>
                                </div>
                                <hr className="w-42  border-t-2 border-gray-700 mt-4 mb-6" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
