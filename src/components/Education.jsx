import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (Electrical Engineering)",
      institution: "Savitribai Phule Pune University",
      period: "August 2019 - August 2023",
      grade: "CGPA: 6.73",
      achievements: [
        "Completed comprehensive engineering curriculum",
        "Developed strong problem-solving and analytical skills",
        "Applied engineering principles to software development",
      ],
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
            Education
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
          className="grid gap-6 md:gap-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg flex-shrink-0">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-lg sm:text-xl text-cyan-400 mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      {edu.period}
                    </div>
                  </div>
                </div>
                <div className="flex justify-start lg:justify-end">
                  <div className="flex items-center text-green-400 bg-green-500/20 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
                    <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                    {edu.grade}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <h4 className="text-white font-semibold mb-4 text-lg">
                  Key Takeaways
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {edu.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 text-sm sm:text-base flex items-start"
                    >
                      <span className="text-cyan-400 mr-2 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 md:mt-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                category: "Languages",
                skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
              },
              {
                category: "Frameworks/Libraries",
                skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
              },
              { category: "Databases", skills: ["MongoDB", "MySQL"] },
              {
                category: "Tools & DevOps",
                skills: ["Git", "GitHub", "Postman", "Figma", "Vercel", "Vite"],
              },
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10"
              >
                <h4 className="text-white font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-gray-300 text-xs sm:text-sm text-center py-2 px-2 sm:px-3 bg-slate-800/50 rounded-lg break-words"
                    >
                      {skill}
                    </div>
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

export default Education;
