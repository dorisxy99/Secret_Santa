import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function SignUpForm({ setUser }) {
  const [credentials, setCredentials] = useState();
  const [error, setError] = useState('');

  async function handleSubmit(evt) {

    evt.preventDefault();
    console.log(evt.target.name.value)
    console.log(evt.target.email.value)
    console.log(evt.target.password.value)

    let credentials = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      password: evt.target.password.value
    }

    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.signUp(credentials);
      console.log(user);
      setUser(user);
    } catch (err) {
      console.log(err);
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <img class="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
      <h1 class="h3 mb-3 fw-normal">Create your account</h1>
      <div class="form-floating">
        <input type="text" name="name" class="form-control" id="floatingInput" placeholder="John" required />
        <label for="floatingInput">Your name</label>
      </div>
      <div class="form-floating">
        <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" name="password" class="form-control" id="floatingPassword" placeholder="Password" required />
        <label for="floatingPassword">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Create account</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
    </form>
  );
}