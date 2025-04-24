import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function TeacherPanel() {
  const teachers = [
    {
      name: "Mr. Tanjana Chamikara",
      image: "/images/tanjana-sir.png",
      description:
        "Tanjana Chamikara is currently working as a senior Maths teacher in a well-reputed international school while supporting as a center supervisor to the Edexcel UK exam body for Iprimary, Lower Secondary, IGCSE, and IAL exams.",
    },
    {
      name: "Ms. Madhara Wedhage",
      image: "/images/madhara-miss.png",
      description:
        "Madara Wedhage has 13+ years of experience in delivering excellence for students from Grade 6 & upwards. Fully focused on understanding, not memorizing. We make learning interesting, engaging the kids with practice parallelly with the theoretical syllabus.",
    },
    {
      name: "Ms. Udara Dilshani",
      image: "/images/udara-miss.png",
      description:
        "Udara Dilshani is a versatile educator who imparts knowledge in Science, English, and Math to primary school students, fostering a well-rounded foundation in various subjects.",
    },
    {
      name: "Ms. Leandra Ratnayake",
      image: "/images/leandra-miss.png",
      description:
        "Leandra Ratnayake is currently working as a biology teacher at a reputed international school while pursuing a degree (BSc in Psychology) at ICBT Campus. She has been gaining experience in the field of education for the past two years in the hope of nurturing knowledge for young minds.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-100 via-white to-red-100 min-h-screen">
      <Nav />
      <div className="container mx-auto px-6 sm:px-14 py-20">
        <h1 className="text-5xl font-bold text-center text-black mb-16">
          Our Teachers
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-3xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 flex flex-col items-center sm:items-start sm:flex-row gap-8"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-full border-4 border-black shadow-md"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-red-800 mb-2">{teacher.name}</h2>
                <p className="text-gray-700 text-base leading-relaxed max-w-xl">
                  {teacher.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
