import React from 'react';
import WishCard from '../../components/WishCard/WishCard';


export default function MyWishes({wishes, user}) {
  const filteredWishes = wishes.filter(w => user._id === w.user);
  const wish = filteredWishes.map((w,i) => <WishCard key={i} wish={w}/>);

  console.log(user);

  return (
    <>
      <h1>{wish}</h1>
    </>
  );
}