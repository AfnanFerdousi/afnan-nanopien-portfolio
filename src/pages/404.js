import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='bg-[#0F192E] font-montserrat'>
            <h2 className='text-10xl text-[#fff] flex items-center justify-center font-bold' >404</h2>
            <div className='text-3xl text-[#6f7582] font-medium'>
                Go back <Link href="/" className='underline'>home</Link> pal! 👋🏼
            </div>
        </div>
    );
};

export default NotFound;