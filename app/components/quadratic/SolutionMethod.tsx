import React from 'react'
import Link from 'next/link'

const SolutionMethod = () => {
  return (
      <div>
          <h2 className="text-xl font-bold mt-6">Methods of Solving Quadratic Equations</h2>

          <p className='text-lg mt-4'>There are four different methods of solving quadratic equations. These are:</p>
          <ol className="list-disc pl-6 mt-2 text-lg">
              <li>
                <Link href={`/quadratic-equations`} className="text-[#76a40b] cursor-pointer">
                  Factorization Method
                </Link>
              </li>
              <li>
              <Link href={`/quadratic-equations`} className="text-[#76a40b] cursor-pointer">
                  Completing the Square Method
                </Link>
              </li>
              <li>
              <Link href={`/quadratic-equations`} className="text-[#76a40b] cursor-pointer">
                  Formula Method
              </Link>
              </li>
              <li>
              <Link href={`/quadratic-equations`} className="text-[#76a40b] cursor-pointer">
                  Graphical Method
            </Link>
              </li>
          </ol>
      </div>
  )
}

export default SolutionMethod