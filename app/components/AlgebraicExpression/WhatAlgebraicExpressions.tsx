'use client';

import { MathJax, MathJaxContext } from 'better-react-mathjax';

export default function WhatAlgebraicExpressionsAre() {
  const config = {
    loader: { load: ['[tex]/require', '[tex]/ams'] },
    tex: {
      packages: ['base', 'ams'],
    },
  };

  return (
    <main className="max-w-3xl mx-auto py-10">
      <MathJaxContext config={config}>
        <h1 className="text-2xl font-bold  text-center mb-4">
          What are Algebraic Expressions?
        </h1>

        <p className="text-gray-700 mb-4">
          An <span className="font-semibold">algebraic expression</span> (or a variable expression) is a combination of terms by the operations such as addition, subtraction, multiplication, division, etc. For example, let us have a look at the expression:
        </p>

        <MathJax>{'\\[ 5x + 7 \\]'}</MathJax>

        <p className="text-gray-700 mb-4">
          Thus, we can say that <MathJax inline>{'\\( 5x + 7 \\)'}</MathJax> is an example of an algebraic expression.
        </p>

        <p className="text-gray-700 mb-2">Here are more examples:</p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><MathJax inline>{'\\( 5x + 4y + 10 \\)'}</MathJax></li>
                  <li><MathJax inline>{'\\( 2x^2y - 3xy^2 \\)'}</MathJax></li>
                  <li><MathJax inline>{'\\( (-a + 4b)^2 + 6ab \\)'}</MathJax></li>
              </ul>

      </MathJaxContext>
    </main>
  );
}

 