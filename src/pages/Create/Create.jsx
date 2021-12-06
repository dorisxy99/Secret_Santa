import React from 'react';

export default function Create() {
    return (
      <>
        <h1>Create Your Wish List</h1>
        <p>WishLists can include things you like, inspirational ideas, or gifts you'd love for a special occasion.</p>
        <div>
          <p>Copy and paste a webpage url, then click "Get Wish."</p>
          <button type="button" class="btn btn-primary input-group-right-rounded captchaV3SubmitButton">Get Wish</button>
          <p>Or, use a picture & description.</p>
          <a href="some url" target="_blank">Describe Wish</a>
        </div>
      </>
    );
  }