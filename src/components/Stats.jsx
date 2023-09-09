import Image from "next/image";

const Stats = () => {
    return (
        <div className='flex items-center justify-center px-8 h-screen'>
            <div>
                <div>
                    <h2 className='font-montserrat font-semibold text-8xl'>100</h2>
                    <p>Projects Finished</p>
                </div>
                <hr className="w-16 mx-auto border-t-2 border-gray-700" /> {/* Add a short horizontal line here */}
                <div>
                    <h2 className='font-montserrat font-semibold text-8xl'>100</h2>
                    <p>Projects Finished</p>
                </div>
            </div>
            <div>
                <Image src="https://i.ibb.co/ccXwJLT/Group-61.png" alt="blob" height={100} width={100} />
            </div>
            <div>
                <div>
                    <h2 className='font-montserrat font-semibold text-8xl'>100</h2>
                    <p>Projects Finished</p>
                </div>
                <hr className="w-16 mx-auto border-t-2 border-gray-700" /> {/* Add a short horizontal line here */}
                <div>
                    <h2 className='font-montserrat font-semibold text-8xl'>100</h2>
                    <p>Projects Finished</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;