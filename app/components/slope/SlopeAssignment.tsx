import React from 'react'
import Image from 'next/image'

const SlopeAssignment = () => {
  return (
    <div className='bg-[#ffffe4] shadow-lg py-4 px-3 rounded-lg mt-6 text-[#0C2D48]'>
        <h2 className="text-2xl font-bold mt-6 text-center">Practice Work</h2>
        <p className='text-lg mt-4'>Use the graph to find the slope of the lines.</p>
        <span className='font-semibold text-lg'>Question 1</span>
         <div className="flex justify-center mb-4">
                  <Image
                    src="/assignmente.jpg"
                    alt="Graph showing slope"
                    width={400}
                    height={400}
                    className="rounded-md border mt-4"
                  />
                </div>

          <span className='font-semibold text-lg '>Question 2</span>
          <div className="flex justify-center mb-4">
              <Image
                  src="/assignment.jpg"
                  alt="Graph showing slope"
                  width={400}
                  height={400}
                  className="rounded-md border mt-4"
              />
          </div>
    </div>
  )
}

export default SlopeAssignment