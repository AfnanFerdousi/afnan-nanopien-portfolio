import Image from 'next/image';
import React from 'react';
import dots from '../../public/dots.png';
const Resume = () => {
    return (
        <div className="px-8 py-40">
            <div
                className="rounded-xl px-6 py-12"
                style={{ background: 'rgba(217, 217, 217, 0.1)' }}>
                {/* header */}
                <div className="flex items-center justify-between">
                    <h2 className="font-Raleway font-semibold text-2xl text-[#fff] ">Resume</h2>
                    <Image
                        src={dots}
                        alt="dots"
                        height={50}
                        width={50} />
                </div>

                {/* content part 1 */}
                
            </div>
        </div>
    );
};

export default Resume;