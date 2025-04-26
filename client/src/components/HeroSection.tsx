import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { staggerContainer, fadeIn } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-24">
      <motion.div
        className="container mx-auto section-transition"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col-reverse md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <h2 className="text-xl md:text-2xl font-poppins mb-2 text-textSecondary">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-4">
              <span className="gradient-text">Reyaz</span>
            </h1>
            <h3 className="text-2xl md:text-3xl font-poppins mb-6 text-textSecondary">Full Stack Developer</h3>
            <p className="text-textSecondary mb-8 max-w-xl text-lg leading-relaxed">
              I build exceptional and accessible digital experiences for the web. Focused on creating scalable and user-friendly applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a 
                href="#contact" 
                className="bg-accent hover:bg-accent/90 text-white font-poppins py-3 px-8 rounded-lg transition-colors text-center"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="border-2 border-accent text-accent hover:bg-accent/10 font-poppins py-3 px-8 rounded-lg transition-colors text-center"
              >
                View My Work
              </a>
            </div>
            <div className="flex mt-10 space-x-6">
              <a href="#" className="text-textSecondary hover:text-accent transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href="#" className="text-textSecondary hover:text-accent transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-textSecondary hover:text-accent transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-textSecondary hover:text-accent transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            <div className="rounded-full w-64 h-64 md:w-96 md:h-96 overflow-hidden border-4 border-accent/20">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Professional headshot" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
