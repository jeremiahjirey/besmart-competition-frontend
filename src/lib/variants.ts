import { type Variants } from "framer-motion";

// Authentication Start
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const signUpFieldsVariants: Variants = {
  hidden: { opacity: 0, height: 0, y: -10 },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
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
// Authentication End
