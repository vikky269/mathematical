"use client";

import Link from 'next/link'
import React from 'react'



const Nav = () => {

    
  return (
      <>
          <nav className='bg-[#76a40b] text-white flex justify-center items-center'>
              <ul className='flex justify-center gap-4 md:gap-8 items-center p-8'>
                  <Link className='relative pb-1 after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full' href={"/"}>Home</Link>
                  <Link className='relative pb-1 after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full' href={"/"}>Lessons</Link>
                  <Link className='relative pb-1 after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full' href={"/quizzes"}>Quizzes</Link>
                  <Link className='relative pb-1 after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full' href={"/About"}>About</Link>
              </ul>
          </nav>

         
      </>
  )
}

export default Nav