import React, { useState } from 'react'

import Footer from '../../Components/Footer/Footer'

import Navbar from '../../Components/Navbar/Navbar'
import './About.css'
import Image from '../../Components/Image/Image'
import Team from '../../Components/Team/Team'
import Page from '../../Components/Page/Page'
const About = () => {
  

  return (
    <div>
      <Navbar/>
    <Page/>

      <div className='values'>
        <h2 style={{textAlign:'center',marginTop:'25px'}}>Our Values</h2>
        <Image/>
      </div>

      <div className='story'>
        <h2 style={{textAlign:'center',marginTop:'25px'}}> Our Story</h2>
        <section>
    <div  className="left">
    <img
        style={{ height: '350px' }}
        src="https://ecoyaan.com/images/about-us-founding-team-01.png"
        alt="Founder Image"
      />
      <img
        style={{ height: '350px' }}
        src='https://ecoyaan.com/images/about-us-founding-team-02.png'
        alt="Founder Image"
      />
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