'use client';
import { motion } from 'framer-motion';

export const SolvedExamples = () => {
  return (
    <motion.div
      className="mt-8 bg-white p-6 rounded-lg shadow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-4 text-blue-700">🧠 Solved Example</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
          <p><strong>Example 1:</strong> What is the probability of getting a 4 when a die is rolled?</p>
          <p className="mt-2">→ Total outcomes = 6</p>
          <p>→ Favorable outcomes = 1 (only one face has 4)</p>
          <p><strong>Answer:</strong> 1/6</p>
        </div>
      </div>
    </motion.div>
  );
};
