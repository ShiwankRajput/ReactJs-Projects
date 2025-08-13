import React from 'react'
import styles from './DescriptionBox.module.css'

const DescriptionBox = () => {
  return (
    <div className={styles.descriptionBox}>
      <div className={styles.descriptionBoxNavigator}>
        <div className={styles.descriptionBoxNavBox}>Description</div>
        <div className={styles.descriptionBoxNavBox }>Reviews (122)</div>
      </div>
      <div className={styles.descriptionBoxDescription}>
        <p>
          Welcome to our online store, your one-stop destination for quality products at great prices. We offer a wide range of items to suit every need and preference, all available from the comfort of your home. With a smooth shopping experience, secure payment options, and quick delivery, buying online has never been easier. From the latest trends to everyday essentials, we have something for everyone.
        </p>
        <p>
          Customer satisfaction is our top priority, which is why we provide detailed product information, honest reviews, and dedicated support to help you shop with confidence. Our platform is mobile-friendly, allowing you to browse and purchase anytime, anywhere. With exciting offers, seasonal discounts, and a simple return policy, we make sure you get the best value for your money. Shop today and enjoy a smarter way to shop online.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
