import React from 'react'
import styles from './Breadcrums.module.css';
import arrow_icon from '../../assets/breadcrum_arrow.png'

const Breadcrums = (props) => {

    const {product} = props;

  return (
    <div className={styles.breadcrum}>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums
