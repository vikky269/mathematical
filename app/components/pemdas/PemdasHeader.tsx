"use client";
import { motion } from 'framer-motion';

export const Header = () => (
  <motion.div
    className="text-center my-8"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-4xl font-bold text-[#76a40b]">Learn PEMDAS</h1>
    <p className="mt-2 text-lg text-gray-600">Master the order of operations with fun characters!</p>
  </motion.div>
);
