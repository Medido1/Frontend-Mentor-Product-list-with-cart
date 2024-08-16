import React, { useState } from 'react'; 
import DessertsMenu from './DessertsMenu';
import YourCart from './YourCart';
import data from '../data';

export default function Main() {
  const [totalCount, setTotalCount] = useState(0);
  const [myData, updateData] = useState(data);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const updateItemNumber = (name, newNumber) => {
    updateData((prevData) =>
    prevData.map((item) => 
    item.name === name ? {...item, number: newNumber}: item))
  }
  
  return (
    <main className="main">
      <DessertsMenu 
        myData = {myData} updateItemNumber={updateItemNumber}
        totalCount={totalCount} setTotalCount={setTotalCount}
        isConfirmed={isConfirmed} 
      />
      <YourCart myData={myData} updateData={updateData}
        totalCount={totalCount}
        isConfirmed={isConfirmed} setIsConfirmed={setIsConfirmed}
        setTotalCount={setTotalCount}
      />
    </main>
  )
}