import React from 'react'

const Factorization = () => {
  return (
      <div className="mt-8">
          <h3 className="text-2xl font-bold mb-1"> Method 1: Factorization Method</h3>
          <p className="text-lg ">If a quadratic equation can be factored into two binomial expressions, we can solve for x easily.</p>
          <p className='mt-1 text-lg'>This approach consists of splitting the quadratic expression into two simpler factors.</p>

          {/* Example 1 */}
          <p className="mt-2 text-lg"> <span className='font-bold'>Example 1:</span> <span className='font-bold'>Solve </span>x² - 5x + 6 = 0</p>
          <h3 className='font-bold mt-4 md:text-xl text-center'>Step 1</h3>
          <div className='text-center'>
              <p className="text-lg">Find two numbers that multiply to 6 and add to -5.</p>
              <ul className="text-lg">
                  <li>The numbers are <strong>-2</strong> and <strong>-3</strong> because: (-2) × (-3) = 6, (-2) + (-3) = -5</li>
              </ul>

          </div>
          <h3 className='font-bold mt-4 md:text-xl text-center'>Step 2</h3>
           <div className='text-center'>
           <p className="text-lg">Rewrite the middle term:</p>
           <p className="text-lg">x² - 2x - 3x + 6 = 0</p>
           </div>

          <h3 className='font-bold mt-4 md:text-xl text-center'>Step 3</h3>
          <div className='text-center'>
              <p className="text-lg">Factor in pairs:</p>
              <p className="text-lg">x(x - 2) - 3(x - 2) = 0</p>
          </div>

          <h3 className='font-bold mt-4 md:text-xl text-center'>Step 4</h3>
          <div className='text-center'>
              <p className="text-lg">Factor out the common term</p>
              <p className="text-lg">(x-2)(x-3)=0</p>
          </div>

          <h3 className='font-bold mt-4 md:text-xl text-center'>Step 5</h3>
          <div className='text-center'>
              <p className="text-lg">Solve for x</p>
              <p className="text-lg">(x-2)=0 or (x-3)=0</p>
              <p className="text-lg">x=2 or x=3 </p>
          </div>


          {/* Example 2 */}

          {/* <p className="mt-2 text-xl"> <span className='font-bold'>Example 2:</span> <span className='font-bold'>Solve </span>6x² - 7x - 5 = 0</p>
          <h3 className='font-bold mt-2 md:text-xl'>Step 1</h3>
          <p className="text-lg">Multiply the first and last numbers.</p>
          <p className="text-lg">We need to multiply the first number (coefficient of x²) and the last number (constant):</p>
          <p className="text-lg"> multiply (6) x (-5) = -30</p>

          <h3 className='font-bold mt-2 md:text-xl'>Step 2</h3>
          <p className="text-lg">Find two numbers that multiply to -30 and add to -7.</p>
          <ul className="text-lg">
              <li>The numbers are <strong>-10</strong> and <strong>3</strong> because: (-10) × (3) = -30, (-10) + (3) = -7</li>
          </ul>

          <h3 className='font-bold mt-2 md:text-xl'>Step 3</h3>
          <p className="text-lg">Rewrite the middle term:</p>
          <p className="text-lg">6x² - 10x + 3x - 5 = 0</p>

          <h3 className='font-bold mt-2 md:text-xl'>Step 4</h3>
          <p className="text-lg">Factor in pairs:</p>
          <p className="text-lg">2x(3x-5)+1(3x-5)=0</p>

          <h3 className='font-bold mt-2 md:text-xl'>Step 5</h3>
          <p className="text-lg">Factor out the common term</p>
          <p className="text-lg">(2x+1)(3x-5)=0</p>

          <h3 className='font-bold mt-2 md:text-xl'>Step 6</h3>
          <p className="text-lg">Solve for x</p>
          <p className="text-lg">(2x+1)=0 or (3x-5)=0</p>
          <p className="text-lg">x=-1/2  or x=  5/3</p> */}


      </div>
  )
}

export default Factorization