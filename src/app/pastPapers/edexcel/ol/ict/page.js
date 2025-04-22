import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function PastPapersPage() {
  const allYears = [
    "2011", "2012", "2013", "2014", "2015", "2016",
    "2017", "2018", "2019", "2020", "2021", "2022",
  ];

  const generateYearData = (year) => ({
    year,
    sessions: [
      {
        session: "Paper I – January",
        papers: [
          { label: "Paper", link: "#" },
          { label: "Marking Scheme", link: "#" },
        ],
      },
      {
        session: "Paper II – January",
        papers: [
          { label: "Paper", link: "#" },
          { label: "Marking Scheme", link: "#" },
        ],
      },
      {
        session: "Paper I – June",
        papers: [
          { label: "Paper", link: "#" },
          { label: "Marking Scheme", link: "#" },
        ],
      },
      {
        session: "Paper II – June",
        papers: [
          { label: "Paper", link: "#" },
          { label: "Marking Scheme", link: "#" },
        ],
      },
    ],
  });

  const legacyYears = allYears
    .filter((year) => parseInt(year) <= 2019)
    .map(generateYearData);

  const currentYears = allYears
    .filter((year) => parseInt(year) >= 2020)
    .map(generateYearData);

  const renderYearGroup = (title, years) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center underline">
        {title}
      </h2>
      {years.map((yearData) => (
        <div
          key={yearData.year}
          className="mb-12 p-6 bg-white shadow-lg rounded-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            {yearData.year}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {yearData.sessions.map((session, sessionIndex) => {
              const isJanuary = session.session.includes("January");
              const color = isJanuary ? "bg-blue-900" : "bg-gray-800";

              return (
                <div key={sessionIndex}>
                  <h4 className="text-lg font-medium text-gray-600 mb-2">
                    {session.session}
                  </h4>
                  <div className="space-y-2">
                    {session.papers.map((paper, paperIndex) => (
                      <a
                        key={paperIndex}
                        href={paper.link}
                        className={`block ${color} text-white text-center py-2 rounded-lg hover:bg-opacity-80 transition`}
                      >
                        {paper.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Nav />
      <div className="bg-white py-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800">Edexcel</h1>
      </div>
      <div className="bg-gray-100 py-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800">O/L – ICT</h2>
      </div>
      <main className="p-6 bg-gray-200 min-h-screen">
        {renderYearGroup("Legacy", legacyYears)}
        {renderYearGroup("Current", currentYears)}
      </main>
      <Footer />
    </>
  );
}
