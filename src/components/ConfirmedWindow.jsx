import React from 'react';
import confirmedIcon from '../assets/images/icon-order-confirmed.svg';
import '../styles/ConfirmedWindow.css';
import ConfirmedCartItems from './ConfirmedCartItems';

export default function confirmedWindow({myData, calculateTotalPrice, setIsConfirmed, setTotalCount}) {
  return (
    <div className="confirmed_window">
      <header>
        <img src={confirmedIcon} className='icon'/>
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
      </header>
      <ConfirmedCartItems myData={myData} calculateTotalPrice={calculateTotalPrice}
        setIsConfirmed={setIsConfirmed}  setTotalCount={setTotalCount}
      />
    </div>
  )
}