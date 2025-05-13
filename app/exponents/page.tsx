import React from 'react'
import ExponentIntro from '../components/Exponents/ExponentIntro'
import ExponentMeaning from '../components/Exponents/ExponentMeaning'
import ExponentExamples from '../components/Exponents/ExponentExamples'
import PropertiesOfExponents from '../components/Exponents/ExponentProperties'
import NegativeExponents from '../components/Exponents/NegativeExponents'
import FractionalExponents from '../components/Exponents/FractionalExponents'
import DecimalExponents from '../components/Exponents/DecimalExponents'
import ScientificNotation from '../components/Exponents/ScientificNotation'
import ExponentQuiz from '../components/Exponents/ExponentQuiz'

const page = () => {
  return (
    <div>
        <ExponentIntro />
        <ExponentMeaning />
        <ExponentExamples />
        <PropertiesOfExponents />
        <NegativeExponents />
        <FractionalExponents />
        <DecimalExponents />
        <ScientificNotation />
        <ExponentQuiz />
    </div>
  )
}

export default page