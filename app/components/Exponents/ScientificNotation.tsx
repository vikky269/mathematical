import React from 'react';

const ScientificNotation = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Scientific Notation with Exponents</h2>
      <p>
        Scientific notation expresses large or small numbers using powers of 10. 
      </p>
      <ul className="list-disc list-inside mt-2">
        <li><code>560000 = 5.6 × 10⁵</code></li>
        <li><code>0.00736567 = 7.36567 × 10⁻³</code></li>
      </ul>
    </section>
  );
};

export default ScientificNotation;
