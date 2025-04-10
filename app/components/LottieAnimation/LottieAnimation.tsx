'use client';

import  Lottie  from 'react-lottie-player';
import rectAnimation from '../../../public/rectangle.json' // Path to the Lottie JSON file.

const LottieAnimation = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        loop
        animationData={rectAnimation}
        play
        className="w-full max-w-[500px] h-auto" // Tailwind CSS classes to adjust size
      />
    </div>
  );
};

export default LottieAnimation;
