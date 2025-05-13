// app/components/fractions/FractionsOnNumberLine.tsx
"use client";
import React from "react";

const FractionsOnNumberLine = () => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Fractions on a Number Line</h2>
      <p className="mb-2 text-lg">
        Fractions can also be represented on a number line, just like whole numbers. This helps us to visualize the size of fractions and compare them easily.
      </p>
      <p className="mb-2 text-lg">
        Let’s consider the number line from 0 to 1. If we divide it into 4 equal parts, each part represents <strong>1/4</strong>.
      </p>

      <div className="mb-8 mt-6">
        <img
          src="/number-line.png"
          alt="Number line with fractions"
          className="mt-4 w-full h-auto"
        />
      </div>

      <p className="mb-2 text-lg">
        So, on the number line, we can mark:
        <br />- The first tick after 0 as <strong>1/8</strong>,
        <br />- The second as <strong>2/8</strong> (which is equal to <strong>1/4</strong>),
        <br />- The third as <strong>3/8</strong>, and
        <br />- The fourth as <strong>4/8</strong> .
      </p>
      <p className="mb-2 text-lg">
        This method helps us understand how fractions are spaced and how they relate to whole numbers.
      </p>
    </section>
  );
};

export default FractionsOnNumberLine;
