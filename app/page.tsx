import React from 'react'
import MathTopicsCarousel from './components/MathCarousel/MathCarousel'

const page = () => {
  return (
    <div>
      <header className="bg-[#0C2D48] text-white py-6 text-center rounded-lg mt-6 px-3">
        <h1 className="md:text-4xl text-2xl font-bold">Master Mathematics with Ease</h1>
        <p className="mt-3 text-sm md:text-lg">
          Explore interactive lessons, step-by-step solutions, and practice problems to boost your math skills.
        </p>
      </header>
     
      <section className="p-6 text-center">
        <h2 className="text-3xl font-semibold">Your Ultimate Math Learning Companion</h2>
        <p className="mt-4 text-lg text-gray-700">
          Whether you're a student preparing for exams or someone looking to strengthen your math skills,
          we provide well-structured lessons, detailed examples, and practice exercises to help you master mathematics.
        </p>
      </section>
    
      {/* <section className="p-6">
        <h2 className="text-2xl font-semibold text-center">Explore Key Math Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          {[
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
          ].map((topic) => (
            <div key={topic} className="bg-gray-100 md:p-4 px-6 py-3 rounded-md shadow-md text-center cursor-pointer hover:bg-gray-200 transition hover:translate-y-2">
              <h3 className="md:text-lg text-sm font-bold">{topic}</h3>
              <p className="text-gray-600 text-sm mt-2">Learn the fundamentals of {topic} and apply them to real-world problems.</p>
            </div>
          ))}
        </div>
      </section> */}

      <MathTopicsCarousel />
    
      <section className="p-6 bg-blue-50 rounded-lg text-center">
        <h2 className="text-2xl font-semibold">Why Learn with Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { title: "Interactive Lessons", desc: "Step-by-step explanations and visual aids to make learning easier." },
            { title: "Practice Problems", desc: "Test your understanding with real exam-style questions." },
            { title: "Video Tutorials", desc: "Engage with high-quality video lessons from experienced tutors." },
            { title: "Personalized Learning", desc: "Track your progress and focus on areas that need improvement." },
            { title: "Expert Support", desc: "Get help from top educators and math enthusiasts." },
            { title: "Exam Preparation", desc: "Access past questions and model answers to boost your confidence." },
          ].map((feature) => (
            <div key={feature.title} className="bg-white p-4 rounded-md shadow-md cursor-pointer hover:shadow-lg transition hover:skew-x-2">
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="p-6 text-center">
        <h2 className="text-2xl font-semibold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg text-gray-700">
          Choose a topic from the sidebar to begin your math learning journey.
        </p>
      </section>

      <section className="p-6 text-center bg-[#0C2D48] text-white rounded-lg">
        <h2 className="text-2xl font-semibold">Start Your Learning Journey Today</h2>
        <p className="mt-3 text-lg">Join thousands of students improving their math skills with our interactive lessons.</p>
        <button className="mt-5 px-6 py-3 bg-[#76a40b] text-white font-semibold rounded-md hover:bg-[#53A40B] transition cursor-pointer">
          Get Started for Free
        </button>
      </section>

    </div>
  )
}

export default page

