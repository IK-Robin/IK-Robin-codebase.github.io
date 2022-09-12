import React from 'react'
import { Link } from 'react-router-dom'
import users from './userData'

function UserPage() {
// Getting the userId from match props and display the user from the users array

  return (
<>
    <h1> UserPage</h1>
    <div>
      {
        users.map((user,index) => {
          
          return (
            <h5 key={index}>
              <Link to={`/UserDetail/${index + 1} `} > {user.name}</Link>
            </h5>
          )
        }) 
      }
    </div>

    
</>
  )
}

export default UserPage 