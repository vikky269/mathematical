"use client";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const assignments = [
  '7 + 3 × (10 - 6)',
  '18 ÷ (3 × 2)',
  '2^3 + 4 × 2',
  '(9 - 4) × 2^2',
  '12 ÷ 3 + 5 × 2',
];

export const TakeHomeAssignment = () => (
  <MathJaxContext>
    <div className="bg-yellow-50 shadow-md rounded-xl p-6 mt-10 mx-4">
      <h2 className="text-2xl font-bold text-center text-yellow-700 mb-4">📝 Take-Home Assignment</h2>
      <p className="text-center text-gray-600 mb-4">Solve the following using PEMDAS. Show your working!</p>
      <ol className="list-decimal ml-6 space-y-2 text-lg text-gray-800">
        {assignments.map((item, idx) => (
          <li key={idx}>
            <MathJax inline dynamic>{`\\(${item}\\)`}</MathJax>
          </li>
        ))}
      </ol>
    </div>
  </MathJaxContext>
);
