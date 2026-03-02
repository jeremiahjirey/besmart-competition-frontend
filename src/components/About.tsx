import { Globe, ShieldCheck, Star, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white">
                Empowering the Next Generation of Champions
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full"></div>
            </div>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                CompeteNow is more than just a platform; it's an ecosystem
                designed to bridge the gap between talent and opportunity. We
                provide a fair, transparent, and high-stakes environment for
                professionals and hobbyists alike.
              </p>
              <p>
                Since our inception, we have hosted over 500+ global
                competitions, rewarding excellence and fostering a community of
                millions of active participants across 120 countries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">
                  100k+
                </div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Active Users
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">
                  500+
                </div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Contests
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="h-48 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl ">
                  <ShieldCheck color="#E9A218" />
                </span>
              </div>
              <div className="h-64 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-slate-400">
                  <Users />
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-64 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-slate-400">
                  <Globe />
                </span>
              </div>
              <div className="h-48 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl">
                  <Star color="#E9A218" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
