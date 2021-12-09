import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState();
  const [error, setError] = useState('');

  async function handleSubmit(evt) {

    evt.preventDefault();
    console.log(evt.target.email.value)
    console.log(evt.target.password.value)
    let credentials = {
      email: evt.target.email.value,
      password: evt.target.password.value
    }
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      console.log(user);
      setUser(user);
    } catch(err) {
      console.log(err);
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <img src="/logo-santa.svg" style={{width: "240px", marginBottom: "20px" }} alt="" />
      <h1 class="h3 mb-3 fw-normal">Log In Here!</h1>
      <div class="form-floating">
        <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" name="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
        <label for="floatingPassword">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Log In</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
    </form>
  );
}