import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaChessQueen } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 px-4 md:px-8 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-poppins font-bold">
              <a href="#home" className="gradient-text">aasif.</a>
            </h1>
            <p className="text-textSecondary mt-3 text-lg">Building digital experiences that matter.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-5">
              <a href="https://github.com/Syedasif101" className="text-textSecondary hover:text-accent transition-colors text-xl">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/syed-asif101/" className="text-textSecondary hover:text-accent transition-colors text-xl">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/aasif.io/">
                <FaInstagram />
              </a>
              <a href="https://www.chess.com/member/syed_73" className="text-textSecondary hover:text-accent transition-colors text-xl">
                <FaChessQueen />
              </a>
            </div>
            <p className="text-textSecondary text-sm">© {currentYear} aasif. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
