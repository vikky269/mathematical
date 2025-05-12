'use client';

import { MathJax, MathJaxContext } from 'better-react-mathjax';

export default function AlgebraicOperations() {
  const config = {
    loader: { load: ['[tex]/require', '[tex]/ams'] },
    tex: {
      packages: ['base', 'ams'],
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-lg bg-white text-gray-800 space-y-10">
      <MathJaxContext config={config}>
        {/* Adding Algebraic Expressions */}
        <section className="space-y-4">
          <h1 className="text-3xl font-bold text-[#1f2937]">
            Adding Algebraic Expressions
          </h1>
          <p>
            To add two algebraic expressions, combine like terms by adding their coefficients. Here are some examples:
          </p>

          {/* Example 1 */}
          <div className="space-y-2">
            <p className="font-semibold">Example 1:</p>
            <MathJax>{`\\[ (x^2 + 2x + 3) + (2x^2 - 3x) \\]`}</MathJax>
            <MathJax>{`\\[ = (x^2 + 2x^2) + (2x - 3x) + 3 \\]`}</MathJax>
            <MathJax>{`\\[ = 3x^2 - x + 3 \\]`}</MathJax>
          </div>

          {/* Example 2 */}
          <div className="space-y-2 mt-6">
            <p className="font-semibold">Example 2:</p>
            <MathJax>{`\\[ (1.5ab + 3) + (2.5ab - 2) \\]`}</MathJax>
            <MathJax>{`\\[ = (1.5ab + 2.5ab) + (3 - 2) \\]`}</MathJax>
            <MathJax>{`\\[ = 4ab + 1 \\]`}</MathJax>
          </div>
        </section>

        {/* Subtracting Algebraic Expressions */}
        <section className="space-y-4">
          <h1 className="text-3xl font-bold text-[#1f2937]">
            Subtracting Algebraic Expressions
          </h1>
          <p>
            To subtract two algebraic expressions, add the additive inverse of the second expression to the first. Here are some examples:
          </p>

          {/* Example 1 */}
          <div className="space-y-2">
            <p className="font-semibold">Example 1:</p>
            <MathJax>{`\\[ (3x^2 - 5x) - (x^2 - 2x + 2) \\]`}</MathJax>
            <MathJax>{`\\[ = (3x^2 - x^2) + (-5x + 2x) - 2 \\]`}</MathJax>
            <MathJax>{`\\[ = 2x^2 - 3x - 2 \\]`}</MathJax>
          </div>

          {/* Example 2 */}
          <div className="space-y-2 mt-6">
            <p className="font-semibold">Example 2:</p>
            <MathJax>{`\\[ (3ab + 4) - (2ab - 4) \\]`}</MathJax>
            <MathJax>{`\\[ = (3ab - 2ab) + (4 + 4) \\]`}</MathJax>
            <MathJax>{`\\[ = ab + 8 \\]`}</MathJax>
          </div>
        </section>
      </MathJaxContext>
    </main>
  );
}
