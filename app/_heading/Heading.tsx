import React from "react";
import { subjects } from "../Subjects";
import Link from "next/link";
function Heading() {
  return (
    <nav className="w-[100%] py-[40px] shadow-xl">
      <ul className="flex justify-around">
        {subjects.map((element) => (
          <li key={element.subjectId} className="cursor-pointer">
            <Link href={"subject"}>{element.subjectName}</Link>
          </li>
        ))}
        <Link href={'login'}><li>Log in</li></Link>
        <Link href={'register'}>Register</Link>
      </ul>
    </nav>
  );
}

export default Heading;
