import React, { useState } from 'react';
import emptyCart from '../assets/images/illustration-empty-cart.svg';
import '../styles/YourCart.css';

export default function YourCart() {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="your_cart">
      <h2>Your cart ({itemCount})</h2>
      <img src={emptyCart} alt='empty cart'/>
      <p className='empty_cart_text'>Your added items will appear here</p>
    </div>
  )
}