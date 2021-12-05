import React from 'react';
import Logout from './Logout';
import ListRooms from './rooms/ListRooms';
export default function Dashboard() {
  return(
  <div>

      <Logout/>
      <h2>user</h2>

<ListRooms/>
  </div>
   
  );
}