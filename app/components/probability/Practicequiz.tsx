'use client';
import { useState } from 'react';

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const questions: Question[] = [
  {
    question: 'What is the probability of getting a 3 on a fair 6-sided die?',
    options: ['1/2', '1/3', '1/6', '1/5'],
    answer: '1/6',
  },
  {
    question: 'How many outcomes are possible when flipping a coin?',
    options: ['1', '2', '4', '6'],
    answer: '2',
  },
  {
    question: 'What is the probability of picking a red ball from 3 red and 2 blue balls?',
    options: ['3/5', '2/3', '1/2', '1/3'],
    answer: '3/5',
  },
];

export const PracticeQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [feedback, setFeedback] = useState('');

  const checkAnswer = (option: string) => {
    const correct = questions[currentQ].answer;
    setFeedback(option === correct ? '✅ Correct!' : '❌ Try Again.');
  };

  return (
    <div className="px-6 py-4 text-center">
      <h2 className="text-2xl font-bold text-[#76a40b] mb-3">Practice Questions</h2>
      <p className="mb-2">{questions[currentQ].question}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {questions[currentQ].options.map((option) => (
          <button
            key={option}
            className="px-4 py-2 border border-[#76a40b] rounded hover:bg-[#76a40b] hover:text-white cursor-pointer"
            onClick={() => checkAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="mt-3 text-lg">{feedback}</p>
      {feedback && (
        <button
          className="mt-4 px-4 py-2 bg-[#76a40b] text-white rounded cursor-pointer"
          onClick={() => {
            setCurrentQ((prev) => (prev + 1) % questions.length);
            setFeedback('');
          }}
        >
          Next Question
        </button>
      )}
    </div>
  )
}
