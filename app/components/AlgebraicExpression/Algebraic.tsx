"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const MathJax = dynamic(() => import("better-react-mathjax").then(mod => mod.MathJax), { ssr: false });
const MathJaxContext = dynamic(() => import("better-react-mathjax").then(mod => mod.MathJaxContext), { ssr: false });

const config = {
  loader: { load: ["input/asciimath", "output/chtml"] },
};

const examples = [
  {
    id: 1,
    title: "Combining Like Terms",
    expression: "3x + 4x = 7x",
    explanation: "When terms have the same variable (x), we can add their coefficients."
  },
  {
    id: 2,
    title: "Distributive Property",
    expression: "2(3x + 4) = 6x + 8",
    explanation: "Multiply the number outside the bracket with each term inside."
  },
  {
    id: 3,
    title: "Solving Simple Equation",
    expression: "x + 5 = 9 => x = 4",
    explanation: "Subtract 5 from both sides to isolate x."
  },
];

export default function AlgebraicExpressions() {
  return (
    <MathJaxContext version={3} config={config}>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Algebraic Expressions</h1>

        <p className="text-lg mb-6 text-gray-700">
          Algebraic expressions are combinations of variables, numbers, and at least one operation.
          Example: <MathJax inline>{"3x + 5"}</MathJax>
        </p>

        <Tabs defaultValue="intro" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="intro">Introduction</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="tips">Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="intro">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-800"
            >
              <p className="mb-2">Variables are symbols like x or y that stand in for numbers.</p>
              <p>Constants are fixed values, like 3 or 7.</p>
            </motion.div>
          </TabsContent>

          <TabsContent value="examples">
            <div className="space-y-4">
              {examples.map(example => (
                <motion.div
                  key={example.id}
                  className="bg-blue-50 rounded-xl p-4 shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold text-blue-600 mb-2">{example.title}</h2>
                  <p className="text-gray-700">
                    <strong>Expression:</strong> <MathJax>{example.expression}</MathJax>
                  </p>
                  <p className="mt-1 text-gray-600 italic">{example.explanation}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="list-disc pl-6 text-gray-800"
            >
              <li>Always combine like terms when possible.</li>
              <li>Use the distributive property to remove parentheses.</li>
              <li>To isolate a variable, do the opposite operation on both sides.</li>
            </motion.ul>
          </TabsContent>
        </Tabs>
      </div>
    </MathJaxContext>
  )
}


