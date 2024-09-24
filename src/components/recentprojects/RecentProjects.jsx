import React from "react";
import "./recentprojects.scss"

const recentProjetsItems = [
    { title: 'TRAVEL', desc: 'Niagra Falls', image: './Images/NiagraFall-AmericanFall.jpg' },
    { title: 'WEDDING', desc: 'Traditional Nepali Wedding',image: './Images/Wedding.jpg' },
    { title: 'ASTROPHOTGRAPHY', desc: 'Port Hope, Michigan',image: './Images/Potrait.jpg' },
    { title: 'LANDSCAPE', desc: 'West Virginia', image: './Images/MilkyWay-Michigan.jpg' },
    // Add more items as needed
];

export default function RecentProjects(){
    return(
        <div className="recent-project-section">
            <h2 className="recent-project-title">PORTFOLIO HIGHLIGHTS</h2>
            <p className="recent-project-subtitle">Emotions that we save for you for many years</p>
            <div className="recent-project-grid">
                {recentProjetsItems.map((item, index) => (
                    <div className={`recent-project-item recent-project-item-${index}`} key={index}>
                        <img src={item.image} alt={item.title} />
                        <div className="recent-project-item-title">{item.title}</div>
                        <div className="recent-project-item-desc">{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}