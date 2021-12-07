import React from 'react';
import WishCard from '../../components/WishCard/WishCard';


export default function Wishes({wishes}) {
  const wish = wishes.map(w => <WishCard wish={w}/>)

  return (
    <>
      <h1>{wish}</h1>
    </>
  );
}