"use client";
import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const ExponentMeaning = () => (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Meaning of Exponents</h2>
      <p>
        Exponent is the way in which large numbers are expressed in terms of
        powers. For example, 4 x 4 x 4 = 4 <sup>3</sup>. In
        generral, x <sup>n</sup> means x is multiplied by itself n times. For example, 2<sup>3</sup> = 2 x 2 x 2 = 8.
        Here, 2 is the base and 3 is the exponent. 
        The exponent tells us how many times to multiply the base by itself.
        times.
      </p>
      <div>
        <img
          src="/exponentwo.png"
          alt="Exponent Example"
          className="mx-auto mt-4"  
        />
      </div>

      <p className="mt-6">Here, in the term x<sup>n</sup></p>
       <ul className="list-disc ml-6">
        <li>
          <strong>x</strong> is called the base.
        </li>
        <li>
          <strong>n</strong> is called the exponent or power.
        </li>
        <li>
          The value of x<sup>n</sup> is equal to the product of n factors of x.
        </li>
       </ul>

       <div>
        <img src="/power.png" alt="" className="mx-auto mt-4" />
       </div>
    </section>
  );
export default ExponentMeaning;