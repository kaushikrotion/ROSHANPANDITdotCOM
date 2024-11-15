import React, { useState } from 'react';
import './imagePopup.scss';

const ImagePopup = ({ imageSrc, altText, detailText, onClose }) => {
    const [showDetails, setShowDetails] = useState(false);

    // Open details view
    const handleDetailsClick = () => {
        setShowDetails(true);
    };

    return (
        <div className="popup-overlay">
            <div className="popup-container" style={{ width: showDetails ? '50%' : '80%' }}>
                <img src={imageSrc} alt={altText} className="popup-image" />

                {/* Top Close Button */}
                <button className="close-button" onClick={onClose}>×</button>

                {/* Middle Details Button */}
                {!showDetails && (
                    <button className="details-button" onClick={handleDetailsClick}>
                        Click for Details
                    </button>
                )}

                {/* Details Sidebar */}
                {showDetails && (
                    <div className="details-sidebar">
                        <h2>Image Details</h2>
                        <p>{detailText}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImagePopup;
