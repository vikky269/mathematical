import React from 'react'
import Link from 'next/link'
import Factorization from '../../components/quadratic/Factorization'


const Page = () => {
  return (
     <div className="min-h-screen mt-6 text-gray-800">
         <div className="max-w-6xl mx-auto bg-white shadow-md p-6 rounded-lg">
           <h1 className="text-3xl font-bold text-center text-[#76a40b]">Quadratic Equations</h1>
           
              
        {/* Factoring Method */}
         <Factorization />
        
      
        <div className='flex justify-between items-center'>
          <button className="mt-10">
            <Link href="/quadratic-equations" className="mt-6 px-4 py-2 bg-[#76a40b] text-white cursor-pointer rounded-md hover:bg-[#98b05ffb]">
              Prev Lesson
            </Link>
          </button>

          <button className="mt-10">
            <Link href="/quadratic-equations/part-3" className="mt-6 px-4 py-2 bg-[#76a40b] text-white cursor-pointer rounded-md hover:bg-[#98b05ffb]">
              Next Lesson
            </Link>
          </button>
        </div>
   
         </div>
   
          
       </div>
  )
}

export default Page;
