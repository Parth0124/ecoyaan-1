import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className='main'>
      <center>
        <div className='main_wrapper'>
          <div className='main_container'>
            <p className='main_animatedText'>
              Carefully Curated Eco-Friendly <span>Products</span>
            </p>
          </div>
        </div>
      </center>
      <div className='main_content'>
        <div className='main_cards'>
          <div className="row justify-content-center mb-3"> 
            <div className="col-sm-4 mb-3"> 
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-xTni_0geSKqihkXr0ZJvTyu1MgclHZmPQ&s' alt='' className="image-gap img-fluid" /> {/* Add img-fluid for responsive images */}
            </div>
            <div className="col-sm-4 mb-3">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrRMRDUf7FhPSrn6tCbNLyK3ASqumCSVgnA&s' alt='' className="image-gap img-fluid" />
            </div>
            <div className="col-sm-4 mb-3">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1fWVUcg4aLWJv49-wLLHKznKU06Xz-bR7w&s' alt='' className="image-gap img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
