// app/components/fractions/FractionExamples.tsx
"use client";
import React from "react";

const FractionExamples = () => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Fraction Examples in Real Life</h2>
      <p className="mb-2 text-lg">
        Let us look at a few examples of how fractions appear in everyday life:
      </p>
      <ul className="list-disc list-inside mb-2 space-y-2 text-lg">
        <li>
          When we divide a cake into 3 equal parts, then each part is <strong>1/3</strong> of the whole.
        </li>
        <li>
          We express the time as 'half an hour', which is a common way of expressing 30 minutes. "Half" is a fraction represented as <strong>1/2</strong>.
        </li>
        <li>
          Test scores are often expressed as fractions, like <strong>15/20</strong> or <strong>7/20</strong>.
        </li>
        <li>
          Fractions are used in cooking recipes, such as <strong>1/2</strong> teaspoon of sugar or <strong>3/4</strong> tablespoon of salt.
        </li>
      </ul>
    </section>
  );
};

export default FractionExamples;
