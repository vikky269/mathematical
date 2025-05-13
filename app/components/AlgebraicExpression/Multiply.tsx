"use client";

import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const AlgeMultiply = () => {
  return (
    <main className="max-w-3xl mx-auto  text-lg">
    <MathJaxContext version={3}>
      <div className="py-10  text-gray-800 space-y-8 max-w-3xl mx-auto">
        {/* Multiplying Algebraic Expressions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Multiplying Algebraic Expressions
          </h2>
          <p className="text-lg">
            To multiply two algebraic expressions, we multiply every term of the
            first expression with every term of the second expression and combine
            all the products. Here are some examples:
          </p>

          {/* Example 1 */}
          <div className="space-y-2">
            <p className="font-semibold">Example 1:</p>
            <MathJax>{`\\[ ab(2ab + 3) \\]`}</MathJax>
            <MathJax>{`\\[ = 2a^2b^2 + 3ab \\]`}</MathJax>
          </div>

          {/* Example 2 */}
          <div className="space-y-2">
            <p className="font-semibold">Example 2:</p>
            <MathJax>{`\\[ (x + 1)(x + 2) \\]`}</MathJax>
            <MathJax>{`\\[ = x^2 + x + 2x + 2 \\]`}</MathJax>
            <MathJax>{`\\[ = x^2 + 3x + 2 \\]`}</MathJax>
          </div>
        </section>

        {/* Dividing Algebraic Expressions */}
        <section className="space-y-4 mt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Dividing Algebraic Expressions
          </h2>
          <p className="text-lg">
            To divide two algebraic expressions, we factor the numerator and the
            denominator, cancel the common terms, and simplify the result. Here are some examples:
          </p>

          {/* Example 1 */}
          <div className="space-y-2">
            <p className="font-semibold">Example 1:</p>
            <MathJax>{`\\[ \\frac{2x^2}{2x^2 + 4x} \\]`}</MathJax>
            <MathJax>{`\\[ = \\frac{2x^2}{2x(x + 2)} \\]`}</MathJax>
            <MathJax>{`\\[ = \\frac{x}{x + 2} \\]`}</MathJax>
          </div>

          {/* Example 2 */}
          <div className="space-y-2">
            <p className="font-semibold">Example 2:</p>
            <MathJax>{`\\[ \\frac{x^2 + 5x + 4}{x + 1} \\]`}</MathJax>
            <MathJax>{`\\[ = \\frac{(x + 4)(x + 1)}{x + 1} \\]`}</MathJax>
            <MathJax>{`\\[ = x + 4 \\]`}</MathJax>
          </div>
        </section>
      </div>
    </MathJaxContext>
    </main>
  );
};

export default AlgeMultiply;
