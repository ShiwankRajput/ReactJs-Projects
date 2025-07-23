import React from 'react'
import css from './Hero.module.css'

import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image1 from '../../assets/hero_image1.png'

const Hero = () => {
  return (
    <div className={css.hero}>

  <div className={css.heroLeft}>
    <h2>UNVEIL YOUR STYLE</h2>
    <div>
      <div className={css.handHandIcon}>
        <p>Just Dropped</p>
        <img src={hand_icon} alt="" />
      </div>
      <p>Fresh Arrivals</p>
      <p>For Every Mood</p>
    </div>
    <div className={css.heroLatestButton}>
      <div>Explore Now</div>
      <img src={arrow_icon} alt="" />
    </div>
  </div>

  <div className={css.heroRight}>
    <img src={hero_image1} alt="" />
  </div>

</div>

  )
}

export default Hero
