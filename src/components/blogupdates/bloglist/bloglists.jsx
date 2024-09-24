import React from 'react';
import "./blogLists.scss"
import BlogBanner from '../blogbanner/blogbanner';

// BlogList component that maps over the array of blog items
const BlogLists = ({ blogPosts }) => {
    return (
        <div className="blog-list">
            {blogPosts.map((post, index) => (
                <BlogBanner key={index} title={post.title} image={post.image} date={post.date} />
            ))}
        </div>
    );
};

export default BlogLists;
