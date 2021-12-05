
import { useState } from 'react'
import Login from './users/Login'
import axios from 'axios'

import {User} from 'react-feather'






export default function Gust({ setToken } ) {
const [opeLogin, setOpenLogin]=useState(false)



// axios.get('http://localhost:3300/h ', { // http://www.demoapp.com/user_data
     
// })
// .then((response) => { 
//     console.log(response);
// })
// .catch((error) => {

// });

   if (opeLogin) {
    return<><a onClick={()=>setOpenLogin(false)}>אורחים</a>
    <Login setToken ={ setToken } /></>
 }
  
 else{

    return(
        <div>
<div style={navStyle}>
<a  onClick={()=>setOpenLogin(true)}><User style={round} /></a>
</div>

        <h1>  אורחים
            </h1>
         </div>
        
    )

}
}
const navStyle = {
  boxSizing: "border-box",
  width: "100%",
  height: 102,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "8px 16px 8px 16px",
  backgroundColor: "#e5eaeb",
  overflow: "visible",
}

const round = {
    display: "flex",
    flexShrink: 0,
    width: 50,
    height: 50,
    backgroundColor: "#fcfcfc",
    overflow: "visible",
    borderRadius:' 50%',
    display: 'inline-block'  }