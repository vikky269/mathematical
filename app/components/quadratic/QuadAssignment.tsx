"use client"
import React from 'react'
import { MathJax } from "better-react-mathjax";

export const QuadAssignment = () => {
  return (
    <div className='bg-[#ffffe4] shadow-lg py-4 px-3 rounded-lg mt-6'>
        <h2 className="text-2xl font-bold mt-6">Practice Work</h2>
        <p className='text-lg mt-4'>Solve the following quadratic equations using the factorization method:</p>
        <ol className="list-disc pl-6 mt-2 text-lg">
            
              <li className="mt-6 text-xl"> 
                     <MathJax inline>{"\\( x^2 - 5x + 6 = 0 \\)"}</MathJax>
              </li>
              
              <li className="mt-6 text-xl">
                   <MathJax inline>{"\\( 6x^2 - 7x -5 = 0 \\)"}</MathJax>
              </li>
        </ol>
        <p className='text-lg mt-4'>Solve the following quadratic equations using the completing the square method:</p>

        <ol className="list-disc pl-6 mt-2 text-lg">
            
              <li className="mt-6 text-xl">
                     <MathJax inline>{"\\( 2x^2 - 3x -5 = 0 \\)"}</MathJax>
              </li>
            
            <li className="mt-6 text-xl">
                     <MathJax inline>{"\\( x^2 - 6x + 5 = 0 \\)"}</MathJax>
            </li>
        </ol>
    </div>
  )
}

