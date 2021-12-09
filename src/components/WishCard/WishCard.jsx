import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Create from '../../pages/Create/Create';
import Moment from 'moment';



export default function WishCard({ wish, user, deleteWishes, updateWishes }) {
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
        <>
            <div className="col-4">
                {!showForm &&
                    <div class="card" >
                        {/* condition (Boolean) ? if true ? if false */}
                        <img src={wish.imageURL ? wish.imageURL : "https://i.imgur.com/DeHuUqf.png" } class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{wish.name}</h5>
                            <p>Wished by {wish.userName}. Posted { Moment(wish.createdAt, "YYYYMMDD").fromNow()} </p>
                            <p class="card-text">{wish.description}</p>
                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                <a href={wish.URL} className="btn btn-primary">Open Link</a>
                                {user.name == wish.userName ?
                                    <>
                                        <button onClick={() => handleUpdate()} type="button" class="btn btn-outline-primary">Update</button>
                                        <button onClick={() => handleDelete(wish._id)} type="button" class="btn btn-outline-primary">Delete</button>
                                    </>
                                    :null
                                }
                            
                            </div>
                        </div>
                    </div>
                }
                {showForm && <Create wish={wish} user={user} updateWishes={updateWishes} setShowForm={setShowForm} />}

            </div>
        </>
    )
}
