"use client";
import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ['[tex]/require', '[tex]/ams'] },
  tex: {
    packages: ['base', 'ams'],
  },
};

const NegativeExponents = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Negative Exponents</h2>
      <p>
        A negative exponent tells us how many times to multiply the reciprocal of the base.
        For example, if it is given that <MathJax inline>{"\\( a^{-n} \\)"}</MathJax>,
        it can be expanded as <MathJax inline>{"\\( \\frac{1}{a^n} \\)"}</MathJax>.
        It means we have to multiply the reciprocal of <MathJax inline>{"\\( a \\)"}</MathJax>,
        i.e <MathJax inline>{"\\( \\frac{1}{a} \\)"}</MathJax> ‘n’ times.
        Negative exponents are used when writing fractions with exponents.
        Some examples of negative exponents are
        <MathJax inline>{"  \\( 2 \\times 3^{-9} \\)"}</MathJax>,
        <MathJax inline>{"  \\( 7^{-3} \\)"}</MathJax>,
        <MathJax inline>{"  \\( 67^{-5} \\)"}</MathJax>, etc.
        We can convert these into positive exponents as follows:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-2">
        <li><MathJax inline>{"\\( 3^{-2} = \\frac{1}{3^2} = \\frac{1}{9} \\)"}</MathJax></li>
        <li><MathJax inline>{"\\( 2 \\times 3^{-9} = \\frac{2}{3^9} \\)"}</MathJax></li>
        <li><MathJax inline>{"\\( 7^{-3} = \\frac{1}{7^3} \\)"}</MathJax></li>
        <li><MathJax inline>{"\\( 67^{-5} = \\frac{1}{67^5} \\)"}</MathJax></li>
      </ul>
      <p className="mt-4">
        In general, the rule for negative exponents is:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-2">
        <li><MathJax inline>{"\\( a^{-n} = \\frac{1}{a^n} \\)"}</MathJax></li>
      </ul>
      <p className="mt-4">
        This means that if you have a base raised to a negative exponent, you can rewrite it as the reciprocal of the base raised to the positive exponent.
      </p>
    </section>
  );
};

export default NegativeExponents;
