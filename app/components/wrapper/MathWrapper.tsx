"use client"; // Only this component runs on the client

import { MathJax, MathJaxContext } from 'better-react-mathjax';

const MathWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <MathJaxContext>
      {children}
    </MathJaxContext>
  );
};

export default MathWrapper;
