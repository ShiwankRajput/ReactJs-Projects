import React from 'react'
import css from './NewCollections.module.css' 
import newCollection from '../../assets/new_collections.js'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className={css.newCollect}>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className={css.collections}>
            {newCollection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections