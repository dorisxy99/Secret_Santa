import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Create/Create.css';

export default function Create({ wish, addWish, user, updateWishes, setShowForm }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(wish ? wish : {
    name: '',
    description: '',
    URL: '',
    imageURL: ''
  });

  async function handleChange(evt) {
    let newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData)

    if (wish) {
      updateWishes(formData);
    } else {
      addWish(formData);
    }
    if (setShowForm) setShowForm(false);
    navigate('/');
  }

  return (
    <div class="col">
      <div class="">
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Wish title</label>
              <input type="text" value={formData.name} onChange={handleChange} name="name" class="form-control" id="exampleFormControlInput1" placeholder="My beautiful wish" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Description</label>
              <textarea value={formData.description} onChange={handleChange} name="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Link URL</label>
              <input type="url" value={formData.URL} onChange={handleChange} class="form-control" name="URL" id="exampleFormControlInput1" placeholder="https://amazon.com/item" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Image URL</label>
              <input type="url" value={formData.imageURL} onChange={handleChange} class="form-control" name="imageURL" id="exampleFormControlInput1" placeholder="https://image.com" />
            </div>
            <button class="btn btn-primary" type="submit" >Save your wish</button>

          </form>
        </div>
      </div>
    </div>
  );
}
