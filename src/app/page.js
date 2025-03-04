import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Story from '@/components/Story';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import Header from '@/components/common/Header';
import Hero from '@/components/Hero';
const page = () => {
  return (
    <div><Header />
      <Hero/>
      <Slider/>
      <Story />
      <Team />
      <Footer/>
    </div>
  )
}

export default page