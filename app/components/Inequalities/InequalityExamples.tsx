export default function InequalityExamples() {
    return (
      <div className="mt-9 space-y-6 text-lg">
        <div>
          <h2 className="text-2xl font-bold mb-4">Example 1: Solving Compound Inequality</h2>
          <p>
            Solve: <strong>-19 &lt; 3x + 2 ≤ 17</strong>
          </p>
          <p>
            Subtract 2 from all sides: <br />
            -21 &lt; 3x ≤ 15
          </p>
          <p>
            Divide all sides by 3: <br />
            -7 &lt; x ≤ 5
          </p>
          <p>
            <strong>Answer: </strong>The solution is <strong>(&minus;7, 5]</strong>
          </p>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold mb-4">Example 2: Identifying and Correcting Errors</h2>
          <ul className="list-disc list-inside">
            <li>
              a) 2x &lt; 5 ⇒ x &gt; 5/2 is incorrect. When dividing by a positive number, the inequality sign does not change. <br />
              <strong>Correct: x &lt; 5/2</strong>
            </li>
            <li>
              b) x &gt; 3 ⇒ x ∈ [3, ∞) is incorrect. The symbol &gt; does not include 3. <br />
              <strong>Correct: x ∈ (3, ∞)</strong>
            </li>
            <li>
              c) -x &gt; -7 ⇒ x &gt; 7 is incorrect. When dividing by -1, the sign should change. <br />
              <strong>Correct: x &lt; 7</strong>
            </li>
          </ul>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold mb-4">Example 3: Solving a Quadratic Inequality</h2>
          <p>Solve: <strong>x² - 7x + 10 &lt; 0</strong></p>
          <p>
            Factor the quadratic: <br />
            (x - 2)(x - 5) = 0 <br />
            x = 2, x = 5
          </p>
          <p>
            Test intervals: (-∞, 2), (2, 5), (5, ∞). <br />
            Only the interval (2, 5) satisfies the inequality.
          </p>
          <p>
          Let us take some random numbers from each interval to test the given quadratic inequality.
          </p>

          <div>
            <img 
            src="/examplethree.png" 
            alt=""
            className="mt-4 rounded-lg  mb-4"
            />
          </div>
          <p>
            <strong>Answer: </strong>The solution is <strong>(2, 5)</strong>
          </p>
        </div>
      </div>
    );
  }
  