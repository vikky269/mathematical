import React from 'react';

const AlgebraicExplanation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#76a40b]">Understanding Variables, Constants, Terms, and Coefficients</h1>
      <div className="">
        <h2 className="text-xl font-semibold mb-4">What is a Variable?</h2>
        <p className="text-lg text-gray-700">
          A symbol that doesn't have a fixed value is called a <strong>variable</strong>. It can take any value.
          For example, in the case of matchsticks, <code className="font-mono text-blue-600">n</code> is a variable
          and it can take values such as 1, 2, 3, and so on.
        </p>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">What is a Constant?</h2>
          <p className="text-lg text-gray-700">
            A symbol that has a fixed numerical value is called a <strong>constant</strong>. All numbers are constants.
            For example, 3, 6, -1/2, √5, etc., are all constants.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">What is a Term?</h2>
          <p className="text-lg text-gray-700">
            A <strong>term</strong> can be a variable alone, a constant alone, or a combination of variables and constants.
            The combination happens through multiplication or division. For example, the following are terms:
            <ul className="list-disc pl-6 mt-2">
              <li><code className="font-mono text-blue-600">3x²</code></li>
              <li><code className="font-mono text-blue-600">-(2y/3)</code></li>
              <li><code className="font-mono text-blue-600">√(5x)</code></li>
            </ul>
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">What is a Coefficient?</h2>
          <p className="text-lg text-gray-700">
            In an algebraic term, the number that is multiplying the variable is called the <strong>coefficient</strong>.
            For example, in the term <code className="font-mono text-blue-600">3x²</code>, the coefficient is 3.
            Similarly, for <code className="font-mono text-blue-600">-(2y/3)</code>, the coefficient is -2/3.
            For <code className="font-mono text-blue-600">√(5x)</code>, the coefficient is 5.
          </p>
        </div>

        <div>
            <img src="/algebra.png" alt="Variable and Constant" className="mt-6 w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default AlgebraicExplanation;
