import React, { useState } from 'react'; 
import addToCart from '../assets/images/icon-add-to-cart.svg';
import incrementIcon from '../assets/images/icon-increment-quantity.svg';
import decrementIcon from '../assets/images/icon-decrement-quantity.svg';

export default function Dessert(
  {imgSrc, category, 
    dessertName, price,
     setTotalCount, itemCount, 
    updateItemNumber}
) {

  const [clicked, setIsClicked] = useState(false);

  function incrementCount() {
    updateItemNumber(dessertName, itemCount + 1);
    setTotalCount(totalCount => totalCount + 1);
  };

  function decrementCount() {
    if (itemCount > 0){
      updateItemNumber(dessertName, itemCount - 1);
      setTotalCount(totalCount => totalCount - 1);
    }
  }

  function handleClick() {
    setIsClicked(true);
  }

  return (
    <div className="dessert">
      <div className="img_container">
        <img src={imgSrc} alt={category} className='dessert_img'/>
        {!clicked && 
          <button className='add_to_cart_btn' onClick={handleClick}>
            <img src={addToCart} alt='cart icon'/>
            <p>Add to cart</p>
          </button>
        }
        {clicked && 
          <button className='clicked_cart_btn'>
            <div className='icon_container left' onClick={decrementCount}>
              <img src={decrementIcon} alt="decrement" className='icon count decrement'/>
            </div>
            <p>{itemCount}</p>
            <div className="icon_container right" onClick={incrementCount}>
              <img src={incrementIcon} alt='increment' className='icon count increment'/>
            </div>
          </button>
        }
      </div>
      <div className="info_container">
        <p>{category}</p>
        <h3>{dessertName}</h3>
        <div className="price">${price}</div>
      </div>
    </div>
  )
}