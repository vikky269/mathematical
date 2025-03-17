import React from 'react';

const QuadraticEquationSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Definition */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What is a Quadratic Equation?</h2>
        <p className="text-gray-700">
          A quadratic equation is a second-degree polynomial equation of the form:
          <br />
          <code className="bg-gray-100 p-1 rounded">ax² + bx + c = 0</code>
          <br />
          where <code className="bg-gray-100 p-1 rounded">a ≠ 0</code>.
        </p>
      </section>

      {/* General Format */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">General Format</h2>
        <p className="text-gray-700">
          The general form of a quadratic equation is:
          <br />
          <code className="bg-gray-100 p-1 rounded">ax² + bx + c = 0</code>
        </p>
      </section>

      {/* Methods of Solving */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Methods of Solving Quadratic Equations</h2>

        {/* Factoring */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Factoring</h3>
          <p className="text-gray-700 mb-2">
            Example: Solve <code className="bg-gray-100 p-1 rounded">x² - 5x + 6 = 0</code>
          </p>
          <p className="text-gray-700">
            Solution: <code className="bg-gray-100 p-1 rounded">(x - 2)(x - 3) = 0</code>
            <br />
            Therefore, <code className="bg-gray-100 p-1 rounded">x = 2</code> or <code className="bg-gray-100 p-1 rounded">x = 3</code>.
          </p>
        </div>

        {/* Quadratic Formula */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Quadratic Formula</h3>
          <p className="text-gray-700 mb-2">
            The quadratic formula is:
            <br />
            <code className="bg-gray-100 p-1 rounded">x = [-b ± √(b² - 4ac)] / 2a</code>
          </p>
          <p className="text-gray-700 mb-2">
            Example: Solve <code className="bg-gray-100 p-1 rounded">2x² + 4x - 6 = 0</code>
          </p>
          <p className="text-gray-700">
            Solution: <code className="bg-gray-100 p-1 rounded">x = [-4 ± √(16 + 48)] / 4</code>
            <br />
            Therefore, <code className="bg-gray-100 p-1 rounded">x = 1</code> or <code className="bg-gray-100 p-1 rounded">x = -3</code>.
          </p>
        </div>

        {/* Completing the Square */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Completing the Square</h3>
          <p className="text-gray-700 mb-2">
            Example: Solve <code className="bg-gray-100 p-1 rounded">x² + 6x + 5 = 0</code>
          </p>
          <p className="text-gray-700">
            Solution: <code className="bg-gray-100 p-1 rounded">(x + 3)² - 4 = 0</code>
            <br />
            Therefore, <code className="bg-gray-100 p-1 rounded">x = -1</code> or <code className="bg-gray-100 p-1 rounded">x = -5</code>.
          </p>
        </div>
      </section>

      {/* Take Home Assignment */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Practice Assignment</h2>
        <p className="text-gray-700 mb-4">
          Solve the following quadratic equations:
        </p>
        <ol className="list-decimal list-inside text-gray-700">
          <li className="mb-2"><code className="bg-gray-100 p-1 rounded">x² - 4x + 3 = 0</code></li>
          <li className="mb-2"><code className="bg-gray-100 p-1 rounded">2x² + 8x - 10 = 0</code></li>
          <li className="mb-2"><code className="bg-gray-100 p-1 rounded">x² + 10x + 25 = 0</code></li>
        </ol>
      </section>
    </div>
  );
};

export default QuadraticEquationSection;