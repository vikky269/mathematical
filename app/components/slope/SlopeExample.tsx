// components/SlopeExample.tsx

'use client';

import Image from 'next/image';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useState } from 'react';

const SlopeExample = () => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <MathJaxContext version={3}>
      <div className="bg-[#76a40b] rounded-md p-6 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center text-white">Example 1</h2>
        <p className="mb-4 text-lg text-white text-center">
          Use the graph to find the slope of the line.
        </p>

        <div className="flex justify-center mb-4">
          <Image
            src="/exampleone.png"
            alt="Graph showing slope"
            width={400}
            height={400}
            className="rounded-md border"
          />
        </div>

        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-white underline hover:text-purple-900 mb-4 cursor-pointer"
        >
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>

        {showSolution && (
          <div className="bg-white p-4 rounded-md border text-gray-800">
            <p className="mb-2">
              We are given two points on the line: <strong>(2, 1)</strong> and <strong>(6, 3)</strong>.
            </p>
            <p className="mb-2">
              To find the slope, we use the formula:
            </p>
            <MathJax className="text-lg mb-2">
              {'\\( \\text{slope} = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1} \\)'}
            </MathJax>
            <p className="mb-2">
              Substitute the coordinates into the formula:
            </p>
            <MathJax className="text-lg mb-2">
              {'\\( \\frac{3 - 1}{6 - 2} = \\frac{2}{4} = \\frac{1}{2} \\)'}
            </MathJax>
            <p className="font-semibold">
              So, the slope of the line is <MathJax inline>{'\\( \\frac{1}{2} \\)'}</MathJax>.
            </p>
          </div>
        )}
      </div>
    </MathJaxContext>
  )
}

export default SlopeExample;
