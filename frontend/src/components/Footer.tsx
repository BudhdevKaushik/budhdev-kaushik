import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerHeight = "33px";

  return (
    <footer
      className="border-t border-gray-700 py-8 mt-16"
      style={{ marginTop: `-${footerHeight}` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/BudhdevKaushik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/budhdev-kaushik/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
