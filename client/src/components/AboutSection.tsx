import { motion } from "framer-motion";
import { FaUserGraduate, FaMapMarkerAlt, FaLaptopCode, FaBriefcase, FaArrowRight } from "react-icons/fa";
import { staggerContainer, fadeIn } from "@/lib/animations";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-secondary py-20 px-4 md:px-8">
      <motion.div
        className="container mx-auto section-transition"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold relative inline-block mb-2">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent opacity-70"></span>
          </h2>
          <p className="text-textSecondary mt-4 max-w-2xl mx-auto">Get to know more about me and my journey</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Abstract code background" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn("left", "tween", 0.3, 1)}
          >
            <h3 className="text-2xl font-poppins font-semibold mb-4">My Story</h3>
            <p className="text-textSecondary mb-4">
              I'm a passionate Full Stack Developer with over 5 years of experience designing and building responsive web applications. My journey into web development started during my university years, and I've been deeply immersed in creating digital solutions ever since.
            </p>
            <p className="text-textSecondary mb-6">
              My approach to development combines technical expertise with creative problem-solving. I specialize in JavaScript technologies and modern frameworks like React, Next.js, and Node.js, with a strong emphasis on writing clean, maintainable code.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-poppins font-semibold mb-1 flex items-center">
                  <FaUserGraduate className="text-accent mr-2" />Education
                </h4>
                <p className="text-textSecondary">Master's in Computer Science</p>
              </div>
              <div>
                <h4 className="font-poppins font-semibold mb-1 flex items-center">
                  <FaMapMarkerAlt className="text-accent mr-2" />Location
                </h4>
                <p className="text-textSecondary">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-poppins font-semibold mb-1 flex items-center">
                  <FaLaptopCode className="text-accent mr-2" />Experience
                </h4>
                <p className="text-textSecondary">5+ Years</p>
              </div>
              <div>
                <h4 className="font-poppins font-semibold mb-1 flex items-center">
                  <FaBriefcase className="text-accent mr-2" />Freelance
                </h4>
                <p className="text-textSecondary">Available</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="bg-accent hover:bg-accent/90 text-white font-poppins py-2 px-6 rounded-full transition-colors inline-flex items-center"
            >
              <span>Get In Touch</span>
              <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
