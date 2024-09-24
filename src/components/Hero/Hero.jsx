import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CircleChevronLeft, CircleChevronRight, CircleDot, Circle} from 'lucide-react';
import './hero.scss';

const images = [
    {
        src: '/Images/MilkyWay-Michigan.jpg', 
        description: 'MilkyWay' },
    {
        src: '/Images/NiagraFall-AmericanFall.jpg', 
        description: 'American Fall' },
    {
        src: '/Images/NiagraFall-HorseShoeFall.jpg', 
        description: 'Horseshoe Fall' },
];
const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    function showNextImage(){
        setCurrentImageIndex(index =>{
            if (index === 0) return images.length -1
            return index -1
        })
    }
    function showPrevImage() {
        setCurrentImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })

    }
    return (
        <div className="hero-container">
            <motion.div
                key={currentImageIndex}
                className="image-container"
                initial={{ opacity: 0.1, scale : 1.00 }}
                animate={{ opacity: 1, scale: 1.02}}
                exit={{ opacity: 0 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 0.1}}
            >

                <motion.img 
                initial = {{scale: 1.02}}
                animate = {{scale: 1.2}}
                transition={{duration:12, ease: "easeInOut", delay: 0 }}
                src={images[currentImageIndex].src} alt="hero" className="hero-image" />
            </motion.div>
            <div className="hero-description">
                <h1>My Photography Portfolio</h1>
                <p>{images[currentImageIndex].description}</p>
            </div>
            <button onClick={showPrevImage} className='hero-img-sidebtn' style={{ left: 0 }}> <CircleChevronLeft/></button>
            <button onClick={showNextImage} className='hero-img-sidebtn' style={{ right: 0 }}> <CircleChevronRight/> </button>
            <div className='bottom-index'>
                {images.map((_ , index) => (
                    <button className="bottom-index-dotbtn" key={index} onClick={() => setCurrentImageIndex(index)}>{index === currentImageIndex ? <CircleDot/> : <Circle />}</button>
                ))}
            </div>
        </div>
    );
};

export default Hero;