import React from 'react';
import TaskCard from './TaskCard';
import { BiPlus } from "react-icons/bi";

const InProgressListSection = () => {
  return (
    <>
      <div className="my-4">
        <div className="flex items-center justify-between p-2">
          <h1 className='text-md font-semibold text-white'>In-Progress (2)</h1>
          <div className="flex items-center justify-center">
            <button className='bg-[#6418C3] w-11 h-11 flex justify-center items-center rounded-2xl'>
              <BiPlus className='text-white' size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <TaskCard
            toDoCardLabel="Video"
            toDoCardLabelColor="text-[#5ECFFF]"
            toDoCardLabelDotColor={"#5ECFFF"}
            progressBarColor="bg-[#5ECFFF]"
            progressBarLength={85}
            description="Create sparring tutorial video for the weekly class." />

          <TaskCard
            toDoCardLabel="Bugs Fixing"
            toDoCardLabelColor="text-[#FF4A55]"
            toDoCardLabelDotColor={"#FF4A55"}
            progressBarColor="bg-[#FF4A55]"
            progressBarLength={92}
            description="Payment gateway needs reauthorization." />
        </div>
      </div>
    </>
  )
}

export default InProgressListSection