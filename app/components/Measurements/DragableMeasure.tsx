"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function InteractiveMeasurementTool() {
  const [start, setStart] = useState<number | null>(null);
  const [end, setEnd] = useState<number | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (start === null) {
      setStart(x);
      setEnd(null);
    } else if (end === null) {
      setEnd(x);
    } else {
      setStart(x);
      setEnd(null);
    }
  };

  const measuredLength =
    start !== null && end !== null ? Math.abs(end - start) : null;
  const convertedLength = measuredLength ? (measuredLength / 10).toFixed(1) : '—';

  return (
    <div className="bg-gradient-to-br from-pink-100 to-blue-100 min-h-screen p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-4 animate-bounce">
        🎨 Measurement Playground
      </h2>
      <p className="text-center text-lg text-gray-700 mb-4 max-w-lg">
        Tap on the start and end of the object to measure it! Drag the cartoon ruler too! 📏✨
      </p>

      <div
        onClick={handleClick}
        className="relative mx-auto w-full max-w-2xl h-56 bg-white shadow-lg border border-dashed border-purple-300 rounded-lg cursor-crosshair"
      >
        <Image
          src="/pencil-cartoon.jpg"
          alt="Pencil"
          fill
          className="object-contain"
        />

        {start !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-0 h-full border-l-4 border-green-500"
            style={{ left: `${start}px` }}
          />
        )}

        {end !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-0 h-full border-l-4 border-red-500"
            style={{ left: `${end}px` }}
          />
        )}

        {start !== null && end !== null && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-purple-900 font-semibold text-sm px-3 py-2 rounded-full shadow"
          >
            📐 Measured: {convertedLength} cm
          </motion.div>
        )}
      </div>

          <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 500 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-72 h-10 bg-yellow-400 border-4 border-blue-500 text-center flex items-center justify-center rounded-full text-xl text-white shadow-lg cursor-grab"
          >
              🛠️ Drag Me (Cartoon Ruler!)
          </motion.div>

      <div className="mt-6 text-center text-sm text-gray-600">
        ✨ Try measuring more objects and learn how units work!
      </div>
    </div>
  );
}
