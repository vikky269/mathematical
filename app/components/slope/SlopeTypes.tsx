"use client";
import React from 'react';
import { motion } from 'framer-motion';

const types = [
  { type: 'Positive Slope', description: 'Line rises from left to right.', color: 'text-green-600' },
  { type: 'Negative Slope', description: 'Line falls from left to right.', color: 'text-red-600' },
  { type: 'Zero Slope', description: 'Line is horizontal.', color: 'text-blue-600' },
  { type: 'Undefined Slope', description: 'Line is vertical.', color: 'text-purple-600' },
];


const SlopeTypes: React.FC = () => {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="p-6 max-w-xl mx-auto  rounded-xl shadow-xs space-y-4"
      >
        <ul className="space-y-2">
          {types.map((slope, index) => (
            <li key={index} className="flex items-start">
              <span className={`mr-2 font-semibold ${slope.color}`}>•</span>
              <span><strong>{slope.type}:</strong> {slope.description}</span>
            </li>
          ))}
        </ul>

        <div className='mt-6'>
          <p className="text-lg font-semibold text-gray-800 text-center">Visual Representation:</p>
            <img src="/slopetype.jpg" alt="" className='mt-4 cursor-pointer' />
        </div>
      </motion.div>
    );
  };
  
  export default SlopeTypes;
  
