import React from "react";

export default function HomeNews() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans text-2xl"> 
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        
        {/* Блок 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Левая часть */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md max-w-lg max-h-">
            <h2 className="text-blue-600 font-bold text-8xxl">
              You can learn online and sit in Your Home
            </h2>
            <p className="text-2xl text-gray-600 mt-2">
              speak up is a quick and convenient online test to help higher
              education institutions and employers check the English levels of
              individuals and groups of candidates.    
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/funny.png"
              alt="Students learning online"
              className="rounded-xl shadow-md w-full object-cover"
            />
            <h2 className="mt-6 font-bold text-4xl">
              You Speak Up To 6 Month Faster Than Now
            </h2>
            <p className="text-gray-600 mt-3">
              Our range of free teaching resources, lesson plans and activities
              is designed to help you prepare your students for our exams and
              tests. We also have a range of teaching qualifications, courses
              and support to help you as a teacher.
            </p>
            <div className="mt-4 bg-gray-100 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 text-sm">
                Fun fact: You remember 16% of a message when it’s verbalized vs
                only 60% of what you read in text.
              </p>
            </div>
          </div>
        </div>

        {/* Блок 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/students.png"
            alt="Students in class"
            className="rounded-xl shadow-md w-full md:w-1/2 object-cover"
          />
          <div className="flex-1">
            <h2 className="font-bold text-4xl text-gray-900">
              You can learn online and sit in class
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              speak up is a quick and convenient online test to help higher
              education institutions and employers check the English levels of
              individuals and groups of candidates.
            </p>
          </div>
        </div>

        {/* Блок 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="font-bold text-4xl text-gray-900">
              Together we inspire learners to go further
            </h2>
            <p className="text-xxl text-gray-600 mt-2">
              Try our quick, free online tests to find out what your level of
              English is, and which Cambridge English Qualification might be
              best for you. At the end you will get recommendations on how to
              improve your English.
            </p>
          </div>
          <img
            src="/school.png"
            alt="Group learning"
            className="rounded-xl shadow-md w-full md:w-1/2 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
