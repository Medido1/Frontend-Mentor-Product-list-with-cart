import React from 'react'; 
import addToCart from '../assets/images/icon-add-to-cart.svg';

export default function Dessert({imgSrc, dessertType, dessertName, price}) {
  return (
    <div className="dessert">
      <div className="img_container">
        <img src={imgSrc} alt={dessertType} className='dessert_img'/>
        <button className='add_to_cart_btn'>
          <img src={addToCart} alt='cart icon'/>
          <p>Add to cart</p>
        </button>
      </div>
      <div className="info_container">
        <p>{dessertType}</p>
        <h3>{dessertName}</h3>
        <div className="price">{price}</div>
      </div>
    </div>
  )
}