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
    <div className="min-h-screen mt-6 text-gray-800 ">
      <div className="max-w-6xl mx-auto py-6 rounded-lg overflow-x-hidden overflow-y-hidden">
        <h1 className="text-3xl font-bold text-center text-[#76a40b]">Quadratic Equations</h1>
         <EquationIntro />
         <SolutionMethod />
    
       

        
          <Factorization />
          <CompletingSquare />
          <AlmightyFormular />
          <GraphicalMethod />
        
      
        <button className="mt-10 block">
          <Link href="/quizzes/quadratic-equations" className="mt-6 px-4 py-2 bg-[#0C2D48] text-white cursor-pointer rounded-md hover:bg-[#1e2735]">
            Take quiz
          </Link>
        </button>
      </div>
 </div>
  )
}

