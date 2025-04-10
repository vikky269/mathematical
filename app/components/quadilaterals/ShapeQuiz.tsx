// features/ShapeQuiz.tsx
"use client";
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ShapeQuiz: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const correctAnswer = 'Rectangle';

  const options = ['Rectangle', 'Circle', 'Triangle', 'Pentagon'];

  return (
    <Card className="p-4 text-center">
      <h2 className="text-lg font-semibold mb-4">Which one is a quadrilateral?</h2>
      <div className="grid grid-cols-2 gap-4 cursor-pointer">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`border p-2 rounded cursor-pointer ${
              selected === opt && opt === correctAnswer
                ? 'bg-green-300'
                : selected === opt
                ? 'bg-red-300'
                : 'bg-white'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {selected && (
        <p className="mt-4">
          {selected === correctAnswer ? '✅ Correct!' : '❌ Try Again!'}
        </p>
      )}
    </Card>
  );
};

export default ShapeQuiz;
