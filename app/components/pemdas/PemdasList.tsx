import { PemdasStep } from './PemdasStep';

const steps = [
  { icon: '()', title: 'Parentheses', description: 'Solve inside brackets first.', color: 'red' },
  { icon: '^', title: 'Exponents', description: 'Next, evaluate powers or roots.', color: 'orange' },
  { icon: '×', title: 'Multiply', description: 'Then, multiply.', color: 'yellow' },
  { icon: '÷', title: 'Divide', description: '...or divide.', color: 'green' },
  { icon: '+', title: 'Add', description: 'Now, add.', color: 'blue' },
  { icon: '−', title: 'Subtract', description: 'And subtract.', color: 'purple' },
];

export const PemdasList = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-4">
    {steps.map((step, idx) => (
      <PemdasStep key={idx} {...step} />
    ))}
  </div>
);
