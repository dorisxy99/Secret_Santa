import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Create from '../../pages/Create/Create';



export default function WishCard({wish, user, deleteWishes, updateWishes}) {
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();
    
    function handleDelete(id) {
        deleteWishes(id);
        navigate('/');
        console.log("id: ", id);
    }
    
    function handleUpdate(id) {
        setShowForm(true);
    }

  return (
    <div style={{border:"1px solid grey"}}>
    {showForm && <Create wish={wish} user={user} updateWishes={updateWishes} />}
        {!showForm && <div>
        <p>{wish.name}</p>
        <p>{wish.description}</p>
        <a href={wish.URL} target="_blank">Link to the wish!</a>
        <button onClick={() => handleDelete(wish._id)}> delete your wish </button>
        <button onClick={() => handleUpdate()}> update your wish </button>
        </div>}
    </div>
)}
