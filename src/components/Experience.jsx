import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Helixware Solutions Pvt. Ltd.",
      location: "Pune, Maharashtra, India",
      position: "Junior Software Engineer",
      period: "September 2024 - March 2025",
      achievements: [
        "Developed responsive, client-facing web applications based on Figma designs",
        "Built dynamic front-end components using React.js and optimized styling with Tailwind CSS",
        "Designed and implemented RESTful APIs using Node.js/Express.js",
        "Reduced page load time by 20% by optimizing API calls and lazy-loading components",
        "Enhanced user engagement by refining UI interactions based on client feedback",
      ],
    },
    {
      company: "Hudbil Private Limited",
      location: "Bangalore, Karnataka, India",
      position: "Full-Stack Engineer",
      period: "April 2024 - August 2024",
      achievements: [
        "Developed and launched Hudbil's brand website using React.js and Tailwind CSS",
        "Built modular frontend components with Tailwind CSS",
        "Engineered backend services using Node.js and Express.js",
        "Optimized website performance through efficient animation techniques",
        "Gained hands-on expertise in Tailwind CSS utility-first framework",
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
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
            Experience
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
          className="relative"
        >
          {/* Timeline line - hidden on mobile, visible on medium+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col md:flex-row items-start mb-8 md:mb-12 last:mb-0"
            >
              {/* Timeline dot - hidden on mobile, visible on medium+ */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>

              {/* Content */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                }`}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-cyan-400 mb-1 text-sm sm:text-base">
                        <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                        {exp.location}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300 text-xs sm:text-sm bg-cyan-500/20 px-3 py-1 rounded-full self-start">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-xs sm:text-sm flex items-start"
                      >
                        <span className="text-cyan-400 mr-2 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
