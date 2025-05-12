"use client";
import React, { useState, useEffect } from "react";
import { Loader } from "lucide-react";

const FractionQuiz = () => {
  const questions = [
    {
      question: "Which of the following is equivalent to 5/15?",
      options: ["1/2", "1/3", "5/5", "2/5"],
      answer: "1/3",
    },
    {
      question:
        "How many students do not watch cartoons in a class of 48 if 1/4 of them do?",
      options: ["24", "12", "36", "40"],
      answer: "36",
    },
    {
      question: "Is 9/2 a proper fraction?",
      options: ["Yes", "No"],
      answer: "No",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleAnswer = (qIndex: number, option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[qIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResult(true);
    setIsResetting(true);

    setTimeout(() => {
      setSelectedAnswers(Array(questions.length).fill(null));
      setShowResult(false);
      setIsResetting(false);
    }, 5000);
  };

  return (
    <section className="bg-slate-50 p-6 rounded-lg shadow-md mt-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Quick Quiz</h2>
      {questions.map((q, index) => (
        <div key={index} className="space-y-2">
          <h3 className="font-semibold text-lg">{q.question}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {q.options.map((option, i) => {
              const isSelected = selectedAnswers[index] === option;
              const isCorrect = showResult && option === q.answer;
              const isWrong =
                showResult && isSelected && option !== q.answer;

              return (
                <button
                  key={i}
                  disabled={showResult}
                  onClick={() => handleAnswer(index, option)}
                  className={`border rounded px-4 py-2 text-left transition duration-200 ${
                    isCorrect
                      ? "bg-green-200 border-green-500"
                      : isWrong
                      ? "bg-red-200 border-red-500"
                      : isSelected
                      ? "bg-blue-100 border-blue-400"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {showResult && (
            <p className="text-sm mt-1">
              {selectedAnswers[index] === q.answer ? (
                <span className="text-green-600">✅ Correct!</span>
              ) : (
                <span className="text-red-600">❌ Correct Answer: {q.answer}</span>
              )}
            </p>
          )}
        </div>
      ))}
      {!showResult && (
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Answers
        </button>
      )}
      {isResetting && (
        <div className="flex items-center gap-2 text-gray-600 mt-4">
          <Loader className="animate-spin" size={20} />
          {/* <span>Resetting quiz...</span> */}
        </div>
      )}
    </section>
  );
};

export default FractionQuiz;
