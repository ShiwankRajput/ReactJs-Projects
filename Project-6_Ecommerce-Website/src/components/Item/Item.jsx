import React from 'react'
import styles from './Item.module.css'

const Item = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.image} alt="" />
      <p>{props.name}</p>

      <div className={styles.itemPrices}>
        <div className={styles.itemNewPrice}>
            ${props.new_price}
        </div>
        <div className={styles.itemOldPrice}>
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item