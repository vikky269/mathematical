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
  const topic = topics[pathname] || {
    title: "Welcome to Math Learning 📚✨",
    subtitle: "Select a topic to get started",
  };

  return (
    <header className="bg-blue-600 text-white py-4 text-center items-center">
      {/* <Link href={"/"} passHref>
       <Image src="/logo.png" alt="Math Learning" width={200} height={250} />
      </Link> */}
      
        <h1 className="md:text-3xl text-2xl font-bold">{topic.title}</h1>
        <p className="mt-2 text-md">{topic.subtitle}</p>
    
    </header>
  );
};

export default Header;
