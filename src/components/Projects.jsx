import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Medication Reminder App",
      description:
        "JWT-authenticated system for scheduling medication alerts, reducing missed doses by 50%",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
      github: "https://github.com/Yashwadkar2121/medication-reminder-app",
      live: "#",
      featured: true,
    },
    {
      title: "Printify - Home Page Clone",
      description:
        "Vite-optimized React.js clone with React Router for seamless navigation",
      tech: ["React.js", "Vite", "Tailwind CSS", "Vercel"],
      github: "#",
      live: "https://printify-home-page.vercel.app",
      featured: true,
    },
    {
      title: "Admin Panel",
      description:
        "Secure JWT-based authentication system with role-based access control",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "#",
      live: "https://printify-home-page.vercel.app",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Projects
          </motion.h2>
          <motion.div
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto px-4"
            variants={itemVariants}
          >
            Here are some of my recent projects that showcase my skills in
            full-stack development
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col"
              whileHover={{ y: -5 }}
            >
              <div className="h-40 sm:h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-2 sm:px-3 py-1 bg-cyan-500 text-white text-xs sm:text-sm rounded-full flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 sm:space-x-4 pt-2 border-t border-slate-700">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
