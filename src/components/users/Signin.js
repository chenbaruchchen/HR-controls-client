 

import React, { useState } from 'react';
import PropTypes from 'prop-types';
   import './users.css'
async function registerUser(credentials) {
    return fetch('http://localhost:3300/api/users/register', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Singin(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [username, setUserName] = useState();

   const handleSubmit = async e => {
    e.preventDefault();
    const token = await registerUser({
        email,
      password,username
    }).then(e=>console.log(e)).catch(e=>console.log(e))
     
  }

  return(
    <div className="stack">
      <h1>הרשמה</h1>
     
    
          <input  placeholder='user-name'   className="round" type="text" onChange={e => setUserName(e.target.value)} />
       
          <input placeholder='abcd@mail.com' className="round" type="text" onChange={e => setEmail(e.target.value)} />
         
         
          <input placeholder='password' className="round" type="password" onChange={e => setPassword(e.target.value)} />
         
          <div onClick={handleSubmit} className="button" type="submit">הרשמה</div>
       
       
      <a onClick={()=>props.setOpenRegister(false)}>התחברות</a>
    </div>
  )
}
 