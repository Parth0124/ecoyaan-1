import React, { useEffect,useState } from 'react'

import Footer from '../../Components/Footer/Footer'

import Navbar from '../../Components/Navbar/Navbar'
import './About.css'
import Image from '../../Components/Image/Image'
import Team from '../../Components/Team/Team'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
      const [showInfo, setShowInfo] = useState(false);
  return (
    <div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        <h2 style={{textAlign:'center',marginTop:'25px'}}>About Ecoyaan</h2>
        <div style={{ position: 'relative' }}>
        <img
          src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png"
          alt="About Us"/>
     
        {showInfo && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '35%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              padding: '20px',
              borderRadius: '5px',
            }}
          >
            <p>
            At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.


            </p>
            <p>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>
            <ul>
                <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
                <li>Videos, posts, and quizzes on climate change and sustainability</li>
                <li>Events and pledges that invite you to adopt a more sustainable lifestyle </li>
            </ul>   
          </div>
        )}
        <button
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgb(60, 166, 60)',
            color: showInfo ? '#000' : 'black',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'grab',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        >
          Read More
        </button>
      </div>

      <div className='values'>
        <h2 style={{textAlign:'center',marginTop:'25px'}}>Our Values</h2>
        <Image/>
      </div>

      <div className='story'>
        <h2 style={{textAlign:'center',marginTop:'25px'}}> Our Story</h2>
        <section>
    <div  className="left">
      <img style={{height:'350px'}} src="https://ecoyaan.com/images/about-us-founding-team-01.png" alt="Founder Image" />
      <img style={{height:'350px'}} src='https://ecoyaan.com/images/about-us-founding-team-02.png' alt="Founder Image" />
    </div>
    <div className="right">
      <p style={{marginLeft:'20px'}}>
      We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.


      </p>
      <button className="learn-more">Learn More</button>
    </div>
  </section>
      </div>
        
<div className='Team'>
<h2>Meet our Team</h2>
<Team/>
</div>
   
<hr/>
        <Footer/>

        </div>
  )
}

export default About