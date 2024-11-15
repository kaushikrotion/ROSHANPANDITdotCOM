import React from 'react';
import "./Contacts.scss"
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';

const Contacts = () => {
    return (
        <div>
            <Navbar />
            <div className="banner-container">
                <img className="banner-image" src="./Images/MilkyWay-Michigan.jpg" alt="" />
                <h1 className="banner-title">Contacts</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Contacts;
