import React from 'react'
import { QuadAssignment } from './QuadAssignment'
import {MathJax} from 'better-react-mathjax';
import Image from 'next/image';
import { images } from '@/app/data/images';

const GraphicalMethod = () => {
  return (
      <div className="mt-16">
          <h3 className="text-xl font-bold mb-4">
              Method 4: Graphical Method
          </h3>

          <h2 className='text-xl mb-4'>
              To use the graphical method in solving quadratic equations, these are the steps to follow.
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-xl">
              <li>
                  Write the equation as a function. That is,{" "}
                  <MathJax inline>{"\\( y = ax^2 + bx + c \\)"}</MathJax>.
              </li>
              <li>
                  Choose a range of values for <MathJax inline>{"\\(x\\)"}</MathJax> (if not
                  given) and then obtain the corresponding values of{" "}
                  <MathJax inline>{"\\(y\\)"}</MathJax>.
              </li>
              <li>Choose a suitable scale for the graph, if not given.</li>
              <li>
                  Plot the graph on the <MathJax inline>{"\\(x\\)"}-y</MathJax> plane and
                  join the points with a smooth curve.
              </li>
              <li>
                  Read the roots of the equation at the point where the graph
                  intersects with the <MathJax inline>{"\\(x\\)"}</MathJax>-axis.
              </li>
          </ol>


          <h3 className="text-xl font-bold mt-4">
              Example: Draw the graph of{" "}
              <MathJax inline>{"\\( x^2 - 6 = y \\)"}</MathJax> {" "} for values of{" "}
              <MathJax inline>{"\\( x \\)"} </MathJax> from -3 to 4.
          </h3>

          <h3 className="text-xl font-bold mt-4">Step 1: Rearrange the equation</h3>
          <p className="text-center font-semibold mt-4 text-xl">
              <MathJax>{"\\( y = x^2 - 6 \\)"}</MathJax>
          </p>

          <h3 className="text-xl font-bold mt-4">Step 2: Substitute the given value of{" "}
              <MathJax inline>{"\\( x \\)"} </MathJax> ranging from -3 to 4 into the above
              equation to find the value of{" "}
              <MathJax inline>{"\\( y \\)"} </MathJax>.
         </h3>
          
          <div className='cursor-pointer mt-4'>
           <Image src={images.img1} alt="Graphical Method" width={500} height={500} className='mt-4' />
          </div>

          <div className='cursor-pointer mt-4'>
           <Image src={images.img2} alt="Graphical Method" width={500} height={500} className='mt-4' />
          </div>

          <p className="text-xl mt-4">
            The graph of the equation{" "}
            <MathJax inline>{"\\( y = x^2 - 6 \\)"}</MathJax> is shown above
          </p>

          <h3 className="text-xl font-bold mt-4">Step 3: Read off the x-coordinate(s) of the points where the curve crosses the x-axis </h3>

          <p className='text-xl mt-4'>
            The x-coordinate(s) of the points where the curve crosses the x-axis are the roots of the equation{" "}
          </p>

            <p className="text-xl mt-4">
                The roots of the equation are{" "}
                <MathJax inline>{"\\( x = -2.5 \\text{ and } x = 2.5 \\)"}</MathJax>
            </p>

          <QuadAssignment />
      </div>

          
          
      
  )
}

export default GraphicalMethod