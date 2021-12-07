import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Wishes from '../Wishes/Wishes';
import MyWishes from '../MyWishes/MyWishes';
import Create from '../Create/Create';
import {createWish, getAll} from '../../utilities/wishes-api';
import NavBar from '../../components/NavBar/NavBar';
import { useEffect } from 'react';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [wishes, setWishes] = useState([]);

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
  return (
    <main className="app-cont">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/mywishes" element={<MyWishes wishes={wishes} user={user} />} />
            <Route path="/" element={<Wishes wishes={wishes} />} />
            <Route path="/create" element={<Create addWish={addWish} user={user} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


