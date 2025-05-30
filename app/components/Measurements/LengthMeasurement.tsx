'use client';

import React from 'react';

const lengthConversions = [
  { unit: '1 kilometer', equivalent: '1000 meters' },
  { unit: '1 meter', equivalent: '100 centimeters' },
  { unit: '1 centimeter', equivalent: '10 millimeters' },
  { unit: '1 foot', equivalent: '12 inches' },
  { unit: '1 yard', equivalent: '3 feet' },
  { unit: '1 mile', equivalent: '1760 yards' },
  { unit: '1 inch', equivalent: '2.54 centimeters' },
];

const LengthMeasurement: React.FC = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Measurement of Length</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        To measure length, we use tools like measurement tapes and rulers. We have already discussed units and conversions
        related to the measurement of length. There are two ways to measure length: <strong>informal</strong> and <strong>formal</strong> methods.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <strong>Informal methods:</strong> Using hand spans, threads, or other body-based measurements. These lack exact numerical consistency.
        </li>
        <li>
          <strong>Formal methods:</strong> Using standard units like meters, feet, inches, etc., providing structure and accuracy.
        </li>
      </ul>

      <p className="mb-4 text-gray-700">
        Below is a table showing some standard units and their conversions for measuring length:
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-yellow-200">
            <tr>
              <th className="text-left py-3 px-4 text-gray-800 font-semibold">Unit</th>
              <th className="text-left py-3 px-4 text-gray-800 font-semibold">Equivalent</th>
            </tr>
          </thead>
          <tbody>
            {lengthConversions.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-yellow-100' : 'bg-yellow-50'}>
                <td className="py-2 px-4">{item.unit}</td>
                <td className="py-2 px-4">{item.equivalent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LengthMeasurement;
