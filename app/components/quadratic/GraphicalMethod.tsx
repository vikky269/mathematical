import React from 'react'
import { QuadAssignment } from './QuadAssignment'

const GraphicalMethod = () => {
  return (
      <div className="mt-8">
          <h3 className="text-2xl font-bold mb-1">Method 4: Graphical Method</h3>
          <p className="text-lg">
              The Graphical Method involves plotting the quadratic equation on a graph and finding the points where it intersects the x-axis.
          </p>

          <h3 className="font-bold mt-4 md:text-xl">Example: Solve x² - 4x + 3 = 0 using a graph</h3>
          <p className="text-lg">Step 1: Rewrite as y = x² - 4x + 3</p>
          <p className="text-lg">Step 2: Find values of y for x = 0, 1, 2, 3, 4.</p>
          <p className="text-lg">Step 3: Plot the points (0,3), (1,0), (2,-1), (3,0), (4,3).</p>
          <p className="text-lg">Step 4: The x-values where y = 0 are the solutions (x = 1, x = 3).</p>


          <QuadAssignment />
          
      </div>
  )
}

export default GraphicalMethod