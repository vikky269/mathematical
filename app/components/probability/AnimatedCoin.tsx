// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const coinSides = ['Heads', 'Tails'];

// export const AnimatedCoinToss = () => {
//   const [result, setResult] = useState('');
//   const [flipping, setFlipping] = useState(false);

//   const tossCoin = () => {
//     setFlipping(true);
//     setTimeout(() => {
//       const randomSide = coinSides[Math.floor(Math.random() * coinSides.length)];
//       setResult(randomSide);
//       setFlipping(false);
//     }, 1000);
//   };

//   return (
//     <div className="text-center mt-6">
//       <motion.div
//         animate={{ rotateY: flipping ? 360 : 0 }}
//         transition={{ duration: 1 }}
//         className="w-24 h-24 bg-yellow-400 mx-auto rounded-full flex items-center justify-center text-xl font-bold shadow-lg"
//       >
//         {result || ''}
//       </motion.div>
//       <button
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         onClick={tossCoin}
//         disabled={flipping}
//       >
//         Toss Coin
//       </button>
//       {result && <p className="mt-2 font-medium text-lg">{`It's ${result}!`}</p>}
//     </div>
//   );
// };

'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const coinSides = ['Heads', 'Tails'];

export const AnimatedCoinToss = () => {
  const [result, setResult] = useState('');
  const [flipping, setFlipping] = useState(false);

  const tossCoin = () => {
    setFlipping(true);
    setTimeout(() => {
      const randomSide = coinSides[Math.floor(Math.random() * coinSides.length)];
      setResult(randomSide);
      setFlipping(false);
    }, 1000);
  };

  const getImage = () => {
    if (result === 'Heads') return '/coin2.png'; // change to your actual image path
    if (result === 'Tails') return '/tail.png';
    return undefined;
  };

  return (
    <div className="text-center mt-6">
      <motion.div
        animate={{ rotateY: flipping ? 360 : 0 }}
        transition={{ duration: 1 }}
        className="w-32 h-32 mx-auto flex items-center justify-center"
      >
        {getImage() ? (
          <img
            src={getImage()}
            alt={result}
            className="w-full h-full object-contain rounded-full shadow-md"
          />
        ) : (
          <div className="w-full h-full bg-yellow-300 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
            🎲
          </div>
        )}
      </motion.div>

      <button
        className="mt-4 px-4 py-2 bg-[#76a40b] text-white rounded hover:bg-[#76a40bcb]"
        onClick={tossCoin}
        disabled={flipping}
      >
        Toss Coin
      </button>

      {result && <p className="mt-2 font-medium text-lg text-[#76a40b]">It's <span className="font-bold text-[#76a40b]">{result}!</span></p>}
    </div>
  );
};
