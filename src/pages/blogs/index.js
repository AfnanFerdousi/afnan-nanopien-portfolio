import AllBlogs from '@/components/AllBlogs';
import GIF from '@/components/shared/GIF';
import HomeIcon from '@/components/shared/HomeIcon';
import Head from 'next/head';
import React from 'react';
import Footer from '@/components/Footer';

const Blog = () => {
    return (
        <div>
            <Head>
                <title>Blogs || Afnan || Nanopien</title>
            </Head>
            <div className='relative'>                
                <AllBlogs />
                {/* Stick the GIF to the bottom-right corner */}
                <GIF />
            </div>
            <Footer/>
        </div>
    );
};

export default Blog;