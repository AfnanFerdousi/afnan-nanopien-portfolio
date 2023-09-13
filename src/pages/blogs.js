import Blogs from '@/components/Blogs';
import GIF from '@/components/shared/GIF';
import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='relative'>                
                <Blogs />
                {/* Stick the GIF to the bottom-right corner */}
                <GIF />
            </div>
        </div>
    );
};

export default Blog;