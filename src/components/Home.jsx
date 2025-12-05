import { motion } from "framer-motion";
import {
  Rocket,
  Award,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
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

  const quickHighlights = [
    "1+ Years MERN Stack Experience",
    "Built 10+ Production Applications",
    "Strong Problem-Solving Skills",
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
          className="w-full py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content */}
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">
                  Actively seeking full-time opportunities
                </span>
              </motion.div>

              {/* Hero Text */}
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
                className="text-3xl md:text-4xl text-gray-300 mb-6 font-light"
                variants={itemVariants}
              >
                MERN Stack Developer
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Passionate about building{" "}
                <span className="text-cyan-400 font-semibold">
                  scalable web applications
                </span>{" "}
                that deliver exceptional user experiences. With{" "}
                <span className="text-green-400 font-semibold">
                  1+ year of professional experience
                </span>
                , I specialize in creating efficient, maintainable solutions
                using modern web technologies.
              </motion.p>
            </motion.div>

            {/* Quick Highlights */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={itemVariants}
            >
              {quickHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  {highlight}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5 mr-2" />
                View My Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>

            {/* Experience Summary */}
            <motion.div
              className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <p className="text-gray-300 text-lg">
                🚀 Transitioned from{" "}
                <span className="text-cyan-400">Electrical Engineering</span> to{" "}
                <span className="text-green-400">Software Development</span>,
                applying analytical problem-solving skills to build robust web
                applications. Currently seeking opportunities to contribute to
                innovative projects and grow with forward-thinking teams.
              </p>
            </motion.div>
          </div>
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
