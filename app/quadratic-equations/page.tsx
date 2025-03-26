'use client';

import Link from "next/link";
import { EquationIntro } from "../components/quadratic/EquationIntro";
import SolutionMethod from "../components/quadratic/SolutionMethod";
import Factorization from "../components/quadratic/Factorization";
import CompletingSquare from "../components/quadratic/CompletingSquare";
import AlmightyFormular from "../components/quadratic/AlmightyFormular";
import GraphicalMethod from "../components/quadratic/GraphicalMethod";
import { QuadAssignment } from "../components/quadratic/QuadAssignment";

export default function QuadraticEquations() {
  return (
    <div className="min-h-screen mt-6 text-gray-800">
      <div className="max-w-6xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-[#76a40b]">Quadratic Equations</h1>
         <EquationIntro />
         <SolutionMethod />
    
        <div className="hidden md:block">
          <button className="mt-10">
            <Link href="/quadratic-equations/part-2" className="mt-6 px-4 py-2 bg-[#76a40b] text-white cursor-pointer rounded-md hover:bg-[#98b05ffb]">
              Next Lesson
            </Link>
          </button>
        </div>

        <div className="md:hidden block">
          <Factorization />
          <CompletingSquare />
          <AlmightyFormular />
          <GraphicalMethod />
        </div>
      
        <button className="mt-10 md:hidden block">
          <Link href="/quizzes" className="mt-6 px-4 py-2 bg-[#76a40b] text-white cursor-pointer rounded-md hover:bg-[#98b05ffb]">
            Take quiz
          </Link>
        </button>
      </div>
 </div>
  )
}

