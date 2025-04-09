"use client";
import React from "react";
import { motion } from "framer-motion";
import { MathJax } from "better-react-mathjax";

const SlopeCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-md sm:max-w-xl overflow-hidden shadow-lg text-center mt-12 p-4 rounded-md"
    >
      <img
        src="/slope-preview.png"
        alt="Understand Slope"
        className="mx-auto rounded-md w-64 h-auto"
      />

      

      <div className="text-sm md:text-xl text-gray-800 mt-8 space-y-4">
        <div className="text-xs md:text-xl font-semibold text-gray-800">
          <MathJax inline>
            {
              "\\( \\text{The slope of a line tells us how steep it is.} \\)"
            }
          </MathJax>
          
          

          <MathJax inline className="mt-">
            {
              "\\( \\text{Use the formula:} \\)"
            }
          </MathJax>
        </div>
        
              <div className="text-xs md:text-xl font-semibold text-gray-800 mt-4">
                  <MathJax inline>
                      {"\\( \\text{Slope} = \\frac{\\text{Rise}}{\\text{Run}} \\)"}
                  </MathJax>
              </div>

        {/* <div className="text-xs md:text-xl font-semibold text-gray-800">
          <MathJax inline>
            {
              "\\( \\text{For 2 points } (x_1, y_1) \\text{ and } (x_2, y_2), \\text{ the slope } \\text{ is calculated as:} \\)"
            }
          </MathJax>
        </div> */}
      </div>

      <div className="rounded mt-6 text-lg md:text-3xl font-semibold text-gray-800">
        <MathJax>{"\\( m = \\frac{y_2 - y_1}{x_2 - x_1} \\)"}</MathJax>
      </div>
    </motion.div>
  );
};

export default SlopeCard;
