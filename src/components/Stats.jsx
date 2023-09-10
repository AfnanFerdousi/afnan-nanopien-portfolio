import Image from "next/image";
import fb from '../../public/fb.png'
import github from '../../public/github.png'
import insta from '../../public/insta.png'
import linkedin from '../../public/linkedin.png'

const Stats = () => {
    const socials = [
        {
            icon: github,
            link: "https://github.com/afnanFerdousi",
        },
        {
            icon: linkedin,
            link: "https://www.linkedin.com/in/afnanferdousi550/",
        },
        {
            icon: insta,
            link: "https://www.instagram.com/afnanferdousi130/"
        },
        {
            icon: fb,
            link: "https://www.facebook.com/afnanferdousi2006"
        }
    ];
    return (
        <div>
            <div className='flex items-center justify-center px-8 h-[80vh] gap-[8rem]'>
                <div data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-offset="100"
                    // data-aos-easing="ease-in-sine"
                >
                    <div className="relative flex flex-col items-end">
                        <div className="absolute top-0 right-[-32px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} />
                        </div>
                        <div className="pb-8">
                            <h2 className='font-montserrat font-semibold text-8xl'>100</h2>
                            <p>Projects Finished</p>
                        </div>
                    </div>

                    <hr className="w-42  border-t-2 border-gray-700" /> {/* Add a short horizontal line here */}
                    <div className="relative flex flex-col items-end">
                        <div className="absolute top-[30px] right-[-32px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} />
                        </div>
                        <div className="pt-8">
                            <h2 className='font-montserrat font-semibold text-8xl'>100</h2>
                            <p>Projects Finished</p>
                        </div>
                    </div>
                </div>
                <div 
                data-aos="fade-down" 
                data-aos-duration="4000" 
                    data-aos-easing="ease-in-sine"
                    data-aos-offset="100"> 
                    <Image src="https://i.ibb.co/ccXwJLT/Group-61.png" alt="blob" height={200} width={200} />
                </div>
                <div data-aos="fade-left" 
                data-aos-duration="3000"
                    data-aos-offset="100"
                    // data-aos-easing="ease-in-sine"
                >
                    <div className="relative flex flex-col items-end">
                        <div className="absolute top-0 right-[-32px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} />
                        </div>
                        <div className="pb-8">
                            <h2 className='font-montserrat font-semibold text-8xl'>100</h2>
                            <p>Projects Finished</p>
                        </div>
                    </div>
                    <hr className="w-46  border-t-2 border-gray-700" /> {/* Add a short horizontal line here */}
                    <div className="relative flex flex-col items-end">
                        <div className="absolute top-[30px] right-[-32px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} />
                        </div>
                        <div className="pt-8">
                            <h2 className='font-montserrat font-semibold text-8xl'>100</h2>
                            <p>Projects Finished</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* social links */}
            <div
                data-aos="fade-zoom-in"
                data-aos-duration="3000"
                className="my-28 px-[40px]">
                <div className="grid lg:md:grid-cols-4 grid-cols-2 lg:md:gap-[32px] gap-2 items-center justify-center">
                    {socials.map((social, index) => (
                        <div
                            style={{ background: 'rgba(217, 217, 217, 0.1)' }}
                            className="cursor-pointer rounded-xl px-24 py-[10px] mx-auto h-[100%] flex items-center"
                            key={index}
                        >
                            <a href={social.link} target="_blank" rel="noopener noreferrer">
                                <Image src={social.icon} alt={`Social Media ${index}`} width={150} height={40} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;