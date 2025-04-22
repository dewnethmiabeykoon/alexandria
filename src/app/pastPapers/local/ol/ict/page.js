import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function PastPapersPage() {
  const years = [
    {
      year: "2011",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2012",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2013",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2014",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2015",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2016",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2017",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2018",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2019",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2020",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2021",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
    {
      year: "2022",
      papers: [
        { label: "MCQ – Paper I", link: "#" },
        { label: "Essay – Paper II", link: "#" },
        { label: "Marking Scheme", link: "#" },
      ],
    },
  ];

  return (
    <>
      <Nav />
      <div className="bg-whitw py-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800">Local </h1>
      </div>
      <main className="p-6 bg-gray-200 min-h-screen">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          O/L - ICT
        </h2>
        {years.map((yearData) => (
          <div
            key={yearData.year}
            className="mb-12 p-6 bg-white shadow-lg rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              {yearData.year}
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                { medium: "English Medium", color: "bg-green-900" },
                { medium: "Sinhala Medium", color: "bg-green-400" },
              ].map(({ medium, color }) => (
                <div key={medium} className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-600">
                    {medium}
                  </h4>
                  {yearData.papers.map((paper, index) => (
                    <a
                      key={index}
                      href={paper.link}
                      className={`block ${color} text-white text-center py-2 rounded-lg hover:bg-opacity-80 transition`}
                    >
                      {paper.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
