import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./portfolioSidebar.scss";

export default function PortfolioSidebar({ portfolioItems }) {
    const contentList = portfolioItems.map(item => item.title);
    const [showSidebar, setShowSidebar] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    // Show sidebar when scrolling past the header, and hide at the footer
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            if (header && footer) {
                const headerHeight = header.offsetHeight;
                const footerTop = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                const scrollPosition = window.scrollY;

                // Update visibility of sidebar
                setShowSidebar(scrollPosition > headerHeight && footerTop > windowHeight);

                // Set active section based on current scroll position
                contentList.forEach((section) => {
                    const sectionElement = document.getElementById(section);
                    if (sectionElement) {
                        const rect = sectionElement.getBoundingClientRect();
                        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                            setActiveSection(section);
                        }
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [contentList]);

    // Scroll to the selected section smoothly
    const scrollToSection = (id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: showSidebar ? '0%' : '-100%' }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="portfolio-sidebar-container"
        >
            {contentList.map((section, index) => (
                <motion.div
                    initial = {{x: '0%'}}
                    whileHover={{ scale : 1.1, x :['2%', '0%', '2%', '0%']}}
                    key={index}
                    className={`portfolio-sidebar-container-item ${activeSection === section ? 'active' : ''}`}
                    onClick={() => scrollToSection(section)}
                >
                    {section}
                </motion.div>
            ))}
        </motion.div>
    );
}
