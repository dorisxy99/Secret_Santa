import React from 'react';
import { useState } from 'react';
import { checkToken } from '../../utilities/users-service';


export default function Wishes() {

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>Wishes</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}