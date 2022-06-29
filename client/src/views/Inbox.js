import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Inbox() {
  const {user} = useContext(AuthContext);


  return (
    <>
      <div>Inbox</div>
      {{user} ? <p>{`Welcome ${user.nickname}`}</p> : " please log in to see your inbox"}
    </>
  )
}

export default Inbox