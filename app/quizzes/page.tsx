"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import quizzes from "../data/quiztopic";

export default function QuizzesPage() {
  const router = useRouter();
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-6 bg-gray-100 mt-6">
      <h1 className="text-3xl font-bold text-center mb-6">Available Quizzes</h1>
      <h3 className="text-xl font-medium text-center mb-6">"Solve, Learn, and Conquer! 🎯 Pick a Math Quiz to Get Started!"</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <div
            key={quiz.topic}
            className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:bg-blue-100 transition"
            onClick={() => setSelectedQuiz(quiz.topic)} // Open modal
          >
            <h2 className="text-xl font-semibold">{quiz.name}</h2>
            <p className="text-gray-600">{quiz.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for Quiz Confirmation */}
      {selectedQuiz && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <h2 className="text-xl font-bold">Ready to take the quiz?</h2>
            <p className="text-gray-600 mb-4">Click the Start button to begin!</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
                onClick={() => {
                  router.replace(`/quizzes/${selectedQuiz}`);
                  setSelectedQuiz(null); // Close modal
                }}
              >
                Start Quiz
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-black rounded-md cursor-pointer"
                onClick={() => setSelectedQuiz(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
