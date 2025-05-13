export default function AbsoluteValueInequalities() {
    return (
      <div className="mt-9 space-y-6 text-lg">
        <h2 className="text-2xl font-bold">Solving Absolute Value Inequalities</h2>
  
        <p>
          An absolute value inequality includes an algebraic expression inside the absolute
          value sign. Here is the process of solving absolute value inequalities explained with
          an example: |x + 3| ≤ 2.
        </p>
  
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Step 1:</h3>
            <p>Consider the absolute value inequality as an equation: |x + 3| = 2</p>
          </div>
  
          <div>
            <h3 className="font-semibold">Step 2:</h3>
            <p>Solve the equation:</p>
            <ul className="list-disc list-inside ml-4">
              <li>x + 3 = ±2</li>
              <li>x + 3 = 2 ⟹ x = -1</li>
              <li>x + 3 = -2 ⟹ x = -5</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold">Step 3:</h3>
            <p>
              Represent the numbers -1 and -5 on the number line and identify the intervals.
              Since we have '≤' (which includes equality), we use closed brackets at -5 and -1.
            </p>
          </div>

          <div>
            <img
              src="/absolute.png"
              className="mt-4 rounded-lg mx-auto"
              alt="Number Line"
            />
          </div>
  
          <div>
            <h3 className="font-semibold">Step 4:</h3>
            <p>
              Take a random number from each interval and check whether the original inequality
              is satisfied.
            </p>
          </div>

          <div>
            <img
              src="/absolutetwo.png"
              className="mt-4 rounded-lg"
              alt="Number Line"
            />
          </div>
  
          <div>
            <h3 className="font-semibold">Step 5:</h3>
            <p>
              The intervals that satisfied the inequality are the solution intervals.
              Therefore, the solution of the absolute value inequality |x + 3| ≤ 2 is:
            </p>
            <p className="font-bold">[-5, -1]</p>
          </div>
        </div>
      </div>
    );
  }
  