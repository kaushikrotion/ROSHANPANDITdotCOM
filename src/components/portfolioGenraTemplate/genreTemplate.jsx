import React, { useState, useEffect } from 'react';
import data from '../../data/portfolioGenraItems.json';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer';
import ImagePopup from '../imagePopup/imagePopup';
import './genreTemplate.scss';

const GenreTemplate = () => {
    const { genre } = useParams();
    const [categoryOptions, setCategoryOptions] = useState(["All"]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredImages, setFilteredImages] = useState([]);
    const [navbarPic, setNavbarPic] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    const [popupImage, setPopupImage] = useState(null); // This controls the popup

    const genreData = data.find((item) => item.genra.toLowerCase() === genre.toLowerCase());
    if (!genreData) {
        return <Navigate to="/not-found" />;
    }

    useEffect(() => {
        const genreData = data.find((item) => item.genra.toLowerCase() === genre.toLowerCase());
        if (genreData) {
            setNavbarPic(genreData.navbarPic);
            const uniqueCategories = Array.from(new Set(genreData.images.map((image) => image.category)));
            setCategoryOptions(["All", ...uniqueCategories]);
            setFilteredImages(genreData.images);
        }

        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [genre]);

    useEffect(() => {
        const genreData = data.find((item) => item.genra.toLowerCase() === genre.toLowerCase());
        if (genreData) {
            setFilteredImages(
                selectedCategory === "All"
                    ? genreData.images
                    : genreData.images.filter((image) => image.category === selectedCategory)
            );
        }
    }, [selectedCategory, genre]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false); // Close dropdown after selecting
    };

    const handleImageClick = (image) => {
        setPopupImage(image); // Set the clicked image to trigger the popup
        console.log("CLICKed");
    };

    const closePopup = () => {
        setPopupImage(null); // Close the popup
    };

    return (
        <div>
            <header>
                <Navbar />
                <div className="banner-container">
                    <img src={navbarPic} alt={`${genre} Navbar`} className="banner-image" />
                    <h1 className='banner-title'>{genre[0].toUpperCase() + genre.slice(1)}</h1>
                </div>
            </header>

            <div className={`category-bar ${isDropdownOpen ? "open" : ""}`}>
                <button
                    onClick={() => handleCategoryClick("All")}
                    className={`category-button category-button-all ${selectedCategory === "All" ? "active" : ""}`}
                >
                    All
                </button>

                {isMobileView ? (
                    <div className="dropdown-container">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="dropdown-toggle">
                            {selectedCategory} ▼
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                {categoryOptions.slice(1).map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryClick(category)}
                                        className={`dropdown-item ${selectedCategory === category ? "active" : ""}`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="right-category-buttons">
                        {categoryOptions.slice(1).map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                                className={`category-button ${selectedCategory === category ? "active" : ""}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="image-gallery">
                {filteredImages.map((image, index) => (
                    <div
                        key={index}
                        className={`image-card ${image.imageOrientation}`}
                        onClick={() => handleImageClick(image)}
                        style={{ cursor: "pointer" }}
                    >
                        <img src={image.imagelink} alt={image.category} />
                    </div>
                ))}
            </div>

            {/* Render the popup only if an image is clicked */}
            {popupImage && (
                <ImagePopup
                    imageSrc={popupImage.imagelink}
                    altText={popupImage.category}
                    detailText={popupImage.category}
                    handleImageClick={handleImageClick}
                    onClose={closePopup}
                />
            )}

            <footer><Footer /></footer>
        </div>
    );
};

export default GenreTemplate;
