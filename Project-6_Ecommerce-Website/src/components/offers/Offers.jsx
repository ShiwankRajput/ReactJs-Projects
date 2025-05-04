import React from 'react'
import css from './Offers.module.css'

const Offers = () => {
  return (
    <div className={css.offers}>
        <div className={css.offersLeft}>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className={css.offersRight}>
            <img src="/images/exclusive_image.png" alt="" />
        </div>

    </div>
  )
}

export default Offers