import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

interface TimelineEntryProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isRight: boolean;
  delay: number;
}

const TimelineEntry = ({ title, company, period, description, isRight, delay }: TimelineEntryProps) => (
  <div className="relative flex flex-col md:flex-row">
    {isRight ? (
      <>
        <motion.div 
          className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0"
          variants={fadeIn(isRight ? "right" : "left", "tween", delay, 0.5)}
        >
          <div className="bg-cardBg p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold mb-1">{title}</h3>
            <h4 className="text-accent font-semibold mb-2">{company}</h4>
            <p className="text-textSecondary text-sm mb-2">{period}</p>
            <p className="text-textSecondary">{description}</p>
          </div>
        </motion.div>
        <motion.div 
          className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-accent transform translate-x-[-50%] z-10 flex items-center justify-center"
          variants={fadeIn("up", "tween", delay, 0.5)}
        >
          <div className="w-3 h-3 bg-background rounded-full"></div>
        </motion.div>
        <div className="md:w-1/2 md:pl-12"></div>
      </>
    ) : (
      <>
        <div className="md:w-1/2 md:pr-12"></div>
        <motion.div 
          className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-accent transform translate-x-[-50%] z-10 flex items-center justify-center"
          variants={fadeIn("up", "tween", delay, 0.5)}
        >
          <div className="w-3 h-3 bg-background rounded-full"></div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0"
          variants={fadeIn(isRight ? "right" : "left", "tween", delay, 0.5)}
        >
          <div className="bg-cardBg p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold mb-1">{title}</h3>
            <h4 className="text-accent font-semibold mb-2">{company}</h4>
            <p className="text-textSecondary text-sm mb-2">{period}</p>
            <p className="text-textSecondary">{description}</p>
          </div>
        </motion.div>
      </>
    )}
  </div>
);

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description: "Led the frontend development team in building a complex SaaS platform. Implemented state management solutions, optimized performance, and mentored junior developers."
  },
  {
    title: "Full Stack Developer",
    company: "Innovation Labs",
    period: "2018 - 2021",
    description: "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Implemented responsive designs, RESTful APIs, and automated testing."
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions Co.",
    period: "2016 - 2018",
    description: "Built user interfaces for client websites using JavaScript, HTML, and CSS. Collaborated with designers to implement responsive layouts and interactive features."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-4 md:px-8">
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
            My Experience
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent opacity-70"></span>
          </h2>
          <p className="text-textSecondary mt-4 max-w-2xl mx-auto">My professional journey so far</p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-accent/20 transform md:translate-x-[-50%]"></div>
          
          {/* Timeline entries */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineEntry
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                isRight={index % 2 === 0}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
