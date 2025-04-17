'use client';
import { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { motion } from 'framer-motion';

const mathJaxConfig = {
  loader: { load: ['[tex]/ams'] },
  tex: {
    packages: { '[+]': ['ams'] },
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
  },
};

interface Example {
  question: string;
  solution: string;
}

const examples: Example[] = [
  {
    question: '🎯 Example 1: What is the probability of getting a Head when a coin is tossed?',
    solution: '\\( P(\\text{Head}) = \\frac{1}{2} \\)',
  },
  {
    question: '🎯 Example 2: What is the probability of getting an even number on a die?',
    solution: '\\( P(\\text{Even}) = \\frac{3}{6} = \\frac{1}{2} \\)',
  },
];

export const Examples = () => {
  const [revealed, setRevealed] = useState<boolean[]>(examples.map(() => false));

  const toggleReveal = (index: number) => {
    setRevealed((prev) => prev.map((r, i) => (i === index ? !r : r)));
  };

  return (
    <MathJaxContext version={3} config={mathJaxConfig}>
      <div className="px-6 py-4">
        <h2 className="text-2xl text-[#76a40b] font-bold mb-5 text-center">🧮More Examples</h2>

        <div className="space-y-6">
          {examples.map((ex, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg p-4 border"
            >
              <p className="font-medium">{ex.question}</p>

              <button
                className="mt-2 text-sm text-blue-600 hover:underline focus:outline-none"
                onClick={() => toggleReveal(index)}
              >
                {revealed[index] ? 'Hide Solution ❌' : 'Show Solution ✅'}
              </button>

              {revealed[index] && (
                <MathJax className="mt-3 text-lg text-green-700">
                  {ex.solution}
                </MathJax>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </MathJaxContext>
  );
};
