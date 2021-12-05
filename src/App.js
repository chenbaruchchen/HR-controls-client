import {React,useState} from 'react';
 
import './App.css'
  import useToken from './components/useToken';
import Login from './components/users/Login';

import Gust from './components/Gust'
import Tabs from './components/Tabs'
import UserTab from './components/Tabs/User/User'

function App() {
const [tab,setTab]=useState(UserTab)
  const { token, setToken } = useToken();

 
  if(!token) {
    return <Gust setToken={setToken} />
  }

  return (
    <div className="wrapper">
      
      <Tabs setTab={setTab} />
      <h1>Application</h1>

      {tab}
     
    </div>
  );
}

export default App;