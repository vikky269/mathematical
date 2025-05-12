import React from 'react'
import Introduction from '../components/Fractions/FractionIntro'
import WhatAreFractions from '../components/Fractions/WhatAreFractions'
import TypesOfFractions from '../components/Fractions/FractionTypes'
import FractionConcept from '../components/Fractions/FractionConcept'
import FractionsOnNumberLine from '../components/Fractions/FractionNumberLine'
import FractionExamples from '../components/Fractions/FractionExamples'
import FractionExamplesWithSolutions from '../components/Fractions/FracExamplesWithSolution'
import FractionQuiz from '../components/Fractions/FracQuiz'


const page = () => {
  return (
    <div className=''>
        <Introduction />
        <WhatAreFractions />
        <FractionConcept />
        <TypesOfFractions />
        <FractionsOnNumberLine />
        <FractionExamples />
        <FractionExamplesWithSolutions />
        <FractionQuiz />
    </div>
  )
}

export default page