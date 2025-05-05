import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-gray-300">Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  Budhdev Kaushik
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 mt-2">
                MERN Stack Specialist
              </h2>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Building scalable web applications with modern architectures.
              Passionate about performance optimization and clean code
              practices.
            </p>

            <div className="flex gap-6 pt-4">
              <motion.a
                href="https://github.com/BudhdevKaushik"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2"
                whileHover={{ y: -2 }}
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                  <FaGithub className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  GitHub
                </span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/budhdev-kaushik/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2"
                whileHover={{ y: -2 }}
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <FaLinkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Modern Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Image with modern frame */}
              <div className="absolute inset-0 rounded-xl overflow-hidden ">
                <img
                  src="/my-img.png"
                  alt="Budhdev Kaushik"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 -z-10">
                <div className="absolute inset-0 border border-gray-700/30 rounded-xl animate-border-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-sm"></div>
              </div>

              {/* Tech badge overlay (optional) */}
              <div className="absolute -bottom-4 -right-4 bg-gray-900 px-4 py-2 rounded-lg shadow-lg border border-gray-800">
                <span className="text-sm font-mono text-purple-400">
                  MERN Stack
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
