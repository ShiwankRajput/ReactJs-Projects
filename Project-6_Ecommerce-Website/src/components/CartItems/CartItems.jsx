import React, { useContext } from 'react'
import styles from './CartItems.module.css'
import remove_icon from '../../assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {

    const {getTotalCartAmount,all_product, cartItems, removeFromCart} = useContext(ShopContext)

  return (
    <div className={styles.cartItems}>
      <div className={styles.cartItemsFormatMain}>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div>
                        <div className={styles.cartItemsFormat}>
                            <img src={e.image} alt="" className={styles.cartIconProductIcon}/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className={styles.cartItemsQuantity}>{cartItems[e.id]}</button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
        }
        return null;
      })}
      <div className={styles.cartItemsDown}>
        <div className={styles.cartItemsTotal}>
            <h1>Cart Totals</h1>
            <div>
                <div className={styles.cartItemsTotal}>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className={styles.cartItemTotalItem}>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className={styles.cartItemTotalItem}>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>

            <button>Proceed to checkout</button>
        </div>
        <div className={styles.cartItemsPromoCode}>
            <p>If You have a promoCode enter it here</p>
            <div className={styles.cartItemPromoBox}>
                <input type="text" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
