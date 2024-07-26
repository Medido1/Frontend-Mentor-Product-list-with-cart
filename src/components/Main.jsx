import React, { useState } from 'react'; 
import DessertsMenu from './DessertsMenu';
import YourCart from './YourCart';

export default function Main() {
  const [itemCount, setItemCount] = useState(0);
  const [TotalCount, setTotalCount] = useState(0);
  return (
    <main className="main">
      <DessertsMenu itemCount={itemCount} setItemCount={setItemCount} 
        TotalCount={TotalCount} setTotalCount={setTotalCount}
      />
      <YourCart TotalCount={TotalCount}/>
    </main>
  )
}