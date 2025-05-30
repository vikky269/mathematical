'use client';

import React from 'react';

const MeasurementTable: React.FC = () => {
  const data = [
    { unit: 'Centimeters', abbreviation: 'Cm' },
    { unit: 'Meters', abbreviation: 'm' },
    { unit: 'Kilometers', abbreviation: 'km' },
    { unit: 'Millimeters', abbreviation: 'mm' },
    { unit: 'Miles', abbreviation: 'mi' },
    { unit: 'Yards', abbreviation: 'yd' },
    { unit: 'Feet/Foot', abbreviation: 'ft' },
    { unit: 'Inches', abbreviation: 'in' },
    { unit: 'Milligrams', abbreviation: 'mg' },
    { unit: 'Grams', abbreviation: 'g' },
    { unit: 'Kilograms', abbreviation: 'kg' },
    { unit: 'Centigrams', abbreviation: 'cg' },
    { unit: 'Pounds', abbreviation: 'p' },
    { unit: 'Ounces', abbreviation: 'oz' },
    { unit: 'Tonnes', abbreviation: 't' },
    { unit: 'Ton', abbreviation: 't' },
    { unit: 'litres', abbreviation: 'l' },
    { unit: 'Millilitres', abbreviation: 'ml' },
    { unit: 'Kilolitres', abbreviation: 'kl' },
    { unit: 'fluid ounce', abbreviation: 'fl oz' },
    { unit: 'cup', abbreviation: 'c' },
    { unit: 'pint', abbreviation: 'pt' },
    { unit: 'quart', abbreviation: 'qt' },
    { unit: 'kelvin', abbreviation: 'K' },
    { unit: 'Farenheit', abbreviation: 'F' },
    { unit: 'celcius', abbreviation: 'C' },
    { unit: 'Hectare', abbreviation: 'ha' },
    { unit: 'Acre', abbreviation: 'ac' },
    { unit: 'Square Kilometre', abbreviation: 'km²' },
    { unit: 'Square Metre', abbreviation: 'm²' },
    { unit: 'Square Centimetre', abbreviation: 'cm²' },
    { unit: 'Square Mile', abbreviation: 'mi²' },
    { unit: 'Square Yard', abbreviation: 'yd²' },
    { unit: 'Square Foot', abbreviation: 'ft²' },
    { unit: 'Square Inch', abbreviation: 'in²' },
  ];

  return (
    <div className="overflow-x-auto mt-8">
      <table className="w-full table-auto border border-yellow-400 bg-yellow-50 text-left">
        <thead>
          <tr className="bg-yellow-600 text-gray-800">
            <th className="px-4 py-3 font-semibold border-b border-yellow-300">Measurement Unit</th>
            <th className="px-4 py-3 font-semibold border-b border-yellow-300">Abbreviated as</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-yellow-100 cursor-pointer">
              <td className="px-4 py-3 border-b border-yellow-100">{row.unit}</td>
              <td className="px-4 py-3 border-b border-yellow-100">{row.abbreviation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeasurementTable;
