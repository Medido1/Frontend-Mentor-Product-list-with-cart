import React from 'react';
import '../styles/DessertsMenu.css';
import Dessert from './Dessert';

export default function DessertsMenu(
  {itemCount, setItemCount, setTotalCount, myData, updateItemNumber}
  ){
  return (
    <ul className="desserts_menu">
      {myData.map((info) => {
        return <Dessert key={info.name}
          imgSrc={info.image.mobile} category={info.category}
          dessertName={info.name} price={info.price}
          itemCount={itemCount} setItemCount={setItemCount}
          setTotalCount={setTotalCount} updateItemNumber={updateItemNumber}
          />
      })}
    </ul>
  )
}