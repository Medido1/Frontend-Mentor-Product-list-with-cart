import React from 'react';
import '../styles/ConfirmedWindow.css';

export default function ConfirmedCartItems({myData, calculateTotalPrice, setIsConfirmed, setTotalCount}) {
  function startNewOrder() {
    setIsConfirmed(false);
    setTotalCount(0);
    myData.forEach(item => {
      item.number = 0;
    })
  }
  return (
    <ul className='confirmed_cart_items'>
      {myData.map((item) => {
        if (item.number > 0){
          return <li key={item.name}>
          <div className="item_confirmed_left">
            <img src={item.image.thumbnail} className='thumbnail' alt={item.name} />
            <div className="item_info_confirmed ">
              <p className='item_name'>{item.name}</p>
              <p className='number_price'><b>{item.number}x   </b>@${item.price}</p>
            </div>
          </div>
          <p className="item_total">${item.price * item.number}</p>
        </li>
        }
      })}
      <div className="total_price_container">
        <p>Order Total</p>
        <p className='total_price'>${calculateTotalPrice()}</p>
      </div>
      <button className='btn' onClick={startNewOrder}>Start New Order</button>
    </ul>
    
  )
}