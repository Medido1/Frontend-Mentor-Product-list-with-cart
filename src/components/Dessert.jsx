import React, { useState } from 'react'; 
import addToCart from '../assets/images/icon-add-to-cart.svg';
import incrementIcon from '../assets/images/icon-increment-quantity.svg';
import decrementIcon from '../assets/images/icon-decrement-quantity.svg';

export default function Dessert(
  {imgSrc, dessertType, dessertName, price, itemCount, setItemCount, setTotalCount}
) {
  const [clicked, setIsClicked] = useState(false);

  function incrementCount() {
    setItemCount(count => count + 1);
    setTotalCount(totalCount => totalCount + 1);
  };

  function decrementCount() {
    if (itemCount < 1) return null;
    setItemCount(count => count -  1);
    setTotalCount(totalCount => totalCount - 1);
  }

  function handleClick() {
    setIsClicked(true);
  }

  return (
    <div className="dessert">
      <div className="img_container">
        <img src={imgSrc} alt={dessertType} className='dessert_img'/>
        {!clicked && 
          <button className='add_to_cart_btn' onClick={handleClick}>
            <img src={addToCart} alt='cart icon'/>
            <p>Add to cart</p>
          </button>
        }
        {clicked && 
          <button className='clicked_cart_btn'>
            <div className='icon_container left'>
              <img src={decrementIcon} alt="decrement" className='icon count'
                onClick={decrementCount}
              />
            </div>
            <p>{itemCount}</p>
            <div className="icon_container right">
              <img src={incrementIcon} alt='increment' className='icon count'
                onClick={incrementCount}
              />
            </div>
          </button>
        }
      </div>
      <div className="info_container">
        <p>{dessertType}</p>
        <h3>{dessertName}</h3>
        <div className="price">{price}</div>
      </div>
    </div>
  )
}