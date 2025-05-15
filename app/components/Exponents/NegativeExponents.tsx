import React from 'react';

const NegativeExponents = () => {
  return (
    <section className="mb-8 ">
      <h2 className="text-2xl font-bold mb-2">Negative Exponents</h2>
      <p>
        A negative exponent tells us how many times to multiply the reciprocal of the base.
        For example, if it is given that a <sup>-n</sup>, it can be expanded as 1/a<sup>n</sup>. 
        It means we have to multiply the reciprocal of a, i.e., 1/a 'n' times. 
        Negative exponents are used while writing fractions with exponents. 
        Some examples of negative exponents are 2 × 3<sup>-9</sup>, 7<sup>-3</sup>, 67<sup>-5</sup>, etc.
         We can convert these into positive exponents as follows:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li><code>3<sup>-2</sup> = 1 / 3<sup>2</sup> = 1 / 9</code></li>
        <li><code>2 x 3<sup>-9</sup> = 2 / 3<sup>9</sup></code></li>
        <li><code>7<sup>-3</sup> = 1 / 7<sup>3</sup></code></li>
        <li><code>67<sup>-5</sup> = 1 / 67<sup>-5</sup></code></li>
      </ul>
    </section>
  );
};

export default NegativeExponents;
