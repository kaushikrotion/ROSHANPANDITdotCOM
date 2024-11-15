import React from "react";
import "./photohighlightsection.scss"

export default function PhotoHighlightSection(props){
    const items = props.items;
    const totalItems = items.length;

    return(
        <div className="banner-pic">
            {items.map((item, index) => {
               const isLastRowItem = totalItems % 3 !== 0 && index >= totalItems - (totalItems % 3); 
                return (
                    <div className={`banner-item-pic ${isLastRowItem ? 'last-row-item' : ''}`} key={index}>
                    <img src={item.image} alt={item.title} />
                    <div className="banner-item-title">{item.title}</div>
                </div>
            )}
        )}
        </div>
            
    )
}