"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

const SlopeCalculator: React.FC = () => {
  const [x1, setX1] = useState('');
  const [y1, setY1] = useState('');
  const [x2, setX2] = useState('');
  const [y2, setY2] = useState('');
  const [slope, setSlope] = useState<string | null>(null);
  const [steps, setSteps] = useState<string[]>([]);

  const calculateSlope = () => {
    const dx = parseFloat(x2) - parseFloat(x1);
    const dy = parseFloat(y2) - parseFloat(y1);

    const formattedSteps = [
      `\\text{Step 1: } x_2 - x_1 = ${x2} - ${x1} = ${dx}`,
      `\\text{Step 2: } y_2 - y_1 = ${y2} - ${y1} = ${dy}`,
    ];

    if (dx === 0) {
      setSlope('Undefined');
      formattedSteps.push(`\\text{Step 3: Division by zero} \\Rightarrow \\text{Slope is undefined}`);
    } else {
      const result = (dy / dx).toFixed(2);
      setSlope(result);
      formattedSteps.push(`\\text{Step 3: Slope} = \\frac{${dy}}{${dx}} = ${result}`);
    }

    setSteps(formattedSteps);
  };

  return (
    <MathJaxContext version={3}>
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="p-6 max-w-md mx-auto rounded-xl shadow-md"
      >
        <h2 className="text-xl font-bold mb-4">Interactive Slope Calculator</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="number" value={x1} onChange={e => setX1(e.target.value)} placeholder="x1" className="p-2 border rounded" />
          <input type="number" value={y1} onChange={e => setY1(e.target.value)} placeholder="y1" className="p-2 border rounded" />
          <input type="number" value={x2} onChange={e => setX2(e.target.value)} placeholder="x2" className="p-2 border rounded" />
          <input type="number" value={y2} onChange={e => setY2(e.target.value)} placeholder="y2" className="p-2 border rounded" />
        </div>
        <button onClick={calculateSlope} className="bg-[#0C2D48] cursor-pointer text-white px-4 py-2 rounded">Calculate Slope</button>
        
        {slope !== null && (
          <div className="mt-4">
            <p className="text-lg font-semibold">
              Slope: <span className="text-indigo-600">{slope}</span>
            </p>
            <div className="mt-2 space-y-2 text-sm">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <MathJax>{`\\(${step}\\)`}</MathJax>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </MathJaxContext>
  );
};

export default SlopeCalculator;

