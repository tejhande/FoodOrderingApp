import React, { useState } from 'react';

function CartPromocode() {
    const [promoCode, setPromoCode] = useState('');
    const [isValid, setIsValid] = useState(false);

    // Function to validate the promo code
    const validatePromoCode = (code) => {
        // Check if the promo code matches "Tejas100"
        return code === "Tejas100";
    };

    // Function to handle promo code submission
    const handleSubmit = () => {
        const isValidCode = validatePromoCode(promoCode);
        setIsValid(isValidCode);
        if (isValidCode) {
            // If the promo code is valid, you can perform further actions here
            console.log("Promo code is valid!");
            // Apply discounts or any other actions related to a valid promo code
        } else {
            console.log("Invalid promo code. Please try again.");
        }
    };

    return (
        <div className="CartPromocode">
            <p>If You Have A Promo Code, Enter It Here</p>
            <div className="CartPromocodeInput">
                <input
                    type="text"
                    placeholder="Enter Your Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {isValid && <p className="valid-feedback">Promo code is valid!</p>}
            {!isValid && promoCode.length > 0 && <p className="invalid-feedback">Invalid promo code. Please try again.</p>}
        </div>
    );
}

export default CartPromocode;
