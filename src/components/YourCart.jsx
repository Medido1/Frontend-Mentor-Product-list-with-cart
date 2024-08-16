import React, { useState } from 'react';
import emptyCart from '../assets/images/illustration-empty-cart.svg';
import carbonIcon from '../assets/images/icon-carbon-neutral.svg';
import '../styles/YourCart.css';
import CartItems from './CartItems';
import ConfirmedWindow from './ConfirmedWindow';

export default function YourCart({
  totalCount, myData, updateData, isConfirmed, setIsConfirmed, setTotalCount
  }) {
 
  function calculateTotalPrice() {
    return myData.reduce((total, item) => {
      return total + (item.number * item.price);
    },0).toFixed(2);
  };

  return (
    <div className="your_cart">
      <h2>Your cart ({totalCount})</h2>
      {totalCount === 0 && 
        <>
          <img src={emptyCart} alt='empty cart'/>
          <p className='empty_cart_text'>Your added items will appear here</p>
        </>
      }
      {!isConfirmed && <CartItems myData={myData} updateData={updateData}/>}
      {totalCount !== 0 && isConfirmed === false && 
        <>
          <div className="total_container">
          <p>Order Total</p>
          <p className='total_price'>${calculateTotalPrice()}</p>
        </div>
        <div className="delivery_note_container">
          <img src={carbonIcon} className='icon'/>
          <p>this is a <b>carbon-netural</b> delivery</p>
        </div>
        <button className="btn confirm" onClick={() => setIsConfirmed(true)}>Confirm Order</button>
        </>
      }
    {isConfirmed && 
      <>
        <ConfirmedWindow myData={myData} calculateTotalPrice={calculateTotalPrice}
          setIsConfirmed={setIsConfirmed} setTotalCount={setTotalCount}
        />
      </>
    }
    </div>
  )
}