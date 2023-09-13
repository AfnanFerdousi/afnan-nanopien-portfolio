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
            <div className='flex items-center justify-center px-8 lg:md:h-[80vh] h-[50vh] lg:md:gap-[8rem] gap-[3rem]'>
                <div data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-offset="100"
                    // data-aos-easing="ease-in-sine"
                >
                    <div className="relative flex flex-col items-end">
                        <div className="absolute top-0 lg:md:right-[-32px] right-[12px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} className="lg:md:w-[40px] lg:md:h-[40px] w-[20px] h-[20px]" />
                        </div>
                        <div className="pb-8">
                            <h2 className='font-montserrat font-semibold lg:md:text-8xl text-4xl'>100</h2>
                            <p className="lg:md:text-lg text-[12px] w-max">Projects Finished</p>
                        </div>
                    </div>

                    <hr className="lg:md:w-42 lg:md:block hidden border-t-2 border-gray-700" /> {/* Add a short horizontal line here */}
                    <div className="relative flex flex-col items-end">
                        <div className="absolute top-[30px] lg:md:right-[-32px] right-[12px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} className="lg:md:w-[40px] lg:md:h-[40px] w-[20px] h-[20px]" />
                        </div>
                        <div className="pt-8">
                            <h2 className='font-montserrat font-semibold lg:md:text-8xl text-4xl'>100</h2>
                            <p className="lg:md:text-lg text-[12px] w-max">Projects Finished</p>
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
                        <div className="absolute top-0 lg:md:right-[-32px] right-[12px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} className="lg:md:w-[40px] lg:md:h-[40px] w-[20px] h-[20px]" />
                        </div>
                        <div className="pb-8">
                            <h2 className='font-montserrat font-semibold lg:md:text-8xl text-4xl'>100</h2>
                            <p className="lg:md:text-lg text-[12px] w-max">Projects Finished</p>
                        </div>
                    </div>
                    <hr className="lg:md:w-42 lg:md:block hidden  border-t-2 border-gray-700" /> {/* Add a short horizontal line here */}
                    <div className="relative flex flex-col items-end">
                        <div className="absolute top-[30px] lg:md:right-[-32px] right-[12px]">
                            <Image src="https://i.ibb.co/sHqkJMP/image.png" alt="plus" width={40} height={40} className="lg:md:w-[40px] lg:md:h-[40px] w-[20px] h-[20px]" />
                        </div>
                        <div className="pt-8">
                            <h2 className='font-montserrat font-semibold lg:md:text-8xl text-4xl'>100</h2>
                            <p className="lg:md:text-lg text-[12px] w-max">Projects Finished</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* social links */}
            <div
                data-aos="fade-zoom-in"
                data-aos-duration="3000"
                className="my-28 px-[40px]">
                <div className="grid lg:md:grid-cols-4 grid-cols-2 lg:md:gap-[32px] gap-2 items-center lg:md:justify-center justify-even">
                    {socials.map((social, index) => (
                        <div
                            style={{ background: 'rgba(217, 217, 217, 0.1)' }}
                            className="cursor-pointer rounded-xl lg:md:px-24 px-8 py-[10px] mx-auto lg:md:h-[100%] h-[70px] flex items-center"
                            key={index}
                        >
                            <a href={social.link} target="_blank" rel="noopener noreferrer">
                                <Image src={social.icon} alt={`Social Media ${index}`} className="" width={150} height={40} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;