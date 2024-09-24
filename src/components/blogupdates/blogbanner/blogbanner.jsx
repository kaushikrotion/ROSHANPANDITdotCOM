import React from 'react';
import "./blogbanner.scss"

// BlogBanner component that will show each blog item with an image and description
const BlogBanner = ({ title, image, date }) => {
    return (
        <div className="blog-item">
            <img src={image} alt={title} className="blog-image" />
            <div className="blog-details">
                <div className="blog-date">
                    <span className="date-number">{date.day}</span>
                    <span className="date-month">{date.month}</span>
                    <span className="date-year">{date.year}</span>
                </div>
                <div className="blog-title">{title}</div>
            </div>
        </div>
    );
};

export default BlogBanner;
