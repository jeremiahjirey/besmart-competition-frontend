import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, MoveRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axiosInstance from "@/api/axiosInstance";
import { useNavigate } from "react-router-dom";

// validasi zod
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Passwrod must be at least 6 characters long" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await axiosInstance.post("/login", data);
      const token = res.data.data.access_token;
      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            {...register("email")}
            placeholder="nama@email.com"
            type="email"
            className={`pl-10 h-11 bg-muted/30 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
          />
        </div>
        {errors.email && (
          <p className="text-xs text-red-500 font-medium">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
            Password
          </Label>
          <Button
            variant="link"
            type="button"
            className="px-0 h-auto text-xs font-bold text-primary"
          >
            Forgot Password?
          </Button>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            {...register("password")}
            placeholder="••••••••"
            type={showPassword ? "text" : "password"}
            className={`pl-10 pr-10 h-11 bg-muted/30 ${errors.password ? "border-red-500 focus-visible:ring-red-500" : ""}`}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:bg-transparent cursor-pointer"
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
                  <Eye className="w-4 h-4 " />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
        {errors.password && (
          <p className="text-xs text-red-500 font-medium">
            {errors.password.message}
          </p>
        )}
      </div>

      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          className="w-full h-12 font-bold text-base shadow-lg shadow-primary/20 gap-2 group mt-4 cursor-pointer"
        >
          Sign in
          <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </form>
  );
};

export default LoginForm;
