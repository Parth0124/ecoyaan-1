import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'; // Importing CSS file for custom styling

function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
         style={{ width: '100%', height: '90vh' }}
            className="d-block w-100"
            src="https://arbordayblog.org/wp-content/uploads/2018/11/tree-planting-kid-hands-iStock-672734322-1080x608.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="caption-content">
              <h5 style={{marginTop:'28px'}}>Plant a tree today</h5>
              <p style={{}}> Trees provide us with oxygen and fresh air and planting them will ensure we have fresh air to breathe in the future.</p>
              <a href="/about">
      <button>About Us</button>
    </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
style={{ width: '100%', height: '90vh' }}
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.T0XkCi5q14AVctVV18yUcQHaEN?rs=1&pid=ImgDetMain "
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="caption-content-1">
              <h2 style={{color:'black'}}>Are you a business that truly cares about sustainability?</h2>
              <p style={{color:'black'}}>We would love to work with you</p>
              <button>Get in touch</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ width: '100%', height: '90vh' }} className="d-block w-100" src="https://ecoyaan.com/images/carousel-2.png" alt="Third slide" />
          <Carousel.Caption>
            <div className="caption-content-2">
              <h1 style={{color:'black',marginRight:'110px'}}>Follow us on Instagram</h1>
              <p style={{color:'black',marginRight:'110px'}}>For climate news, lifestyle tips, & updates</p>
              <button>Follow Us</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default Slider;
