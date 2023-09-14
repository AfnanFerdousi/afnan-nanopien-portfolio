import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
const NotFound = () => {
    return (
        <div>
            <Head>
                <title>404 || Not Found</title>
            </Head>
       
        <div className='bg-[#0F192E] font-montserrat h-screen w-screen my-auto flex flex-col items-center justify-center'>
            <h2 className='text-9xl text-[#fff] flex items-center justify-center font-bold' >404</h2>
            <div className='text-3xl text-[#6f7582] font-medium text-center'>
                Go back <Link href="/" className='underline'>home</Link> pal! 👋🏼
            </div>
        </div>
         </div>
    );
};

export default NotFound;