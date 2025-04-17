"use client";
import { useState } from 'react';

export const PemdasQuiz = () => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = () => {
    if (parseInt(answer) === 14) {
      setFeedback("✅ Correct! Nice job!");
    } else {
      setFeedback("❌ Try again! Remember PEMDAS.");
    }
  };

  const handleFocus = () => {
    setFeedback('');
  };

  return (
    <div className="mt-5 px-4 text-center">
      <p className="mb-2 text-lg font-medium">What is the result of: 2 + 3 × (4)?</p>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onFocus={handleFocus}
        className="border rounded px-2 py-1 mb-6 mr-2 focus:outline-none focus:ring-2 focus:ring-[#76a40b]"
      />
      <button
        onClick={checkAnswer}
        className="bg-[#76a40b] text-white px-4 py-1 rounded hover:bg-[#76a40bef] transition cursor-pointer"
      >
        Submit
      </button>
      {feedback && <p className="mt-2 font-semibold">{feedback}</p>}
    </div>
  );
};

