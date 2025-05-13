// components/inequalities/WhatIsInequality.tsx
export default function WhatIsInequality() {
    return (
      <section className="mb-8 text-lg">
        <h2 className="text-2xl font-bold mb-3">What is an Inequality?</h2>
        <p>
          Inequalities are the mathematical expressions in which both sides are not equal. In inequality, unlike in equations, we compare two values. The equal sign in between is replaced by less than (or less than or equal to), greater than (or greater than or equal to), or not equal to sign.
        </p>
        <p className="mt-2">
          Olivia is selected in the 12U Softball. How old is Olivia? You don't know the age of Olivia, because it doesn't say "equals". But you do know her age should be less than or equal to 12, so it can be written as Olivia's Age ≤ 12. This is a practical scenario related to inequalities.
        </p>

        <div className="mt-4">
            <img
                src="/ineqremove.png"
                alt="Inequality example"
                className="mt-4"
            />
        </div>
      </section>
    );
  }
  