import { motion } from "framer-motion";
import { Code, Database, Zap, Shield } from "lucide-react";

const About = () => {
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

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive, pixel-perfect UIs with React.js and Tailwind CSS",
      tech: ["React.js", "Tailwind CSS", "JavaScript ES6+"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Creating robust RESTful APIs and server-side logic",
      tech: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed and efficiency",
      tech: ["API Optimization", "Lazy Loading", "Code Splitting"],
    },
    {
      icon: Shield,
      title: "Full-Stack Solutions",
      description: "End-to-end development from concept to deployment",
      tech: ["MERN Stack", "RESTful APIs", "Authentication"],
    },
  ];

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
            About Me
          </motion.h2>
          <motion.div
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-white"
              variants={itemVariants}
            >
              MERN Stack Developer
            </motion.h3>

            <motion.p
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              With{" "}
              <span className="text-cyan-400 font-semibold">
                1+ year of internship experience
              </span>{" "}
              specializing in
              <span className="text-green-400 font-semibold">
                {" "}
                React, Node.js, and MongoDB
              </span>
              . Passionate about building
              <span className="text-purple-400 font-semibold">
                {" "}
                scalable web applications
              </span>{" "}
              with focus on performance, clean code, and seamless user
              experiences.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md"
              variants={itemVariants}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">
                  1+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold text-green-400">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Projects Completed
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Skills */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-3 sm:mb-4" />
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  {skill.title}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {skill.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
