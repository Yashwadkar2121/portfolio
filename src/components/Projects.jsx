import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, X } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState("");

  const projects = [
    {
      title: "Medication Reminder App",
      description: "JWT-authenticated system for scheduling medication alerts.",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
      github: "https://github.com/Yashwadkar2121/medication-reminder-app",
      live: "#",
      deployed: false,
      featured: true,
      image: "/api/placeholder/400/250?text=Medication+App",
    },
    {
      title: "Printify - Home Page Clone",
      description:
        "Vite-optimized React.js clone with React Router for seamless navigation",
      tech: ["React.js", "Vite", "Tailwind CSS", "Vercel"],
      github: "https://github.com/Yashwadkar2121/Printify---Home-Page.git",
      live: "https://printify-home-page.vercel.app",
      deployed: true,
      featured: false,
      image: "/api/placeholder/400/250?text=Printify+Clone",
    },
    {
      title: "Admin Panel",
      description:
        "Secure JWT-based authentication system with role-based access control",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/Yashwadkar2121/Admin-Pannal.git",
      live: "#", // Not deployed
      deployed: false,
      featured: false,
      image: "/api/placeholder/400/250?text=Admin+Panel",
    },
  ];

  const handleLiveDemoClick = (project) => {
    if (project.deployed) {
      window.open(project.live, "_blank", "noopener,noreferrer");
    } else {
      setCurrentProject(project.title);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentProject("");
  };

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
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
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 relative overflow-hidden flex-shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-xs sm:text-sm rounded-full flex items-center shadow-lg">
                      <Calendar className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
                {!project.deployed && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 py-1 bg-yellow-500/80 text-white text-xs rounded-full">
                      Local Only
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
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-3 border-t border-slate-700">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors text-xs sm:text-sm flex-1 justify-center py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <button
                    onClick={() => handleLiveDemoClick(project)}
                    className={`flex items-center text-xs sm:text-sm flex-1 justify-center py-2 rounded-lg transition-all duration-200 ${
                      project.deployed
                        ? "text-gray-300 hover:text-green-400 hover:bg-white/5"
                        : "text-gray-400 hover:text-yellow-400 hover:bg-white/5 cursor-not-allowed"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.deployed ? "Live Demo" : "Local Only"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Deployment Status Modal */}
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeModal}
          >
            <motion.div
              className="bg-slate-800 rounded-xl max-w-md w-full p-6 border border-slate-700"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Project Not Deployed
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  <p className="text-yellow-300 text-sm">
                    <span className="font-semibold">{currentProject}</span> is
                    currently running in localhost environment
                  </p>
                </div>

                <p className="text-gray-300 text-sm">
                  This project is fully functional but not publicly deployed
                  yet. You can view the source code on GitHub or contact me for
                  a demo.
                </p>

                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={closeModal}
                    className="flex-1 py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                  >
                    Understand
                  </button>
                  <a
                    href="#contact"
                    onClick={closeModal}
                    className="flex-1 py-2 px-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors text-center"
                  >
                    Contact for Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Additional Call-to-Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 text-lg mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
