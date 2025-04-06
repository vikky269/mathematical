import React from "react";
import { MathJax } from "better-react-mathjax";

const CompletingSquare = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-2">Method 2: Completing the Square</h3>
      <p className="mb-4 text-xl">
        To use the method of completing the square, follow the steps below:
      </p>

      <ul className="list-disc list-inside space-y-2 text-xl">
        <li>Arrange the equation such that the constant term is on one side and the term containing the variables is on the other side.</li>
        <li>Reduce the coefficient of the term in degree two to one by dividing both sides of the equation by its coefficient.</li>
        <li>Add the square of half of the coefficient of the linear term to both sides.</li>
        <li>Take the square root of both sides and solve the equation.</li>
      </ul>

      {/* Example 3 */}
      <p className="mt-6 text-xl">
        <span className="font-bold">Example:</span> <span className="font-bold">Solve</span>{" "}{" "}
        <MathJax inline>{"\\( 2x^2 - 3x - 5 = 0 \\)"}</MathJax>
      </p>

      {/* Steps */}
      <h3 className="text-xl font-bold mt-4">
        <span className="">Step 1:</span> Take the constant term to one side.
      </h3>
      <p className="text-xl text-center mt-4"> <MathJax>{"\\( 2x^2 - 3x = 5 \\)"}</MathJax> </p>

      <h3 className="mt-4 text-xl font-bold">
        <span>Step 2:</span> Divide by the coefficient of  <MathJax inline>{"\\(x^2\\)"}</MathJax> which is 2.
      </h3>
       <p className="text-2xl text-center mt-4"> <MathJax>{"\\( x^2 - \\frac{3}{2}x = \\frac{5}{2} \\)"}</MathJax> </p>

      <h3 className="mt-4 text-xl font-bold">
        <span>Step 3:</span> Add the square of half of the coefficient of <MathJax inline>{"\\(x\\)"}</MathJax> to both sides, that is.
      </h3>
      
      <div className="flex flex-col items-center mt-4">
        <p className="text-xl text-center mt-4">
          <MathJax>{"\\( \\left( \\frac{1}{2} \\times \\frac{-3}{2} \\right)^2 = \\left(\\frac{-3}{4}\\right)^2 \\)"}</MathJax>
        </p>
        <p className="text-xl text-center mt-4">
          <MathJax>{"\\( x^2 - \\frac{3}{2}x + \\left(\\frac{-3}{4}\\right)^2 = \\frac{5}{2} + \\left(\\frac{-3}{4}\\right)^2 \\)"}</MathJax>
        </p>
        <p className="text-xl text-center mt-4">
          <MathJax>{"\\( \\left(x - \\frac{3}{4} \\right)^2 = \\frac{5}{2} + \\frac{9}{16} \\)"}</MathJax>
        </p>
        <p className="text-xl text-center mt-4">
          <MathJax>{"\\( \\left(x - \\frac{3}{4} \\right)^2 = \\frac{40 + 9}{16} \\)"}</MathJax>
        </p>
        <p className="text-xl text-center mt-4">
          <MathJax>{"\\( \\left(x - \\frac{3}{4} \\right)^2 = \\frac{49}{16} \\)"}</MathJax>
        </p>
      </div>

       <h3 className="text-xl font-bold mt-4">
        <span>Step 4:</span> Take the square roots of both sides and solve for <MathJax inline>{"\\(x\\)"}</MathJax> .
      </h3>
      
     <div className="flex flex-col items-center mt-4">
        <p className="text-xl text-center mt-4">
          <MathJax>{"\\( \\sqrt{\\left(x - \\frac{3}{4}\\right)^2} = \\pm \\sqrt{\\frac{49}{16}} \\)"}</MathJax>
        </p>
        <p className="text-xl text-center mt-4">
          <MathJax>{"\\( x - \\frac{3}{4} = \\pm \\frac{7}{4} \\)"}</MathJax>
        </p>
        <p className="text-xl text-center mt-4">
          <MathJax>{"\\( x = \\frac{3}{4} + \\frac{7}{4} \\text{ or } \\frac{3}{4} - \\frac{7}{4} \\)"}</MathJax>
        </p>
        <p className="text-xl text-center mt-4">
          <MathJax>{"\\( x = \\frac{10}{4} \\text{ or } \\frac{-4}{4} \\)"}</MathJax>
        </p>
        <p className="text-xl text-center mt-4">
          <MathJax>{"\\( x = \\frac{5}{2} \\text{ or } -1 \\)"}</MathJax>
        </p>
        <p className="text-xl text-center mt-4">
          <MathJax>{"\\( x = 2 \\frac{1}{2} \\text{ or } -1 \\)"}</MathJax>
        </p>
      </div>

    </div>
  );
};

export default CompletingSquare;
