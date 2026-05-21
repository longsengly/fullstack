import { use, useEffect } from "react";
import { FaFacebookF, FaGithub, FaTelegram } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { TbChalkboardTeacher } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import "./styes.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
useEffect(() => {
  AOS.init({
    duration: 800, // Animation duration in milliseconds
    easing: 'ease-in-out', // Animation easing
    once: true, // Whether animation should happen only once - while scrolling down
  });
}, []);

return (
  <div className="min-h-screen max-w-full flex justify-center bg-amber-50 px-4 py-20 lg:py-2  ">
    <div className=" w-full flex flex-col lg:flex-row  items-center justify-center gap-10 max-w-5xl w-full h-auto rounded-lg p-8 shadow-lg mt-2 lg:mt-[-150px]">
      {/* Profile Image */}
        <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-cyan-400 shadow-xl " 
        
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000">
          <img
            className="rounded-full w-60 h-60 md:w-72 md:h-72 object-cover select-none"
            src="https://i.pinimg.com/736x/ad/55/db/ad55db4a4989ff76b9fd3229bae6785c.jpg"
            alt="Profile"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left w-full max-w-lg flex flex-col items-start justify-center "
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          {/* Title */}
          <div className="w-full text-center lg:text-left flex flex-col ">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 select-none ">
              Hi, I'm Punlork Sok
              <span className="text-6xl animate-wave origin-[70%_70%] inline-block">
                🤚
              </span>
            </h1>
          {/* My Job */}
            <h2 className="text-lg md:text-2xl text-gray-700 py-3 font-cascadia font-bold select-none ">
              I'm a Python Developer
            </h2>
          </div>

          {/* Info */}
          <ul className="mt-6 space-y-4 w-full items-start md:justify-start text-2xl cursor-pointer">
            <li className="flex  md:justify-start gap-3 text-gray-800 text-gray-800 duration-400 transition-transform ease-in-out hover:-translate-y-[5px]">
              <span className="text-blue-600">
                <TbChalkboardTeacher />
              </span>
              <span className="text-lg font-bold font-cascadia">Teacher</span>
            </li>

            <li className="flex  md:justify-start gap-3 text-gray-800 text-gray-800 duration-400 transition-transform ease-in-out hover:-translate-y-[5px]">
              <span>
                <FaCode />
              </span>
              <span className="text-lg font-bold font-cascadia">Coding</span>
            </li>

            <li className="flex  md:justify-start gap-3 text-gray-800 text-gray-800 duration-400 transition-transform ease-in-out hover:-translate-y-[5px]">
              <span className="text-yellow-600">
                <FaBook />
              </span>
              <span className="text-lg font-bold font-cascadia">Reading a Book</span>
            </li>

            {/* <li className="flex  md:justify-start gap-3 text-gray-800 break-all text-gray-800 duration-400 transition-transform ease-in-out hover:-translate-y-[5px]">
              <span className="text-black">
                <HiOutlineMailOpen />
              </span>
              <span className="text-lg font-bold font-cascadia">ale906271@gmail.com</span>
            </li> */}
          </ul>

          {/* Social Icons */}
          <div className="mt-8 w-full">
            <ul className="w-full flex items-center justify-center gap-6 md:gap-10 cursor-pointer">
              <li className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-blue-600 transition-transform ease-in-out duration-300 ">
                <span>
                  <FaFacebookF />
                </span>
              </li>

              <li className="text-2xl md:text-4xl text-gray-900 hover:text-pink-500 transition-tra east-in-out duration-300 ">
                <span>
                  <SlSocialInstagram />
                </span>
              </li>

              <li className="text-2xl md:text-4xl text-gray-900 hover:text-gray-700 transition-transform east-in-out duration-300 ">
                <span>
                  <FaGithub />
                </span>
              </li>

              <li className="text-2xl md:text-4xl text-gray-900 hover:text-sky-500 transition-transform ease-in-out duration-300 ">
                <span>
                  <FaTelegram />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
