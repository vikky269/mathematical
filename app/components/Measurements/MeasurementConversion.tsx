'use client';

import React from 'react';

const conversions = [
  { from: '1 meter', to: '100 centimeters' },
  { from: '1 kilometer', to: '1000 meters' },
  { from: '1 foot', to: '12 inches' },
  { from: '1 yard', to: '3 feet' },
  { from: '1 mile', to: '1760 yards' },
  { from: '1 inch', to: '2.54 centimeters' },
  { from: '1 kilogram', to: '1000 grams' },
  { from: '1 kilogram', to: '2.2 pounds' },
  { from: '1 ton', to: '2000 lbs' },
  { from: '1 pound', to: '0.453 kilograms' },
  { from: '1 hour', to: '60 minutes' },
  { from: '1 minute', to: '60 seconds' },
];

const MeasurementConversion: React.FC = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Measurement Conversion</h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Whenever we need to compare the values of the given quantities or perform arithmetic operations on them,
        we need to have a common unit of measurement. For example, we can add 12 meters to 10 meters to get
        22 meters, but we cannot add 12 meters to 10 inches. In those cases, we use <strong>measurement conversion </strong>
        to convert units into a common one.
        <br />
        <br />
        Whether it’s length, mass, temperature, or time, there are formulas to help convert between units.
        Below is a simple conversion chart you can refer to:
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-yellow-200">
            <tr>
              <th className="text-left py-3 px-4 text-gray-800 font-semibold">From</th>
              <th className="text-left py-3 px-4 text-gray-800 font-semibold">To</th>
            </tr>
          </thead>
          <tbody>
            {conversions.map((conversion, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-yellow-100' : 'bg-yellow-50'}
              >
                <td className="py-2 px-4">{conversion.from}</td>
                <td className="py-2 px-4">{conversion.to}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className='mt-4 text-gray-700'>
             By using these values, we can apply the unitary method to convert a unit to another unit of measurement.
             For example, if 1 inch = 2.54 centimeters, then 5 inches can be calculated by multiplying 5 by 2.54 which will give us 12.7 centimeters.
             In addition to the conversion within the same system of measurement, 
             we can also convert a unit from the metric system to the standard system, and vice-versa as shown in the above example.
        </p>
      </div>
    </section>
  );
};

export default MeasurementConversion;
