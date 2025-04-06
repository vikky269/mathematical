import React from 'react'
import { MathJax } from 'better-react-mathjax';

const AlmightyFormular = () => {
  return (
      <div className="mt-16">
          <h3 className="text-2xl font-bold mb-1">Method 3: Quadratic Formula</h3>
          <p className="text-lg">
              The Quadratic Formula is used when a quadratic equation cannot be easily factored. The formula is given by:
          </p>
          <div className="text-3xl cursor-pointer text-center mt-4 bg-[#0C2D48]  text-white font-bold py-2 md:px-12 rounded-lg md:w-fit mx-auto">
              <MathJax>{"\\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\)"}</MathJax>
          </div>
          <p className="text-lg mt-4">Where a, b, and c are the coefficients of the quadratic equation.</p>

          <h3 className="mt-4 text-xl">
              <span className="font-bold">Example:</span>  <span className='font-bold'>Solve{" "}</span>
              <MathJax inline className='font-bold'>{"\\( 2x^2 + 3x  = 5 \\)"}</MathJax>
          </h3>

          <h3 className="mt-4 text-xl">
              <span className="font-bold">Recall</span>  {" "}
              <MathJax inline className='font-bold'>{"\\( ax^2 + bx  = -c \\)"}</MathJax>
          </h3>

          <h3 className="mt-4 text-xl">
              <span className="font-bold">Rearrange</span>  {" "}
              <MathJax inline className='font-bold'>{"\\( 2x^2 + 3x - 5 = 0 \\)"}</MathJax>
          </h3>
          
          <p className='text-xl mt-4'>
                <span className="font-semibold">By comparison</span>  {" "}
                <MathJax inline className='font-bold'>{"\\( a = 2, b = 3, c = -5 \\)"}</MathJax>
          </p>

          <p className='text-xl mt-4'>
                <span className="font-semibold">Substituting into the formula</span>  {" "}
          </p>

          <div className="flex flex-col items-center mt-4">
              <p className="text-3xl text-center mt-4">
                  <MathJax>{"\\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\)"}</MathJax>
              </p>
              <p className="text-2xl text-center mt-4">
                  <MathJax>{"\\( x = \\frac{- (3) \\pm \\sqrt{(3)^2 - 4(2)(-5)}}{2(2)} \\)"}</MathJax>
              </p>
              <p className="text-2xl text-center mt-4">
                  <MathJax>{"\\( x = \\frac{-3 \\pm \\sqrt{9 + 40}}{4} \\)"}</MathJax>
              </p>
              <p className="text-2xl text-center mt-4">
                  <MathJax>{"\\( x = \\frac{-3 \\pm \\sqrt{49}}{4} \\)"}</MathJax>
              </p>
              <p className="text-2xl text-center mt-4">
                  <MathJax>{"\\( x = \\frac{-3 \\pm 7}{4} \\)"}</MathJax>
              </p>
              <p className="text-2xl text-center mt-4">
                  <MathJax>{"\\( x = \\frac{-3 + 7}{4} \\text{ or } \\frac{-3 - 7}{4} \\)"}</MathJax>
              </p>
              <p className="text-2xl text-center mt-4">
                  <MathJax>{"\\( x = \\frac{4}{4} \\text{ or } \\frac{-10}{4} \\)"}</MathJax>
              </p>
              <p className="text-2xl text-center mt-4">
                  <MathJax>{"\\( x = 1 \\text{ or } \\frac{-5}{2} \\)"}</MathJax>
              </p>
          </div>
      </div>
  )
}

export default AlmightyFormular