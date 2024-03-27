import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { useContext } from 'react'

const FoodItem = ({id,name,price,discription,image}) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='FoodItem'>
        <div className="FoodItemImageContainer">
            <img className="FoodItemImage" src={image} alt="" />
            {
              !cartItems[id]
              ? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt="" />
              : <div className="FoodItemCounter">
                <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
              }
        </div>
        <div className="FoodItemInfo">
            <div className="FoodItemNameRating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="FoodItemDiscription">{discription}</p>
            <p className="FoodItemPrice">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem