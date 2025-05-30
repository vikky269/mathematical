import React from "react";

const data = [
  {
    title: "Metric System",
    rows: [
      "1 cm = 10 mm",
      "1 m = 100 cm",
      "1 m = 1000 mm",
      "1 km = 1000 m"
    ]
  },
  {
    title: "US Standard System",
    rows: [
      "1 feet = 12 inches",
      "1 yard = 3 feet",
      "1 yard = 36 inches",
      "1 mile = 1760 yards",
      "1 mile = 5280 feet"
    ]
  },
  {
    title: "Metric to US Standard System",
    rows: [
      "1 cm = 0.3937 inches",
      "1 m = 39.37 inches",
      "1 m = 3.28 feet",
      "1 km = 3280.84 feet",
      "1 km = 0.62 miles",
      "1 km = 1093.61 yards"
    ]
  },
  {
    title: "US Standard to Metric System",
    rows: [
      "1 inch = 2.54 cm",
      "1 foot = 30.48 cm",
      "1 yard = 91.44 cm",
      "1 foot = 0.3048 m",
      "1 mile = 1.6 km",
      "1 mile = 1609.34 m",
      "1 yard = 0.9144 m"
    ]
  }
];

export default function ConversionTable() {
  return (
    <div className="min-h-screen mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((section, index) => (
          <div key={index} className=" p-4 border border-yellow-200">
            <h2 className="text-xl font-bold text-black mb-2">{section.title}</h2>
            <ul className="list-disc list-inside text-gray-800">
              {section.rows.map((row, i) => (
                <li key={i}>{row}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
