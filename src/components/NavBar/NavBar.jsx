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
      <header class="p-3 mb-3 border-bottom">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <h1>Secret Santa</h1>
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
              <li><a href="/mywishes" class="nav-link px-2 link-dark">My Wishes</a></li>
              <li><a href="/create" class="nav-link px-2 link-dark">Create</a></li>
              <li><a href="" onClick={handleLogOut} class="nav-link px-2 link-dark">Log Out</a></li>
            </ul>
{/* 
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
            </form> */}
          </div>
        </div>
      </header>
      <span>Welcome, collect and share what you like {props.user.name}</span>
    {/* <nav>
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
    </nav> */}
    </>
  );
}