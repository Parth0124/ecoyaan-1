import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';
import Container from '../../Components/Container/Container';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';
import './Home.css'

const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Slider />
      <Container />
      <Hero />
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
