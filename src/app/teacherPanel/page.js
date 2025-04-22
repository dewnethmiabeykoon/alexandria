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
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <div className="container mx-auto px-14 py-20">
        <h1 className="text-5xl sm:text-6xl font-bold text-center text-gray-800 mb-12">
          Our Teachers
        </h1>

        <div className="flex flex-col gap-16">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md flex flex-col sm:flex-row items-center gap-6 p-6 hover:shadow-xl transition duration-300"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-50 h-50 rounded-full"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-3xl font-semibold text-gray-800">{teacher.name}</h2>
                <p className="text-gray-600 mt-3 text-xlsm leading-relaxed max-w-3xl">
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
