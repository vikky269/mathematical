// app/components/fractions/TypesOfFractions.tsx
"use client";
import React from "react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ['[tex]/require', '[tex]/ams'] },
  tex: {
    packages: ['base', 'ams'],
  },
};

const TypesOfFractions = () => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Types of Fractions</h2>
      <p className="mb-2 text-lg">
        Fractions can be classified into different types based on their numerators and denominators. The main types of fractions are:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-lg">
        <li>
          <strong>Proper Fractions:</strong> These are fractions where the numerator is less than the denominator. For example, <strong><MathJax inline>{"\\( \\frac{3}{5} \\)"}</MathJax></strong>, <strong><MathJax inline>{"\\( \\frac{2}{7} \\)"}</MathJax></strong>.
        </li>
        <li>
          <strong>Improper Fractions:</strong> In these fractions, the numerator is greater than or equal to the denominator. For example, <strong><MathJax inline>{"\\( \\frac{5}{3} \\)"}</MathJax></strong>, <strong><MathJax inline>{"\\( \\frac{9}{4} \\)"}</MathJax></strong>.
        </li>
        <li>
          <strong>Mixed Fractions:</strong> A mixed fraction has a whole number combined with a proper fraction. For example, <strong><MathJax inline>{"\\( 1\\frac{2}{3} \\)"}</MathJax></strong>, <strong><MathJax inline>{"\\( 4\\frac{1}{2} \\)"}</MathJax></strong>.
        </li>
        <li>
          <strong>Like Fractions:</strong> These are fractions that have the same denominator. For example, <strong><MathJax inline>{"\\( \\frac{1}{4} \\)"}</MathJax></strong>, <strong><MathJax inline>{"\\( \\frac{3}{4} \\)"}</MathJax></strong>.
        </li>
        <li>
          <strong>Unlike Fractions:</strong> These have different denominators. For example, <strong><MathJax inline>{"\\( \\frac{2}{5} \\)"}</MathJax></strong>, <strong><MathJax inline>{"\\( \\frac{3}{7} \\)"}</MathJax></strong>.
        </li>
        <li>
          <strong>Equivalent Fractions:</strong> These are fractions that represent the same value, even if the numerators and denominators are different. For example, <strong><MathJax inline>{"\\( \\frac{1}{2} \\)"}</MathJax></strong> and <strong><MathJax inline>{"\\( \\frac{2}{4} \\)"}</MathJax></strong>.
        </li>
      </ul>
      <p>
        Understanding the different types of fractions helps us in solving mathematical problems more easily and accurately.
      </p>
    </section>
  );
};

export default TypesOfFractions;
