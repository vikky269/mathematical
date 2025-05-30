'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const MeasurementOverlay = () => {
  const [measured, setMeasured] = useState<number | null>(null);

  // Fake object width in "virtual cm" for fun guessing
  const correctLength = 7;

  const handleMeasure = (event: any, info: any) => {
    const dragDistance = Math.round(info.point.x / 10); // scale factor
    setMeasured(dragDistance);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-100 to-pink-100 flex flex-col items-center justify-center px-4 py-10 space-y-6">
      <h1 className="text-4xl font-bold text-blue-700 text-center">
        📏 Drag Your Virtual Ruler!
      </h1>
      <p className="text-md text-center text-gray-700 max-w-xl">
        Try dragging the cartoon ruler to measure the object below! Estimate its length in cm.
      </p>

      {/* Cartoon Object */}
      <div className="relative w-full max-w-md h-40 bg-white shadow-xl rounded-xl border-2 border-dashed border-gray-300 flex justify-center items-center">
        <Image
          src="/apple-cartoon.png"
          alt="Cartoon Apple"
          width={100}
          height={100}
          className="z-10"
        />
        <p className="absolute bottom-2 right-2 text-xs text-gray-500">(Measure this!)</p>
      </div>

      {/* Virtual Ruler - Drag Across Object */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 300 }}
        onDragEnd={handleMeasure}
        whileHover={{ scale: 1.05 }}
        className="w-64 h-12 bg-yellow-300 text-blue-800 border-4 border-blue-500 rounded-full flex items-center justify-center font-semibold shadow-md cursor-grab"
      >
        🛠️ Drag Me Across!
      </motion.div>

      {/* Measurement Result */}
      {measured !== null && (
        <div className="text-xl text-purple-700 font-semibold text-center">
          You measured: {measured} cm <br />
          {measured === correctLength ? '🎉 Correct!' : `🤔 Try again! It’s actually ${correctLength} cm.`}
        </div>
      )}
    </div>
  );
};

export default MeasurementOverlay;
