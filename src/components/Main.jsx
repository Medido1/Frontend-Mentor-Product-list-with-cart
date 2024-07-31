import React, { useState } from 'react'; 
import DessertsMenu from './DessertsMenu';
import YourCart from './YourCart';
import data from '../data';

export default function Main() {
  const [TotalCount, setTotalCount] = useState(0);
  const [myData, updateData] = useState(data);

  const updateItemNumber = (name, newNumber) => {
    updateData((prevData) =>
    prevData.map((item) => 
    item.name === name ? {...item, number: newNumber}: item))
  }
  
  return (
    <main className="main">
      <DessertsMenu 
        myData = {myData} updateItemNumber={updateItemNumber}
        TotalCount={TotalCount} setTotalCount={setTotalCount}
      />
      <YourCart TotalCount={TotalCount}/>
    </main>
  )
}