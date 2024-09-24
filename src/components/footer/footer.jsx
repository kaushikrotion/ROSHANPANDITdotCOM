import React from 'react';
import "./footer.scss"
import NewsletterForm from './newsletterform/newsletterform';
import { Instagram } from '@mui/icons-material';


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='quick-links-with-button'>
                <button>Contact Page</button>
                <div className='quick-links-lists'>
                    <p>Categories</p>
                    <a href="">Wedding</a>
                    <a href="">Landscape</a>
                    <a href="">Astrophotography</a>
                    <a href="">Potraits</a>
                </div>
                <button className='back-to-top'>back to top</button>
            </div>
            <NewsletterForm/>
            <Instagram/>
        </div>
    );
};

export default Footer;
