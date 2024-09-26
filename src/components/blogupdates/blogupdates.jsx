import React from 'react';
import './blogupdates.scss';
import BlogLists from './bloglist/bloglists';

// Main BlogSection component
const BlogUpdates = () => {
    // Sample data for the blog posts
    const blogPosts = [
        {
            title: 'The Art of Portrait Photography',
            image: './Images/Potrait.jpg',
            date: { day: 27, month: 'MAY', year: 2024 },
        },
        {
            title: 'Wedding Photography',
            image: './Images/Wedding.jpg',
            date: { day: 27, month: 'MAY', year: 2024 },
        },
        // Add more posts as needed
    ];

    return (
        <div>
            <hr className='line' />
            <div className="blog-section">
                <div className="blog-info">
                    <h2>Blog Updated</h2>
                    <p>For 7 years of work, we have collected many insights about photography, which we will share on our blog.</p>
                    <button className="blog-button">Read the Blog</button>
                </div>
                <BlogLists blogPosts={blogPosts} />
            </div>
        </div>
    );
};

export default BlogUpdates;

