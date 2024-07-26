import React, { useState } from 'react';
import '../styles/DessertsMenu.css';
import Dessert from './Dessert';
import waffle from '../assets/images/image-waffle-mobile.jpg';
import cremeBrulé from '../assets/images/image-creme-brulee-mobile.jpg';
import macaron from '../assets/images/image-macaron-mobile.jpg';
import tiramisu from '../assets/images/image-tiramisu-mobile.jpg';
import baklavaMobile from '../assets/images/image-baklava-mobile.jpg';
import pieMobile from '../assets/images/image-meringue-mobile.jpg';
import cakeMobile from '../assets/images/image-cake-mobile.jpg';
import brownieMobie from '../assets/images/image-brownie-mobile.jpg';
import pannaCottaMobile from '../assets/images/image-panna-cotta-mobile.jpg';

export default function DessertsMenu() {
  return (
    <div className="desserts_menu">
      <Dessert 
        imgSrc={waffle} dessertType="waffle" dessertName="Waffle with berries" 
        price="$6.50"
      />
      <Dessert 
        imgSrc={cremeBrulé} dessertType="Creme Brulé" dessertName="Vanilla Bean Créam brulé" 
        price="$7.00"
      />
      <Dessert 
        imgSrc={macaron} dessertType="Macaron" dessertName="Macaron mix of five"
        price="$8.00"
      />
      <Dessert 
        imgSrc={tiramisu} dessertType="Tiramisu" dessertName="Classic Tiramisu"
        price="$5.50"
      />
      <Dessert 
        imgSrc={baklavaMobile} dessertType="Baklava" dessertName="Pistachio Baklava"
        price="$4.00"
      />
      <Dessert 
        imgSrc={pieMobile} dessertType="Pie" dessertName="Lemon Meringie Pie"
        price="$5.00"
      />
      <Dessert 
        imgSrc={cakeMobile} dessertType="Cake" dessertName="Red Velvet Cake"
        price="$4.50"
      />
      <Dessert 
        imgSrc={brownieMobie} dessertType="Brownie" dessertName="Salted Caramel Brownie"
        price="$5.50"
      />
      <Dessert 
        imgSrc={pannaCottaMobile} dessertType="Panna Cotta" dessertName="Vanilla Panna Cotta"
        price="$6.50"
      />
    </div>
  )
}