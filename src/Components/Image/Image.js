import React from 'react';
import './Image.css';

function Image() {
  return (
    <div className="image-gallery">
      <div className="image-container">
        <img
          src="https://ecoyaan.com/images/Trust.png"
          alt="Trust"
          className="image"
        />
        <div className="info">
          <h3>Trust</h3>
          <p>We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://ecoyaan.com/images/Authenticity.png"
          alt="Authenticity"
          className="image"
        />
        <div className="info">
          <h3>Authenticity</h3>
          <p>We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.</p>
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://ecoyaan.com/images/Impact.png"
          alt="Impact"
          className="image"
        />
        <div className="info">
          <h3>Impact</h3>
          <p>We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.</p>
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://ecoyaan.com/images/FunAndEngaging.png"
          alt="Fun & Engaging"
          className="image"
        />
        <div className="info">
          <h3>Fun & Engaging</h3>
          <p>Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.</p>
        </div>
      </div>
    </div>
  );
}

export default Image;
