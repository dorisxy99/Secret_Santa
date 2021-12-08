import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Create({ wish, addWish, user, updateWishes, setShowForm }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(wish ? wish : {
    name: '',
    description: '',
    URL: '',
  });

  async function handleChange(evt) {
    let newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }



  async function handleSubmit(evt) {
    evt.preventDefault();
    if (wish) {
      updateWishes(formData);
    } else {
      addWish(formData);
    }
    if (setShowForm) setShowForm(false);
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name" />
        <br />
        <label>Description</label>
        <input
          value={formData.description}
          onChange={handleChange}
          type="text"
          name="description" />
        <br />
        <label>Pictures</label>
        <input
          value={formData.pictures}
          onChange={handleChange}
          type="file"
          name="pictures" />
        <br />
        <label>URL</label>
        <input
          value={formData.URL}
          onChange={handleChange}
          type="url"
          name="URL" />
        <br />
        <button
          type="submit"
        >Save your wish</button>
      </form>
    </div>
  );
}
