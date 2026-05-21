const PrizePool = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] bg-slate-900 dark:bg-slate-900 px-8 py-20 text-center lg:px-16 border border-slate-800">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#E9A218]/10 blur-[80px]"></div>
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#E9A218]/10 blur-[80px]"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">
              Total Grand Prize
            </span>
            <h2 className="text-[3.8rem] md:text-9xl font-black text-white tracking-tighter">
              $50,000<span className="text-[#E9A218]">+</span>
            </h2>
            <p className="max-w-xl text-lg text-slate-400 font-medium">
              Distributed among top performers, innovators, and disruptive
              thinkers across all categories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;
