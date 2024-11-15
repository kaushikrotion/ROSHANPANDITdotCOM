import React from 'react';
import "./Blog.scss"
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';

const Blog = () => {
    return (
        <div>
            <Navbar />
            <div className="banner-container">
                <img className="banner-image" src="./Images/MilkyWay-Michigan.jpg" alt="" />
                <h1 className="banner-title">Blog</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;