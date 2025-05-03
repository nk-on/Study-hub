import React from 'react'
import InputField from '../_form/inputFIeld'
export default function Register() {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
      <InputField type='text' id = 'name'/>
      <InputField type={'password'} id = {'password'} />
      <InputField type={'password'} id = {'reapeat password'} />
    </div>
  )
}
