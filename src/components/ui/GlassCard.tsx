import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const GlassCard = ({ children, className = "", hover = true, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={cn(
        "bg-black/40 backdrop-blur-lg border border-silver/20 rounded-2xl shadow-soft",
        hover && "transition-shadow duration-300 hover:shadow-glow",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
