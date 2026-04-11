import { useState } from "react";
import { Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import IllustrationPanel from "@/components/auth/IlustrationPanel";

import { containerVariants, itemVariants } from "@/lib/variants";

const AuthenticationPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex min-h-screen font-sans bg-background overflow-x-hidden">
      <IllustrationPanel />

      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-16 lg:px-20 py-12 overflow-y-auto overflow-x-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md w-full mx-auto"
        >
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
              {activeTab === "login" ? "Welcome Back" : "Join CompeteHub"}
            </h2>
            <p className="text-muted-foreground">
              {activeTab === "login"
                ? "Enter your credentials to access your dashboard"
                : "Enter your information to create an account"}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full mb-4"
            >
              <TabsList className="grid w-full grid-cols-2 h-12">
                <TabsTrigger value="login" className="font-bold">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="font-bold">
                  Sign up
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {activeTab === "login" ? (
                <motion.div
                  key="login-form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <LoginForm />
                </motion.div>
              ) : (
                <motion.div
                  key="register-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <RegisterForm />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
