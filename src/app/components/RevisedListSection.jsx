import React from 'react';
import { BiPlus } from "react-icons/bi";
import TaskCard from './TaskCard';

const RevisedListSection = () => {
  return (
    <>
      <div className="my-4">
        <div className="flex items-center justify-between p-2">
          <h1 className='text-md font-semibold text-white'>Revised (0)</h1>
          <div className="flex items-center justify-center">
            <button className='bg-[#6418C3] w-11 h-11 flex justify-center items-center rounded-2xl'>
              <BiPlus className='text-white' size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
        <div className="mt-2 bg-[#211A75] p-4 rounded-xl cursor-pointer hover:ring-2">
          <p className='border-2 border-dotted bg-[#15132B] p-4 text-[#7879F1] text-center rounded-xl'>Move card here</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default RevisedListSection