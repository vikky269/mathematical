import React from 'react'

export const QuadAssignment = () => {
  return (
    <div className='bg-blue-50 p-4 rounded-lg mt-6'>
        <h2 className="text-2xl font-bold mt-6">Practice Work</h2>
        <p className='text-lg mt-4'>Solve the following quadratic equations using the factorization method:</p>
        <ol className="list-disc pl-6 mt-2 text-lg">
            <li>x² - 5x + 6 = 0</li>
            <li>6x² - 7x - 5 = 0</li>
        </ol>
        <p className='text-lg mt-4'>Solve the following quadratic equations using the completing the square method:</p>
        <ol className="list-disc pl-6 mt-2 text-lg">
            <li>2x² - 3x - 5 = 0</li>
            <li>x² - 6x + 5 = 0</li>
        </ol>
    </div>
  )
}

