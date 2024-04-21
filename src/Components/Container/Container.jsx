import React from 'react';
import './Container.css';

const Container = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src='https://ecoyaan.com/images/OurStory4.png' alt='veges'style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className='right'>
                <h1>Join our community in creating a more sustainable future for everyone</h1>
                <p>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</p>
                <br/>
                <p>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change.</p>
            </div>
        </div>
    );
};

export default Container;
