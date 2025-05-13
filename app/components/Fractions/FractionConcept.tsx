import React from 'react';

const FractionConcept: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto  py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Understanding Fractions</h1>

      {/* Fraction Definition */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a Fraction?</h2>
        <p className="text-lg">
          A <strong>fraction</strong> is defined as a part of something, and a quantity that is not a whole number. 
          It is expressed as the number of equal parts being counted over the total number of parts in the whole.
        </p>
      </section>

      {/* Fraction Bar */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a Fraction Bar?</h2>
        <p className="text-lg mb-4">
          A <strong>fraction bar</strong> is the horizontal line that separates the numerator and the denominator.
        </p>

        <div className="flex justify-center my-4">
          <div className="text-center">
            <div className="text-xl font-bold">3</div>
            <hr className="border-t-2 border-black my-1 w-12 mx-auto" />
            <div className="text-xl font-bold">4</div>
          </div>
        </div>

        <p className="text-sm text-center text-gray-600">Example of a fraction with a fraction bar</p>
      </section>

      {/* Parts of a Fraction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Parts of a Fraction</h2>
        <p className="text-lg mb-4">
          All fractions consist of two main parts:
        </p>

        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <strong>Numerator:</strong> The top number that indicates how many parts are being considered. 
            It is placed above the fraction bar.
          </li>
          <li>
            <strong>Denominator:</strong> The bottom number that shows the total number of equal parts the whole is divided into.
            It is placed below the fraction bar.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default FractionConcept;
