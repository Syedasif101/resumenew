import { motion } from 'framer-motion';
import { FaEye, FaGithub } from 'react-icons/fa';
import { staggerContainer, fadeIn } from '@/lib/animations';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  delay: number;
}

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  demoUrl,
  codeUrl,
  delay,
}: ProjectCardProps) => (
  <motion.div
    className="project-card bg-cardBg rounded-lg overflow-hidden shadow-lg"
    variants={fadeIn('up', 'tween', delay, 0.5)}
  >
    <div className="h-56 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-poppins font-semibold mb-2">{title}</h3>
      <p className="text-textSecondary text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={demoUrl}
          className="text-accent hover:underline flex items-center"
        >
          <FaEye className="mr-1" /> View Demo
        </a>
        <a
          href={codeUrl}
          className="text-accent hover:underline flex items-center"
        >
          <FaGithub className="mr-1" /> Source Code
        </a>
      </div>
    </div>
  </motion.div>
);

const projects = [
  {
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1470&auto=format&fit=crop',
    title: 'Online Book Store',
    description:
      'Developed a full-stack web application featuring user authentication, book catalog, search/filtering, shopping cart, order management, payment integration, and admin dashboard.',
    technologies: [
      'Spring Boot',
      'Spring MVC',
      'JPA',
      'Thymeleaf',
      'MySQL',
      'Maven',
      'Git',
    ],
    demoUrl: '#',
    codeUrl: 'https://github.com/Syedasif101/online-book-store',
  },

  {
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop',
    title: 'Food Order Management',
    description:
      'Food ordering web app built using React.js frontend and Node.js backend with admin dashboard and customer ordering features.',
    technologies: ['React.Js', 'HTML5', 'CSS3', 'TypeScript', 'Node.Js'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Syedasif101/Food-order-management-',
  },

  {
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1470&auto=format&fit=crop',
    title: 'Recipe Hub',
    description:
      'Recipe management application with authentication, CRUD operations, search functionality, and admin ingredient control.',
    technologies: ['Java', 'HTML5', 'CSS3', 'JavaScript', 'REST API'],
    demoUrl: '#',
    codeUrl:
      'https://github.com/Syedasif101/Syedasif101-PEP-VS-WebDevProject-Recipe',
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-secondary py-20 px-4 md:px-8"
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-textSecondary mt-4 max-w-2xl mx-auto text-lg">
            Here are some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          variants={fadeIn('up', 'tween', 0.3, 1)}
        >
          <a
            href="https://github.com/Syedasif101"
            className="inline-flex items-center bg-transparent border border-accent text-accent hover:bg-accent hover:text-white transition-colors py-2 px-6 rounded-full font-poppins"
          >
            View All Projects <FaEye className="ml-2" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
