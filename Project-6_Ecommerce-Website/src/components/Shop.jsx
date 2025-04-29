import React from 'react'
import Hero from './HeroSection/Hero'
import { Outlet } from 'react-router-dom';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Outlet/>
    </div>
  )
}

export default Shop