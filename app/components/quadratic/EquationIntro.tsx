"use client"
import { MathJax } from "better-react-mathjax"
import React from 'react'

export const EquationIntro = () => {
  return (
    <div>
        <p className="mt-4 text-lg">
          A quadratic equation is a second-degree polynomial equation in a single variable x.
        </p>
        <p className='mt-4 text-lg'>It can also be seen as a mathematical expression in which the highest exponent of the variable is 2. 
          It has a standard form;  </p>
        <div className="text-center my-4 font-semibold text-xl"><MathJax inline>{"\\( ax^2 + bx + c = 0 \\)"}</MathJax></div>
        <p className='mt-4 text-lg'>Where a, b and c are constants and</p>
        <p className='mt-4 text-lg'>a≠0 (because if a=0  it becomes a linear equation). </p>
    </div>
  )
}
