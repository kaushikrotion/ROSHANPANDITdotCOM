import React from 'react';
import "./footer.scss"
import NewsletterForm from './newsletterform/newsletterform';
import Instagram from './instagram/instagram';


const Footer = () => {
    return (
        <div>
            <hr className='line' />
            <div className='footer-container'>
                <div className='quick-links-with-button'>
                    <button className='get-in-touch'>GET IN TOUCH</button>
                    <div className='quick-links-lists'>
                        <p>Categories</p>
                        <a href="">Wedding</a>
                        <a href="">Landscape</a>
                        <a href="">Astrophotography</a>
                        <a href="">Potraits</a>
                    </div>
                    <button className='to-the-top'>TO THE TOP</button>
                </div>
                <NewsletterForm/>
                <Instagram/>
            </div>
        </div>
    );
};

export default Footer;
