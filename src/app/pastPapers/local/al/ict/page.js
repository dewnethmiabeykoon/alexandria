import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function PastPapersPage() {
  const years = [
    {
      year: "2011",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2012",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2013",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2014",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2015",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2016",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2017",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2018",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2019",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2020",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2021",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2022",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Structured and Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
  ];

  return (
    <>
      <Nav />
      <div className="py-8 text-center bg-white">
        <h1 className="text-6xl font-bold text-black">Local Exams</h1>
      </div>

      <main className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-5xl font-semibold text-center text-red-700 mb-10">
          A/L - ICT
        </h2>

        {years.map((yearData) => (
          <div
            key={yearData.year}
            className="mb-12 p-6 bg-white shadow-xl rounded-2xl"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              {yearData.year}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* English Medium */}
              <div className="space-y-4 border-l-8 border-green-700 shadow-md rounded-xl p-4 bg-lime-100">
                <h4 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                  English Medium
                </h4>
                {yearData.papers.map((paper, index) => (
                  <a
                    key={`en-${index}`}
                    href={paper.link}
                    className="block bg-green-700 text-white text-lg text-center py-3 rounded-lg hover:opacity-90 transition"
                  >
                    {paper.label}
                  </a>
                ))}
              </div>

              {/* Sinhala Medium */}
              <div className="space-y-4 border-l-8 border-lime-800 shadow-md rounded-xl p-4 bg-lime-100">
                <h4 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                  Sinhala Medium
                </h4>
                {yearData.papers.map((paper, index) => (
                  <a
                    key={`si-${index}`}
                    href={paper.link}
                    className="block bg-lime-600 text-white text-lg text-center py-3 rounded-lg hover:opacity-90 transition"
                  >
                    {paper.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
