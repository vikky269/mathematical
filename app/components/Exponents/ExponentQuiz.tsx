"use client";
import React, { useState } from 'react';

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const questions: Question[] = [
  {
    question: 'What is 2³?',
    options: ['6', '8', '9', '12'],
    correctAnswer: '8',
  },
  {
    question: 'Which expression is equal to 5⁰?',
    options: ['0', '1', '5', 'Undefined'],
    correctAnswer: '1',
  },
  {
    question: 'What is 3⁻²?',
    options: ['9', '1/6', '1/9', '3'],
    correctAnswer: '1/9',
  },
  {
    question: 'Which of the following equals 49^(1/2)?',
    options: ['7', '14', '9.8', '2'],
    correctAnswer: '7',
  },
  {
    question: 'What is the value of 10000 in scientific notation?',
    options: ['1 × 10²', '1 × 10³', '1 × 10⁴', '1 × 10⁵'],
    correctAnswer: '1 × 10⁴',
  },
  {
    question: 'Which of the following is equivalent to (2²)³?',
    options: ['2⁵', '2⁶', '2⁸', '4⁶'],
    correctAnswer: '2⁶',
  },
];

const ExponentQuiz = () => {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setAnswers(Array(questions.length).fill(''));
    setScore(null);
    setSubmitted(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Exponents Quiz</h2>

      {questions.map((q, index) => {
        const userAnswer = answers[index];
        const isCorrect = userAnswer === q.correctAnswer;

        return (
          <div key={index} className="mb-6 border-b pb-4">
            <p className="font-semibold mb-2">
              {index + 1}. {q.question}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
              {q.options.map((option, optIndex) => {
                const isSelected = userAnswer === option;
                const correct = submitted && option === q.correctAnswer;
                const wrongSelected = submitted && isSelected && !isCorrect;

                return (
                  <label
                    key={optIndex}
                    className={`flex items-center space-x-2 px-2 py-1 rounded 
                    ${correct ? 'bg-green-100 text-green-800 font-semibold' : ''}
                    ${wrongSelected ? 'bg-red-100 text-red-800 font-semibold' : ''}`}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={isSelected}
                      onChange={() => handleChange(index, option)}
                      disabled={submitted}
                    />
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>

            {submitted && (
              <div className="flex items-center space-x-2">
                <span className={`text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span>
                {!isCorrect && (
                  <span className="text-gray-700">
                    Correct Answer: <span className="font-medium">{q.correctAnswer}</span>
                  </span>
                )}
              </div>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold text-green-600 mb-4">
            You scored {score} out of {questions.length}!
          </p>
          <button
            onClick={handleRetry}
            className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default ExponentQuiz;

