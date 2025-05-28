// 1. Introduction.tsx
"use client";
import { motion } from "framer-motion";

const Introduction = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className=""
  >
    <h2 className="text-2xl font-bold text-center mb-4">Fractions</h2>
    <p className="mb-4 md:text-lg">
      A fraction shows part of a whole. This whole can be a region or a collection. The word
      fraction is derived from the Latin word 'fractio' which means 'to break'. The Egyptians
      used fractions to resolve mathematical problems involving division of food, supplies, and
      currency.
    </p>
    <p>
      In Ancient Rome, fractions were written using words. In India, they were first written with
      a numerator and denominator, but without a line. The Arabs introduced the fraction bar we
      use today.
    </p>
  </motion.section>
);

export default Introduction;
