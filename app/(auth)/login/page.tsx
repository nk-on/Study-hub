import React from 'react'

export default function Login() {
  return (
    <div>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id = "name" />
      </div>
      <div>
        <label htmlFor='passsword'>Password</label>
        <input type='password' id='password'/>
      </div>
    </div>
  )
}
