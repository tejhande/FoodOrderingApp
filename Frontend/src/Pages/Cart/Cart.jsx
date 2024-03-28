import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {

  const {cartItems,food_list,removeFromCart, GetTotalCartAmount} = useContext(StoreContext)
  return (
    <div className="Cart">
      <div className="CartItems">
        <div className="CartItemsTitle">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br /><hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return (
              <div>
              <div className="CartItemsTitle CartItemsItem">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='Cross'>X</p>
              </div>
              <hr /></div>
            )
          }
        })}
      </div>
      <div className="CartBottom">
        <div className="CartTotal">
          <h2>Cart Total</h2>
          <div>
            <div className="CartTotalDetails">
              <p>Subtotal</p>
              <p>${GetTotalCartAmount()}</p>
            </div>
            <div className="CartTotalDetails">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <div className="CartTotalDetails">
              <p>Total</p>
              <p>${GetTotalCartAmount()+2}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="CartPromocode">
          <p>If You Have A Promo Code, Enter It Here</p>
          <div className="CartPromocodeInput">
            <input type="text" placeholder="Enter Your Promo Code"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart