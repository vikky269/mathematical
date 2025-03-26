"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const topics: { [key: string]: { title: string; subtitle: string } } = {
  "/quadratic-equations": {
    title: "Quadratic Equations",
    subtitle: "Learn, Solve, and Practice Quadratic Equations",
  },
  "/linear-equations": {
    title: "Linear Equations",
    subtitle: "Understand the basics of linear equations",
  },
  "/algebraic-expressions": {
    title: "Algebraic Expressions",
    subtitle: "Master Algebraic Expressions step by step",
  },
  "/probability": {
    title: "Probability",
    subtitle: "Learn about probability and its real-world applications",
  },
  "/statistics": {
    title: "Statistics",
    subtitle: "Analyze and interpret data using statistics",
  },
  "/geometry": {
    title: "Geometry",
    subtitle: "Explore shapes, angles, and theorems",
  },
  "/trigonometry": {
    title: "Trigonometry",
    subtitle: "Understand sine, cosine, and tangent functions",
  },
  "/calculus": {
    title: "Calculus",
    subtitle: "Differentiate and integrate like a pro!",
  },
  "/exponents": {
    title: "Exponents",
    subtitle: "Work with powers and exponential functions",
  },
  "/logarithms": {
    title: "Logarithms",
    subtitle: "Explore the properties of logarithms",
  },
};

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Check if pathname starts with "/quadratic-equation"
  const isQuadraticEquationPage = pathname.startsWith("/quadratic-equation");

  // Determine which title and subtitle to show
  const topic = isQuadraticEquationPage
    ? topics["/quadratic-equations"]
    : topics[pathname] || {
        title: "SmartMathz Learning",
        subtitle: "Select a topic to get started",
      };

  return (
    <header className="bg-white text-[#0C2D48] text-center items-center">
      <div className={`${isHomePage ? "" : "py-5"} text-center`}>
        <h1 className="md:text-3xl text-xl font-bold flex justify-center items-center">
          {topic.title}
          {isHomePage && (
            <Image
              src="/logo.png"
              alt="Math Learning"
              width={200}
              height={150}
              className="ml-1"
            />
          )}
        </h1>
        <p
          className={`${
            isHomePage ? "mt-[-16] mb-9 text-lg" : "mt-9 mb-4"
          } text-lg font-medium text-[#0C2D48]`}
        >
          {topic.subtitle}
        </p>
      </div>
    </header>
  );
};

export default Header;
