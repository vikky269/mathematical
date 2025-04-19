'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import { DndContext, useDraggable } from '@dnd-kit/core';
import ShapeQuiz from '@/app/components/quadilaterals/ShapeQuiz';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import QuadSquadInfo from '@/app/components/quadilaterals/QuadInfo';

const LottieAnimation = dynamic(() => import('@/app/components/LottieAnimation/LottieAnimation'), {
  ssr: false,
});

const SquareAnimation = dynamic(() => import('@/app/components/LottieAnimation/SquareAnimation'), {
  ssr: false,
});







interface Shape {
  id: string;
  name: string;
  image: string;
  description: string;
  color: string;
  position: { x: number; y: number }; // Position for the shape
}

const initialShapes: Shape[] = [
  {
    id: 'square',
    name: 'Super Square',
    image: '/square.png',
    description: 'All sides equal & all right angles!',
    color: 'bg-red-200',
    position: { x: 0, y: 0 },
  },
  {
    id: 'rectangle',
    name: 'Rectangle Rex',
    image: '/rectangle.png',
    description: 'Opposite sides equal & all right angles.',
    color: 'bg-green-200',
    position: { x: 0, y: 0 },
  },
  {
    id: 'trapezoid',
    name: 'Tricky Trapezoid',
    image: '/trapezium.png',
    description: 'Only one pair of parallel sides.',
    color: 'bg-orange-200',
    position: { x: 0, y: 0 },
  },
  {
    id: 'rhombus',
    name: 'Rambunctious Rhombus',
    image: '/rhombus.png',
    description: 'All sides equal, no right angles.',
    color: 'bg-yellow-200',
    position: { x: 0, y: 0 },
  },
  {
    id: 'kite',
    name: 'Kitty Kite',
    image: '/kite.png',
    description: 'All sides equal, flies high with style!',
    color: 'bg-blue-200',
    position: { x: 0, y: 0 },
  }
];

const DraggableShape = ({ shape, onDragEnd }: { shape: Shape; onDragEnd: (id: string, x: number, y: number) => void }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: shape.id,
  });

  const style: React.CSSProperties = {
    transform: transform ? `translate(${transform.x + shape.position.x}px, ${transform.y + shape.position.y}px)` : undefined,
    position: 'absolute',
    cursor: 'grab',
  };

  const handleDragEnd = () => {
    if (transform) {
      onDragEnd(shape.id, transform.x + shape.position.x, transform.y + shape.position.y);
    }
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} onMouseUp={handleDragEnd}>
      <Image
        src={shape.image}
        alt={shape.name}
        width={60}
        height={60}
      />
    </div>
  );
};

const QuadSquadPage = () => {
  const [selectedShape, setSelectedShape] = useState<Shape | null>(null);
  const [shapes, setShapes] = useState<Shape[]>(initialShapes);

  const handleDragEnd = (id: string, x: number, y: number) => {
    setShapes(prevShapes =>
      prevShapes.map(shape =>
        shape.id === id ? { ...shape, position: { x, y } } : shape
      )
    );
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center max-sm:text-[30px] text-[27px] md:text-4xl font-bold mb-6">🎉 Meet the Quad Squad! 🎉</h1>

      <div className="flex flex-wrap md:flex-wrap justify-center gap-4">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="w-40 h-52 cursor-pointer perspective"
            onClick={() => setSelectedShape(shape)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ rotateY: 180 }}
              className={cn(
                'relative w-full h-full rounded-xl shadow-xl transition-transform duration-500 preserve-3d',
                shape.color
              )}
            >
              <div className="absolute backface-hidden w-full h-full flex flex-col items-center justify-center p-2">
                <Image
                  src={shape.image}
                  alt={shape.name}
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <p className="font-semibold text-center">{shape.name}</p>
              </div>
              <div className="absolute backface-hidden rotateY-180 w-full h-full flex items-center justify-center p-2">
                <p className="text-sm text-center font-medium">{shape.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Playground */}
      <h2 className="mt-12 text-2xl font-bold text-center">🧩 Shape Playground</h2>
      <p className="text-center text-gray-700 mb-4">Drag the shapes into the play area!</p>

      <DndContext>
        <div className="relative w-full h-[400px] bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 overflow-hidden">
          {shapes.map((shape) => (
            <DraggableShape key={shape.id} shape={shape} onDragEnd={handleDragEnd} />
          ))}
        </div>
      </DndContext>

      {selectedShape && (
        <motion.div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-md border"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-semibold text-center">🔍 {selectedShape.name}</p>
          <p className="text-sm text-center text-gray-600">{selectedShape.description}</p>
        </motion.div>
      )}


      <h2 className="mt-12 text-2xl md:text-4xl font-bold text-center">📚 Learn More about the Quad Squad</h2>
      <QuadSquadInfo />

      <div className='grid grid-cols-2'>
        <div className='flex flex-col items-center justify-center mt-8 cursor-pointer'>
          <span className='font-semibold'>Rectangle</span>
        <LottieAnimation />
        </div>
       
       <div className='flex flex-col items-center justify-center mt-8 cursor-pointer'>
        <span className='font-semibold'>Square Grid</span>
       <SquareAnimation />
       </div>
      </div>

      

      <div className='mt-8'>
        <h2 className='text-2xl text-[#76a40b] font-bold mb-4 text-center'>🧠 QUICK PUZZLE</h2>
        <ShapeQuiz />
      </div>

      <button className="mt-10 block">
        <Link href="/quizzes/geometry" className="mt-6 px-4 py-2 bg-[#0C2D48] text-white cursor-pointer rounded-md hover:bg-[#1e2735]">
          Take quiz
        </Link>
      </button>
    </div>
  );
};

export default QuadSquadPage;
