import React from "react";
import "./portfoliohighlights.scss"
import "../photohighlightposter/photohighlightsection.jsx"
import PhotoHighlightSection from "../photohighlightposter/photohighlightsection.jsx";

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
            <PhotoHighlightSection portfolioItems = {portfolioItems}/>

        </div>
    )
}