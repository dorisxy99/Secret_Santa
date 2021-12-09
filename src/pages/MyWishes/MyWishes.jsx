import React from 'react';
import WishCard from '../../components/WishCard/WishCard';


export default function MyWishes({ wishes, user, deleteWishes, updateWishes }) {
  const filteredWishes = wishes.filter(w => user._id === w.user);
  const wish = filteredWishes.map((w, i) => <WishCard key={i} user={user} wish={w} deleteWishes={deleteWishes} updateWishes={updateWishes} />);



  console.log(user);

  return (
    <div className="container">
      <div className="row align-items-center">
        {wish}
      </div>
    </div>
  );
}