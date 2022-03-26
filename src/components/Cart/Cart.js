import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Item selected: {cart.length}</p>
    </div>
  );
};

export default Cart;
