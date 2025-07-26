import styles from './NewCollection.module.css'
import new_collection from '../../assets/new_collections'
import Item from '../Item/Item'

import React from 'react'

const NewCollection = () => {
  return (
    <div className={styles.newCollections}>
      <h1>New Collections</h1>
      <hr />
      <div className={styles.collections}>
        {new_collection.map((item,i) => {
            return <Item key={i} id={item.id} name={item.name} 
            image={item.image} new_price={item.new_price} 
            old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollection;
