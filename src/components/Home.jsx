import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Shield,
  Zap,
  Database,
  Layout,
  Cpu,
  GitBranch,
  Smartphone,
  Cloud,
} from "lucide-react";

const Home = () => {
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

  const techAreas = [
    {
      icon: Layout,
      title: "Frontend Development",
      skills: [
        "React.js",
        "Tailwind CSS",
        "JavaScript ES6+",
        "Responsive Design",
      ],
      color: "text-blue-400",
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication"],
      color: "text-green-400",
    },
    {
      icon: Cpu,
      title: "Database Management",
      skills: ["MongoDB", "MySQL", "Database Design", "Data Modeling"],
      color: "text-purple-400",
    },
    {
      icon: Cloud,
      title: "DevOps & Tools",
      skills: ["Git & GitHub", "Vercel", "Vite", "Postman", "Figma"],
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center w-full py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">
                  Available for new opportunities
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Hi, I'm{" "}
                <motion.span
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  Yash
                </motion.span>
              </h1>

              <motion.h2
                className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
                variants={itemVariants}
              >
                MERN Stack Developer
              </motion.h2>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Specializing in{" "}
              <span className="text-cyan-400 font-semibold">React</span>,{" "}
              <span className="text-green-400 font-semibold">Node.js</span>, and{" "}
              <span className="text-green-500 font-semibold">MongoDB</span>.
              Passionate about building{" "}
              <span className="text-purple-400 font-semibold">
                scalable web applications
              </span>{" "}
              with focus on performance, clean code, and seamless user
              experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5 mr-2" />
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Tech Expertise */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white text-center lg:text-left">
              Tech Expertise
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                    transition: { delay: 0 },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 bg-cyan-500/20 rounded-lg mr-3`}>
                      <area.icon className={`w-5 h-5 ${area.color}`} />
                    </div>
                    <h4 className="text-white font-semibold text-sm">
                      {area.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-md border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              variants={itemVariants}
            >
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-cyan-400">10+</div>
                <div className="text-xs text-gray-400 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-green-400">1+</div>
                <div className="text-xs text-gray-400 mt-1">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-xs text-gray-400 mt-1">Technologies</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
