import React, { useState } from 'react';
import emptyCart from '../assets/images/illustration-empty-cart.svg';
import removeBtn from '../assets/images/icon-remove-item.svg';
import carbonIcon from '../assets/images/icon-carbon-neutral.svg';
import '../styles/YourCart.css';

export default function YourCart({TotalCount, myData}) {
  const [isConfirmed, setIsConfirmed] = useState(false);
 
  function calcuateTotalPrice() {
    return myData.reduce((total, item) => {
      return total + (item.number * item.price);
    },0).toFixed(2);
  };

  return (
    <div className="your_cart">
      <h2>Your cart ({TotalCount})</h2>
      {TotalCount === 0 && 
        <>
          <img src={emptyCart} alt='empty cart'/>
          <p className='empty_cart_text'>Your added items will appear here</p>
        </>
      }
      <ul className='cart_items'>
          {myData.map((item) => {
            if (item.number > 0) {
              return <li key={item.name}>
              <div className="item_left">
                <p className='item_name'>{item.name}</p>
                <div className="item_info">
                  <p className="number_of_items">{item.number}x</p>
                  <p className='item_price'>@${item.price}</p>
                  <p>${item.price * item.number}</p>
                </div>
              </div>
              <div className="item_right">
                <img src={removeBtn} className='icon remove'/>
              </div>
            </li>
            } else {
              return null;
            }
          })}
        </ul>
        {TotalCount !== 0 && 
          <>
            <div className="total_container">
            <p>Order Total</p>
            <p className='total_price'>${calcuateTotalPrice()}</p>
          </div>
          <div className="delivery_note_container">
            <img src={carbonIcon} className='icon'/>
            <p>this is a <b>carbon-netural</b> delivery</p>
          </div>
          <button className="btn" onClick={() => setIsConfirmed(true)}>Confirm Order</button>
          </>
        }
      
    </div>
  )
}