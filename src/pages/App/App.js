import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Wishes from '../Wishes/Wishes';
import MyWishes from '../MyWishes/MyWishes';
import Create from '../Create/Create';
import {createWish, getAll, deleteWish, updateWish } from '../../utilities/wishes-api';
import NavBar from '../../components/NavBar/NavBar';
import { useEffect } from 'react';
import WishCard from '../../components/WishCard/WishCard';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [wishes, setWishes] = useState([]);
  const navigate = useNavigate();

  console.log(wishes);

  useEffect( function() {
    async function getAllWishes() {
      const wishes = await getAll();
      setWishes(wishes);
    }
    getAllWishes();
  },[]);

  async function addWish(wish) {
    console.log(wish);
    const newWish = await createWish(wish);
    console.log(newWish);
    setWishes([...wishes, newWish])
  }

  async function deleteWishes(id) {
    const deletedWish = await deleteWish(id);
    console.log(deletedWish);
    const updatedWishes = wishes.filter(wish => wish._id !== deletedWish._id)
    setWishes(updatedWishes);
  }

  async function updateWishes(wish) {
    console.log(wish);
    const updatedWish = await updateWish(wish);
    const updatedWishes = wishes.map((w) => w._id === updatedWish._id ? updatedWish : w);
    setWishes(updatedWishes);
    navigate('/');
  }


  return (
    <main className="app-cont">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/mywishes" element={<MyWishes wishes={wishes} user={user} deleteWishes={deleteWishes} updateWishes={updateWishes} />} />
            <Route path="/" element={<Wishes wishes={wishes} user={user} deleteWishes={deleteWishes} updateWishes={updateWishes}/>} />
            <Route path="/create" element={<Create addWish={addWish} user={user} updateWishes={updateWishes} />} />
            <Route path="/:id" element={<WishCard addWish={addWish} user={user} updateWishes={updateWishes} deleteWishes={deleteWishes} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}



