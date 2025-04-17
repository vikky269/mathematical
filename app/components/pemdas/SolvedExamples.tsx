"use client";
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const examples = [
  {
    question: '2 + 3 × 4',
    steps: [
      'According to PEMDAS, do multiplication before addition.',
      '3 × 4 = 12',
      '2 + 12 = 14',
      'Final Answer: 14',
    ],
    latex: '2 + 3 \\times 4 = 14',
  },
  {
    question: '(5 + 3) × 2',
    steps: [
      'Parentheses come first.',
      '5 + 3 = 8',
      '8 × 2 = 16',
      'Final Answer: 16',
    ],
    latex: '(5 + 3) \\times 2 = 16',
  },
  {
    question: '4 + 6 ÷ 2',
    steps: [
      'Do division first.',
      '6 ÷ 2 = 3',
      '4 + 3 = 7',
      'Final Answer: 7',
    ],
    latex: '4 + 6 \\div 2 = 7',
  },
  {
    question: '3 + 2^2',
    steps: [
      'Exponents before addition.',
      '2² = 4',
      '3 + 4 = 7',
      'Final Answer: 7',
    ],
    latex: '3 + 2^2 = 7',
  },
  {
    question: '(8 - 3)² ÷ 5',
    steps: [
      'Parentheses first: 8 - 3 = 5',
      'Then exponent: 5² = 25',
      'Divide: 25 ÷ 5 = 5',
      'Final Answer: 5',
    ],
    latex: '\\frac{(8 - 3)^2}{5} = 5',
  },
];

export const SolvedExamples = () => (
  <MathJaxContext>
    <div className="shadow-lg rounded-xl p-6 mt-10 mx-4">
      <h2 className="text-2xl font-bold text-center text-[#76a40b] mb-4">📘 Solved Examples</h2>
      {examples.map((ex, idx) => (
        <div key={idx} className="border-b py-4">
          <p className="text-lg font-semibold mb-2">Q{idx + 1}: <MathJax inline dynamic>{`\\(${ex.latex.split('=')[0]}\\)`}</MathJax></p>
          <ul className="list-disc ml-6 text-gray-700">
            {ex.steps.map((step, sIdx) => (
              <li key={sIdx}>{step}</li>
            ))}
          </ul>
          <p className="mt-2 font-bold">➤ Final Answer: <MathJax inline dynamic>{`\\(${ex.latex.split('=')[1]}\\)`}</MathJax></p>
        </div>
      ))}
    </div>
  </MathJaxContext>
);
