import React from 'react';
import './Hero.css'; // Importing CSS file for styling
import Products from '../../Components/Products/Products'

const Hero = () => {
  return (
    <div className="heading-container">
      <h6 className="responsive-heading">
        Carefully Curated Eco-Friendly Products{' '}
        <span className="last-word">Products</span>
      </h6>
      <Products/>
    </div>
  );
};

export default Hero;