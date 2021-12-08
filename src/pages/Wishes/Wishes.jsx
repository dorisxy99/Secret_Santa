import React from 'react';
import WishCard from '../../components/WishCard/WishCard';


export default function Wishes({user, wishes, deleteWishes, updateWishes}) {
  const wish = wishes.map((w, idx) => <WishCard wish={w} key={idx} user={user} deleteWishes={deleteWishes} updateWishes={updateWishes}/>)


  return (
    <>
      <h1>{wish}</h1>
    </>
  );
}