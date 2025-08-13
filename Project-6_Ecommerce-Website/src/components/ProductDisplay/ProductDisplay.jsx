import React, { useContext } from 'react'
import styles from './ProductDisplay.module.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className={styles.productDisplay}>

        <div className={styles.productDisplayLeft}>
            <div className={styles.productDisplayImgList}>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className={styles.productDisplayImg}>
                <img className={styles.productDisplayMainImg} src={product.image} alt="" />
            </div>
        </div>

        <div className={styles.productDisplayRight}>
            <h1>{product.name}</h1>
            <div className={styles.productDisplayRightStar}>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
            </div>
            <p>(122)</p>
            <div className={styles.productDisplayRightPrices}>
                <div className={styles.productDisplayRightPriceOld}>
                    ${product.old_price}
                </div>
                <div className={styles.productDisplayRightPriceNew}>
                    ${product.new_price}
                </div>
                <div className={styles.productDisplayRightDescription}>
                    Our products are crafted with high-quality materials, designed to offer both style and durability. Perfect for everyday use, they combine modern design with unmatched comfort, ensuring you look and feel your best. Whether for casual outings, work, or special occasions, this product delivers reliability, elegance, and lasting value.
                </div>
                <div className={styles.productDisplayRightSize}>
                    <h1>Select Size</h1>
                    <div className={styles.productDisplayRightSize}>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className={styles.productDisplayRightCategory}><span>Category : </span>Women , T-shirt, Crop Top</p>
                <p className={styles.productDisplayRightCategory}><span>Tags : </span>Modern , Latest</p>
            </div>
        </div>
      
    </div>
  )
}

export default ProductDisplay
