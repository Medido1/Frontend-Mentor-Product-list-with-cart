import React from 'react';
import removeBtn from '../assets/images/icon-remove-item.svg';

export default function CartItems({myData, updateData}) {

  function removeItem(name) {
    updateData(prevData => 
      prevData.map(item => 
        item.name === name ? {...item, number: 0} : item
      )
    );
  }

  return (
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
            <img 
            src={removeBtn} alt='remove item' 
            className='icon remove' onClick={() => removeItem(item.name)}
            />
          </div>
        </li>
        } else return null;
      })}
    </ul>
  )
}