import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import PostCard from '../components/PostCard';

const Home = () => {
  return (
    <>
      <Navbar />
      <h1>Home</h1>


      <PostCard />
      <Footer />
    </>
  )
}

export default Home