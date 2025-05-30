import React from 'react'
import Introduction from '../components/AlgebraicExpression/AlgebraicIntro'
import ExpressionTypes from '../components/AlgebraicExpression/ExpressionTypes'
import WhatAlgebraicExpressionsAre from '../components/AlgebraicExpression/WhatAlgebraicExpressions'
import SimplifyingAlgebra from '../components/AlgebraicExpression/SimplifyExpression'
import AlgebraicOperations from '../components/AlgebraicExpression/Operations'
import AlgebraicExplanation from '../components/AlgebraicExpression/VariableConstant'
import AlgeMultiply from '../components/AlgebraicExpression/Multiply'

const page = () => {
  return (

    <div>
      <Introduction />
      <WhatAlgebraicExpressionsAre />
      <AlgebraicExplanation />
      <ExpressionTypes />
      <SimplifyingAlgebra />
      <AlgebraicOperations />
      <AlgeMultiply />
    </div>


  )
}

export default page