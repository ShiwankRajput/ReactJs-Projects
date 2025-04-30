import React from 'react'
import css from './Item.module.css'

const Item = (props) => {
  return (
    <div className={css.item}>
        <img src={props.image} alt="itemimage" />
        <p>{props.name}</p>
        <div className={css.itemPrices}>
            <div className={css.itemPriceNew}>
                ${props.new_price}
            </div>
            <div className={css.ItemPriceOld}>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item