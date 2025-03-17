"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react"; // Install using `npm install lucide-react`

// Define the topics for the sidebar
const topics = [
  { name: "Quadratic Equations", path: "/quadratic-equations" },
  { name: "Linear Equations", path: "/linear-equations" },
  { name: "Algebraic Expressions", path: "/algebraic-expressions" },
  { name: "Probability", path: "/probability" },
  { name: "Statistics", path: "/statistics" },
  { name: "Geometry", path: "/geometry" },
  { name: "Trigonometry", path: "/trigonometry" },
  { name: "Calculus", path: "/calculus" },
  { name: "Exponents", path: "/exponents" },
  { name: "Logarithms", path: "/logarithms" },
  { name: "differentiation", path: "/differentiation" },
  { name: "integration", path: "/integration" },
  { name: "Mensuration", path: "/mensuration" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="p-2 fixed top-25 left-4 z-50 bg-gray-800 text-white rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:top-0 top-28 left-0 min-h-screen md:h-[30%] mt-12 ml-4 w-[45%] md:w-[23%] rounded-lg bg-blue-600 text-white p-2 transition-transform md:translate-x-0  md:block ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:flex`}
      >
        {/* <h2 className="text-xl font-bold mb-4">Math Topics</h2> */}
        <ul>
          {topics.map((topic) => (
            <li key={topic.path} className="mb-2">
              <Link
                href={topic.path}
                className={`block px-3 py-2 rounded-md ${
                  pathname === topic.path ? "" : "hover:bg-blue-500"
                }`}
                onClick={() => setIsOpen(false)} // Close menu on mobile
              >
                {topic.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
