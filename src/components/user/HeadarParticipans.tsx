const HeaderParticipans = () => {
  return (
    <div className="mb-10 flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-black tracking-tight">Dashboard</h1>
        <p className="text-sm font-medium text-slate-500">
          Welcome back,{" "}
          <span className="font-bold text-slate-900 dark:text-white">Alex</span>
          . Here's your competition overview.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden text-right sm:block">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            2024 Global Tech Challenge
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderParticipans;
