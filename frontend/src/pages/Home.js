import React from 'react';
import Navbar from '../components/Navbar';
import Foota from '../components/Footer';

import Hero from '../elite_edge/Hero';
import About from '../elite_edge/About';
import Features from '../elite_edge/Features';
import Testimonials from '../elite_edge/Testimonials';
import CtaSection from '../elite_edge/CtaSection';
import Footer from '../elite_edge/Footer';

// import animate on scroll
// import Aos from 'aos';
// import 'aois/dist/aos.css';

import PostCard from '../components/PostCard';

const Home = () => {
	// Aos.init({
	// 	duration: 1800,
	// 	offset: 0,
	// });

  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default Home