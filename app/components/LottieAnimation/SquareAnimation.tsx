'use client';

import  Lottie  from 'react-lottie-player';
import square from '../../../public/square.json' // Path to the Lottie JSON file.

const SquareAnimation = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        loop
        animationData={square}
        play
        className="w-full max-w-[500px] h-auto" // Tailwind CSS classes to adjust size
      />
    </div>
  );
};

export default SquareAnimation;