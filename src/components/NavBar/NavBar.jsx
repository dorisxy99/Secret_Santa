import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <>
    <h1>Secret Santa</h1>
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/search">Search</Link>
      &nbsp; | &nbsp;
      <Link to="/mywishes">My Wishes</Link>
      &nbsp; | &nbsp;
      <Link to="/create">Create</Link>
      &nbsp; | &nbsp;
      <span>Welcome, collect and share what you like {props.user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    </>
  );
}