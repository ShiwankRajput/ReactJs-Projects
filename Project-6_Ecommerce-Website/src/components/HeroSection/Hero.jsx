import React from 'react'
import css from './Hero.module.css'

const Hero = () => {
  return (
    <div className={css.hero}>

        <div className={css.heroLeft}>
            <h2>NEW ARRIVAL ONLY</h2>
            <div>
                <div className={css.heroHandIcon}>
                    <p>new</p>
                    <img src="/images/hand_icon.png" alt="" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className={css.heroLatestBtn}>
                <div>Latest Collection</div>
                <img src="/images/arrow.png" alt="" />
            </div>
        </div>

        <div className={css.heroRight}>
            <img src="/images/hero_image.png" alt="" />
        </div>

    </div>
  )
}

export default Hero