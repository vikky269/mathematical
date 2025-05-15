import React from 'react';

const ScientificNotation = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Scientific Notation with Exponents</h2>
      <p>
        Scientific notation expresses large or small numbers using powers of 10. 
      </p>
      <ul className="list-disc list-inside mt-2">
        <li><code>560000 = 5.6 x 10<sup>5</sup></code></li>
        <li><code>0.00736567 = 7.36567 x 10<sup>-3</sup></code></li>
      </ul>
    </section>
  );
};

export default ScientificNotation;
