import React, { useEffect, useState } from 'react';
import '../styles/DessertsMenu.css';
import Dessert from './Dessert';

export default function DessertsMenu(
  {setTotalCount, myData, updateItemNumber, isConfirmed}
  ){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
      };
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
  return (
    <ul className="desserts_menu">
      {(!isConfirmed || !isMobile) && myData.map((info) => {
        return <Dessert 
          key={info.name}
          imgSrc={isMobile ? info.image.mobile : info.image.desktop} 
          category={info.category}
          dessertName={info.name} 
          price={info.price}
          setTotalCount={setTotalCount} 
          updateItemNumber={updateItemNumber}
          itemCount={info.number}
          />
      })}
    </ul>
  )
}