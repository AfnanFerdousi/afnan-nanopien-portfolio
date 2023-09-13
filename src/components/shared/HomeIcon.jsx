import React from 'react';
import { GoHome } from 'react-icons/go';
import Link from 'next/link';

const HomeIcon = () => {
    return (
    <div className="fixed top-6 left-6 z-20">
                <div className="p-2 bg-[#343957] text-[#fff] rounded-full hover:scale-110 transition-transform">
                    <Link href="/">
                        <GoHome className="text-4xl font-bold" />
                    </Link>
                </div>
            </div>
    );
};

export default HomeIcon;