import React from 'react'
import { subjects } from '../Subjects'
function Heading() {
  return (
    <nav className='w-[100%] py-[40px] shadow-xl'>
        <ul className='flex justify-around'>
            {
              subjects.map(element => <li key={element.subjectId}>{element.subjectName}</li>)
            }
        </ul>
    </nav>
  )
}

export default Heading
