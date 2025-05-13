"use client";
import React from 'react';
import { MathJax } from 'better-react-mathjax';

const FractionalExponents = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Exponents with Fractions</h2>
      <p>
      If the exponent of a number is a fraction, it is known as a fractional exponent. 
      Square roots, cube roots, n<sup>th</sup> root are parts of fractional exponents. 
      A number with power <MathJax inline>{'1/2'}</MathJax> is termed as the square root of the base. 
      Similarly, a number with a power of 1/3 is called the cube root of the base.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li><code>25<sup>(1/2)</sup> = √25 = 5</code></li>
        <li><code>8<sup>(1/3)</sup> = ∛8 = 2</code></li>
      </ul>
    </section>
  );
};

export default FractionalExponents;
