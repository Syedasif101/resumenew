import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 px-4 md:px-8 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-poppins font-bold">
              <a href="#home" className="gradient-text">My Portfolio</a>
            </h1>
            <p className="text-textSecondary mt-2">Building digital experiences that matter.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-textSecondary hover:text-accent transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="text-textSecondary hover:text-accent transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-textSecondary hover:text-accent transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-textSecondary hover:text-accent transition-colors">
                <FaInstagram />
              </a>
            </div>
            <p className="text-textSecondary text-sm">© {currentYear} My Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
