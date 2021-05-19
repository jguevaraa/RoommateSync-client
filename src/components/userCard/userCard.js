import React from 'react'

import './Users.css'

function UserCard({ user, details }) {
    
    return (
        <section className='user-card' key={user.id}>
            <div className='img-card-container'>
                <img src={user.imgURL} className='user-list-img' alt='user'/>
                <p className='details-btn' onClick={details}>SEE MORE</p>
            </div>
            <div className='user-card-title'>
                <h5>{user.name}</h5>
            </div>
        </section>
    )
}

export default UserCard
