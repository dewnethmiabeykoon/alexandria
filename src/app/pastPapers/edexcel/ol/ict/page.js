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
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-red-700 text-center underline mb-10">
        {title} Papers
      </h2>
      {years.map((yearData) => (
        <div
          key={yearData.year}
          className="mb-16 p-6 bg-white shadow-xl rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
            {yearData.year}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {yearData.sessions.map((session, sessionIndex) => {
              const isJanuary = session.session.includes("January");
              const boxColor = isJanuary ? "bg-lime-100 border-green-700" : "bg-lime-100 border-lime-700";
              const btnColor = isJanuary ? "bg-green-700" : "bg-lime-500";

              return (
                <div
                  key={sessionIndex}
                  className={`border-l-8 ${boxColor} rounded-xl shadow-md p-4`}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {session.session}
                  </h4>
                  <div className="space-y-3">
                    {session.papers.map((paper, paperIndex) => (
                      <a
                        key={paperIndex}
                        href={paper.link}
                        className={`${btnColor} text-white block text-center py-2 rounded-md hover:opacity-90 transition`}
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
      <header className="bg-white py-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">Edexcel</h1>
      </header>

      <section className="bg-gray-100 py-6 text-center">
        <h2 className="text-4xl font-bold text-black">O/L – ICT</h2>
      </section>

      <main className="p-6 bg-gray-200 min-h-screen">
        {renderYearGroup("Legacy", legacyYears)}
        {renderYearGroup("Current", currentYears)}
      </main>

      <Footer />
    </>
  );
}
