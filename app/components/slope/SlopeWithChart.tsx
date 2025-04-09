"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { toPng } from 'html-to-image';
import download from "downloadjs";
import { MathJax, MathJaxContext } from "better-react-mathjax";

ChartJS.register(LineElement, LinearScale, PointElement, Tooltip, Legend, Title);

const SlopeCalculatorWithChart: React.FC = () => {
  const [points, setPoints] = useState([
    { x: 1, y: 2 },
    { x: 4, y: 6 },
  ]);
  const [slope, setSlope] = useState<string | null>(null);
  const [steps, setSteps] = useState<string[]>([]);
  const chartRef = useRef<HTMLDivElement>(null);

  const handlePointChange = (index: number, axis: "x" | "y", value: number) => {
    const updatedPoints = [...points];
    updatedPoints[index][axis] = value;
    setPoints(updatedPoints);
  };

  const addPoint = () => {
    setPoints([...points, { x: 0, y: 0 }]);
  };

  const calculateSlope = () => {
    if (points.length < 2) return;
    const [p1, p2] = points;
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const newSteps = [
      `x_2 - x_1 = ${p2.x} - ${p1.x} = ${dx}`,
      `y_2 - y_1 = ${p2.y} - ${p1.y} = ${dy}`,
    ];
    if (dx === 0) {
      newSteps.push("Slope is undefined due to division by zero.");
      setSlope("Undefined");
    } else {
      const result = (dy / dx).toFixed(2);
      newSteps.push(`Slope = \\frac{${dy}}{${dx}} = ${result}`);
      setSlope(result);
    }
    setSteps(newSteps);
  };


const exportChart = () => {
    if (!chartRef.current) return;
    toPng(chartRef.current)
      .then((dataUrl) => {
        download(dataUrl, "slope-chart.png");
      })
      .catch((error) => {
        console.error("Failed to export chart image:", error);
      });
  };

  const chartData = {
    datasets: [
      {
        label: "Line Through Points",
        data: points,
        borderColor: "#0C2D48",
        backgroundColor: "#0C2D48",
        fill: false,
        tension: 0,
        pointRadius: 5,
      },
    ],
  };


//     responsive: true,
//     plugins: {
//       legend: { display: false },
//     },
//     scales: {
//       x: {
//         type: "linear" as const,
//         position: "bottom",
//         title: {
//           display: true,
//           text: "x-axis",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "y-axis",
//         },
//       },
//     },
//   };
const chartOptions = {
    responsive: true,
    scales: {
      x: {
        type: "linear" as const,
        position: "bottom" as const,
        title: {
          display: true,
          text: "X-Axis",
        },
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        type: "linear" as const,
        title: {
          display: true,
          text: "Y-Axis",
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  return (
    <MathJaxContext>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 max-w-3xl mx-auto rounded-xl shadow-md mt-8 max-md:overflow-x-hidden"
      >
        <h2 className="text-xl font-bold mb-4">Interactive Slope Calculator + Graph</h2>

        {points.map((pt, idx) => (
          <div key={idx} className="grid grid-cols-2 gap-4 mb-2">
            <input
              type="number"
              value={pt.x}
              onChange={(e) => handlePointChange(idx, "x", parseFloat(e.target.value))}
              placeholder={`x${idx + 1}`}
              className="p-2 border rounded"
            />
            <input
              type="number"
              value={pt.y}
              onChange={(e) => handlePointChange(idx, "y", parseFloat(e.target.value))}
              placeholder={`y${idx + 1}`}
              className="p-2 border rounded"
            />
          </div>
        ))}

        <div className="flex gap-4 mb-4 mt-6">
          <button onClick={addPoint} className="bg-[#0C2D48] text-white px-4 py-2 rounded cursor-pointer">
            Add Point
          </button>
          <button onClick={calculateSlope} className="bg-[#0C2D48] text-white px-4 py-2 rounded cursor-pointer">
            Calculate Slope
          </button>
          <button onClick={exportChart} className="bg-[#76a40b] text-white px-4 py-2 rounded cursor-pointer">
            Export Chart
          </button>
        </div>

        {slope !== null && (
          <div className="mt-4">
            <p className="text-lg font-semibold">Slope: <span className="text-indigo-600">{slope}</span></p>
            <div className="mt-2 space-y-1 text-sm">
              {steps.map((step, idx) => (
                <MathJax key={idx}>{`\\(${step}\\)`}</MathJax>
              ))}
            </div>
          </div>
        )}

        <div ref={chartRef} className="mt-6 bg-white rounded shadow p-4">
          <Line data={chartData} options={chartOptions} />
        </div>
      </motion.div>
    </MathJaxContext>
  );
};

export default SlopeCalculatorWithChart;
