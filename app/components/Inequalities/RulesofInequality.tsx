// components/inequalities/RulesOfInequalities.tsx
export default function RulesOfInequalities() {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Rules of Inequalities</h2>
        <p>The rules of inequalities are special. Here are several important ones, explained with examples.</p>
  
        <div className="mt-6 space-y-6">
          {/* Rule 1 */}
          <div>
            <h3 className="text-xl font-semibold">Rule 1: Chaining Inequalities</h3>
            <p>If <code>p &lt; q</code> and <code>q &lt; d</code>, then <code>p &lt; d</code></p>
            <p>If <code>p &gt; q</code> and <code>q &gt; d</code>, then <code>p &gt; d</code></p>
            <p className="mt-2"><strong>Example:</strong> If Oggy is older than Mia, and Mia is older than Cherry, then Oggy must be older than Cherry.</p>
          </div>
  
          {/* Rule 2 */}
          <div>
            <h3 className="text-xl font-semibold">Rule 2: Swapping Numbers</h3>
            <p>If <code>p &gt; q</code>, then <code>q &lt; p</code></p>
            <p>If <code>p &lt; q</code>, then <code>q &gt; p</code></p>
            <p className="mt-2"><strong>Example:</strong> Oggy is older than Mia, so Mia is younger than Oggy.</p>
          </div>
  
          {/* Rule 3 */}
          <div>
            <h3 className="text-xl font-semibold">Rule 3: Adding or Subtracting the Same Number</h3>
            <p>If <code>p &lt; q</code>, then <code>p + d &lt; q + d</code> and <code>p − d &lt; q − d</code></p>
            <p>If <code>p &gt; q</code>, then <code>p + d &gt; q + d</code> and <code>p − d &gt; q − d</code></p>
            <p className="mt-2"><strong>Example:</strong> Oggy has less money than Mia. If both get $5 more, Oggy still has less than Mia.</p>
          </div>
  
          {/* Rule 4 */}
          <div>
            <h3 className="text-xl font-semibold">Rule 4: Multiplying by a Number</h3>
            <p>If <code>p &lt; q</code> and <code>d</code> is positive, then <code>p × d &lt; q × d</code></p>
            <p>If <code>p &lt; q</code> and <code>d</code> is negative, then <code>p × d &gt; q × d</code> (the inequality flips)</p>
            <p className="mt-2"><strong>Example:</strong> Oggy's score of 5 is less than Mia's 9. Doubling both gives 10 &lt; 18. If scores turn negative, −5 &gt; −9.</p>
          </div>
  
          {/* Rule 5 */}
          <div>
            <h3 className="text-xl font-semibold">Rule 5: Negation</h3>
            <p>If <code>p &lt; q</code>, then <code>−p &gt; −q</code></p>
            <p>If <code>p &gt; q</code>, then <code>−p &lt; −q</code></p>
            <p className="mt-2">This is like multiplying both sides by −1 and flipping the sign.</p>
          </div>
  
          {/* Rule 6 */}
          <div>
            <h3 className="text-xl font-semibold">Rule 6: Reciprocals</h3>
            <p>If <code>p &lt; q</code> (and both p, q are positive or both negative), then <code>1/p &gt; 1/q</code></p>
            <p>If <code>p &gt; q</code>, then <code>1/p &lt; 1/q</code></p>
          </div>
  
          {/* Rule 7 */}
          <div>
            <h3 className="text-xl font-semibold">Rule 7: Squares are Non-Negative</h3>
            <p>The square of any number is always greater than or equal to 0.</p>
            <p><code>p² ≥ 0</code></p>
            <p className="mt-2"><strong>Example:</strong> (4)² = 16, (−4)² = 16, (0)² = 0</p>
          </div>
  
          {/* Rule 8 */}
          <div>
            <h3 className="text-xl font-semibold">Rule 8: Square Roots</h3>
            <p>If <code>p ≤ q</code> and <code>p, q ≥ 0</code>, then <code>√p ≤ √q</code></p>
            <p className="mt-2"><strong>Example:</strong> If p = 2 and q = 7, then √2 ≤ √7</p>
          </div>

          <div>
            <img 
            src="/rulesofinequalitytwo.png"
            className="mt-4 rounded-lg md:w-[800px] md:h-[450px]" 
            alt="" 
            
            />
          </div>
        </div>
      </section>
    );
  }
  