import { motion } from 'framer-motion';
import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaBriefcase,
  FaArrowRight,
} from 'react-icons/fa';
import { staggerContainer, fadeIn } from '@/lib/animations';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-4 md:px-8"
    >
      <motion.div
        className="container mx-auto section-transition"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 1)}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-textSecondary mt-4 max-w-2xl mx-auto text-lg">
            Get to know more about me and my journey
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-12 text-center"
            variants={fadeIn('up', 'tween', 0.2, 1)}
          >
            <p className="text-textSecondary text-xl leading-relaxed mb-8">
              I'm a passionate{' '}
              <span className="text-accent font-medium">
                Java Full Stack Web Developer
              </span>{' '}
              with working experience in designing and building responsive web
              applications.I've been deeply immersed in creating digital
              solutions ever since.
            </p>
            <p className="text-textSecondary text-xl leading-relaxed">
              My approach to development combines technical expertise with
              creative problem-solving. I specialize in{' '}
              <span className="text-accent font-medium">Java</span> technologies
              and modern frameworks like{' '}
              <span className="text-accent font-medium">React</span> with a
              strong emphasis on writing clean, maintainable code.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            variants={fadeIn('up', 'tween', 0.3, 1)}
          >
            <div className="bg-cardBg p-6 rounded-xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all">
              <h4 className="font-poppins font-semibold mb-3 flex items-center text-lg">
                <FaUserGraduate className="text-accent mr-3 text-xl" />
                Education
              </h4>
              <p className="text-textSecondary">
                Master of Computer Applications
              </p>
            </div>
            <div className="bg-cardBg p-6 rounded-xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all">
              <h4 className="font-poppins font-semibold mb-3 flex items-center text-lg">
                <FaMapMarkerAlt className="text-accent mr-3 text-xl" />
                Location
              </h4>
              <p className="text-textSecondary">Srinagar, JK</p>
            </div>
            <div className="bg-cardBg p-6 rounded-xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all">
              <h4 className="font-poppins font-semibold mb-3 flex items-center text-lg">
                <FaLaptopCode className="text-accent mr-3 text-xl" />
                Experience
              </h4>
              <p className="text-textSecondary">1 Year</p>
            </div>
            <div className="bg-cardBg p-6 rounded-xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all">
              <h4 className="font-poppins font-semibold mb-3 flex items-center text-lg">
                <FaBriefcase className="text-accent mr-3 text-xl" />
                Freelance
              </h4>
              <p className="text-textSecondary">Available</p>
            </div>
          </motion.div>
          <motion.div
            className="text-center"
            variants={fadeIn('up', 'tween', 0.4, 1)}
          >
            <a
              href="#contact"
              className="bg-accent hover:bg-accent/80 text-white py-3 px-8 rounded-lg transition-colors inline-flex items-center"
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
