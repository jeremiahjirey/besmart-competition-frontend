import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Trophy,
  Mail,
  Lock,
  Eye,
  EyeOff,
  MoveRight,
  User,
  School,
  BookOpen,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AuthenticationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  console.log(activeTab);

  // --- Animasi Varian ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const signUpFieldsVariants: Variants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier untuk efek kenyal
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <div className="flex min-h-screen font-sans bg-background overflow-x-hidden">
      {/* Kiri: Visual Section (Hidden on Mobile) */}
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
            alt="Professional achievement"
            className="w-full h-full object-cover "
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfbXIbrRFW-0pgUVw3bmJK83m6CL1-kLxcwA04vws5qgr0DwRJSRT4mKb-lP83i5GRLWQTKDooqu95kzcVlAJ-QdbnT6C93_p6FUM0RIKvdfUftrb-zCYs23eMiLtXTEZTyGh0t4Lp10xDH9askFxfKR5DY792NXNS3WsXKnMQT2lSsBwWrc0DbZkrc5blHq4ULACyPpcTvDqdWMCniZT9skI6_fpNes2xwhaa_1ISO2GezRANBJyybpPjbp8qKny4lQehzrHQJDQ"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10"></div>

        <div className="relative z-20 flex flex-col justify-between p-16 w-full text-white">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <Trophy className="w-8 h-8 fill-primary text-primary-foreground" />
            <span className="text-2xl font-bold tracking-tight">
              CompeteHub
            </span>
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
              Join the premier platform for professional competition management
              and performance tracking.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2 }}
            className="text-white/60 text-sm"
          >
            © 2026 CompeteHub. All rights reserved.
          </motion.div>
        </div>
      </motion.div>

      {/* Kanan: Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-16 lg:px-20 py-12 overflow-y-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md w-full mx-auto"
        >
          {/* Mobile Logo */}
          <motion.div
            variants={itemVariants}
            className="lg:hidden flex items-center gap-2 text-primary mb-12"
          >
            <Trophy className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight">
              CompeteHub
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-8 text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              {activeTab === "login" ? "Welcome back" : "Join CompeteHub"}
            </h2>
            <p className="text-muted-foreground">
              {activeTab === "login"
                ? "Enter your credentials to access your dashboard."
                : "Enter your information to create an account."}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full mb-8"
            >
              <TabsList className="grid w-full grid-cols-2 h-12">
                <TabsTrigger value="login" className="font-bold">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="font-bold">
                  Sign Up
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {activeTab === "signup" && (
                <motion.div
                  key="signup-section"
                  variants={signUpFieldsVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase text-muted-foreground">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          placeholder="John Doe"
                          className="pl-10 h-11 bg-muted/30"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase text-muted-foreground">
                        Username
                      </Label>
                      <Input
                        placeholder="johndoe"
                        className="h-11 bg-muted/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground">
                      School Origin
                    </Label>
                    <div className="relative">
                      <School className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Contoh: SMK Negeri 1"
                        className="pl-10 h-11 bg-muted/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase text-muted-foreground">
                        Major
                      </Label>
                      <Select>
                        <SelectTrigger className="h-11 bg-muted/30">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-muted-foreground" />
                            <SelectValue placeholder="Pilih Jurusan" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ipa">MIPA (IPA)</SelectItem>
                          <SelectItem value="ips">Soshum (IPS)</SelectItem>
                          <SelectItem value="rpl">
                            Rekayasa Perangkat Lunak
                          </SelectItem>
                          <SelectItem value="tkj">
                            Teknik Komputer Jaringan
                          </SelectItem>
                          <SelectItem value="mm">Multimedia / DKV</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase text-muted-foreground">
                        Grade Level
                      </Label>
                      <Select>
                        <SelectTrigger className="h-11 bg-muted/30">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-muted-foreground" />
                            <SelectValue placeholder="Pilih" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">Kelas 10</SelectItem>
                          <SelectItem value="11">Kelas 11</SelectItem>
                          <SelectItem value="12">Kelas 12</SelectItem>
                          <SelectItem value="alumni">Alumni / Umum</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email & Password */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="name@email.com"
                  type="email"
                  className="pl-10 h-11 bg-muted/30"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                  Password
                </Label>
                {activeTab === "login" && (
                  <Button
                    variant="link"
                    className="px-0 h-auto text-xs font-bold text-primary"
                  >
                    Forgot Password?
                  </Button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  className="pl-10 pr-10 h-11 bg-muted/30"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={showPassword ? "eye-off" : "eye"}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.1 }}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full h-12 font-bold text-base shadow-lg shadow-primary/20 gap-2 group mt-2">
                {activeTab === "login" ? "Masuk" : "Daftar Sekarang"}
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </form>

          <motion.p
            variants={itemVariants}
            className="mt-8 text-center text-xs text-muted-foreground leading-relaxed"
          >
            By joining, you agree to our{" "}
            <Button
              variant="link"
              className="p-0 h-auto text-xs font-bold text-primary"
            >
              Terms of Service
            </Button>{" "}
            and{" "}
            <Button
              variant="link"
              className="p-0 h-auto text-xs font-bold text-primary"
            >
              Privacy Policy
            </Button>
            .
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
