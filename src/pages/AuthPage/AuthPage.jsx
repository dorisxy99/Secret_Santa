import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1 className="Title">Welcome</h1>
      <div className="AuthPage">
        <div>
          <button onClick={() => setShowSignUp(!showSignUp)}> {showSignUp ? 'Log In' : 'Sign Up'}</button>
        </div>
        <div classNme="Form">
        { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
        }
        </div>
      </div>
    </main>
  );
}