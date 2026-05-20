import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const IllustrationPanel = () => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "circOut" }}
    className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary"
  >
    <div className="absolute inset-0 z-0">
      <motion.img
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        alt="Pencapaian Profesional"
        className="w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfbXIbrRFW-0pgUVw3bmJK83m6CL1-kLxcwA04vws5qgr0DwRJSRT4mKb-lP83i5GRLWQTKDooqu95kzcVlAJ-QdbnT6C93_p6FUM0RIKvdfUftrb-zCYs23eMiLtXTEZTyGh0t4Lp10xDH9askFxfKR5DY792NXNS3WsXKnMQT2lSsBwWrc0DbZkrc5blHq4ULACyPpcTvDqdWMCniZT9skI6_fpNes2xwhaa_1ISO2GezRANBJyybpPjbp8qKny4lQehzrHQJDQ" // Ganti dengan path gambar yang benar
      />
    </div>
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />

    <div className="relative z-20 flex flex-col justify-between p-16 w-full text-white">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2"
      >
        <Trophy className="w-8 h-8 fill-primary text-primary-foreground" />
        <span className="text-2xl font-bold tracking-tight">CompeteHub</span>
      </motion.div>

      <div className="max-w-md">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl font-black leading-tight mb-6 italic"
        >
          Unlock Your <br /> Full Potential.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white/80 text-lg font-medium leading-relaxed"
        >
          Join the leading platform for competition management and professional
          performance tracking.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2 }}
        className="text-white/60 text-sm"
      >
        © 2026 Intermedia. Copyright.
      </motion.div>
    </div>
  </motion.div>
);

export default IllustrationPanel;
