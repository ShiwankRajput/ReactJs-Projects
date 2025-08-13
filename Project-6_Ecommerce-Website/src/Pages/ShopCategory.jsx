import React, { useContext } from 'react'
import styles from './CSS/ShopCategory.module.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);

  return (
    <div className={styles.shopCategory}>
      <img className={styles.shopCategoryBanner} src={props.banner} alt="" />
      <div className={styles.shopCategoryIndexSort}>
        <p>
          <span>Showing 1-23</span> out of 36 Products
        </p>
        <div className={styles.shopCategorySort}>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={styles.shopCategoryProduct}>
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} 
            image={item.image} new_price={item.new_price} 
            old_price={item.old_price} />
          }
          else{
            return null; 
          }
        })}
      </div>
      <div className={styles.shopCategoryLoadMore}>
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory
