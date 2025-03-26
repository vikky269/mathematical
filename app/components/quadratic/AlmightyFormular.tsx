import React from 'react'

const AlmightyFormular = () => {
  return (
      <div className="mt-8">
          <h3 className="text-2xl font-bold mb-1">Method 3: Quadratic Formula</h3>
          <p className="text-lg">
              The Quadratic Formula is used when a quadratic equation cannot be easily factored. The formula is:
          </p>
          <div className="text-center my-4 font-semibold text-xl">
              x = (-b ± √(b² - 4ac)) / 2a
          </div>
          <p className="text-lg">Where a, b, and c are the coefficients of the quadratic equation.</p>

          <h3 className="font-bold mt-4 md:text-xl">Example: Solve 2x² - 3x - 2 = 0</h3>
          <p className="text-lg mt-2">Step 1: Identify a = 2, b = -3, c = -2.</p>
          <p className="text-lg mt-2">Step 2: Compute b² - 4ac.</p>
          <p className="text-lg mt-2">(-3)² - 4(2)(-2) = 9 + 16 = 25</p>
          <p className="text-lg mt-2">Step 3: Compute the square root.</p>
          <p className="text-lg mt-2">√25 = 5</p>
          <p className="text-lg mt-2">Step 4: Compute x.</p>
          <p className="text-lg mt-2">x = (3 ± 5) / 4 → x = 2 or x = -0.5</p>
      </div>
  )
}

export default AlmightyFormular