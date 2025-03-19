"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import quizData from "@/app/data/quizdata";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Timer from "@/app/components/Timer/Timer";

export default function QuizPage() {
  const { topic } = useParams();
  const router = useRouter();
  const questions = quizData[topic as string] || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleAnswerClick = (option: string) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  const handleFinishQuiz = () => {
    setShowScore(true);

    // Show confetti only if the user scores 10/10
    if (score + 1 === 10) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center mt-7">
  
      <h1 className="text-3xl font-bold mb-6">Quiz: {String(topic)?.replace("-", " ")}</h1>
     
      {!showScore && <Timer duration={100} onTimeUp={handleFinishQuiz}  />}

      {/* Confetti Effect */}
      {showConfetti && <Confetti />}

      {showScore ? (
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-bold">
            You scored {score} out of {questions.length}
          </h2>
        
         <Confetti  className="sm:w-100 sm:h-100 md:w-300 md:h-350"/>


          {/* Celebration Message for 10/10 */}
          {score === 10 && (
            <p className="text-green-600 font-semibold text-lg mt-2">🔥 Amazing! You crushed this quiz! 🎉</p>
          )}

          <button
            onClick={() => router.push("/quizzes")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-md hover:bg-blue-700"
          >
            Back to Quizzes
          </button>
        </div>
      ) : questions.length > 0 ? (
        <div className="p-6 bg-white shadow-md rounded-lg w-full max-w-md md:max-w-lg mt-8">
          {/* Progress Tracker */}
          <div className="text-center mb-4 p-2 bg-gray-200 rounded-md font-semibold">
            Question {currentQuestion + 1} of {questions.length}
          </div>

          <h2 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h2>

          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className={`block w-full text-left px-4 py-2 my-2 rounded-md transition-all 
                ${
                  selectedAnswer === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              style={{ cursor: "pointer" }}
            >
              {option}
            </button>
          ))}

          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 rounded-md cursor-pointer ${
                currentQuestion === 0
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gray-500 text-white hover:bg-gray-700"
              }`}
            >
              Previous
            </button>

            {currentQuestion + 1 === questions.length ? (
              <button
                onClick={handleFinishQuiz}
                className="px-4 py-2 bg-green-500 text-white cursor-pointer rounded-md hover:bg-green-700"
              >
                Finish Quiz
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="items-center text-center">
          <h2>No quiz available for this topic.</h2>
          <p className="mt-4">Please select another topic.</p>
          <button
            onClick={() => router.push("/quizzes")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-md hover:bg-blue-700"
          >
            Back to Quizzes
          </button>
        </div>
      )}
    </div>
  );
}

