import { motion } from "framer-motion";
import { ReactNode } from "react";

const SkillBar = ({
  name,
  icon,
  index,
}: {
  name: string;
  icon: ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center p-4"
    >
      <div className="p-4 rounded-full bg-gray-800 shadow-lg">{icon}</div>
      <span className="mt-2 text-sm font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillBar;
