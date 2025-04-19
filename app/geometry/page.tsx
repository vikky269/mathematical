import React from 'react'
import SlopeCard from '../components/slope/SlopeCard'
//import SlopeCalculator from '../components/slope/SlopeCalculator'
import SlopeTypes from '../components/slope/SlopeTypes'
import Link from 'next/link'
import SlopeExample from '../components/slope/SlopeExample'
import SlopeExampleTwo from '../components/slope/SlopeExample2'
import SlopeCalculator from '../components/slope/SlopeCalculator2'
import SlopeCalculatorWithChart from '../components/slope/SlopeWithChart'
import SlopeAssignment from '../components/slope/SlopeAssignment'

const page = () => {
  return (
    <section className="min-h-screen mt-2 text-gray-800 ">
        <div className="max-w-6xl mx-auto py-6 rounded-lg overflow-x-hidden overflow-y-hidden">
            <h1 className="text-3xl font-bold text-center text-[#76a40b] uppercase">Slopes</h1>
        
             <p className="text-lg md:text-xl font-medium text-center mt-4">
             Slope in math is kind of like what we think of in real life—it tells us how steep something is. 
             In math, slope shows how slanted a line is and which way it's going. Just by looking at a line on a graph, 
             you can tell how steep it is and compare it to other lines nearby.
             </p>
            <SlopeCard />

              <div className='flex flex-col items-center justify-center mt-8'>
                  <h2 className='text-2xl font-bold mb-4  text-[#76a40b] uppercase'>Slope Types</h2>
                  {/* <p className='text-lg mb-4'>Learn about different types of slopes.</p> */}
                  <SlopeTypes />
              </div>

             <SlopeExample />

             <SlopeExampleTwo />

              <SlopeCalculatorWithChart />
        </div>


        <SlopeAssignment />
        
          <div className='md:flex-row flex flex-col justify-between items-center'>
              <button className="mt-10 block">
                  <Link href="/quizzes/geometry" className="mt-6 px-4 py-2 bg-[#0C2D48] text-white cursor-pointer rounded-md hover:bg-[#1e2735]">
                      Take quiz
                  </Link>
              </button>

              <button className="mt-10 block">
                  <Link href="/geometry/quadilaterals" className="mt-6 px-4 py-2 bg-[#0C2D48] text-white cursor-pointer rounded-md hover:bg-[#1e2735]">
                        Next Lesson: Quadrilaterals
                  </Link>
              </button>
          </div>
       
    </section>
  )
}

export default page






