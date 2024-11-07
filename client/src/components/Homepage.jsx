import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Footer from './Footer'
import ArticleSection from './ArticleSection'

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ArticleSection />
      <Footer/>
    </div>
  );
}

export default HomePage