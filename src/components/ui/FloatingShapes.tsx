import { motion } from "framer-motion";

interface FloatingShapesProps {
  variant?: "hero" | "section" | "subtle";
}

const FloatingShapes = ({ variant = "hero" }: FloatingShapesProps) => {
  const shapes = {
    hero: [
      { size: "w-96 h-96", position: "top-20 -right-48", color: "bg-primary/10", delay: 0 },
      { size: "w-80 h-80", position: "-bottom-40 -left-40", color: "bg-accent/15", delay: 2 },
      { size: "w-64 h-64", position: "top-1/2 left-1/4", color: "bg-blue-secondary/10", delay: 4 },
    ],
    section: [
      { size: "w-72 h-72", position: "top-10 right-10", color: "bg-primary/5", delay: 0 },
      { size: "w-56 h-56", position: "bottom-10 left-10", color: "bg-accent/10", delay: 1 },
    ],
    subtle: [
      { size: "w-48 h-48", position: "top-20 right-20", color: "bg-primary/5", delay: 0 },
    ],
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes[variant].map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.position} ${shape.color} rounded-full blur-3xl`}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
