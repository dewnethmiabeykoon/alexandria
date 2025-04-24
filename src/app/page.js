"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Link from "next/link";

// Slider content
const slides = [
  {
    image: "/images/banner1.jpg",
    title: "Welcome to INSTITUTE OF ALEXANDRIA",
    subtitle: "Feel home away from home",
    description:
      "Institute of Alexandria is a place where students feel at home away from home. Established in 2008, we focus on uplifting education while shaping students into responsible citizens.",
  },
  {
    image: "/images/banner2.jpg",
    title: "Dedicated Staff & Modern Facilities",
    subtitle: "Empowering Education Since 2008",
    description:
      "We aim to uplift students through world-class teaching and nurturing values.",
  },
  {
    image: "/images/banner3.jpg",
    title: "Alexandria Science Exhibition 2024",
    subtitle: "Join us for an exciting educational experience",
    description:
      "An event to showcase talents and innovations by our bright minds.",
  },
];

// Advertisement Pop-up
function AdvertisementPopup({ onClose }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none"
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -70 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative rounded-lg shadow-lg overflow-hidden pointer-events-auto"
        style={{
          backgroundImage: 'url(/images/01.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          width: '700px',
        }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-full text-lg hover:bg-opacity-75 transition"
        >
          ✖
        </button>

        <div className="absolute top-6 right-8 text-black text-right w-2/3">
          <h2 className="text-4xl font-extrabold uppercase leading-tight">
            Alexandria Science Exhibition
          </h2>
          <h3 className="text-5xl font-bold mt-1">2025</h3>
          <p className="text-lg mt-4 text-justify leading-relaxed">
            Join us for an exciting educational experience showcasing talents and innovations.
            This event features cutting-edge projects, hands-on workshops, and interactive exhibits.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={onClose}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    const popupTimeout = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(popupTimeout);
    };
  }, []);

  const courseLinks = {
    "Web Development": "/courses/web",
    "Microsoft 365": "/courses/microsoft",
    "Programming": "/courses/python",
  };

  return (
    <div>
      <Nav />

      {showPopup && <AdvertisementPopup onClose={() => setShowPopup(false)} />}

      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[650px] overflow-hidden mt-6 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover rounded-lg transition-opacity duration-700 relative z-0"
        />
        <motion.div
          className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6 py-8 z-10 rounded-lg"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-4xl font-bold mb-2">{slides[current].title}</h1>
          <p className="text-xl font-semibold mb-2">{slides[current].subtitle}</p>
          <p className="max-w-xl text-sm">{slides[current].description}</p>
        </motion.div>
      </motion.div>

      {/* About Description */}
      <div className="justify-center my-12 px-4">
        <p className="max-w-4xl mx-auto text-2xl text-black leading-relaxed">
          <span className="text-5xl font-bold text-red-600">I</span>nstitute of Alexandria is a place where students feel at home away from home. The institute was established in 2008 with the intention of uplifting students' education while shaping them into responsible citizens.
        </p>
      </div>

      {/* Event Banner */}
      <motion.div
        className="relative w-full p-6 bg-green-100 border-2 border-green-500 shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/images/banner4.jpg"
          alt="Alexandria Science Exhibition 2025"
          className="w-full h-[350px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white px-10 py-6 rounded-lg">
          <h2 className="text-5xl font-bold mb-4 text-center text-red-600">Alexandria Science Exhibition 2025</h2>
          <p className="text-xl text-center max-w-2xl mb-6">
            Join us for an exciting educational experience and showcase talents and innovations by our bright minds.
          </p>
          <motion.button
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105 font-bold"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Register Now
          </motion.button>
        </div>
      </motion.div>

      {/* Syllabus Section */}
      <div className="text-center my-12">
        <h2 className="text-5xl font-bold text-black">We cover Syllabus for</h2>
        <div className="flex justify-center gap-4 mt-10 flex-wrap px-4">
          {[
            {
              title: "Local",
              details: [
                "Available for students from Grade 1–13",
                "Laboratory Facilities",
                "Mathematics, Commerce, ICT, Science",
              ],
            },
            {
              title: "Edexcel",
              details: [
                "Available for students from Grade 1–A2",
                "Mathematics, Chemistry, Biology, Human Biology, Physics, ICT, Computer Science",
              ],
            },
            {
              title: "Cambridge",
              details: [
                "Available for students from Grade 1–A2",
                "Mathematics, Chemistry, Biology, Human Biology, Physics, ICT, Computer Science, Further Maths",
              ],
            },
          ].map((item) => (
            <div key={item.title} className="bg-red-100 p-10 rounded-md w-96">
              <h3 className="font-bold text-3xl text-black mb-6">{item.title}</h3>
              <ul className="text-left list-disc pl-6 text-xl">
                {item.details.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <motion.div
        className="my-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-black mb-8">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {[
            {
              title: "Web Development",
              description: "Learn the skills needed to build dynamic and responsive websites. HTML, CSS, JavaScript, and more.",
            },
            {
              title: "Microsoft 365",
              description: "Master the art of digital marketing including SEO, content marketing, and social media strategy.",
            },
            {
              title: "Programming",
              description: "Learn how to write clean and efficient code. Master languages like Python, Java, and C++.",
            },
          ].map((course) => (
            <div
              key={course.title}
              className="bg-green-200 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-3xl font-bold text-black mb-4">{course.title}</h3>
              <p className="text-xl text-black mb-4">{course.description}</p>
              <Link href={courseLinks[course.title]}>
                <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">
                  Explore Course
                </button>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
