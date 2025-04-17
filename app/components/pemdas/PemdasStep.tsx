"use client";
import { motion } from 'framer-motion';

interface StepProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export const PemdasStep: React.FC<StepProps> = ({ icon, title, description, color }) => (
  <motion.div
    className={`flex items-center gap-4 bg-${color}-100 rounded-xl p-4 shadow-md cursor-pointer`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <span className="text-3xl">{icon}</span>
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  </motion.div>
);
