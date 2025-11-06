import { motion } from "framer-motion";
import { Code, Database, Layout, Cpu, GitBranch, Cloud } from "lucide-react";

const Skills = () => {
  const skillsData = [
    {
      icon: Layout,
      category: "Frontend",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
      color: "text-blue-400",
    },
    {
      icon: Database,
      category: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
      color: "text-green-400",
    },
    {
      icon: Cpu,
      category: "Database",
      skills: ["MongoDB", "MySQL", "Mongoose ODM", "Database Design"],
      color: "text-purple-400",
    },
    {
      icon: Cloud,
      category: "Tools & DevOps",
      skills: ["Git & GitHub", "Vercel", "Vite", "Postman", "Figma"],
      color: "text-cyan-400",
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
            Technical Skills
          </motion.h2>
          <motion.div
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-center mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skillGroup.icon className={`w-8 h-8 ${skillGroup.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="text-center py-2 px-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/30 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <span className="text-gray-300 text-sm font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 inline-block max-w-2xl">
            <p className="text-gray-300 text-lg">
              Continuously learning and adapting to new technologies to stay at
              the forefront of web development
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
