"use client";
import React, { useState } from "react";
import { Loader } from "lucide-react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/require", "[tex]/ams"] },
  tex: {
    packages: ["base", "ams"],
  },
};

const FractionQuiz = () => {
  const questions = [
    {
      question: "Which of the following is equivalent to \\( \\frac{5}{15} \\)?",
      options: [
        "\\( \\frac{1}{2} \\)",
        "\\( \\frac{1}{3} \\)",
        "\\( \\frac{5}{5} \\)",
        "\\( \\frac{2}{5} \\)",
      ],
      answer: "\\( \\frac{1}{3} \\)",
    },
    {
      question:
        "How many students do not watch cartoons in a class of 48 if \\( \\frac{1}{4} \\) of them do?",
      options: ["24", "12", "36", "40"],
      answer: "36",
    },
    {
      question: "Is \\( \\frac{9}{2} \\) a proper fraction?",
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
  };

  const handleReset = () => {
    setIsResetting(true);
    setTimeout(() => {
      setSelectedAnswers(Array(questions.length).fill(null));
      setShowResult(false);
      setIsResetting(false);
    }, 1500);
  };

  return (
    <MathJaxContext version={3} config={config}>
      <section className="bg-slate-50 p-6 rounded-lg shadow-md mt-6 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Quick Quiz</h2>

        {questions.map((q, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-semibold text-lg">
              <MathJax inline>{q.question}</MathJax>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {q.options.map((option, i) => {
                const isSelected = selectedAnswers[index] === option;
                const isCorrect = showResult && option === q.answer;
                const isWrong = showResult && isSelected && option !== q.answer;

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
                    <MathJax inline>{option}</MathJax>
                  </button>
                );
              })}
            </div>
            {showResult && (
              <p className="text-sm mt-1">
                {selectedAnswers[index] === q.answer ? (
                  <span className="text-green-600">✅ Correct!</span>
                ) : (
                  <span className="text-red-600">
                    ❌ Correct Answer: <MathJax inline>{q.answer}</MathJax>
                  </span>
                )}
              </p>
            )}
          </div>
        ))}

        {/* Action buttons */}
        {!showResult && (
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Answers
          </button>
        )}

        {showResult && (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 bg-gray-800 text-white cursor-pointer px-4 py-2 rounded hover:bg-gray-900"
            disabled={isResetting}
          >
            {isResetting ? (
              <>
                <Loader className="animate-spin" size={18} />
              </>
            ) : (
              "Retake Quiz"
            )}
          </button>
        )}
      </section>
    </MathJaxContext>
  );
};

export default FractionQuiz;

