import Image from "next/image";

const Stats = () => {
    return (
        <div className='flex items-center justify-center px-8 h-[80vh] gap-[8rem]'>
            <div>
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
            <div>
                <Image src="https://i.ibb.co/ccXwJLT/Group-61.png" alt="blob" height={200} width={200} />
            </div>
            <div>
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
    );
};

export default Stats;