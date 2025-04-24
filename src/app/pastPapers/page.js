"use client";
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function PastPapers() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Nav />
      <main className="flex-grow container mx-auto px-6 py-12">
        {/* Updated Banner Section */}
        <div className="relative mb-16 w-full">
          <img
            src="/images/banner.jpg"
            alt="Past Papers Banner"
            className="w-full h-[600px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-r from-black to-transparent p-8">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 border-b-4 border-red-600 pb-4 px-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Past Papers
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-white mb-6 px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              So much goodness all in one place!
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-white mb-8 px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Explore our extensive collection of past papers, <br/>
              categorized by exams, subjects, and levels. Everything you need to succeed is right here.
            </motion.p>
            <div className="px-8 pt-4">
              <motion.button
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Start Exploring
              </motion.button>
            </div>
          </div>
        </div>

        {/* Local Section */}
        <Section title="Local Exams" id="local">
          <Category title="O/L" color="bg-gradient-to-r from-gray-400 to-green-200">
            <PaperLink title="Sinhala" href="/pastPapers/local/ol/sinhala" />
            <PaperLink title="Health" href="/pastPapers/local/ol/health" />
            <PaperLink title="History" href="/pastPapers/local/ol/history" />
            <PaperLink title="Commerce" href="/pastPapers/local/ol/commerce" />
            <PaperLink title="ICT" href="/pastPapers/local/ol/ict" />
            <PaperLink title="Mathematics" href="/pastPapers/local/ol/mathematics" />
            <PaperLink title="English" href="/pastPapers/local/ol/english" />
            <PaperLink title="Science" href="/pastPapers/local/ol/science" />
          </Category>
          <Category title="A/L" color="bg-gradient-to-r from-gray-400 to-green-200">
            <PaperLink title="ICT" href="/pastPapers/local/al/ict" />
            <PaperLink title="Biology" href="/pastPapers/local/al/biology" />
            <PaperLink title="Econ" href="/pastPapers/local/al/econ" />
            <PaperLink title="Combined Maths" href="/pastPapers/local/al/combined-maths" />
            <PaperLink title="Commerce" href="/pastPapers/local/al/commerce" />
            <PaperLink title="English Literature" href="/pastPapers/local/al/english-literature" />
          </Category>
        </Section>

        {/* Edexcel Section */}
        <Section title="Edexcel Exams" id="edexcel">
          <Category title="O/L" color="bg-gradient-to-r from-gray-400 to-red-200">
            <PaperLink title="Biology" href="/pastPapers/edexcel/ol/biology" />
            <PaperLink title="ICT" href="/pastPapers/edexcel/ol/ict" />
            <PaperLink title="Computer Science" href="/pastPapers/edexcel/ol/computer-science" />
            <PaperLink title="Further Maths" href="/pastPapers/edexcel/ol/further-maths" />
            <PaperLink title="Mathematics" href="/pastPapers/edexcel/ol/mathematics" />
            <PaperLink title="Physics" href="/pastPapers/edexcel/ol/physics" />
            <PaperLink title="Human Biology" href="/pastPapers/edexcel/ol/human-biology" />
            <PaperLink title="Chemistry" href="/pastPapers/edexcel/ol/chemistry" />
          </Category>
          <Category title="AS" color="bg-gradient-to-r from-gray-400 to-red-200">
            <PaperLink title="Biology" href="/pastPapers/edexcel/as/biology" />
            <PaperLink title="ICT" href="/pastPapers/edexcel/as/ict" />
            <PaperLink title="Computer Science" href="/pastPapers/edexcel/as/computer-science" />
            <PaperLink title="Further Maths" href="/pastPapers/edexcel/as/further-maths" />
            <PaperLink title="Mathematics" href="/pastPapers/edexcel/as/mathematics" />
            <PaperLink title="Physics" href="/pastPapers/edexcel/as/physics" />
            <PaperLink title="Human Biology" href="/pastPapers/edexcel/as/human-biology" />
            <PaperLink title="Chemistry" href="/pastPapers/edexcel/as/chemistry" />
          </Category>
          <Category title="A2" color="bg-gradient-to-r from-gray-400 to-red-200">
            <PaperLink title="Biology" href="/pastPapers/edexcel/a2/biology" />
            <PaperLink title="ICT" href="/pastPapers/edexcel/a2/ict" />
            <PaperLink title="Computer Science" href="/pastPapers/edexcel/a2/computer-science" />
            <PaperLink title="Further Maths" href="/pastPapers/edexcel/a2/further-maths" />
            <PaperLink title="Mathematics" href="/pastPapers/edexcel/a2/mathematics" />
            <PaperLink title="Physics" href="/pastPapers/edexcel/a2/physics" />
            <PaperLink title="Human Biology" href="/pastPapers/edexcel/a2/human-biology" />
            <PaperLink title="Chemistry" href="/pastPapers/edexcel/a2/chemistry" />
          </Category>
        </Section>

        {/* Cambridge Section */}
        <Section title="Cambridge Exams" id="cambridge">
          <Category title="O/L" color="bg-gradient-to-r from-gray-400 to-lime-200">
            <PaperLink title="Biology" href="/pastPapers/cambridge/ol/biology" />
            <PaperLink title="ICT" href="/pastPapers/cambridge/ol/ict" />
            <PaperLink title="Computer Science" href="/pastPapers/cambridge/ol/computer-science" />
            <PaperLink title="Further Maths" href="/pastPapers/cambridge/ol/further-maths" />
            <PaperLink title="Mathematics" href="/pastPapers/cambridge/ol/mathematics" />
            <PaperLink title="Physics" href="/pastPapers/cambridge/ol/physics" />
            <PaperLink title="Human Biology" href="/pastPapers/cambridge/ol/human-biology" />
            <PaperLink title="Chemistry" href="/pastPapers/cambridge/ol/chemistry" />
          </Category>
          <Category title="AS" color="bg-gradient-to-r from-gray-400 to-lime-200">
            <PaperLink title="Biology" href="/pastPapers/cambridge/as/biology" />
            <PaperLink title="ICT" href="/pastPapers/cambridge/as/ict" />
            <PaperLink title="Computer Science" href="/pastPapers/cambridge/as/computer-science" />
            <PaperLink title="Further Maths" href="/pastPapers/cambridge/as/further-maths" />
            <PaperLink title="Mathematics" href="/pastPapers/cambridge/as/mathematics" />
            <PaperLink title="Physics" href="/pastPapers/cambridge/as/physics" />
            <PaperLink title="Human Biology" href="/pastPapers/cambridge/as/human-biology" />
            <PaperLink title="Chemistry" href="/pastPapers/cambridge/as/chemistry" />
          </Category>
          <Category title="A2" color="bg-gradient-to-r from-gray-400 to-lime-200">
            <PaperLink title="Biology" href="/pastPapers/cambridge/a2/biology" />
            <PaperLink title="ICT" href="/pastPapers/cambridge/a2/ict" />
            <PaperLink title="Computer Science" href="/pastPapers/cambridge/a2/computer-science" />
            <PaperLink title="Further Maths" href="/pastPapers/cambridge/a2/further-maths" />
            <PaperLink title="Mathematics" href="/pastPapers/cambridge/a2/mathematics" />
            <PaperLink title="Physics" href="/pastPapers/cambridge/a2/physics" />
            <PaperLink title="Human Biology" href="/pastPapers/cambridge/a2/human-biology" />
            <PaperLink title="Chemistry" href="/pastPapers/cambridge/a2/chemistry" />
          </Category>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

// Reusable Section Component
function Section({ title, children, id }) {
  return (
    <motion.div
      id={id}
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">{title}</h2>
      {children}
    </motion.div>
  );
}

// Category Component with Gradient Backgrounds
function Category({ title, children, color }) {
  return (
    <div className={`mb-12 p-6 rounded-lg shadow-lg ${color}`}>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
    </div>
  );
}

// PaperLink Component with Hover Effects
function PaperLink({ title, href }) {
  return (
    <motion.a
      href={href}
      className="block p-6 bg-black rounded-lg shadow-md hover:shadow-xl text-center text-lg font-medium text-white hover:bg-gray-100 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {title}
    </motion.a>
  );
}
