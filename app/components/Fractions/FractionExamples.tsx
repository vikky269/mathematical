// app/components/fractions/FractionExamples.tsx
"use client";
import React from "react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ['[tex]/require', '[tex]/ams'] },
  tex: {
    packages: ['base', 'ams'],
  },
};

const FractionExamples = () => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Fraction Examples in Real Life</h2>
      <p className="mb-2 text-lg">
        Let us look at a few examples of how fractions appear in everyday life:
      </p>
      <ul className="list-disc list-inside mb-2 space-y-2 md:text-lg">
        <li>
          When we divide a cake into 3 equal parts, then each part is <strong><MathJax inline>{"\\( \\frac{1}{3} \\)"}</MathJax></strong> of the whole.
        </li>
        <li>
          We express the time as 'half an hour', which is a common way of expressing 30 minutes. "Half" is a fraction represented as <strong><MathJax inline>{"\\( \\frac{1}{2} \\)"}</MathJax></strong>.
        </li>
        <li>
          Test scores are often expressed as fractions, like <strong><MathJax inline>{"\\( \\frac{15}{20} \\)"}</MathJax></strong> or <strong><MathJax inline>{"\\( \\frac{7}{20} \\)"}</MathJax></strong>.
        </li>
        <li>
          Fractions are used in cooking recipes, such as <strong><MathJax inline>{"\\( \\frac{1}{2} \\)"}</MathJax></strong> teaspoon of sugar or <strong><MathJax inline>{"\\( \\frac{3}{4} \\)"}</MathJax></strong> tablespoon of salt.
        </li>
      </ul>
    </section>
  );
};

export default FractionExamples;
