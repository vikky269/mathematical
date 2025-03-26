import React from 'react'

const CompletingSquare = () => {
  return (
    <div className="mt-8">
        <h3 className="text-2xl font-bold mb-1">Method 2: Completing the Square</h3>
          <p className="mb-4 text-lg">To use the method of completing the square, follow the steps below:</p>

          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Arrange the equation such that the constant term is on one side and the term containing the variables is on the other side.</li>
            <li>Reduce the coefficient of the term in degree two to one by dividing both sides of the equation by its coefficient.</li>
            <li>Add the square of half of the coefficient of the linear term to both sides.</li>
            <li>Take the square root of both sides and solve the equation.</li>
          </ul>

          {/* Example 3 */}
          <p className="mt-6 text-xl"> <span className='font-bold'>Example 3:</span> <span className='font-bold'>Solve </span>2x² - 3x - 5 = 0</p>
          <h3 className='mt-2 text-xl'> <span className='font-bold md:text-xl text-center'>Step 1:</span> Take the constant term to one side.</h3>
          <p className="text-lg mt-2">2x² - 3x = 5</p>
          <h3 className='mt-2 text-xl'> <span className='font-bold md:text-xl text-center'>Step 2:</span> Divide by the coefficient of x², which is 2 in this case.</h3>
          <p className="text-lg mt-2">x² - 3/2x = 5/2</p>
          <h3 className='mt-2 text-xl'> <span className='font-bold md:text-xl text-center'>Step 3:</span> Add the square of half of the coefficient of x.</h3>
          <p className="text-lg mt-2">x² - 3/2x + (3/4)² = 5/2 + (3/4)²</p>
          <h3 className='mt-2 text-xl'> <span className='font-bold md:text-xl text-center'>Step 4:</span> Factor the left side.</h3> 
          <p className="text-lg mt-2">(x - 3/4)² = 5/2 + 9/16</p>
          <h3 className='mt-2 text-xl'> <span className='font-bold md:text-xl text-center'>Step 5:</span> Solve for x.</h3>
          <p className="text-lg mt-2 ">x - 3/4 = ±√(49/16)</p>
          <p className="text-lg mt-2" >x = 3/4 ± 7/4</p>
          <p className="text-lg mt-2 " >x = 10/4 or x = -4/4</p>
          <p className="text-lg mt-2" >x = 5/2 or x = -1</p>


          {/* Example 4 */}
          
            {/* <p className="mt-4 text-xl"> <span className='font-bold'>Example 4:</span> <span className='font-bold'>Solve </span>x² - 6x + 5 = 0</p>
            <h3 className='mt-2 text-xl'> <span className='font-bold md:text-xl text-center'>Step 1:</span> Take the constant term to one side.</h3>
            <p className="text-lg mt-2" >x² - 6x = -5</p>
            <h3 className='mt-2 text-xl'> <span className='font-bold md:text-xl text-center'>Step 2:</span> Add the square of half of the coefficient of x to both sides, that is:</h3>
            <p className="text-lg mt-2" >x² - 6x + 9 = -5 + 9</p>
            <h3 className='mt-2 text-xl'> <span className='font-bold md:text-xl text-center'>Step 3:</span> Factor the left side.</h3>
            <p className="text-lg mt-2" >(x - 3)² = 4</p>
            <h3 className='mt-2 text-xl'> <span className='font-bold md:text-xl text-center'>Step 4:</span> Solve for x.</h3>
            <p className="text-lg mt-2" >x - 3 = ±√4</p>
            <p className="text-lg mt-2" >x = 3 ± 2</p>
            <p className="text-lg mt-2" >x = 5 or x = 1</p> */}
        </div>
  )
}

export default CompletingSquare