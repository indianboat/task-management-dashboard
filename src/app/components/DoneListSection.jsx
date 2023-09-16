import React from 'react';
import { BiPlus } from "react-icons/bi";
import TaskCard from './TaskCard';

const DoneListSection = () => {
  return (
    <>
      <div className="my-4">
        <div className="flex items-center justify-between p-2">
          <h1 className='text-md font-semibold text-white'>Done (3)</h1>
          <div className="flex items-center justify-center">
            <button className='bg-[#6418C3] w-11 h-11 flex justify-center items-center rounded-2xl'>
              <BiPlus className='text-white' size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <TaskCard
            toDoCardLabel="Bugs Fixing"
            toDoCardLabelColor="text-[#FF4A55]"
            toDoCardLabelDotColor={"#FF4A55"}
            progressBarColor="bg-[#FF4A55]"
            progressBarLength={100}
            description="Action Button needed for Google Maps visits."/>

          <TaskCard
            toDoCardLabel="Database"
            toDoCardLabelColor="text-[#38E25D]"
            toDoCardLabelDotColor={"#38E25D"}
            progressBarColor="bg-[#38E25D]"
            progressBarLength={100}
            description="Update new instructor photos."/>

          <TaskCard
            toDoCardLabel="Instructor Meeting"
            toDoCardLabelColor="text-[#E328AF]"
            toDoCardLabelDotColor={"#E328AF"}
            progressBarColor="bg-[#E328AF]"
            progressBarLength={100}
            description="Review/correct yellow belt techniques." />
        </div>
      </div>
    </>
  )
}

export default DoneListSection