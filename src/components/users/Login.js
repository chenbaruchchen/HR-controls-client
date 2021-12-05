 
import './users.css'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
 import Singin from './Signin'
 import set_users from '../scripts/setUser'
async function loginUser(credentials) {
    return fetch('http://localhost:3300/api/users/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json()
  )
  
}

export default function Login({ setToken }) {

  const [openRegister,setOpenRegister]=useState(false)
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
        email,
      password
    });
    setToken(token)
      set_users(email)
    
  }

  if (openRegister) {
    return(
      <Singin setOpenRegister={setOpenRegister}/>
    )
  }
  return(
    <div className='stack'>
      <h1>התחברות</h1>
            
          <input className='round' placeholder='abcde@mail.com' type="text" onChange={e => setUserName(e.target.value)} />
       
        
          <input className='round' placeholder='password'  type="password" onChange={e => setPassword(e.target.value)} />
           <div onClick={handleSubmit} className='button' style={submitStyle} type="submit">התחברות</div>
        
 

      <a  onClick={()=>setOpenRegister(true)}>לעמוד הרשמה</a>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

const stack = {
  width: 301,
  height: 419,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  overflow: "visible",
}

const inputStyle = {
  margin:10,
  flexShrink: 0,
  width: 240,
  height: 40,
  // boxShadow: "1px 2px 2px 1px rgba(0, 0, 0, 0.25)",
  // overflow: "visible",
  borderRadius: 13,
}

const submitStyle = {
  boxSizing: "border-box",
  width: 122,
  height: 27,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "0px 16px 0px 16px",
   overflow: "visible",
  borderRadius: 18,
}