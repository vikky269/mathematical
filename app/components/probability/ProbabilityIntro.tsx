'use client';
import { motion } from 'framer-motion';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const mathJaxConfig = {
  tex: {
    inlineMath: [['$', '$']],
    displayMath: [['$$', '$$']],
  },
};

export const ProbabilityIntro = () => {
  return (
    <MathJaxContext config={mathJaxConfig} version={3}>
      <motion.div
        className="p-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="lg:text-2xl text-lg font-bold text-yellow-700 mb-2">🎲 What is Probability?</h2>
        <p className="text-lg mb-4">
          Probability is the chance or likelihood of something happening. It's calculated using the formula below:
        </p>
        <div className="md:text-xl text-[15px] font-semibold text-yellow-800">
          <MathJax>
            {"\\[ \\text{Probability} = \\frac{\\text{Favorable Outcomes}}{\\text{Total Outcomes}} \\]"}
          </MathJax>
        </div>
      </motion.div>
    </MathJaxContext>
  );
};

