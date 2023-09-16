"use client";

import React from 'react'

const TaskCard = ({ toDoCardLabel, toDoCardLabelColor, toDoCardLabelDotColor, description, progressBarColor, progressBarLength }) => {

  return (
    <>
      <div className="mt-2 bg-[#211A75] p-4 rounded-xl cursor-pointer hover:ring-2">
        <div className="flex justify-between">
          <div className="">
            <span className={`text-sm ${toDoCardLabelColor} flex justify-between items-center gap-x-3`}>
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill={toDoCardLabelDotColor} />
              </svg>
              {toDoCardLabel}
            </span>
          </div>
          <div className="">
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5" />
                <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5" />
                <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="">
          <p className='text-white text-sm'>{description}</p>
        </div>
        <div className="my-4">
          <div className="w-full h-[5px] bg-[#1E1C3A] rounded-full">
            <div className={`h-full text-center text-xs text-white ${progressBarColor} rounded-full transition-width`} style={{width:`${progressBarLength}%`}}></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <svg width="90" height="36" viewBox="0 0 111 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="92.9999" cy="18" r="17" fill="#C4C4C4" stroke="#211A75" strokeWidth="2" />
            <circle cx="67.9999" cy="18" r="17" fill="#C4C4C4" stroke="#211A75" strokeWidth="2" />
            <circle cx="42.9999" cy="18" r="17" fill="#C4C4C4" stroke="#211A75" strokeWidth="2" />
            <circle cx="17.9999" cy="18" r="17" fill="#C4C4C4" stroke="#211A75" strokeWidth="2" />
          </svg>
          <div className="flex flex-row items-center gap-x-2 text-[#A5A5A5]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_340)">
                <path d="M7.99996 0.666622C6.54957 0.666622 5.13174 1.09671 3.92578 1.90251C2.71982 2.70831 1.77989 3.85362 1.22485 5.19361C0.669803 6.5336 0.524579 8.00809 0.807537 9.43062C1.0905 10.8531 1.78893 12.1598 2.81451 13.1854C3.8401 14.211 5.14677 14.9094 6.5693 15.1924C7.99183 15.4753 9.46632 15.3301 10.8063 14.7751C12.1463 14.22 13.2916 13.2801 14.0974 12.0741C14.9032 10.8682 15.3333 9.45035 15.3333 7.99996C15.331 6.05574 14.5576 4.19181 13.1829 2.81704C11.8081 1.44227 9.94418 0.668916 7.99996 0.666622ZM7.99996 14C6.81327 14 5.65324 13.6481 4.66654 12.9888C3.67985 12.3295 2.91081 11.3924 2.45669 10.2961C2.00256 9.1997 1.88374 7.9933 2.11525 6.82941C2.34676 5.66553 2.91821 4.59643 3.75732 3.75731C4.59644 2.9182 5.66553 2.34676 6.82942 2.11524C7.99331 1.88373 9.19971 2.00255 10.2961 2.45668C11.3924 2.9108 12.3295 3.67984 12.9888 4.66653C13.6481 5.65323 14 6.81327 14 7.99996C13.998 9.59066 13.3653 11.1157 12.2405 12.2405C11.1157 13.3653 9.59066 13.998 7.99996 14Z" fill="#A5A5A5" />
                <path d="M8.66671 7.72403V4.00004C8.66671 3.82323 8.59647 3.65366 8.47144 3.52863C8.34642 3.40361 8.17685 3.33337 8.00004 3.33337C7.82323 3.33337 7.65366 3.40361 7.52864 3.52863C7.40361 3.65366 7.33337 3.82323 7.33337 4.00004V8.00003C7.33341 8.17683 7.40367 8.34637 7.52871 8.47136L9.52871 10.4714C9.65444 10.5928 9.82284 10.66 9.99764 10.6585C10.1724 10.657 10.3396 10.5868 10.4633 10.4632C10.5869 10.3396 10.657 10.1724 10.6585 9.99763C10.66 9.82283 10.5928 9.65443 10.4714 9.5287L8.66671 7.72403Z" fill="#A5A5A5" />
              </g>
              <defs>
                <clipPath id="clip0_1_340">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span className='text-[10px]'>Due in 4 days</span>

          </div>
        </div>
      </div>
    </>
  )
}

export default TaskCard