// app/components/fractions/FractionExamplesWithSolutions.tsx
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ['[tex]/require', '[tex]/ams'] },
  tex: {
    packages: ['base', 'ams'],
  },
};

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
    <section className=" mb-6 text-sm space-y-6">
      <h2 className="text-2xl font-bold mb-2">Examples</h2>

      {/* Example 1 */}
      <div>
        <h3 className="text-lg font-semibold">
          Example 1: Write two equivalent fractions for <MathJax inline>{"\\( \\frac{5}{15} \\)"}</MathJax>

        </h3>
        {renderToggleButton(1)}
        <div
          className={`mt-2 transition-all duration-300 ease-in-out ${
            visibleSolution === 1 ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div>
            <p className="mb-8 md:text-lg">
              a.) Multiply numerator and denominator by 2:{" "}
              <MathJax inline>{"\\( \\frac{5 \\times 2}{15 \\times 2} = \\frac{10}{30} \\)"}</MathJax>
            </p>

            <p className="mb-4 md:text-lg">
              b.) Divide numerator and denominator by 5:{" "}
              <MathJax inline>{"\\( \\frac{5 \\div 5}{15 \\div 5} = \\frac{1}{3} \\)"}</MathJax>
            </p>

            <p className="mb-4 md:text-lg">
              Therefore,{" "}
              <MathJax inline>{"\\( \\frac{10}{30} \\)"}</MathJax>,{" "}
              <MathJax inline>{"\\( \\frac{1}{3} \\)"}</MathJax>, and{" "}
              <MathJax inline>{"\\( \\frac{5}{15} \\)"}</MathJax> are equivalent.
            </p>
          </div>


        </div>
      </div>

      {/* Example 2 */}
      <div>
        <h3 className="text-lg font-semibold">
          Example 2: In a class of 48 students, <MathJax inline>{"\\( \\frac{1}{4} \\)"} </MathJax> of them watch cartoons. How many students do
          not watch cartoons?
        </h3>
        {renderToggleButton(2)}
        <div
          className={`mt-2 transition-all duration-300 ease-in-out ${visibleSolution === 2 ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <MathJaxContext>
            <div>
              <p className="mb-4 md:text-lg">
                <MathJax inline>{"\\( \\text{Total students} = 48 \\)"}</MathJax>
              </p>

              <p className="mb-4 md:text-lg">
                <MathJax inline>
                  {"\\( \\text{Students who watch cartoons} = \\frac{1}{4} \\times 48 = 12 \\)"}
                </MathJax>
              </p>

              <p className="mb-4 md:text-lg">
                <MathJax inline>
                  {"\\( \\text{Students who do not watch cartoons} = 48 - 12 = 36 \\)"}
                </MathJax>
              </p>

              <p className="mb-4 md:text-lg">
                <strong>
                  <MathJax inline>{"\\( \\boxed{36 \\text{ students do not watch cartoons}} \\)"}</MathJax>
                </strong>
              </p>
            </div>
          </MathJaxContext>

        </div>
      </div>

      {/* Example 3 */}
      <div>
        <h3 className="text-lg font-semibold">Example 3: State true or false.</h3>
        <ul className="list-disc list-inside">
          <li className="mb-3">a.) Proper fractions are the fractions in which the numerator is less than its denominator.</li>
          <li className="mb-3">b.) <MathJax inline>{"\\( \\frac{9}{2} \\)"} </MathJax> is a proper fraction.</li>
          <li className="mb-3">c.) <MathJax inline>{"\\( \\frac{3}{4} \\)"} </MathJax> and <MathJax inline>{"\\( \\frac{2}{4} \\)"} </MathJax> are like fractions.</li>
        </ul>
        {renderToggleButton(3)}
        <div
          className={`mt-2 transition-all duration-300 ease-in-out ${
            visibleSolution === 3 ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <p className="mb-3">a.) <strong>True</strong></p>
          <p className="mb-3">b.) <strong>False</strong> – <MathJax inline>{"\\( \\frac{9}{2} \\)"} </MathJax> is an improper fraction.</p>
          <p className="mb-3">c.) <strong>True</strong> – Both have the same denominator (4).</p>
        </div>
      </div>
    </section>
  );
};

export default FractionExamplesWithSolutions;
