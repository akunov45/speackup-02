
import { FaBookBookmark, FaUserGraduate, FaGraduationCap, FaStar } from "react-icons/fa6";
import {Link} from "react-router";

const courses = [
  {
    id: 1,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image: "/gorod.png",
  },
  {
    id: 2,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image: "/gorod2.png",
  },
  {
    id: 3,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image: "/people.png",
  },
  {
    id: 4,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image: "/hz.png",
  },
  {
    id: 5,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image: "/coffee.png",
  },
  {
    id: 6,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image: "/cafe.png",
  },
  {
    id: 7,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image: "https://i1.sndcdn.com/artworks-9ov2GfVg7H7F8rTM-5EiU8Q-t500x500.jpg",
  },
  {
    id: 8,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image: "https://plus.unsplash.com/premium_photo-1664355811205-3939787c7abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29hdHxlbnwwfDF8MHx5ZWxsb3d8&w=1000&q=80",
  },
  {
    id: 9,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image: "https://i0.wp.com/www.tripstodiscover.com/wp-content/uploads/2016/09/Aerial-view-of-the-old-town-of-Valencia-Spain..jpg?resize=650,400",
  },
  {
    id: 10,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image: "https://wl-adme.cf.tsp.li/resize/728x/jpg/6d6/1c4/eb20e95976b991e170e4baf29c.jpg",
  },
  {
    id: 11,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image: "https://resizer.mail.ru/p/b639a109-b92f-5810-80d5-2954733054c5/AQAX9jSdqmQ8JmVDHNpxxJ_ktSuXGGsbPKK6wDKxV5KZ3AAoUAyFNP02SmSwOhv8QHWXAXu74KGsQAHtvVcUny1o538.jpg",
  },
  {
    id: 12,
    title: "Learning historical words and sentences",
    lessons: 6,
    students: 198,
    level: "Advanced",
    image:" https://content.presspage.com/uploads/685/800_krakow-photobyjacekdylagonunsplash-5.jpg?10000",
    
  },
];

export default function PopularCourses() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Заголовок */}
        <h2 className="text-2xl font-bold text-black-600 mb-8">English Courses</h2>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
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
                  <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    <Link to={"/test"}>Start Course</Link>
                  </button>
                  <span className="flex items-center text-orange-500 text-sm">
                    <FaStar className="mr-1" /> 5.0
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "See all" */}
        <div className="mt-10 text-center">
          <button className="text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition shadow-md">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
