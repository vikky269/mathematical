"use client";
import React from "react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ['[tex]/require', '[tex]/ams'] },
  tex: {
    packages: ['base', 'ams'],
  },
};

const WhatAreFractions = () => {
  return (
    <section className="mb-6 mt-6 md:text-lg">
      <h2 className="text-2xl font-bold text-center mb-4">What are Fractions?</h2>
      <p className="mb-2">
        Fractions, in Mathematics, are represented as a numerical value, which
        defines a part of a whole. A fraction can be a portion or section of
        any quantity out of a whole, where the whole can be any number, a
        specific value, or a thing.
      </p>
      <p className="mb-2">
        Let us understand this concept using an example. The following figure
        shows a pizza that is divided into 8 equal parts. Now, if we want to
        express one selected part of the pizza, we can express it as <strong><MathJax inline>{"\\( \\frac{1}{8} \\)"}</MathJax></strong>
        which shows that out of 8 equal parts, we are referring to 1 part.
      </p>
      <p className="mb-2">
        It means one in eight equal parts. It can also be read as:
        <br />- One-eighth, or
        <br />- 1 by 8
      </p>
      <p className="mb-2">
        If we select 2 parts of the pizza, it will be expressed as <strong><MathJax inline>{"\\( \\frac{2}{8} \\)"}</MathJax></strong>.
        Similarly, if we are referring to 6 parts of this pizza, we would write
        it as <strong><MathJax inline>{"\\( \\frac{6}{8} \\)"}</MathJax></strong> as a fraction.
      </p>

      <div>
        <img
          src="/pizza.png"
          alt="Fraction of a pizza"
          className="mt-4 w-full h-auto"
        />
      </div>
    </section>
  );
};

export default WhatAreFractions;
