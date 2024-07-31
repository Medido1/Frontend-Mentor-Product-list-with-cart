import React from 'react';
import '../styles/DessertsMenu.css';
import Dessert from './Dessert';

export default function DessertsMenu(
  {setTotalCount, myData, updateItemNumber}
  ){
  return (
    <ul className="desserts_menu">
      {myData.map((info) => {
        return <Dessert key={info.name}
          imgSrc={info.image.mobile} category={info.category}
          dessertName={info.name} price={info.price}
          setTotalCount={setTotalCount} updateItemNumber={updateItemNumber}
          itemCount={info.number}
          />
      })}
    </ul>
  )
}