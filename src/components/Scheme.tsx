const Scheme = () => {
  const scheme = [
    {
      number: 1,
      title: "Registration",
      descriptions:
        "Sign up and create your profile. Choose your category and join the ranks.",
    },
    {
      number: 2,
      title: "Selection",
      descriptions:
        "Pass the initial qualification rounds and technical assessments.",
    },
    {
      number: 3,
      title: "Execution",
      descriptions:
        "Live development or presentation phase in front of our panel of judges.",
    },
    {
      number: 4,
      title: "Grand Finale",
      descriptions:
        "Finalists compete for the grand prize and global recognition.",
    },
  ];

  return (
    <section className="py-24" id="scheme">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white">
            Competition Roadmap
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Follow the path to victory
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 hidden lg:block -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {scheme.map((e) => (
              <div
                key={e.number}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-4"
              >
                <div className="w-12 h-12 bg-[#E9A218] text-white rounded-full flex items-center justify-center font-black mx-auto mb-6 text-xl">
                  {e.number}
                </div>
                <h3 className="text-xl font-bold dark:text-white">{e.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {e.descriptions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scheme;
