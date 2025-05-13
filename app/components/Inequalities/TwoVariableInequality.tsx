export default function GraphingTwoVariableInequalities() {
    return (
      <div className="mt-9 space-y-4">
        <h2 className="text-2xl font-bold">Graphing Inequalities with Two Variables</h2>
  
        <p>
          For graphing inequalities with two variables, you will have to plot the "equals" line and then, shade the appropriate area. There are three steps:
        </p>
  
        <ol className="list-decimal list-inside space-y-1">
          <li>Write the equation such that "y" is on the left and everything else is on the right.</li>
          <li>Plot the "y=" line (draw a solid line for y≤ or y≥, and a dashed line for y&lt; or y&gt;).</li>
          <li>Shade the region above the line for a "greater than" (y&gt; or y≥) or below the line for a "less than" (y&lt; or y≤).</li>
        </ol>
  
        <p>
          Let us try an example: This is a graph of a linear inequality: <strong>y ≤ x + 4</strong>
        </p>
         
         <div>
            <img
                src="/grap.png"
                alt="Graph of y ≤ x + 4"
                className="mt-4 rounded-lg"
            />
         </div>
        <div className="border border-yellow-400 p-4 bg-yellow-50">
          <p>
            You can see, <strong>y = x + 4</strong> line and the shaded area (in yellow) is where y is less than or equal to x + 4.
          </p>
        </div>
  
        <p>
          Let us now see how to solve different types of inequalities and how to graph the solution in each case.
        </p>
      </div>
    );
  }
  