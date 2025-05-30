'use client';

import React from 'react';

const MeasurementSystems: React.FC = () => {
  const metricUnits = ['Millimeters', 'Centimeters', 'Meters', 'Kilometers'];
  const usStandardUnits = ['Inches', 'Feet', 'Yards', 'Miles'];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Measurement Units</h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        There are various units of measurement depending on its type. For example, the measurement units of length are meters, centimeters, inches, feet, etc. For mass, we have kilograms, grams, pounds, tons, etc.
        <br />
        <br />
        Measurement units can be classified into two types: <strong>Metric System</strong> and the <strong>U.S Standard System (Imperial System)</strong>. While the metric system includes units like millimeters, centimeters, meters, and kilometers, the U.S system includes inches, feet, yards, and miles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Metric System</h3>
          <ul className="list-disc list-inside text-gray-700">
            {metricUnits.map((unit, idx) => (
              <li key={idx}>{unit}</li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-green-800">U.S. Standard System</h3>
          <ul className="list-disc list-inside text-gray-700">
            {usStandardUnits.map((unit, idx) => (
              <li key={idx}>{unit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MeasurementSystems;
