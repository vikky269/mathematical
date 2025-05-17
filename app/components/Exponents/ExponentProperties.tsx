"use client";
import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ['[tex]/require', '[tex]/ams'] },
  tex: {
    packages: ['base', 'ams'],
  },
};

const PropertiesOfExponents = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-2">Properties of Exponents</h2>
    <ul className="list-disc ml-6 space-y-3">
      <li><MathJax inline>{"\\( a^m \\times a^n = a^{m+n} \\)"}</MathJax> (Product Law)</li>
      <li><MathJax inline>{"\\( \\frac{a^m}{a^n} = a^{m - n} \\) (Quotient Law)"}</MathJax></li>
      <li>
        <MathJax inline>{"\\( a^0 = 1 \\)"}</MathJax> (Zero Exponent)
      </li>
      <li>
        <MathJax inline>{"\\( a^{-m} = \\frac{1}{a^m} \\)"}</MathJax> (Negative Exponent)
      </li>
      <li>
        <MathJax inline>{"\\( (a^m)^n = a^{mn} \\)"}</MathJax> (Power of a Power)
      </li>
      <li>
        <MathJax inline>{"\\( (ab)^m = a^m b^m \\)"}</MathJax> (Product Raised to Power)
      </li>
      <li>
        <MathJax inline>{"\\( \\left( \\frac{a}{b} \\right)^m = \\frac{a^m}{b^m} \\)"}</MathJax> (Quotient Raised to Power)
      </li>
    </ul>

  </section>
);
export default PropertiesOfExponents;
