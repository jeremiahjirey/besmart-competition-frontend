import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Hero = () => {
  const countdown = (): TimeLeft => {
    const targetDate = "2026-04-15";
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(countdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(countdown());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div
      id="home"
      className="mx-auto max-w-5xl px-4  lg:py-5 sm:px-6 lg:px-8 text-center"
    >
      <div className="flex flex-col items-center gap-12">
        <div className="space-y-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-6xl font-black leading-[0.9] tracking-tight text-slate-900 dark:text-white lg:text-8xl"
          >
            Showcase Your <br />
            <span className="text-[#E9A218]">Excellence</span> to the World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400"
          >
            The ultimate stage for innovators and creators. Register now to
            secure your spot in the most anticipated global competition of the
            year.
          </motion.p>
        </div>

        {/* Countdown */}
        <div className="flex gap-4 sm:gap-8 justify-center items-center">
          <div className="flex flex-col items-center">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={timeLeft.days} // Kunci utama animasi
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="text-4xl  sm:text-5xl font-black text-slate-900 dark:text-white"
              >
                {String(timeLeft.days).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
              Days
            </span>
          </div>
          <div className="text-3xl font-black text-primary/30">:</div>
          <div className="flex flex-col items-center">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={timeLeft.hours} // Kunci utama animasi
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white"
              >
                {String(timeLeft.hours).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
              Hours
            </span>
          </div>
          <div className="text-3xl font-black text-primary/30">:</div>
          <div className="flex flex-col items-center">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={timeLeft.minutes} // Kunci utama animasi
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white"
              >
                {String(timeLeft.minutes).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
              Mins
            </span>
          </div>
          <div className="text-3xl font-black text-primary/30">:</div>
          <div className="flex flex-col items-center">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={timeLeft.seconds} // Kunci utama animasi
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white"
              >
                {String(timeLeft.seconds).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
              Secs
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <a href="/auth">
              <button className="w-full sm:w-auto cursor-pointer rounded-2xl bg-primary px-12 py-5 text-xl tracking-wide font-black text-white shadow-2xl shadow-primary/40 hover:-translate-y-1 hover:brightness-110 transition-all active:scale-95">
                Register Now
              </button>
            </a>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <button className="w-full sm:w-auto cursor-pointer rounded-2xl border-2 border-slate-200 tracking-wide dark:border-slate-800 bg-white dark:bg-slate-900 px-12 py-5 text-xl font-black text-slate-900 dark:text-white hover:border-primary/30 transition-all">
              View Schedule
            </button>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
