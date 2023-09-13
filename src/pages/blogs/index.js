import AllBlogs from '@/components/AllBlogs';
import GIF from '@/components/shared/GIF';
import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='relative'>                
                <AllBlogs />
                {/* Stick the GIF to the bottom-right corner */}
                <GIF />
            </div>
        </div>
    );
};

export default Blog;