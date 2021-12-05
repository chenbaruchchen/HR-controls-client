import axios from "axios";
import { useState, useEffect } from "react";
import {UserPlus,UserMinus} from 'react-feather'
import './listUsers.css'
import useToken from '../../useToken'
 const list = {
   padiing:20,
    boxSizing: "border-box",
    width: "80%",
    minHeight: '80vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
      overflow: "scroll",
  }

  let itemStyle = {
    boxSizing: "border-box",
    width: "80%",
    flexShrink: 0,
     display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    margin:10
  }
  const button = {
    flex: 1,
    padding:5,
    width: '100px',
    height: "100%",
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    overflow: "visible",
    borderRadius: 50,
  }
  let pepolesList=[{name:'chen'},{name:'or'},{name:'tamar'}]

  export default function List() {
const [pepoles, setPepoles]=useState(pepolesList)
let token=useToken().token
 useEffect(()=>{
  

  function getUsers(){
    axios.get('http://localhost:3300/api/secret/getUsers', {
      headers: {
        'Authorization': `token ${token}`
      }
    })
    .then((res) => {
      console.log(res.data)
      pepolesList=res.data
      setPepoles(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
  
  
  }
  
  getUsers()
  
 },[])


let chosen=[]

function updateChosen(pepole, type){
  
  if (type==='add') {
    let chosenHelp=[...chosen]
  chosenHelp.push(pepole)
  chosen= chosenHelp
 
  } else {

    /////remove obj by value from arr

    for( var i = 0; i < chosen.length; i++){ 
    
        if ( chosen[i] === pepole) { 
    
          chosen.splice(i, 1); 
        }
    
    }

  }
  
}
console.log(chosen)

function addRoom(){
console.log(chosen)
  axios.post('http://localhost:3300/api/secret/createRoom', chosen, {
    headers: {
      'Authorization': `token ${token}`
    }
  })
  .then((res) => {
    console.log(res)
  
  })
  .catch((error) => {
    console.error(error)
  })


}

let pepolesListItems=pepoles.map((pepole)=>(
  <Pepole updateChosen={updateChosen} pepole={pepole} />
))
    return(
<div style={list}>
  <h4>בחירת משתתפים</h4>
{pepolesListItems}


<a style={button} onClick={()=>addRoom()}>צור</a>
</div>    );
  }
 
 function Pepole(props) {
    
const [isChosen,setIsChosen]=useState(false)

let classname='itemStyle'

if (isChosen) {
  classname='itemStyle green'

 props.updateChosen(props.pepole, 'add')
} else {
  classname='itemStyle red'

  props.updateChosen(props.pepole, 'remove')
}
let Element=<div className={classname} style={itemStyle}>
<UserPlus onClick={()=> setIsChosen(true)} />
 {props.pepole.username}
 <UserMinus onClick={()=> setIsChosen(false)} />
 </div>
return(
  <>{Element}</>
    )
  }

