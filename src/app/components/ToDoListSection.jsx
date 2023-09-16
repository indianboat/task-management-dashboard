import React from 'react';
import { BiPlus } from "react-icons/bi";
import TaskCard from './TaskCard';


const ToDoListSection = () => {
  return (
    <>
      <div className="my-4">
        <div className="flex items-center justify-between p-2">
          <h1 className='text-md font-semibold text-white'>To-Do List (24)</h1>
          <div className="flex items-center justify-center">
            <button className='bg-[#6418C3] w-11 h-11 flex justify-center items-center rounded-2xl'>
              <BiPlus className='text-white' size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">


          <TaskCard
            toDoCardLabel="Important"
            toDoCardLabelColor="text-[#FFAB2D]"
            progressBarColor="bg-[#FFAB2D]"
            progressBarLength={25}
            toDoCardLabelDotColor={"#FFAB2D"}
            description="Create sign up sheet for holiday student/parent conferences." />



          <TaskCard
            toDoCardLabel="Instructor Meeting"
            toDoCardLabelColor="text-[#E328AF]"
            progressBarColor="bg-[#E328AF]"
            progressBarLength={40}
            toDoCardLabelDotColor={"#E328AF"}
            description="Plan holiday demonstration program. Create outline." />

          <TaskCard
            toDoCardLabel="Database"
            toDoCardLabelColor="text-[#38E25D]"
            progressBarColor="bg-[#38E25D]"
            progressBarLength={18}
            toDoCardLabelDotColor={"#38E25D"}
            description="Determine how many boards need to be ordered for testing and demo." />
        </div>
      </div>
    </>
  )
}

export default ToDoListSection