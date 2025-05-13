import { Card, CardContent } from "@/components/ui/card";

export default function GraphingInequalities() {
  return (
    <section className="grid gap-4 mt-6">
      <div className="">
      
          <h2 className="text-2xl font-bold mb-4">Graphing Inequalities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>If the endpoint is included (i.e., in case of ≤ or ≥), use a <strong>closed circle</strong>.</li>
            <li>If the endpoint is NOT included (i.e., in case of &lt; or &gt;), use an <strong>open circle</strong>.</li>
            <li>Use an open circle at either ∞ or -∞.</li>
            <li>Draw a line from the endpoint that extends to the <strong>right</strong> if the variable is greater than the number.</li>
            <li>Draw a line from the endpoint that extends to the <strong>left</strong> if the variable is less than the number.</li>
          </ul>
       
      </div>

      <div className="">
        
          <h2 className="text-2xl font-bold mb-4">Writing Inequalities in Interval Notation</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>If the endpoint is included (i.e., in case of ≤ or ≥), use <strong>closed brackets</strong> [ or ].</li>
            <li>If the endpoint is not included (i.e., in case of &lt; or &gt;), use <strong>open brackets</strong> ( or ).</li>
            <li>Always use open brackets at ∞ or -∞.</li>
          </ul>
     
      </div>

          <div>
              <img
                  src="/interval.png"
                  className="mt-4 rounded-lg"
                  alt="" />
          </div>
    </section>
  );
}
