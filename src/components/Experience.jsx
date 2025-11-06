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
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  {/* Header Section - Sequential Flow */}
                  <div className="mb-6 space-y-4">
                    {/* Position Title - Most Prominent */}
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {exp.position}
                    </h3>

                    {/* Company Name with Icon */}
                    <div className="flex items-center text-cyan-400">
                      <Award className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="font-semibold text-lg">
                        {exp.company}
                      </span>
                    </div>

                    {/* Period and Location in a row */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      {/* Period Badge */}
                      <div className="flex items-center text-gray-300 bg-cyan-500/20 px-4 py-2 rounded-full w-fit">
                        <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wide text-gray-400">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="text-gray-300 text-sm flex items-start group-hover:translate-x-1 transition-transform duration-200"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-cyan-400 mr-3 mt-1 flex-shrink-0 text-lg">
                            •
                          </span>
                          <span className="leading-relaxed text-base">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <div className="flex items-center text-xs text-gray-400">
                      <span className="mr-2">🛠️</span>
                      Full-Stack Development • React • Node.js • MongoDB
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Total Experience Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 inline-block">
            <p className="text-gray-300 text-lg">
              <span className="text-cyan-400 font-bold">1+ Years</span> of
              professional experience in full-stack development
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
