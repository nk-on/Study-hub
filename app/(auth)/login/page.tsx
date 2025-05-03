import React from 'react'
import InputField from '../_form/inputFIeld'
export default function Login() {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
      <InputField type={'text'} id = {'name'} />
      <InputField type={'password'} id = {'password'} />
    </div>
  )
}
