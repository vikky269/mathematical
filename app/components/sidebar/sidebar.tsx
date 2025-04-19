"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  { name: "Differentiation", path: "/differentiation" },
  { name: "Integration", path: "/integration" },
  { name: "Mensuration", path: "/mensuration" },
  { name: "PEMDAS", path: "/pemdas" },
];



export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHome = pathname === '/';
  const topClass = isHome ? 'top-[212px]' : 'top-[180px]';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "auto"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup function
    };
  }, [isOpen]);


  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className={`p-2 absolute ${topClass} left-3 z-10 bg-gray-800 text-white mr-16 rounded-md md:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
       <aside
            className={`fixed top-0 left-0 z-50 min-h-screen h-full w-[70%] md:w-[20%] md:mt-12 md:ml-4 rounded-lg bg-[#0C2D48] text-white p-4 transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:relative md:block`}
        >
       
        {/* Close Button */}
        <button
          className="text-white absolute top-4 right-4 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

          <ul>
            {topics.map((topic) => (
              <li key={topic.path} className="mb-2">
                <Link
                  href={topic.path}
                  className={`block px-3 py-2 rounded-md ${pathname === topic.path ? "" : "hover:bg-[#567894ab]"
                    }`}
                  onClick={() => setIsOpen(false)} // Close menu on mobile
                >
                  {topic.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>


      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#fdfdfdfa] bg-opacity-10 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
