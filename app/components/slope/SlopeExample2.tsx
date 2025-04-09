// components/SlopeExampleTwo.tsx

'use client';

import Image from 'next/image';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useState } from 'react';

const SlopeExampleTwo = () => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <MathJaxContext version={3}>
      <div className="bg-[#76a40b] rounded-md p-6 shadow-md mt-8">
        <h2 className="text-xl font-bold mb-4 text-center text-white">Example 2</h2>
        <p className="mb-4 text-lg text-white text-center">
          Use the graph to find the slope of the two lines.
        </p>

        <div className="flex justify-center mb-4">
          <Image
            src="/ex2.jpg"
            alt="Graph showing two lines and points"
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
            <p className="font-semibold mb-2 text-blue-600">
              🔷 Blue Line:
            </p>
            <p className="mb-2">
              Given points: <strong>(-2, 1)</strong> and <strong>(-1, 5)</strong>
            </p>
            <p className='mb-4'>Using the slope formula:</p>
            <MathJax className="text-lg mb-2">
              {'\\( \\text{slope} = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1} \\)'}
            </MathJax>
            <MathJax className="text-lg mb-2">
              {'\\( \\text{slope} = \\frac{5 - 1}{-1 - (-2)} = \\frac{4}{1} = 4 \\)'}
            </MathJax>

            <p className="font-semibold mt-4 mb-2 text-red-600">
              🔺 Red Line:
            </p>
            <p className="mb-2">
              Given points: <strong>(-1, -2)</strong> and <strong>(3, -1)</strong>
            </p>
            <p className='mb-4'>Using the slope formula:</p>

            <MathJax className="text-lg mb-2">
              {'\\( \\text{slope} = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1} \\)'}
            </MathJax>

            <MathJax className="text-lg mb-2">
              {'\\( \\text{slope} = \\frac{-1 - (-2)}{3 - (-1)} = \\frac{1}{4} \\)'}
            </MathJax>

            <p className="font-semibold mt-4">
              ✅ Therefore, the slope of the blue line is <MathJax inline>{'\\(4\\)'}</MathJax> and the slope of the red line is <MathJax inline>{'\\(\\frac{1}{4}\\)'}</MathJax>.
            </p>
          </div>
        )}
      </div>
    </MathJaxContext>
  );
};

export default SlopeExampleTwo;
