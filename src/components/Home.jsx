import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Shield,
  Zap,
  Database,
  Layout,
  Award,
  Users,
  Clock,
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

  const achievements = [
    {
      icon: Award,
      title: "Pixel-Perfect Implementation",
      description:
        "Transforming Figma designs into responsive, client-facing web applications with precise attention to detail",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description:
        "Enhancing user engagement through refined UI interactions and intuitive user experiences",
    },
    {
      icon: Clock,
      title: "Performance Optimized",
      description:
        "Achieving faster load times through efficient API calls and optimized component architecture",
    },
    {
      icon: Shield,
      title: "Full-Stack Solutions",
      description:
        "End-to-end development from dynamic UIs to robust RESTful APIs and database management",
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

          {/* Right Content - Achievements */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white text-center lg:text-left">
              What I Deliver
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { delay: 0 },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-cyan-500/20 rounded-lg flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Highlights */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                  <h4 className="text-white font-semibold">
                    Professional Journey
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  <span className="text-cyan-400">1+ years</span> of hands-on
                  experience in full-stack development, working with startups
                  and established companies to deliver high-quality web
                  solutions.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center mb-2">
                  <Code className="w-5 h-5 text-purple-400 mr-2" />
                  <h4 className="text-white font-semibold">
                    Technical Excellence
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Expertise in modern web technologies including React, Node.js,
                  MongoDB, and Tailwind CSS, with a focus on writing clean,
                  maintainable code.
                </p>
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
