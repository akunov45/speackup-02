import React from 'react';
import { FaBookBookmark, FaUserGraduate, FaGraduationCap, FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom"; // Use NavLink from react-router-dom
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

const courses = [
  {
    id: 1,
    title: "Learning historical words and sentences",
    lessons: 8,
    students: 198,
    level: "Advanced",
    image: "/gorod.png",
  },
  {
    id: 2,
    title: "Learning historical words and sentences",
    lessons: 8,
    students: 198,
    level: "Advanced",
    image: "/gorod2.png",
  },
  {
    id: 3,
    title: "Learning historical words and sentences",
    lessons: 8,
    students: 198,
    level: "Advanced",
    image: "/people.png",
  },
  {
    id: 4,
    title: "Learning historical words and sentences",
    lessons: 8,
    students: 198,
    level: "Advanced",
    image: "/hz.png",
  },
  {
    id: 5,
    title: "Learning historical words and sentences",
    lessons: 8,
    students: 198,
    level: "Advanced",
    image: "/coffee.png",
  },
  {
    id: 6,
    title: "Learning historical words and sentences",
    lessons: 8,
    students: 198,
    level: "Advanced",
    image: "/cafe.png",
  },
];

const cardHover = {
  scale: 1.05,
  transition: {
    duration: 0.5,
    ease: "easeInOut"
  }
};

const cardTap = {
  scale: 0.95,
  transition: {
    duration: 0.2,
    ease: "easeInOut"
  }
};

export default function PopularCourses() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Заголовок */}
        <h2 className="text-2xl font-bold text-blue-600 mb-8">Popular Course</h2>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hover:cursor-pointer">
          {courses.map((course) => (
            <motion.div
              whileHover={isDesktop ? cardHover : {}}
              whileTap={!isDesktop ? cardTap : {}}
              key={course.id}
              className="rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition"
            >
              {/* Картинка */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              {/* Контент */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm mb-3">
                  {course.title}
                </h3>

                {/* Инфо */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <FaBookBookmark className="" /> {course.lessons} Lesson
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUserGraduate className="" /> {course.students} Student
                  </span>
                  <span className="flex items-center gap-1">
                    <FaGraduationCap className="" /> {course.level}
                  </span>
                </div>

                {/* Кнопка */}
                <div className="flex items-center justify-between">
                  <NavLink to="/test" className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Start Course
                  </NavLink>
                  <span className="flex items-center text-orange-500 text-sm">
                    <FaStar className="mr-1" /> 5.0
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Кнопка "See all" */}
        <div className="mt-10 text-center">
          <button className="text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition shadow-md">
            See all courses
          </button>
        </div>
      </div>
    </div>
  );
}