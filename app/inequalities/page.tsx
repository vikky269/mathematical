import React from 'react'
import Intro from '../components/Inequalities/InequalityIntro'
import WhatIsInequality from '../components/Inequalities/WhatisInequality'
import EqualityVsInequality from '../components/Inequalities/EqualityVsInequality'
import RulesOfInequalities from '../components/Inequalities/RulesofInequality'
import SolvingInequalities from '../components/Inequalities/SolvingInequaity'
import GraphingInequalities from '../components/Inequalities/GraphingInequalities'
import GraphingTwoVariableInequalities from '../components/Inequalities/TwoVariableInequality'
import SolvingPolynomialInequalities from '../components/Inequalities/PolynomialInequality'
import SolvingQuadraticInequalities from '../components/Inequalities/SolvingQuadIneq'
import AbsoluteValueInequalities from '../components/Inequalities/AbsoluteInequality'
import InequalityExamples from '../components/Inequalities/InequalityExamples'

const page = () => {
  return (
    <div className='text-lg'>
         <Intro />
         <WhatIsInequality />
         <EqualityVsInequality />
         <RulesOfInequalities />
         <SolvingInequalities />
         <GraphingInequalities />
         <GraphingTwoVariableInequalities />
         <SolvingPolynomialInequalities />
         <SolvingQuadraticInequalities />
         <AbsoluteValueInequalities />
         <InequalityExamples />
    </div>
  )
}

export default page