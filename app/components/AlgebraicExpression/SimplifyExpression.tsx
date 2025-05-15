'use client';

import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ['[tex]/require', '[tex]/ams'] },
  tex: {
    packages: ['base', 'ams'],
  },
};

export default function SimplifyingAlgebraicExpressions() {
  return (
    <main className="max-w-3xl py-10">
      <MathJaxContext config={config}>
        <h1 className="text-2xl font-bold text-[#1f2937] mb-4">
          Simplifying Algebraic Expressions
        </h1>

        <p className="text-gray-700 mb-4">
          To simplify an algebraic expression, we just combine the like terms. Hence, the like variables will be combined together. Now, out of the like variables, the same powers will be combined together. For example, let us take an algebraic expression and try to reduce it to its lowest form in order to understand the concept better. Let our expression be:
        </p>

        <div className='text-sm'>
          <MathJax>{`\\[ x^3 + 3x^2 - 2x^3 + 2x - x^2 + 3 - x \\]`}</MathJax>
          <MathJax>{`\\[ = (x^3 - 2x^3) + (3x^2 - x^2) + (2x - x) + 3 \\]`}</MathJax>
          <MathJax>{`\\[ = -x^3 + 2x^2 + x + 3 \\]`}</MathJax>
        </div>

        <p className="text-gray-700 mt-4">
          Hence, the algebraic expression
        </p>

       <div className='text-sm'>
          <MathJax>{`\\[ x^3 + 3x^2 - 2x^3 + 2x - x^2 + 3 - x \\]`}</MathJax>
       </div>

        <p className="text-gray-700">simplifies to</p>

      <div className='text-sm'>
          <MathJax>{`\\[ -x^3 + 2x^2 + x + 3 \\]`}</MathJax>
      </div>

        
      </MathJaxContext>
    </main>
  );
}
