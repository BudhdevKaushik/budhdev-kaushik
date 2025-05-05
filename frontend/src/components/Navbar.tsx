import { motion } from "framer-motion";
import { NavLink } from "../constants/types";

const Navbar = ({ links }: { links: NavLink[] }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-purple-400">{"<"}</span>
          <span className="text-white">Budhdev</span>
          <span className="text-blue-400">{"/>"}</span>
        </motion.a>

        {/* <ul className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={link.href}
                className="hover:text-purple-400 transition-colors"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul> */}

        {/* Mobile menu button would go here */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
