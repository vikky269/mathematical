"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { toPng } from "html-to-image";
import download from "downloadjs";

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend);

const SlopeChart: React.FC = () => {
  const [points, setPoints] = useState([
    { x: 1, y: 2 },
    { x: 4, y: 5 },
  ]);

  const addPoint = () => {
    const last = points[points.length - 1];
    setPoints([...points, { x: last.x + 1, y: last.y + 1 }]);
  };

  const handleDrag = (index: number, axis: "x" | "y", value: number) => {
    const newPoints = [...points];
    newPoints[index] = { ...newPoints[index], [axis]: value };
    setPoints(newPoints);
  };

  const exportChart = () => {
    const chartEl = document.getElementById("chart-container");
    if (!chartEl) return;
    toPng(chartEl).then((dataUrl) => download(dataUrl, "slope-chart.png"));
  };

  const chartData = {
    datasets: [
      {
        label: "Slope Line",
        data: points,
        fill: false,
        borderColor: "#0070f3",
        backgroundColor: "#0070f3",
        tension: 0.2,
        pointRadius: 6,
        pointHoverRadius: 8,
        showLine: true,
      },
    ],
  };

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
    <div className="p-4">
      <div id="chart-container" className="bg-white rounded-xl shadow-md p-4">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="mt-4 space-y-2">
        {points.map((point, index) => (
          <div key={index} className="flex gap-4 items-center">
            <label>Point {index + 1}</label>
            <input
              type="number"
              value={point.x}
              onChange={(e) => handleDrag(index, "x", Number(e.target.value))}
              className="p-2 border rounded"
            />
            <input
              type="number"
              value={point.y}
              onChange={(e) => handleDrag(index, "y", Number(e.target.value))}
              className="p-2 border rounded"
            />
          </div>
        ))}
        <button
          onClick={addPoint}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Point
        </button>
        <button
          onClick={exportChart}
          className="ml-4 bg-indigo-700 text-white px-4 py-2 rounded"
        >
          Export Chart as Image
        </button>
      </div>
    </div>
  );
};

export default SlopeChart;
