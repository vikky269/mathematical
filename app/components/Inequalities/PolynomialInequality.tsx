export default function SolvingPolynomialInequalities() {
    return (
      <div className="mt-6 space-y-6 text-lg">
        <div>
          <h2 className="text-2xl font-bold mb-4">Solving Polynomial Inequalities</h2>
          <p>
            The polynomial inequalities are inequalities that can be expressed as a polynomial on one side and 0 on the other side of the inequality.
            There are different types of polynomial inequalities but the important ones are:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Linear Inequalities</li>
            <li>Quadratic Inequalities</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold">Solving Linear Inequalities</h3>
          <p>
            A linear inequality is an inequality that can be expressed with a linear expression on one side and a 0 on the other side. Solving linear inequalities
            is the same as solving linear equations, but the rules of solving inequalities (as explained earlier) should be taken care of.
          </p>
        </div>
  
        <div>
          <h4 className="text-lg font-medium">Solving One Step Inequalities</h4>
          <p>
            Consider an inequality <strong>2x &lt; 6</strong>. To solve this, just one step is sufficient: dividing both sides by 2.
            Then we get <strong>x &lt; 3</strong>. Therefore, the solution of the inequality is <strong>x &lt; 3</strong> (or) <strong>(&minus;&infin;, 3)</strong>.
          </p>
        </div>
  
        <div>
          <h4 className="text-lg font-medium">Solving Two Step Inequalities</h4>
          <p>
            Consider an inequality <strong>-2x + 3 &gt; 6</strong>. To solve this, we need two steps. First, subtract 3 from both sides:
            <br /> <strong>-2x &gt; 3</strong>
            <br /> Then divide both sides by -2 (remember to flip the inequality sign):
            <br /> <strong>x &lt; -3/2</strong>
            <br /> So the solution is <strong>x &lt; -3/2</strong> (or) <strong>(&minus;&infin;, -3/2)</strong>.
          </p>
        </div>
  
        <div>
          <h4 className="text-lg font-medium">Solving Compound Inequalities</h4>
          <p>
            Compound inequalities refer to the set of inequalities with either "and" or "or" in between them. Solve each inequality independently,
            and then determine the final solution:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>"and"</strong>: take the intersection of the solution sets</li>
            <li><strong>"or"</strong>: take the union of the solution sets</li>
          </ul>
  
          <p className="mt-4 text-lg">
            <span className="font-bold">Example: Solve the compound inequality </span><strong>2x + 3 &lt; -5</strong> and <strong>x + 6 &lt; 3</strong><br></br>
            <br /> First inequality:
            <br /> <strong>2x + 3 &lt; -5</strong>  <br></br> <strong>2x &lt; -8</strong> <br></br> <strong>x &lt; -4</strong><br></br>
            <br /> Second inequality:
            <br /> <strong>x + 6 &lt; 3</strong> <br></br> <strong>x &lt; -3</strong>
            <br /> Final solution: intersection of <strong>x &lt; -4</strong> and <strong>x &lt; -3</strong> is <strong>x &lt; -3</strong> (or) <strong>(&minus;&infin;, -3)</strong>
          </p>
        </div>
      </div>
    );
  }
  