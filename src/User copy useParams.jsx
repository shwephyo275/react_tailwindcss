import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  //Get parameter frm link 
    const { userId } = useParams();

    // console.log(userId);
  return (
    <div>User : {userId}</div>
  )
}

export default User
