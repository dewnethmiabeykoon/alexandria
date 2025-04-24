"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function MicrosoftOfficeCourse() {
  return (
    <>
      <Nav />

      {/* Page Title */}
      <motion.h1
        className="text-black text-5xl md:text-6xl font-extrabold text-center mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Microsoft 365
      </motion.h1>

      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[600px] mt-6 overflow-hidden rounded-lg shadow-xl">
        <Image
          src="/images/microsoft_365.jpg"
          alt="Microsoft Office"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-opacity-50" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section - Course Modules */}
        <motion.div
          className="lg:col-span-2 bg-white shadow-2xl border-t-8 border-green-700 rounded-xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-red-700 text-center mb-6">
            Course Structure and Modules
          </h2>

          {modules.map((module, index) => (
            <motion.div
              key={index}
              className="mb-6 p-5 border-l-4 border-red-600 bg-green-100 rounded-md shadow-sm"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-black mb-2">{module.title}</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                {module.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Section - Entry Requirements */}
        <motion.div
          className="bg-black text-white shadow-xl rounded-xl p-8 lg:sticky lg:top-20 self-start"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">
            Course Information
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-red-500">Entry Requirements</h3>
              <p className="text-gray-300">Any adult above 18</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-500">Duration</h3>
              <p className="text-gray-300">3 Months</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-500">Commencement</h3>
              <p className="text-gray-300">September 2023</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-500">Programme Fees</h3>
              <p className="text-white font-bold">Rs: 5000/= per Month</p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

// Course Modules Data
const modules = [
  {
    title: "Introduction",
    topics: ["What is Microsoft 365"],
  },
  {
    title: "Software",
    topics: [
      "Word", "Excel", "PowerPoint", "Access", "Outlook",
      "OneDrive", "OneNote", "Teams"
    ],
  },
  {
    title: "Techniques",
    topics: ["Onedrive for Personal use", "Teams for office and personal use"],
  },
  {
    title: "Microsoft Word, Excel, and PowerPoint",
    topics: [
      "Getting started",
      "Using Word to create documents",
      "Using Excel to create Sheets",
      "Using PowerPoint to create Presentations",
      "Save locally, online and printing",
      "Basic Shortcuts to know",
    ],
  },
  {
    title: "Microsoft Word",
    topics: ["Using the tools and techniques in a word processing software"],
  },
  {
    title: "Microsoft Excel",
    topics: [
      "Creating multiple datasheets",
      "Formulas in Excel",
      "Must know shortcuts in Excel",
      "Different techniques in saving",
    ],
  },
  {
    title: "Microsoft PowerPoint",
    topics: [
      "Creating slides and Master slide Techniques",
      "Must know shortcuts in PowerPoint",
      "Shortcuts to use when presenting",
      "Techniques to use to capture Audiences",
      "Transitions and Animations",
      "Creating notes for self-reference",
    ],
  },
];
