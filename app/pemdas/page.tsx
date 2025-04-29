"use client"
import React from 'react'
import { Header } from '../components/pemdas/PemdasHeader'
import { PemdasList } from '../components/pemdas/PemdasList'
import { MnemonicTips } from '../components/pemdas/MnemonicTips'
import { PemdasQuiz } from '../components/pemdas/PemdasQuiz'
import { SolvedExamples } from '../components/pemdas/SolvedExamples'
import { TakeHomeAssignment } from '../components/pemdas/TakeHomeAssignment'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-[#76a40b] uppercase">order of operations</motion.h1>
        <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl font-medium text-center mt-4">
            PEMDAS is a helpful way to remember the order of operations in math. 
            It stands for Parentheses, Exponents, Multiplication and Division (from left to right), 
            Addition and Subtraction (from left to right). This order helps us solve math problems correctly.
        </motion.p>
           
           <Image src="/pemdas.png" alt="PEMDAS" width={500} height={500} className="mx-auto mt-6 cursor-pointer hover:scale-y-[1.02]" />
           
          <div className="mt-8">
              <PemdasList />
          </div>
            <MnemonicTips />
            <SolvedExamples />
            <div className="flex flex-col items-center justify-center mt-8">
                <h2 className='text-2xl font-bold mb-4  text-[#76a40b] uppercase'>Quick Puzzle</h2>
                <PemdasQuiz />
                </div>
                <TakeHomeAssignment />

                <button className="mt-10 block">
                  <Link href="/quizzes/pemdas" className="mt-6 px-4 py-2 bg-[#0C2D48] text-white cursor-pointer rounded-md hover:bg-[#1e2735]">
                      Take quiz
                  </Link>
              </button>
    </div>
  )
}

export default page