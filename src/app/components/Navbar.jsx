"use client";

import React from 'react';
import Search from './Search';
import Link from 'next/link';
import NavIcons from './NavIcons';
import Select from './Select';
import { CgCloseO } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Drawer from './Drawer';

const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);

  const drawerHandler = () => {
    toggleOpen(!isOpen);
  };

  const drawerVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: "0%" },
  };

  const handleLinkClick = () => {
    if (isOpen) {
      drawerHandler();
    }
  };


  return (
    <>
      <nav className='w-full mx-auto py-3 px-4 bg-[#15132B]'>
        <div className="flex items-center justify-between gap-x-4">

          <div className="lg:flex md:flex sm:flex flex">
            <button onClick={drawerHandler}><HiOutlineMenu className='text-[#7879F1]' size={24} /></button>
          </div>

          <div className="lg:flex md:flex sm:flex flex">
            <Search />
          </div>

          <div className="flex items-center gap-x-4">
            <div className="lg:flex md:hidden sm:hidden hidden">
              <Link href="/" className='uppercase underline text-[#6418C3] font-medium'>other menus</Link>
            </div>


            <div className="flex-row justify-center items-center p-0 m-0 xl:flex lg:hidden md:hidden sm:hidden hidden">
              <NavIcons />
            </div>

            <div className="flex flex-row justify-center items-center p-0 m-0">
              <div className="lg:flex md:hidden sm:hidden hidden rounded-full px-4 items-center gap-x-4 py-4 bg-[#211A75]">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1674_13)">
                    <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#F0F0F0" />
                    <path d="M13.3913 14H28C28 12.7364 27.8316 11.5122 27.5177 10.3478H13.3913V14Z" fill="#D80027" />
                    <path d="M13.3913 6.69571H25.9452C25.0882 5.29724 23.9924 4.06114 22.7148 3.04352H13.3913V6.69571Z" fill="#D80027" />
                    <path d="M14 28.0001C17.2949 28.0001 20.3233 26.8613 22.7148 24.9567H5.28522C7.6767 26.8613 10.7051 28.0001 14 28.0001Z" fill="#D80027" />
                    <path d="M2.05484 21.3044H25.9452C26.6332 20.1817 27.1668 18.9545 27.5177 17.6522H0.4823C0.83323 18.9545 1.36682 20.1817 2.05484 21.3044Z" fill="#D80027" />
                    <path d="M6.48506 2.1863H7.76087L6.57415 3.04845L7.02745 4.44347L5.84079 3.58132L4.65412 4.44347L5.04569 3.23832C4.00083 4.10867 3.08503 5.12838 2.33034 6.26456H2.73913L1.98373 6.81335C1.86605 7.00968 1.75317 7.20912 1.645 7.41152L2.00572 8.52173L1.33273 8.03277C1.16545 8.3872 1.01243 8.74962 0.874891 9.11958L1.2723 10.3428H2.73913L1.55241 11.205L2.00572 12.6L0.819055 11.7379L0.108227 12.2543C0.0370781 12.8262 0 13.4088 0 14H14C14 6.26806 14 5.35653 14 0C11.2343 0 8.65621 0.802266 6.48506 2.1863ZM7.02745 12.6L5.84079 11.7379L4.65412 12.6L5.10743 11.205L3.92071 10.3428H5.38754L5.84079 8.94781L6.29404 10.3428H7.76087L6.57415 11.205L7.02745 12.6ZM6.57415 7.12671L7.02745 8.52173L5.84079 7.65959L4.65412 8.52173L5.10743 7.12671L3.92071 6.26456H5.38754L5.84079 4.86954L6.29404 6.26456H7.76087L6.57415 7.12671ZM12.0492 12.6L10.8625 11.7379L9.67586 12.6L10.1292 11.205L8.94244 10.3428H10.4093L10.8625 8.94781L11.3158 10.3428H12.7826L11.5959 11.205L12.0492 12.6ZM11.5959 7.12671L12.0492 8.52173L10.8625 7.65959L9.67586 8.52173L10.1292 7.12671L8.94244 6.26456H10.4093L10.8625 4.86954L11.3158 6.26456H12.7826L11.5959 7.12671ZM11.5959 3.04845L12.0492 4.44347L10.8625 3.58132L9.67586 4.44347L10.1292 3.04845L8.94244 2.1863H10.4093L10.8625 0.791273L11.3158 2.1863H12.7826L11.5959 3.04845Z" fill="#0052B4" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1674_13">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <Select options={['English', 'Spanish', 'French', 'German']} />
                <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H15L7.5 8L0 0Z" fill="#6418C3" />
                </svg>
              </div>

              <div className="px-6 lg:flex md:hidden sm:hidden hidden">
                <svg width="1" height="56" viewBox="0 0 1 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="1" height="56" rx="0.5" fill="#1E1C3A" />
                </svg>
              </div>
            </div>

            <div className="items-center gap-x-6 lg:flex md:hidden sm:hidden hidden">
              <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="57" height="57" rx="14" fill="#C4C4C4" />
              </svg>
              <div className="flex flex-col gap-y-1 cursor-pointer">
                <p className='text-white font-semibold'>Instructor Day</p>
                <p className='text-[#7879F1]'>Super Admin</p>
              </div>
              <div className="ps-2">
                <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H15L7.5 8L0 0Z" fill="#6418C3" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={drawerVariants}
              className="fixed z-50 bg-[#15132B] overflow-auto h-screen lg:w-72 md:w-64 sm:w-60 w-52 inset-0"
            >
              <div className="flex justify-between items-center p-5">
                <span className="text-lg font-light text-white">weframetech</span>
                <button
                  onClick={() => toggleOpen()}
                  className="rounded-lg p-1"
                >
                  <CgCloseO className='text-[#7879F1]' size={24} />

                </button>
              </div>
              {
                <Drawer handleLinkClick={handleLinkClick} />
              }
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleOpen()}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar