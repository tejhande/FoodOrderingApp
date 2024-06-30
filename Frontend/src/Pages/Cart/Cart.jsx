import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import CartPromocode from '../../Components/Promocode/Promocode'; // Step 1: Import the CartPromocode component

const Cart = () => {
  const { cartItems, food_list, removeFromCart, GetTotalCartAmount } = useContext(StoreContext);
  const Navigate = useNavigate();

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
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}> {/* Added key prop */}
                <div className="CartItemsTitle CartItemsItem">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price * 32}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{32 * item.price * cartItems[item._id]}</p>
                  <button onClick={() => removeFromCart(item._id)} className="delete-button noselect">
  <span className="text">Delete</span>
  <span className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
    </svg>
  </span>
</button>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="CartBottom">
        <div className="CartTotal">
          <h2>Cart Total</h2>
          <div>
            <div className="CartTotalDetails">
              <p>Subtotal</p>
              <p>₹{32 * GetTotalCartAmount()}</p>
            </div>
            <div className="CartTotalDetails">
              <p>Delivery Fee</p>
              <p>₹{32 * GetTotalCartAmount() === 0 ? 0 : 2 * 32}</p>
            </div>
            <div className="CartTotalDetails">
              <p>Total</p>
              <p>₹{GetTotalCartAmount() === 0 ? 0 : 32 * GetTotalCartAmount() + 2 * 32}</p>
            </div>
          </div>
          <button onClick={() => Navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <CartPromocode /> {/* Step 2: Replace the promo code input section with the CartPromocode component */}
      </div>
    </div>
  );
};

export default Cart;
