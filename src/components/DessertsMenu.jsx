import React from 'react';
import '../styles/DessertsMenu.css';
import Dessert from './Dessert';

export default function DessertsMenu({itemCount, setItemCount, setTotalCount, data}) {
  return (
    <ul className="desserts_menu">
      {data.map((info) => {
        return <Dessert 
          imgSrc={info.image.mobile} category={info.category}
          dessertName={info.name} price={info.price}
          itemCount={itemCount} setItemCount={setItemCount}
          setTotalCount={setTotalCount} key={info.name}
          />
        
      })}
    </ul>
  )
}