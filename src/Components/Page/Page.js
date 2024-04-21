import React, { useState } from 'react';

function EcoyaanPage() {
  const [showInfo, setShowInfo] = useState(true); // Set showInfo to true by default

  return (
    <div>
      <div className='extrapage'>
     
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <img
            src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png"
            alt="About Us"
            className="responsive-image"
          />
          {showInfo && (
            <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor: 'whitesmoke' }}>
              <h2>About Ecoyaan</h2>
              <p>
                At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
              </p>
              <p>
                We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
              </p>
              <ul  style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
                <li>Videos, posts, and quizzes on climate change and sustainability</li>
                <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EcoyaanPage;
