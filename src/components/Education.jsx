import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (Electrical Engineering)",
      institution: "Savitribai Phule Pune University",
      period: "2019 - 2023",
      grade: "CGPA: 6.73",
    },
    {
      degree: "12th Grade (HSC)",
      institution: "Maharashtra State Board",
      period: "2018 - 2019",
      grade: "Percentage: 55.38%",
    },
    {
      degree: "10th Grade (SSC)",
      institution: "Maharashtra State Board",
      period: "2016 - 2017",
      grade: "Percentage: 72.40%",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
                  <div className="p-3 bg-cyan-500/20 rounded-lg flex-shrink-0">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-lg sm:text-xl text-cyan-400 mb-3">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      {edu.period}
                    </div>
                  </div>
                </div>
                <div className="flex justify-start lg:justify-end">
                  <div className="flex items-center text-green-400 bg-green-500/20 px-4 py-3 rounded-full text-sm sm:text-base border border-green-500/30">
                    <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                    {edu.grade}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
