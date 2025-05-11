'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const mathTopics = [
  "Quadratic Equations",
  "Linear Equations",
  "Algebraic Expressions",
  "Probability",
  "Statistics",
  "Geometry",
  "Trigonometry",
  "Calculus",
  "Exponents & Logarithms",
  "Differentiation",
  "Integration",
  "Mensuration",
]

export default function MathTopicsCarousel() {
  return (
    <section className="px-4 sm:px-6 py-6">
      <h2 className="text-2xl font-semibold text-center">Explore Key Math Topics</h2>

      <Carousel className="w-full max-w-xl mx-auto mt-6">
        <CarouselContent>
          {mathTopics.map((topic, index) => (
           <CarouselItem
           key={index}
           className="w-full basis-full"
         >
           <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-3xl shadow-xl text-center transition-transform hover:-translate-y-1 duration-300">
             <div className="flex flex-col items-center gap-4">
               {/* Optional: Math icon or SVG */}
               <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-xl shadow">
                 Σ
               </div>
         
               <h3 className="text-xl font-extrabold text-gray-800">{topic}</h3>
               <p className="text-gray-600 text-sm max-w-md">
                 Learn the fundamentals of {topic} and apply them to real-world problems.
               </p>
         
               {/* Optional: CTA button
               <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full shadow">
                 Learn More
               </button> */}
             </div>
           </div>
         </CarouselItem>
         
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-4 mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  )
}
