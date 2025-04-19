import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const shapes = [
  {
    id: 'square',
    name: 'Super Square',
    image: '/square.png',
    description: 'All sides equal & all right angles!',
    details: 'A square is a special type of rectangle and rhombus. All its angles are 90°, and all its sides are equal in length.',
    color: 'bg-red-200'
  },
  {
    id: 'rectangle',
    name: 'Rectangle Rex',
    image: '/rectangle.png',
    description: 'Opposite sides equal & all right angles.',
    details: 'A rectangle has opposite sides that are equal and four right angles. Unlike squares, not all sides are necessarily equal.',
    color: 'bg-green-200'
  },
  {
    id: 'trapezoid',
    name: 'Tricky Trapezoid',
    image: '/trapezium.png',
    description: 'Only one pair of parallel sides.',
    details: 'A trapezoid has only one pair of parallel sides. The other sides can be of different lengths and angles.',
    color: 'bg-orange-200'
  },
  {
    id: 'rhombus',
    name: 'Rambunctious Rhombus',
    image: '/rhombus.png',
    description: 'All sides equal, no right angles.',
    details: 'A rhombus has four equal sides but doesn’t necessarily have right angles. Its opposite angles are equal.',
    color: 'bg-yellow-200'
  },
  {
    id: 'kite',
    name: 'Kitty Kite',
    image: '/kite.png',
    description: 'All sides equal, flies high with style!',
    details: 'A kite has two distinct pairs of adjacent sides that are equal. Its diagonals intersect at right angles, but it typically lacks parallel sides.',
    color: 'bg-blue-200'
  },
];

export default function QuadSquadInfo() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {shapes.map((shape, index) => (
        <motion.div
          key={shape.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Card className={`rounded-2xl shadow-md ${shape.color} p-4 cursor-pointer`}>
            <CardContent className="flex flex-col items-center text-center">
              <img src={shape.image} alt={shape.name} className="w-24 h-24 mb-4" />
              <h2 className="text-xl font-bold mb-2">{shape.name}</h2>
              <p className="text-sm font-medium mb-2">{shape.description}</p>
              <p className="text-sm text-gray-700">{shape.details}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
