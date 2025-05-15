'use client';

import { motion } from 'framer-motion';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ['[tex]/require', '[tex]/ams'] },
  tex: {
    packages: ['base', 'ams'],
  },
};

const ExpressionTypes = () => (
  <MathJaxContext config={config}>
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className=" max-w-3xl mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-[#1f2937]">
        Types of Algebraic Expressions
      </h2>

      <div className="space-y-4 text-gray-800 text-lg">
        <div>
          <strong>Monomial:</strong>{' '}
          <MathJax inline>{`\\( 3xy \\)`}</MathJax>
        </div>
        <div>
          <strong>Binomial:</strong>{' '}
          <MathJax inline>{`\\( \\frac{3}{4}x - 2y^2 \\)`}</MathJax>
        </div>
        <div>
          <strong>Trinomial:</strong>{' '}
          <MathJax inline>{`\\( 3x - 2y + z \\)`}</MathJax>
        </div>
        <div>
          <strong>Polynomial:</strong>{' '}
          <MathJax inline>{`\\( -\\frac{2}{3}x^3 + 7x^2 + 3x + 5 \\)`}</MathJax>
        </div>
        <div>
          <strong>Multinomial:</strong>{' '}
          <MathJax inline>{`\\( 4x^{-1} + 2y + 3z \\)`}</MathJax>
        </div>
      </div>
    </motion.section>
  </MathJaxContext>
);

export default ExpressionTypes;

