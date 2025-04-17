'use client';
import { AnimatedCoinToss } from "../components/probability/AnimatedCoin";
import { SolvedExamples } from "../components/probability/ProbabilityExamples";
import { PracticeQuestions } from "../components/probability/ProbabilityPractice";
import { TakeHomeAssignment } from "../components/probability/ProbabilityAssignment";
import { PracticeQuiz } from "../components/probability/Practicequiz";
import { ProbabilityIntro } from "../components/probability/ProbabilityIntro";
import { Examples } from "../components/probability/SolvedExamples";
import Link from "next/link";
import Image from "next/image";


export default function ProbabilityPage() {
  return (
    <main className="text-gray-800">
      <section className="text-center py-6">
        <h1 className="text-4xl font-extrabold text-[#76a40b]">🧠 Learn Probability</h1>
        <p className="mt-2 text-lg text-gray-600">Let’s find the odds and make learning fun!</p>
      </section>
       <Image src="/probability.png" alt="PEMDAS" width={500} height={500} className="mx-auto mt-6 cursor-pointer hover:scale-y-[1.02]" />
      <ProbabilityIntro />
      <AnimatedCoinToss />
      <SolvedExamples />
      <Examples />
      <PracticeQuiz />
        <PracticeQuestions />
        <TakeHomeAssignment />
        <button className="mt-10">
                  <Link href="/quizzes/probability" className="mt-6 px-4 py-2 bg-[#0C2D48] text-white cursor-pointer rounded-md hover:bg-[#1e2735]">
                      Take quiz
                  </Link>
              </button>
    </main>
  );
}
