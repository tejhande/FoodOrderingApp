import React, { useContext } from "react";
import "./PlaceOrder.css";
import "../Cart/Cart.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { GetTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="PlaceOrder">
      <div className="PlaceOrderLeft">
        <p className="Title">Delivery Information</p>
        <div className="MultiFields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="MultiFields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="MultiFields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="PlaceOrderRight">
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
                <p>${GetTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <div className="CartTotalDetails">
                <p>Total</p>
                <p>
                  ${GetTotalCartAmount() === 0 ? 0 : GetTotalCartAmount() + 2}
                </p>
              </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
