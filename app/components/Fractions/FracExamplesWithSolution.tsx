// app/components/fractions/FractionExamplesWithSolutions.tsx
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FractionExamplesWithSolutions = () => {
  const [visibleSolution, setVisibleSolution] = useState<number | null>(null);

  const toggleSolution = (index: number) => {
    setVisibleSolution((prev) => (prev === index ? null : index));
  };

  const renderToggleButton = (index: number) => (
    <button
      onClick={() => toggleSolution(index)}
      className="flex items-center text-blue-600 hover:underline mt-2 cursor-pointer"
    >
      {visibleSolution === index ? (
        <>
          Hide Solution <ChevronUp className="ml-2 h-4 w-4" />
        </>
      ) : (
        <>
          Show Solution <ChevronDown className="ml-2 h-4 w-4" />
        </>
      )}
    </button>
  );

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6 space-y-6">
      <h2 className="text-2xl font-bold mb-2">Examples</h2>

      {/* Example 1 */}
      <div>
        <h3 className="text-lg font-semibold">
          Example 1: Write two equivalent fractions for 5/15
        </h3>
        {renderToggleButton(1)}
        <div
          className={`mt-2 transition-all duration-300 ease-in-out ${
            visibleSolution === 1 ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <p>a.) Multiply numerator and denominator by 2: (5 × 2)/(15 × 2) = 10/30</p>
          <p>b.) Divide numerator and denominator by 5: (5 ÷ 5)/(15 ÷ 5) = 1/3</p>
          <p>
            Therefore, <strong>10/30</strong> and <strong>1/3</strong> are equivalent to{" "}
            <strong>5/15</strong>.
          </p>
        </div>
      </div>

      {/* Example 2 */}
      <div>
        <h3 className="text-lg font-semibold">
          Example 2: In a class of 48 students, 1/4th of them watch cartoons. How many students do
          not watch cartoons?
        </h3>
        {renderToggleButton(2)}
        <div
          className={`mt-2 transition-all duration-300 ease-in-out ${
            visibleSolution === 2 ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <p>Total students = 48</p>
          <p>Students who watch cartoons = 1/4 × 48 = 12</p>
          <p>Students who do not watch cartoons = 48 - 12 = 36</p>
          <p><strong>Answer: 36 students do not watch cartoons.</strong></p>
        </div>
      </div>

      {/* Example 3 */}
      <div>
        <h3 className="text-lg font-semibold">Example 3: State true or false.</h3>
        <ul className="list-disc list-inside">
          <li>a.) Proper fractions are the fractions in which the numerator is less than its denominator.</li>
          <li>b.) 9/2 is a proper fraction.</li>
          <li>c.) 3/4 and 2/4 are like fractions.</li>
        </ul>
        {renderToggleButton(3)}
        <div
          className={`mt-2 transition-all duration-300 ease-in-out ${
            visibleSolution === 3 ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <p>a.) <strong>True</strong></p>
          <p>b.) <strong>False</strong> – 9/2 is an improper fraction.</p>
          <p>c.) <strong>True</strong> – Both have the same denominator (4).</p>
        </div>
      </div>
    </section>
  );
};

export default FractionExamplesWithSolutions;
