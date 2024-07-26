import React, { useState } from 'react'; 
import DessertsMenu from './DessertsMenu';
import YourCart from './YourCart';

export default function Main() {
  const [itemCount, setItemCount] = useState(0);
  return (
    <main className="main">
      <DessertsMenu itemCount={itemCount} setItemCount={setItemCount}/>
      <YourCart />
    </main>
  )
}