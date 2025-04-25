"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { FaCheckCircle, FaClock, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";

export default function MicrosoftOfficeCourse() {
  return (
    <>
      <Nav />

      {/* Banner Section with Title */}
      <div className="relative w-full h-[400px] md:h-[600px] mt-6 overflow-hidden rounded-xl shadow-lg">
        <Image
          src="/images/microsoft_365.jpg"
          alt="Microsoft Office"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />
        <div className="absolute bottom-10 left-10 text-white z-10">
          <h1 className="text-4xl md:text-8xl font-extrabold">Microsoft 365</h1>
          <p className="text-xl mt-8">With our 3-month intensive Microsoft 365 course</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left - Course Modules */}
        <motion.div
          className="lg:col-span-2 bg-white shadow-lg border-l-8 border-green-600 rounded-xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-red-700 mb-6">
            Course Modules
          </h2>

          {modules.map((module, index) => (
            <motion.div
              key={index}
              className="mb-6 p-5 bg-green-100 border-l-4 border-red-600 rounded-md shadow-sm"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <h3 className="text-xl font-semibold text-black mb-2">{module.title}</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
                {module.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Right - Course Info */}
        <motion.div
          className="bg-black text-white shadow-lg rounded-xl p-8 lg:sticky lg:top-20 self-start"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
            Course Info
          </h2>

          <div className="space-y-6 text-lg">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white">Entry Requirements</h3>
                <p className="text-gray-300">Anyone aged 18 or above</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaClock className="text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white">Duration</h3>
                <p className="text-gray-300">3 Months</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCalendarAlt className="text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white">Commencement</h3>
                <p className="text-gray-300">September 2023</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMoneyBillWave className="text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white">Programme Fees</h3>
                <p className="text-green-400 font-bold">Rs: 5000/= per Month</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

// Course Modules
const modules = [
  {
    title: "Introduction",
    topics: ["What is Microsoft 365? Overview & Features"],
  },
  {
    title: "Included Software",
    topics: ["Word", "Excel", "PowerPoint", "Access", "Outlook", "OneDrive", "OneNote", "Teams"],
  },
  {
    title: "Cloud & Collaboration",
    topics: ["Using OneDrive", "Teams for work & personal use"],
  },
  {
    title: "Office Basics",
    topics: [
      "Getting started with Word, Excel & PowerPoint",
      "Creating documents, sheets & presentations",
      "Saving & printing techniques",
      "Useful shortcuts",
    ],
  },
  {
    title: "Microsoft Word",
    topics: ["Advanced formatting", "Word processing tools", "Template usage"],
  },
  {
    title: "Microsoft Excel",
    topics: [
      "Managing multiple sheets",
      "Using formulas",
      "Must-know Excel shortcuts",
      "Data entry best practices",
    ],
  },
  {
    title: "Microsoft PowerPoint",
    topics: [
      "Slide design & master slides",
      "Presenting tips & keyboard shortcuts",
      "Transitions & animations",
      "Speaker notes & presentation flow",
    ],
  },
];
