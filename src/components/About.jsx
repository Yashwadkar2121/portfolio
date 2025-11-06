import { motion } from "framer-motion";
import {
  Target,
  Zap,
  Code2,
  Rocket,
  GraduationCap,
  Briefcase,
} from "lucide-react";

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

  const strengths = [
    {
      icon: Code2,
      title: "Quick Learner",
      description:
        "Rapidly adapt to new technologies and frameworks, demonstrated by mastering MERN stack within months",
    },
    {
      icon: Zap,
      title: "Problem Solver",
      description:
        "Strong analytical skills from engineering background applied to software development challenges",
    },
    {
      icon: Rocket,
      title: "Results-Driven",
      description:
        "Delivered measurable improvements like 20% faster load times and 50% reduction in user errors",
    },
    {
      icon: Target,
      title: "Quality Focused",
      description:
        "Committed to writing clean, maintainable code and following best practices",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
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
          <motion.p
            className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Passionate MERN Stack Developer with 1+ year of hands-on experience,
            ready to contribute to innovative projects
          </motion.p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Transitioning from Electrical Engineering to software
                development, I discovered my passion for creating digital
                solutions that make a real impact. Over the past year, I've
                immersed myself in full-stack development, building practical
                skills through real-world projects.
              </p>
              <p className="text-lg leading-relaxed">
                My engineering background gives me a unique problem-solving
                perspective, while my recent experience has equipped me with
                modern web development expertise. I'm excited to bring this
                combination of analytical thinking and technical skills to my
                first professional role.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            variants={itemVariants}
          >
            <h4 className="text-white font-semibold text-xl mb-6 text-center">
              Why Hire Me?
            </h4>
            <div className="space-y-4">
              {[
                "✅ 1+ year of practical MERN stack experience",
                "✅ Proven ability to deliver production-ready applications",
                "✅ Strong foundation in computer science concepts",
                "✅ Quick learner with proven track record of skill acquisition",
                "✅ Experience working in professional development environments",
                "✅ Portfolio of real projects demonstrating full-stack capabilities",
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <p className="text-gray-300 text-sm sm:text-base">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Key Strengths */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-12"
            variants={itemVariants}
          >
            What I Bring to the Table
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="p-3 bg-cyan-500/20 rounded-lg mb-4 mx-auto w-fit">
                  <strength.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-3">
                  {strength.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Journey */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-12"
            variants={itemVariants}
          >
            My Journey So Far
          </motion.h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

              {[
                {
                  icon: GraduationCap,
                  year: "2023",
                  title: "Engineering Graduate",
                  description:
                    "Bachelor's in Electrical Engineering from Savitribai Phule Pune University",
                  type: "education",
                },
                {
                  icon: Briefcase,
                  year: "2024",
                  title: "Full-Stack Intern",
                  description:
                    "Hudbil Private Limited - Built brand website and backend services",
                  type: "work",
                },
                {
                  icon: Rocket,
                  year: "2024-25",
                  title: "Junior Software Engineer",
                  description:
                    "Helixware Solutions - Developed client applications and optimized performance",
                  type: "work",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>

                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <item.icon
                          className={`w-5 h-5 ${
                            item.type === "education"
                              ? "text-green-400"
                              : "text-cyan-400"
                          } mr-2`}
                        />
                        <span className="text-cyan-400 font-semibold text-sm">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Ready to Contribute */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20"
            variants={itemVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Make an Impact
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              I'm actively seeking my first full-time role where I can
              contribute to meaningful projects, continue learning from
              experienced developers, and grow with a forward-thinking company.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Build Something Great Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
