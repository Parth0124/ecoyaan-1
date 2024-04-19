import React from 'react';
import './Hero.css';

import Products from '../Products/Products';


function Hero() {
  return (
    <div className='main'>
      <div style={{ textAlign: 'center' }}>
        <div className='main_wrapper'>
          <div className='main_container' style={{
            display: 'inline-block',
            backgroundColor: '#f0f0f0', // Example background color
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '80%', // Adjust maximum width as needed
            margin: '0 auto' // Center the container horizontally
          }}>
            <p className='main_animatedText' style={{
              fontSize: '20px', // Adjust font size as needed
              margin: '0' // Remove default margins
            }}>
              Carefully Curated Eco-Friendly <span style={{ fontWeight: 'bold' }}>Products</span>
            </p>
          </div>
        </div>
      </div>
     
     <Products/>
  
    </div>
  );
}

export default Hero;
