/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, MoveRight } from "lucide-react";
import { signUpFieldsVariants } from "@/lib/variants";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axiosInstance from "@/api/axiosInstance";
import { useNavigate } from "react-router-dom";

//  Validasi Zod
const registerSchema = z.object({
  name: z.string().min(3, { message: "Nama minimal 3 karakter" }),
  email: z.string().email({ message: "Format email tidak valid" }),
  password: z.string().min(8, { message: "Kata sandi minimal 8 karakter" }),
  password_confirmation: z
    .string()
    .min(8, { message: "Kata sandi minimal 8 karakter" }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await axiosInstance.post("/register", data);
      navigate("/dashboard");
    } catch (error: any) {
      console.log(error.response?.data);
    }
  };

  return (
    <motion.form
      variants={signUpFieldsVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4 mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2">
        <div className="space-y-2">
          <Label className="text-xs font-bold uppercase text-muted-foreground">
            Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              {...register("name")}
              placeholder="Enter your name"
              className={`pl-10 h-11 bg-muted/30 ${errors.name ? "border-red-500" : ""}`}
            />
          </div>
          {errors.name && (
            <p className="text-xs text-red-500 font-medium">
              {errors.name.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            {...register("email")}
            placeholder="name@email.com"
            type="email"
            className={`pl-10 h-11 bg-muted/30 ${errors.email ? "border-red-500" : ""}`}
          />
        </div>
        {errors.email && (
          <p className="text-xs text-red-500 font-medium">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            {...register("password")}
            placeholder="••••••••"
            type={showPassword ? "text" : "password"}
            className={`pl-10 pr-10 h-11 bg-muted/30 ${errors.password ? "border-red-500" : ""}`}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:bg-transparent cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </Button>
        </div>
        {errors.password && (
          <p className="text-xs text-red-500 font-medium">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
          Password Confirmation
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            {...register("password_confirmation")}
            placeholder="••••••••"
            type={showConfirmPassword ? "text" : "password"}
            className={`pl-10 pr-10 h-11 bg-muted/30 ${errors.password_confirmation ? "border-red-500" : ""}`}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:bg-transparent cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            type="button"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </Button>
        </div>
        {errors.password_confirmation && (
          <p className="text-xs text-red-500 font-medium">
            {errors.password_confirmation.message}
          </p>
        )}
      </div>

      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          className="w-full h-12 font-bold text-base shadow-lg shadow-primary/20 gap-2 group mt-4 cursor-pointer"
        >
          Register
          <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default RegisterForm;
