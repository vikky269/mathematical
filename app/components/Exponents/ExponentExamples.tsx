"use client";
import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";


const ExponentExamples = () => (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Examples of Exponents</h2>
      <ul className="list-disc ml-6">
        <li>
          3 x 3 x 3 x 3 x 3 = 3<sup>5</sup>
        </li>
        <li>
          (-2)<sup>3</sup> = -2 x -2 x -2
        </li>
        <li>
          a<sup>6</sup> = a x a x a x a x a x a
        </li>
      </ul>

      <p className="mt-4">
       Exponents are important because when a number is multiplied by itself many times,
       it is easy to express it in the form of exponents.
       For example, it is easier to write 5<sup>7</sup> rather than writing it as 5 × 5 × 5 × 5 × 5 × 5 × 5.
      </p>
    </section>
  );

export default ExponentExamples;