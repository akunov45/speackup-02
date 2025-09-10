import React from "react";

import english from "../../assets/img/english.png";
import france from "../../assets/img/france.png";
import germany from "../../assets/img/germany.png";
import turkish from "../../assets/img/turkish.png";

// примеры картинок (замени на свои из папки assets)
import kids from "../../assets/img/kids.png";
import laptop from "../../assets/img/laptop.png";
import classroom from "../../assets/img/classroom.png";

import img1 from "../../assets/img/img1.png"
import img2 from "../../assets/img/img2.png"
import img3 from "../../assets/img/img3.png"

import course1 from "../../assets/img/course1.png";
import course2 from "../../assets/img/course2.png";

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterestP } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import team1 from "../../assets/img/team1.png";
import team2 from "../../assets/img/team2.png";
import team3 from "../../assets/img/team3.png";

const AboutUsPage = () => {
  const team = [
    {
      id: 1,
      name: "Asli Sora",
      role: "President & CEO",
      email: "saraasli@speakupeducation.com",
      img: team1,
      bg: "bg-blue-50",
    },
    {
      id: 2,
      name: "Asli Sora",
      role: "President & CEO",
      email: "saraasli@speakupeducation.com",
      img: team2,
      bg: "bg-blue-600", // ортодогу карточка көк фон
    },
    {
      id: 3,
      name: "Asli Sora",
      role: "President & CEO",
      email: "saraasli@speakupeducation.com",
      img: team3,
      bg: "bg-blue-50",
    },
    {
      id: 4,
      name: "Asli Sora",
      role: "President & CEO",
      email: "saraasli@speakupeducation.com",
      img: team1,
      bg: "bg-blue-600",
    },
    {
      id: 5,
      name: "Asli Sora",
      role: "President & CEO",
      email: "saraasli@speakupeducation.com",
      img: team2,
      bg: "bg-blue-50", // ортодогу карточка көк фон
    },
    {
      id: 6,
      name: "Asli Sora",
      role: "President & CEO",
      email: "saraasli@speakupeducation.com",
      img: team3,
      bg: "bg-blue-600",
    },
  ];

  return (
    <div className="w-full">
      {/* Синий блок */}
      <div className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Speak Up
          </h2>
          <p className="mx-auto md:text-lg leading-relaxed">
            SpeakUp is a ground-breaking app for learning English, Turkish, France
            words and improving vocabulary for all speakers of English, from native
            speakers to beginner learners. It makes language learning more
            accessible to everyone around the globe.
          </p>
        </div>
      </div>

      {/* Белый блок */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6">
            Speak Up exists to empower people through languages. Whether you’re
            learning for a new job, new love or simply a new skill, your path to
            fluency starts here.
          </p>

          <h3 className="text-lg md:text-xl font-semibold mb-4">
            How Speak Up works:
          </h3>

          <ul className="text-left max-w-2xl ml-5 mb-10 text-gray-700 space-y-2">
            <li>
              <span className="text-blue-600 font-medium">• Self-paced study</span>
            </li>
            <li>
              <span>
                • Complete your personalised Study Plan, and get friendly reminders
                when it’s time to learn using our expertly designed lessons. Benefit
                from the smart technology in our Review section, which highlights
                what to revise and when. Self-paced studying works because you’re in
                control.
              </span>
            </li>
          </ul>

          {/* Флаги */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">
            <div className="flex flex-col items-center border rounded-lg shadow-sm p-[40px]">
              <img
                src={english}
                alt="English"
                className="w-[108px] h-[72px] object-cover mb-2"
              />
              <p className="text-base font-medium">English</p>
            </div>

            <div className="flex flex-col items-center border rounded-lg shadow-sm p-[40px]">
              <img
                src={france}
                alt="France"
                className="w-[108px] h-[72px] object-cover mb-2"
              />
              <p className="text-base font-medium">France</p>
            </div>

            <div className="flex flex-col items-center border rounded-lg shadow-sm p-[40px]">
              <img
                src={germany}
                alt="Germany"
                className="w-[108px] h-[72px] object-cover mb-2"
              />
              <p className="text-base font-medium">Germany</p>
            </div>

            <div className="flex flex-col items-center border rounded-lg shadow-sm p-[40px]">
              <img
                src={turkish}
                alt="Turkish"
                className="w-[108px] h-[72px] object-cover mb-2"
              />
              <p className="text-base font-medium">Turkish</p>
            </div>
          </div>
        </div>
      </div>

      {/* Блоки с картинками и текстами */}
      <div className="bg-gray-50 py-16 px-6 space-y-16">
        {/* 1 */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center text-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              The accurate English test with fast results
            </h3>
            <p className="text-gray-700">
              SPEAK UP is a quick and convenient online test to help higher
              education institutions and employers check the English levels of
              individuals and groups of candidates. It combines the latest AI
              technology with the reliability and quality you expect from Speak Up.
            </p>
          </div>
          <img src={kids} alt="Kids learning" className="rounded-lg shadow-md" />
        </div>

        {/* 2 */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center text-center">
          <img src={laptop} alt="Laptop study" className="rounded-lg shadow-md" />
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Our path to learning English, step by step
            </h3>
            <p className="text-gray-700">
              Effective and rewarding. Our unique approach encourages continuous
              progression with a clear path to improve language skills. We have
              qualifications for schools, general and higher education, and business.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center text-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Together we inspire learners to go further
            </h3>
            <p className="text-gray-700">
              Our range of free teaching resources, lesson plans and activities is
              designed to help you prepare your students for our exams and tests. We
              also have a range of teaching qualifications, courses and support to
              help you develop as a teacher.
            </p>
          </div>
          <img
            src={classroom}
            alt="Classroom"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

        {/* Motivate others */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto ">
          <h3 className="text-xl font-semibold mb-4">Motivate others:</h3>
          <p className="text-gray-700 mb-10">
            Interacting with members of the <b>Speak Up</b> Community enables you
            to learn together by sharing knowledge of your native language. Correct
            the work of others, and have your exercises reviewed in return. Make
            genuine connections through language.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <img className="w-64 " src={course1} alt="" />
            <img className="w-64 ml-[-70px] " src={course2} alt="" />
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition ml-[370px]">
            Start Learning
          </button>
        </div>
      </div>


     {/* Жогорку көк блок сүрөттөр менен */}
      <div className="bg-blue-600 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Сүрөттөр */}
          <div className="flex gap-4">
            {[img1, img2, img3,].map((img, idx) => (
              <div
                key={idx}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md"
              >
                <img
                  src={img}
                  alt={`icon-${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Текст */}
          <div className="bg-blue-700 p-6 rounded-lg shadow-md flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              So do you want to improve your English?
            </h2>
            <p className="text-sm md:text-base">
              Practice material and learning resources to help you improve your
              English
            </p>
          </div>
        </div>
      </div>

       {/* Ак блок – Products */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-gray-800">
          <h3 className="text-lg md:text-xl font-bold mb-3">
            Our products, platforms and websites:
          </h3>
          <p className="mb-6">
            Platform and website may vary, but our teams are working to enhance
            accessibility throughout. For more detailed information about the
            accessibility of specific products, please refer to the documentation
            linked from our Accessibility Directory below.
          </p>

           {/* Reading Experience */}
          <h3 className="text-lg md:text-xl font-bold mb-3">
            Reading Experience:
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>
              Listen to all of the website using a screen reader (e.g. the most
              recent versions of JAWS, NVDA and VoiceOver), including image
              descriptions for images that convey meaning, form elements and
              links with a descriptive label
            </li>
            <li>
              Understand the meaning of images and icons described by meaningful
              alternative text which explains its purpose within the context of
              the content. Some content may not have text alternatives available
              for figures and other graphics. If you encounter an image that does
              not have a text alternative, and you need one, you can request
              alternative text for specific images
            </li>
            <li>
              Understand the function of all form elements. All form fields have
              descriptive labels which explain their meaning and any that are
              mandatory to complete the form.
            </li>
          </ul>
        </div>
      </div>

      {/* Сүрөткө ылайык – Available formats */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-gray-800">
          <h3 className="text-lg md:text-xl font-bold mb-3">
            Available formats:
          </h3>
          <p className="mb-4">
            For optimal reading experience we recommend accessing content in HTML
            or EPUB format where available. These formats help to ensure text
            reflows correctly, images include alternative descriptions and that
            tables are appropriately.
          </p>
          <p>
            Where a work is unavailable in a suitable format (for example as an
            EPUB or fully typeset PDF), we recommend that disability officers
            first try obtaining the title through our partner.
          </p>
        </div>
      </div>

     <div className="bg-white py-16 px-6 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our expert team is made up of creatives with technical knowhow,
          strategists who think outside the box, and developers who push
          innovation
        </p>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          loop={false} // автоматтык айланбайт, өзүңүз өткөрөсүз
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {team.map((member) => (
            <SwiperSlide key={member.id}>
              <div className=" ml-[35px] bg-white w-[300px] border rounded-xl shadow-md hover:shadow-lg transition p-6">
                {/* Сүрөт + фон */}
                <div className={`${member.bg} w-full flex rounded-xl  items-center justify-center`}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-64 object-contain"
                  />
                </div>

                {/* Текст */}
                <div className="p-6 text-left">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                  <p className="text-gray-400 text-sm mt-1">{member.email}</p>

                  {/* Соц. иконкалар */}
                  <div className="flex justify-center gap-4 mt-4 text-blue-600">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaPinterestP /></a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>


     
    </div>
  );
};

export default AboutUsPage;
