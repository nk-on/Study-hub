import React from 'react'
import { subjects } from '../Subjects'
function Heading() {
  return (
    <nav className='w-[100%] py-[40px] shadow-xl'>
        <ul className='flex justify-around'>
            {
              subjects.map(element => <li key={element.subjectId}  className='cursor-pointer'>{element.subjectName}</li>)
            }
            <li>Log in</li>
            <li>Register</li>
        </ul>
    </nav>
  )
}

export default Heading
