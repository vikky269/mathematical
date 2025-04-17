'use client';
import { useState } from 'react';

export const PracticeQuestions = () => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleCheck = () => {
    if (answer === '1/2') {
      setFeedback('✅ Correct! There are 3 even numbers out of 6.');
    } else {
      setFeedback('❌ Try again! Think of even numbers from 1 to 6.');
    }
  };

  return (
    <div className="mt-8 bg-green-50/25 p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-[#76a40b] mb-3">📝 Quick Puzzle</h3>
      <p className="mb-2">What is the probability of getting an even number when a die is rolled?</p>
      <input
        placeholder="e.g. 1/2"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onFocus={() => setFeedback('')}
        className="border px-2 py-1 mr-2 rounded"
      />
      <button
        onClick={handleCheck}
        className="bg-[#76a40b] text-white px-4 py-1 rounded cursor-pointer transition"
      >
        Submit
      </button>
      {feedback && <p className="mt-3 font-medium">{feedback}</p>}
    </div>
  );
};
