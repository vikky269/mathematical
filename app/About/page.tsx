import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen md:px-6 px-4 py-12 mt-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">
          About SmartMathz Learning 📖✨
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Empowering students with interactive lessons and quizzes to make learning math fun and engaging.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To provide high-quality, interactive math education that helps students master concepts easily.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700">Our Vision</h2>
            <p className="text-gray-600 mt-2">
            At SmartMathz, we are dedicated to making mathematics accessible, engaging, and enjoyable for learners of all levels. Whether you're just starting with the basics or diving into advanced topics, 
            we provide comprehensive resources and personalized support to help you achieve your math goals.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-green-700">Why Choose Us?</h2>
            <ul className="text-gray-600 mt-2 list-disc pl-5">
              <li>Engaging and interactive lessons</li>
              <li>Customizable quizzes for better learning</li>
              <li>Easy-to-use interface for all ages</li>
              <li>Track progress and improve over time</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">Have any questions? Reach out to us at <span className="text-blue-600 font-semibold">support@smartmathz.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default About;
