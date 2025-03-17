'use client';

export default function QuadraticEquations() {
  return (
    <div className="min-h-screen p-6  text-gray-800">
      <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600">Quadratic Equations</h1>
        <p className="mt-4 text-lg">
          A quadratic equation is a second-degree polynomial equation in a single variable x.
        </p>
        <p className='mt-4 text-lg'>It can also be seen as a mathematical expression in which the highest exponent of the variable is 2. 
          It has a standard form;  </p>
        <div className="text-center my-4 font-semibold text-xl">ax² + bx + c = 0</div>
        <p className='mt-4 text-lg'>Where a, b and c are constants and</p>
        <p className='mt-4 text-lg'>a≠0 (because if a=0  it becomes a linear equation). </p>
        <h2 className="text-2xl font-bold mt-6">Methods of Solving Quadratic Equations</h2>

        <p className='text-lg mt-4'>There are four different methods of solving quadratic equations. These are:</p>
        <ol className="list-disc pl-6 mt-2">
          <li>Factorization Method</li>
          <li>Completing the Square</li>
          <li>Quadratic Formula</li>
          <li>Graphical Method</li>
        </ol>
        
        {/* Factoring Method */}
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-1"> Method 1: Factorization Method</h3>
          <p>If a quadratic equation can be factored into two binomial expressions, we can solve for x easily.</p>
          <p className='mt-1'>This approach consists of splitting the quadratic expression into two simpler factors.</p>

          {/* Example 1 */}
          <p className="mt-2"> <span className='font-bold'>Example 1:</span> <span className='font-bold'>Solve </span>x² - 5x + 6 = 0</p>
          <h3 className='font-bold mt-2'>Step 1:</h3>
          <p>Find two numbers that multiply to 6 and add to -5.</p>
          <ul>
            <li>The numbers are <strong>-2</strong> and <strong>-3</strong> because: (-2) × (-3) = 6, (-2) + (-3) = -5</li>
          </ul>

          <h3 className='font-bold mt-2'>Step 2:</h3>
          <p>Rewrite the middle term:</p>
          <p >x² - 2x - 3x + 6 = 0</p>

          <h3 className='font-bold mt-2'>Step 3:</h3>
          <p>Factor in pairs:</p>
          <p>x(x - 2) - 3(x - 2) = 0</p>

          <h3 className='font-bold mt-2'>Step 4:</h3>
          <p>Factor out the common term</p>
          <p>(x-2)(x-3)=0</p>

          <h3 className='font-bold mt-2'>Step 5:</h3>
          <p>Solve for x</p>
          <p>(x-2)=0 or (x-3)=0</p>
          <p>x=2 or x=3 </p>


          {/* Example 2 */}

          <p className="mt-2"> <span className='font-bold'>Example 2:</span> <span className='font-bold'>Solve </span>6x² - 7x - 5 = 0</p>
          <h3 className='font-bold mt-2'>Step 1:</h3>
          <p>Multiply the first and last numbers.</p>
          <p>We need to multiply the first number (coefficient of x²) and the last number (constant):</p>
          <p> multiply (6) x (-5) = -30</p>

          <h3 className='font-bold mt-2'>Step 2:</h3>
          <p>Find two numbers that multiply to -30 and add to -7.</p>
          <ul>
            <li>The numbers are <strong>-10</strong> and <strong>3</strong> because: (-10) × (3) = -30, (-10) + (3) = -7</li>
          </ul>

          <h3 className='font-bold mt-2'>Step 3:</h3>
          <p>Rewrite the middle term:</p>
          <p >6x² - 10x + 3x - 5 = 0</p>

          <h3 className='font-bold mt-2'>Step 4:</h3>
          <p>Factor in pairs:</p>
          <p>2x(3x-5)+1(3x-5)=0</p>

          <h3 className='font-bold mt-2'>Step 5:</h3>
          <p>Factor out the common term</p>
          <p>(2x+1)(3x-5)=0</p>

          <h3 className='font-bold mt-2'>Step 6:</h3>
          <p>Solve for x</p>
          <p>(2x+1)=0 or (3x-5)=0</p>
          <p>x=-1/2  or x=  5/3</p>


        </div>
        
        {/* Quadratic Formula */}
        <div className="mt-8">
        <h3 className="text-xl font-bold mb-1">Method 2: Completing the Square</h3>
          <p className="mb-4">To use the method of completing the square, follow the steps below:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Arrange the equation such that the constant term is on one side and the term containing the variables is on the other side.</li>
            <li>Reduce the coefficient of the term in degree two to one by dividing both sides of the equation by its coefficient.</li>
            <li>Add the square of half of the coefficient of the linear term to both sides.</li>
            <li>Take the square root of both sides and solve the equation.</li>
          </ul>

          {/* Example 3 */}
          <p className="mt-4"> <span className='font-bold'>Example 3:</span> <span className='font-bold'>Solve </span>2x² - 3x - 5 = 0</p>
          <h3 className='mt-2'> <span className='font-bold'>Step 1:</span> Take the constant term to one side.</h3>
          <p>2x² - 3x = 5</p>
          <h3 className='mt-2'> <span className='font-bold'>Step 2:</span> Divide by the coefficient of x², which is 2 in this case.</h3>
          <p>x² - 3/2x = 5/2</p>
          <h3 className='mt-2'> <span className='font-bold'>Step 3:</span> Add the square of half of the coefficient of x.</h3>
          <p>x² - 3/2x + (3/4)² = 5/2 + (3/4)²</p>
          <h3 className='mt-2'> <span className='font-bold'>Step 4:</span> Factor the left side.</h3> 
          <p>(x - 3/4)² = 5/2 + 9/16</p>
          <h3 className='mt-2'> <span className='font-bold'>Step 5:</span> Solve for x.</h3>
          <p>x - 3/4 = ±√(49/16)</p>
          <p>x = 3/4 ± 7/4</p>
          <p>x = 10/4 or x = -4/4</p>
          <p>x = 5/2 or x = -1</p>


          {/* Example 4 */}
          <p className="mt-4"> <span className='font-bold'>Example 4:</span> <span className='font-bold'>Solve </span>x² - 6x + 5 = 0</p>
          <h3 className='mt-2'> <span className='font-bold'>Step 1:</span> Take the constant term to one side.</h3>
          <p>x² - 6x = -5</p>
          <h3 className='mt-2'> <span className='font-bold'>Step 2:</span> Add the square of half of the coefficient of x to both sides, that is:</h3>
          <p>x² - 6x + 9 = -5 + 9</p>
          <h3 className='mt-2'> <span className='font-bold'>Step 3:</span> Factor the left side.</h3> 
          <p>(x - 3)² = 4</p>
          <h3 className='mt-2'> <span className='font-bold'>Step 4:</span> Solve for x.</h3>
          <p>x - 3 = ±√4</p>
          <p>x = 3 ± 2</p>  
          <p>x = 5 or x = 1</p>
        

          {/* <div>

            <MathJax>{"\\( \\left( \\frac{1}{2} \\times \\frac{-3}{2} \\right)^2 = \\left( \\frac{-3}{4} \\right)^2 \\)"}</MathJax>
            <MathJax>{"\\( x^2 - \\frac{3}{2}x + \\left( \\frac{-3}{4} \\right)^2 = \\frac{5}{2} + \\left( \\frac{-3}{4} \\right)^2 \\)"}</MathJax>
            <MathJax>{"\\( \\left( x - \\frac{3}{4} \\right)^2 = \\frac{5}{2} + \\frac{9}{16} \\)"}</MathJax>
            <MathJax>{"\\( \\left( x - \\frac{3}{4} \\right)^2 = \\frac{40 + 9}{16} \\)"}</MathJax>
            <MathJax>{"\\( \\left( x - \\frac{3}{4} \\right)^2 = \\frac{49}{16} \\)"}</MathJax>
          </div> */}

        </div>
      
        
        {/* Take-Home Assignment */}
        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Take-Home Assignment</h3>
          <p>Solve the following quadratic equations using any method:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>x² + 7x + 10 = 0</li>
            <li>3x² - 5x - 2 = 0</li>
            <li>2x² + 8x + 6 = 0</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

