"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function SolvingInequalities() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Solving Inequalities</h2>
          <p className="mb-2">Here are the steps for solving inequalities:</p>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            <li>Write the inequality as an equation.</li>
            <li>Solve the equation for one or more values.</li>
            <li>Represent all the values on the number line.</li>
            <li>Also, represent all excluded values on the number line using open circles.</li>
            <li>Identify the intervals.</li>
            <li>Take a random number from each interval, substitute it in the inequality and check whether the inequality is satisfied.</li>
            <li>Intervals that are satisfied are the solutions.</li>
          </ol>
          <p className="mb-2">
            But for solving simple inequalities (linear), we usually apply algebraic operations like addition, subtraction, multiplication, and division. Consider the following example:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
            <p>2x + 3 &gt; 3x + 4</p>
            <p>Subtracting 3x and 3 from both sides,</p>
            <p>2x - 3x &gt; 4 - 3</p>
            <p>-x &gt; 1</p>
            <p>Multiplying both sides by -1,</p>
            <p>x &lt; -1</p>
          </div>
          <p className="mt-2">
            Notice that we have changed the "&gt;" symbol into "&lt;" symbol. Why? This is because we have multiplied both sides of the inequality by a negative number.
            The process of solving inequalities mentioned above works for a simple linear inequality. But to solve any other complex inequality, we have to use the steps listed above.
          </p>
        </CardContent>

              <div className="flex-col justify-center items-center">
                  <h2 className="text-xl text-center font-semibold mb-4">Steps of solving Inequalities</h2>
                  <img
                      src="/stepstwo.png"
                      className="mt-4 rounded-lg mx-auto"
                      alt="" />
              </div>
      </Card>

     
    </div>
  );
}
