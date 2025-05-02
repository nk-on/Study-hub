
function Subject() {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] mt-[10%]">
       <h1>Subject</h1>
       <ul className="w-[100%] flex flex-col justify-center items-center gap-[30px]">
         <li className="w-[50%] h-[30px] bg-[#acafc0] flex justify-center cursor-pointer">Topic 1</li>
         <li className="w-[50%] h-[30px] bg-[#acafc0] flex justify-center">Topic 2</li>
         <li className="w-[50%] h-[30px] bg-[#acafc0] flex justify-center">Topic 3</li>
       </ul>
    </div>
  )
}

export default Subject
