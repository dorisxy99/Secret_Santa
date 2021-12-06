import React from 'react';
// import { checkToken } from '../../utilities/users-service';
import { useState } from 'react';
import { createWish } from '../../utilities/wishes-api';
import { useNavigate } from 'react-router-dom';



export default function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    pictures:'',
    URL:'',
  });

async function handleChange(evt) {
  let newFormData = {};
  if (evt.target.files) {
    newFormData = {...formData, URL: Buffer.from(evt.target.files[0]).toString('base64')};
  } else{
      newFormData = {...formData, [evt.target.name]:evt.target.value};
    }
    setFormData(newFormData);
}



async function handleSubmmit(evt) {
  evt.preventDefault();
  await createWish(formData);
  console.log(formData);
  navigate('/');
  // const results = await coffeeAPI.create();
  // addNewDrink()
}

  return (
    <div>
    <form action="submit">

      <label>Name</label>
        <input 
        value={formData.name}
        onChange={handleChange}  
        type="text"
        name="name"/>
      <br/>
      <label>Description</label>
        <input 
        value={formData.description}
        onChange={handleChange} 
        type="text"
        name="description"/>
      <br/>
      <label>Pictures</label>
        <input 
        value={formData.pictures}
        onChange={handleChange} 
        type="file"
        name="pictures"/>
      <br/>
      <label>URL</label>
        <input 
        value={formData.URL}
        onChange={handleChange} 
        type="text"
        name="URL"/>
      <br/>
      <button 
      type="submit" 
      onClick={handleSubmmit}>Save your wish</button>
    </form>
    </div>
  );
}

// export default function Create() {
//     return (
//       <>
//         <h1>Create Your Wish List</h1>
//         <p>WishLists can include things you like, inspirational ideas, or gifts you'd love for a special occasion.</p>
//         <div>
//           <p>Copy and paste a webpage url, then click "Get Wish."</p>
//           <button type="button" class="btn btn-primary input-group-right-rounded captchaV3SubmitButton">Get Wish</button>
//           <p>Or, use a picture & description.</p>
//           <a href="some url" target="_blank">Describe Wish</a>
//         </div>
//       </>
//     );
//   }