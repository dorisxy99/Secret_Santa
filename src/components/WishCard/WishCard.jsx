import React from 'react';


export default function WishCard({wish}) {

 

  return (
    <div style={{border:"1px solid black"}}>
    <p>{wish.name}</p>
    <p>{wish.description}</p>
    <p>{wish.URL}</p>
    </div>
)}
