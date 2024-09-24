import React from "react";
import "./photohighlightsection.scss"

export default function PhotoHighlightSection(props){
    const portfolioItems = props.portfolioItems;
    return(
        <div className="banner-pic">
            {portfolioItems.map((item, index) => (
                <div className={banner-item-pic} key={index}>
                    <img src={item.image} alt={item.title} />
                    <div className="banner-item-title">{item.title}</div>
                </div>
            ))}
        </div>
            
    )
}