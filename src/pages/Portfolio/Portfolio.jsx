import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import "./Portfolio.scss"
import PortfolioComponents from '../../components/portfolioComponents/portfolioComponents';
import PortfolioSidebar from '../../components/portfolioSidebar/PorfolioSidebar';
import portfolioItems from "../../data/portfolioItems.json"

const Portfolio= () => {
    return (
        <div>
            <header><Navbar />
                <div className= "banner-container">
                    <img className= "banner-image" src="./Images/MilkyWay-Michigan.jpg" alt="" />
                    <h1 className= "banner-title">Portfolio</h1>
                </div>
            </header>
            <PortfolioSidebar portfolioItems={portfolioItems} />
            <PortfolioComponents portfolioItems={portfolioItems}/>
            <footer><Footer /></footer>
        </div>
    );
};

export default Portfolio;
