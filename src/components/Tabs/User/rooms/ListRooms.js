import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios";
import useToken from '../../../useToken'

export default function ListRooms() {

    const[rooms,setRooms]=useState(null)
    
    const[open,setOpen]=useState(false)
    let token=useToken().token

    useEffect(()=>{
  
if(open){

}   function getRoomsByUser(){
    axios.get('http://localhost:3300/api/secret/getRoomsByUser', {
      headers: {
        'Authorization': `token ${token}`
      }
    })
    .then((res) => {
      // console.log(res.data)
      // pepolesList=res.data
      setRooms(res.data)
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
    })
  
  
  }
  
  getRoomsByUser()
     
        
       },[open])
     
       let listElement
if (rooms!==null) {
    listElement=rooms.map(room=>(
        <div>wwww {room.name}</div>

    ))
}
else {
    listElement=<h3>aa</h3>

}

if (!open) {
    return <button onClick={()=>{
        setOpen(true)
    }} >הביקורות שלי</button>
}
  return(
    <div> jsrho
{listElement}


<button onClick={()=>{
        setOpen(false)
    }} >סגור</button>
    </div>
  );
}