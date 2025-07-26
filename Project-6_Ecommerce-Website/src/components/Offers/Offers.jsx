import styles from './offers.module.css'

import React from 'react'
import exclusice1_image from '../../assets/exclusive_image1.png'

const Offers = () => {
  return (
    <div className={styles.Offers}>
        <div className={styles.OffersLeft}>
            <h1>Flash Sale!</h1>
            <h1>Limited-Time Deals</h1>
            <p>Hurry! These prices won't last forever</p>
            <button>Shop Now</button>
        </div>
        <div className={styles.offersRight}>
            <img src={exclusice1_image} alt="" />
        </div>
    </div>
  )
}

export default Offers
