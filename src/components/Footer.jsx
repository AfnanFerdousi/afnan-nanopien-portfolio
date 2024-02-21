import React from 'react';

const Footer = () => {
    return (
        <div className="pt-24 px-8 pb-8">
            <hr className="w-full  border-t-2 border-gray-700" />
            <div className="flex items-center justify-between pt-4 max-w-[1380px] w-full mx-auto">
                <div className="flex items-center justify-between gap-x-8">
                    <div>
                        <h2 className="text-[#696f7c] font-bold font-montserrat text-md">Version</h2>
                        <p className="text-[#ffff] font-bold font-montserrat lg:md:text-md text-[12px] mt-2">February, 2024 © Version 3</p>
                    </div>

                    <div>
                        <h2 className="text-[#696f7c] font-bold font-montserrat text-md">Local Time</h2>
                        <p className="text-[#ffff] font-bold font-montserrat lg:md:text-md text-[12px] mt-2">Wednesday, February 21, 2024 (GMT+6)</p>
                    </div>
                </div>
                {/* <div>
                    <h2 className="text-[#696f7c] font-bold font-montserrat text-md">Version</h2>
                    <p className="text-[#ffff] font-bold font-montserrat text-md mt-2">September, 2023 © Edition 2</p>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;