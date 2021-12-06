import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div class="form-signin">
       {showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
        }
        <a onClick={() => setShowSignUp(!showSignUp)}> {showSignUp ? 'Log In' : 'Sign Up'}</a>

    </div>
    // <main>
    //   <h1 className="Title">Welcome</h1>
    //   <div className="AuthPage">
    //     <div>
    //     </div>
    //     <div classNme="Form">
    //     { showSignUp ?
    //       <SignUpForm setUser={setUser} />
    //       :
    //       <LoginForm setUser={setUser} />
    //     }
    //     </div>
    //   </div>
    // </main>
  );
}