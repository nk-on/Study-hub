import { subjects } from "@/app/Subjects"
function Subject({params}:{params:{id:string}}) {
  const id = params.id
  const subject = subjects[Number(id)]
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] mt-[10%]">
       <h1>{subject.subjectName}</h1>
       <ul className="w-[100%] flex flex-col justify-center items-center gap-[30px]">
        {
          subject.topics.map((topicName,index) => <li key={index} className="w-[50%] h-[30px] bg-[#acafc0] flex justify-center cursor-pointer">{topicName.topicName}</li>)
        }
       </ul>
    </div>
  )
}

export default Subject
