import React from 'react';

const DecimalExponents = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">Decimal Exponents</h2>
      <p>
      If the exponent of a number is given in the decimal form, it is known as a decimal exponent. 
      It is slightly difficult to evaluate the correct answer of any decimal exponent so we find the approximate answer for such cases. 
      Decimal exponents can be solved by first converting the decimal into fraction form. For example, 4<sup>1.5</sup> can be written as 4<sup>3/2   </sup> 
      which can be simplified further to get the final answer 8, i.e., 4<sup>3/2</sup> = (2<sup>2</sup>)<sup>3/2</sup> = 2<sup>3</sup> = 8.
      </p>
      <h2 className='mt-4 mb-2 font-bold'>Example</h2>

      <p><code>4¹·⁵ = 4<sup>3/2</sup> = (√4)³ = 2³ = 8</code></p>
    </section>
  );
};

export default DecimalExponents;
