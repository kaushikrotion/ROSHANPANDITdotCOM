import React from 'react'
import PortfolioContainer from './portfolioContainer/portfolioContainer.jsx'
import "./portfolioComponents.scss"

export default function PortfolioComponents({portfolioItems}) {
  //console.log(portfolioItems);

  return (
    <div className="portfolio-component">
        {portfolioItems.map((item) =>{
          return (
            <section key={item.id} id= {item.title}>
              <PortfolioContainer
                title={item.title}
                images={item.images}
                path = {item.path}
              />
            </section>
        )})}
    </div>
  )
}
