// app/components/fractions/TypesOfFractions.tsx
"use client";
import React from "react";

const TypesOfFractions = () => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Types of Fractions</h2>
      <p className="mb-2">
        Fractions can be classified into different types based on their numerators and denominators. The main types of fractions are:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>Proper Fractions:</strong> These are fractions where the numerator is less than the denominator. For example, <strong>3/5</strong>, <strong>2/7</strong>.
        </li>
        <li>
          <strong>Improper Fractions:</strong> In these fractions, the numerator is greater than or equal to the denominator. For example, <strong>5/3</strong>, <strong>7/7</strong>.
        </li>
        <li>
          <strong>Mixed Fractions:</strong> A mixed fraction has a whole number combined with a proper fraction. For example, <strong>1 2/3</strong>, <strong>4 1/2</strong>.
        </li>
        <li>
          <strong>Like Fractions:</strong> These are fractions that have the same denominator. For example, <strong>1/4</strong>, <strong>3/4</strong>.
        </li>
        <li>
          <strong>Unlike Fractions:</strong> These have different denominators. For example, <strong>2/5</strong>, <strong>3/7</strong>.
        </li>
        <li>
          <strong>Equivalent Fractions:</strong> These are fractions that represent the same value, even if the numerators and denominators are different. For example, <strong>1/2</strong> and <strong>2/4</strong>.
        </li>
      </ul>
      <p>
        Understanding the different types of fractions helps us in solving mathematical problems more easily and accurately.
      </p>
    </section>
  );
};

export default TypesOfFractions;
