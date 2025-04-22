"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

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

// Advertisement Pop-up Component
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
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-full text-lg hover:bg-opacity-75 transition"
        >
          ✖
        </button>

        {/* Text Container */}
        <div className="absolute top-6 right-8 text-black text-right w-2/3">
          <h2 className="text-4xl font-extrabold uppercase leading-tight">
            Alexandria Science Exhibition
          </h2>
          <h3 className="text-5xl font-bold text-black mt-1">2025</h3>

          <p className="text-lg mt-4 text-justify leading-relaxed">
            Join us for an exciting educational experience showcasing talents and innovations. 
            This event features cutting-edge projects, hands-on workshops, and interactive exhibits.
          </p>

          {/* Button */}
          <div className="mt-6 flex justify-center">
            <button
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300 shadow-md"
              onClick={onClose}
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
  const [showPopup, setShowPopup] = useState(true); // Show the ad on page load

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    const popupTimeout = setTimeout(() => {
      setShowPopup(false); // Close popup after 3 seconds
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(popupTimeout);
    };
  }, []);

  return (
    <div>
      <Nav />

      {/* Show Advertisement Popup */}
      {showPopup && <AdvertisementPopup onClose={() => setShowPopup(false)} />}

      {/* Hero Slider */}
      <motion.div
        className="relative w-full h-[650px] overflow-hidden mt-6 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={slides[current].image}
          alt={`Slide ${current}`}
          className="w-full h-full object-cover transition-opacity duration-700 relative z-0 rounded-lg"
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

      {/* Description After Slider */}
      <div className="justify-center my-12 px-4">
        <p className="max-w-4xl mx-auto text-2xl text-gray-700 leading-relaxed">
          <span className="text-5xl font-bold text-gray-800">I</span>nstitute of Alexandria is a place where students feel at home away from home. The institute was established in 2008 with the intention of uplifting students' education while shaping them into responsible citizens.
        </p>
      </div>

      {/* Alexandria Science Exhibition 2024 Banner */}
      <motion.div
        className="relative w-full p-6 bg-yellow-100 border-2 border-yellow-500 shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/images/banner4.jpg"
          alt="Alexandria Science Exhibition 2024"
          className="w-full h-[350px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gray-600 bg-opacity-60 flex flex-col justify-center items-center text-white px-10 py-6 rounded-lg">
          <h2 className="text-5xl font-bold mb-4 text-center">Alexandria Science Exhibition 2025</h2>
          <p className="text-xl text-white text-center max-w-2xl mb-6">
            Join us for an exciting educational experience and showcase talents and innovations by our bright minds.
          </p>
          <motion.button
            className="bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-600 transition duration-300 transform hover:scale-105 font-bold"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Register Now
          </motion.button>
        </div>
      </motion.div>
      <br/><br/>

      {/* Syllabus Section */}
      <div className="text-center my-12">
        <h2 className="text-5xl text-black font-bold">We cover Syllabus for</h2><br/><br/>
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          <div className="bg-gray-300 p-10 rounded-md w-120">
            <h3 className="font-bold text-3xl">Local</h3><br/><br/>
            <ul className="text-left list-disc pl-6 mt-2 text-xl">
              <li>Available for students from Grade 1–13</li>
              <li>Laboratory Facilities</li>
              <li>Mathematics, Commerce, ICT, Science</li>
            </ul>
          </div>
          <div className="bg-gray-300 p-10 rounded-md w-120">
            <h3 className="font-bold text-3xl">Edexcel</h3><br/><br/>
            <ul className="text-left list-disc pl-6 mt-2 text-xl">
              <li>Available for students from Grade 1–A2</li>
              <li>Mathematics, Chemistry, Biology, Human Biology, Physics, ICT, Computer Science</li>
            </ul>
          </div>
          <div className="bg-gray-300 p-10 rounded-md w-120">
            <h3 className="font-bold text-3xl">Cambridge</h3><br/><br/>
            <ul className="text-left list-disc pl-6 mt-2 text-xl">
              <li>Available for students from Grade 1–A2</li>
              <li>Mathematics, Chemistry, Biology, Human Biology, Physics, ICT, Computer Science, Further Maths</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Our Courses Section */}
      <motion.div
        className="my-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-black mb-8">Our Courses</h2><br/><br/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[{ title: "Web Development", image: "/images/web-dev.png" }, { title: "Microsoft 365", image: "/images/microsoft-365.png" }, { title: "Python Programming", image: "/images/python.png" }].map((course, index) => (
            <motion.div
              key={index}
              className="bg-black shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-3xl font-semibold text-white">{course.title}</h3>
                <button className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-800 transition duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
