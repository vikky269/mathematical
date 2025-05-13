export default function SolvingQuadraticInequalities() {
    return (
      <div className="space-y-6 mt-6 text-lg">
        <h1 className="text-2xl font-bold">Solving Quadratic Inequalities</h1>
  
        <p>
          A quadratic inequality involves a quadratic expression in it. Here is the process of
          solving quadratic inequalities, explained with an example.
        </p>
  
        <h2 className="text-xl font-semibold">Example: Solve the inequality x² - 4x - 5 ≥ 0</h2>
  
        <div className="space-y-2">
          <p><strong>Step 1:</strong> Write the inequality as an equation.</p>
          <p>x² - 4x - 5 = 0</p>
  
          <p><strong>Step 2:</strong> Solve the equation using any method for solving quadratic equations.</p>
          <p>(x - 5)(x + 1) = 0</p>
          <p>x = 5; x = -1</p>
  
          <p><strong>Step 3:</strong> Represent the solutions on a number line and identify the intervals.</p>
          <p>Since the inequality is &ldquo;≥&rdquo;, we use <strong>closed circles</strong> at -1 and 5.</p>

          <div>
            <img
              src="/quadeqn.png"
              className="mt-4 rounded-lg mx-auto"
              alt="Number Line"
            />
          </div>
  
          <p><strong>Step 4:</strong> Take a random number from each interval and check whether the inequality is true.</p>

          <div>
            <img 
            src="/quadin.png" 
            alt=""
            className="mt-4 rounded-lg  mb-4"
            />
          </div>
  
          <p><strong>Step 5:</strong> The intervals that return &ldquo;true&rdquo; are part of the solution.</p>
          <p>
            Therefore, the solution to the inequality <strong>x² - 4x - 5 ≥ 0</strong> is:
          </p>
          <p><strong>(-∞, -1] ∪ [5, ∞)</strong></p>
        </div>
  
        <p>
          We can use the same process for solving cubic inequalities, biquadratic inequalities,
          and higher-degree polynomial inequalities.
        </p>
      </div>
    );
  }
  