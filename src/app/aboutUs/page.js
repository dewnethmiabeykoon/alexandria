"use client";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Nav />

      {/* Page Title */}
      <div className="bg-white py-10">
        <h1 className="text-6xl font-bold text-center text-black drop-shadow-lg">About Us</h1>
      </div>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <Image
            src="/images/05.jpg"
            alt="About Institute"
            width={900}
            height={1200}
            className="rounded-2xl shadow-2xl object-cover h-[900px] w-auto"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-5xl font-semibold text-red-600 mb-10">Welcome to Institute of Alexandria!</h1>
          <h2 className="text-2xl font-semibold text-black mb-6">Why Choose Us?</h2>
          <ol className="list-decimal ml-6 space-y-3 text-gray-700 text-justify text-xl leading-relaxed">
            <li><strong>Expert Faculty of Staff:</strong> Our teachers are not just knowledgeable but also passionate about their subjects, ensuring that students receive the best possible education.</li>
            <li><strong>Comprehensive Curriculum:</strong> We offer a well-rounded curriculum that combines academic excellence with practical application, empowering students to succeed in various fields.</li>
            <li><strong>Small Class Sizes:</strong> With smaller class sizes, our teachers can provide individualized attention, enabling students to grasp concepts more effectively.</li>
            <li><strong>State-of-the-Art Facilities:</strong> Our Institution is equipped with modern facilities, including well-equipped classrooms and laboratories, ensuring a holistic learning experience.</li>
            <li><strong>Focus on Holistic Development:</strong> We believe in nurturing not just academic excellence but also character, values, and soft skills that are essential for success in the real world.</li>
            <li><strong>Interactive Learning:</strong> Our teachers employ interactive teaching methods, making learning engaging and enjoyable for all students.</li>
          </ol>

          {/* Social Icons */}
          <div className="flex justify-center mt-8 space-x-6">
            <a
              href="https://instagram.com/institute_of_alexandria"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-red-100 p-2 rounded-full hover:bg-red-200 transition-colors duration-200"
            >
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={70}
                height={70}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://facebook.com/alexandriabattaramulla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-green-100 p-2 rounded-full hover:bg-green-200 transition-colors duration-200"
            >
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={70}
                height={70}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Founders Section with BG Color */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-green-200 to-lime-200 py-16"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Founder Card 1 */}
            <div className="bg-white shadow-lg border-t-4 border-red-600 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/tanjana-sir.png"
                alt="Mr. Tanjana Chamkara"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-3xl font-semibold text-gray-800">Mr. Tanjana Chamkara</h3>
              <p className="text-xl text-gray-600 mt-2">
                Bsc(Phy’Sci)(UoC), PG DipM(SL), AMSLIM, DIFM(UK), DISM(UK)
              </p>
            </div>

            {/* Founder Card 2 */}
            <div className="bg-white shadow-lg border-t-4 border-red-600 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/madhara-miss.png"
                alt="Ms. Madhara Wedhage"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-3xl font-semibold text-gray-800">Ms. Madhara Wedhage</h3>
              <p className="text-xl text-gray-600 mt-2">BIT(UoC), MIS(UoC Reading)</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Courses Offered Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-14 pb-16 mt-16"
      >
        <h2 className="text-4xl font-bold text-black text-center mb-12">Courses Offered</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-base text-gray-800">
          <div>
            <h3 className="font-semibold border-b-4 border-red-600 text-xl pb-2 mb-3">Local</h3>
            <ul className="space-y-1">
              <li>Mathematics</li>
              <li>Science</li>
              <li>ICT</li>
              <li>Commerce</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold border-b-4 border-green-700 text-xl pb-2 mb-3">Edexcel</h3>
            <ul className="space-y-1">
              <li>Mathematics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Human Biology</li>
              <li>Physics</li>
              <li>ICT</li>
              <li>Computer Science</li>
              <li>Further Maths</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold border-b-4 border-red-700 text-xl pb-2 mb-3">Cambridge</h3>
            <ul className="space-y-1">
              <li>Mathematics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Human Biology</li>
              <li>Physics</li>
              <li>ICT</li>
              <li>Computer Science</li>
              <li>Further Maths</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold border-b-4 border-green-600 text-xl pb-2 mb-3">IT Courses</h3>
            <ul className="space-y-1">
              <li>Web Development</li>
              <li>Microsoft 365</li>
              <li>Python Programming</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
