import React from 'react'
interface InputField {
    type:string,
    id:string
}
export default function InputField({type,id}:InputField) {
  return (
    <div>
      <div className='flex flex-col'>
        <label htmlFor='name'>{id}</label>
        <input type={type} id ={id} className='border border-[#63919c] w-[200px]' />
      </div>
    </div>
  )
}
