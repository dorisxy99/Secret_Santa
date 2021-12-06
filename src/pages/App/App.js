import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Wishes from '../Wishes/Wishes';
import MyWishes from '../MyWishes/MyWishes';
import Create from '../Create/Create';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [wishes, setWishes] = useState([]);
  return (
    <main className="app-cont">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/wishes/mywishes" element={<MyWishes />} />
            <Route path="/wishes" element={<Wishes />} />
            <Route path="/create/create" element={<Create />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
