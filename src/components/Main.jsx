import React from 'react';
import DessertsMenu from './DessertsMenu';
import YourCart from './YourCart';

export default function Main() {
  return (
    <main className="main">
      <DessertsMenu />
      <YourCart />
    </main>
  )
}