import { Brush, ChartLine, ChevronRight, SquareTerminal } from "lucide-react";

const Competitions = () => {
  const competitions = [
    {
      name: "Algorithm Challenge",
      icon: <SquareTerminal />,
      descriptions:
        "Optimize backend architectures and solve complex data structures",
      status: "Live Soon",
      link: "",
    },
    {
      name: "UX MasterclassName",
      icon: <Brush />,
      descriptions:
        "Design intuitive user flows and accessible digital experiences.",
      status: "Open",
      link: "",
    },
    {
      name: "Fintech Pitch",
      icon: <ChartLine />,
      descriptions:
        "Present disruptive business models for the future of finance.",
      status: "Closed",
      link: "",
    },
  ];

  return (
    <section
      className="bg-slate-50 dark:bg-slate-900/50 py-24"
      id="competitions"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white">
            Active Competitions
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {competitions.map((e) => (
            <div
              key={e.name}
              className="group relative flex flex-col gap-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 transition-all hover:border-primary/50 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  {e.icon}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {e.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  {e.descriptions}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span
                  className={`text-xs font-bold px-3 py-1 ${e.status !== "Open" ? "bg-slate-100 text-slate-500" : "bg-green-100 text-green-600"} rounded-full `}
                >
                  {e.status}
                </span>
                <a
                  className="text-sm font-black text-primary flex items-center gap-1"
                  href={e.link}
                >
                  Details
                  <span className="material-symbols-outlined text-lg">
                    <ChevronRight />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
