import React from "react";
import "./portfoliohighlights.scss"

const portfolioItems = [
    { title: 'Landscape', image: './Images/NiagraFall-AmericanFall.jpg' },
    { title: 'Wedding', image: './Images/Wedding.jpg' },
    { title: 'Potraits', image: './Images/Potrait.jpg' },
    { title: 'Astrophotography', image: './Images/MilkyWay-Michigan.jpg' },
    // Add more items as needed
];

export default function PortfolioHighlights(){
    return(
        <div className="portfolio-section">
            <h2 className="portfolio-title">PORTFOLIO HIGHLIGHTS</h2>
            <p className="portfolio-subtitle">Emotions that we save for you for many years</p>
            <div className="portfolio-grid">
                {portfolioItems.map((item, index) => (
                    <div className={`portfolio-item portfolio-item-${index}`} key={index}>
                        <img src={item.image} alt={item.title} />
                        <div className="portfolio-item-title">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}