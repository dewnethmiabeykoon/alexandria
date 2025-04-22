"use client";

import React from "react";
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function Courses() {
  const router = useRouter();

  return (
    <>
      <Nav />
      <main className="p-10 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
        {/* Page Title */}
        <motion.h1
          className="text-5xl font-extrabold text-center text-black mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Courses
        </motion.h1>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover"
              />

              {/* Course Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
                <p className="text-gray-600 mt-2">{course.description}</p>
                <motion.button
                  className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => router.push(`/courses/${course.slug}`)} // Navigate to course page
                >
                  More Info
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

// Courses Data
const courses = [
  {
    title: "Web Development",
    description: "Learn to build modern and responsive websites with HTML, CSS, JavaScript, and frameworks.",
    image: "/images/web-ad.png",
    slug: "web",
  },
  {
    title: "Microsoft 365",
    description: "Master Microsoft Office tools to boost productivity in the workplace.",
    image: "/images/ms-ad.png",
    slug: "microsoft",
  },
  {
    title: "Python Programming",
    description: "Discover the power of Python for data analysis, AI, and web development.",
    image: "/images/python.png",
    slug: "python",
  },
];
