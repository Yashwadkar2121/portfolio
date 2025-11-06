import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  FileText,
  Upload,
  X,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
        "image/jpeg",
        "image/png",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ];

      if (!allowedTypes.includes(file.type)) {
        alert(
          "Please upload PDF, DOC, DOCX, TXT, JPEG, PNG, or PPT files only"
        );
        return;
      }

      setFormData((prev) => ({
        ...prev,
        file: file,
      }));
    }
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({
      ...prev,
      file: null,
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await sendEmailWithEmailJS();
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        file: null,
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendEmailWithEmailJS = () => {
    const serviceID = "service_s5k6qoi";
    const templateID = "template_4ygyxng";
    const publicKey = "KUCCaUJzQ5e7v2Hfk";

    // Template parameters - EmailJS will use these to send FROM visitor TO you
    const templateParams = {
      to_name: "Yash", // Your name that will appear in the email
      from_name: formData.name, // Visitor's name
      from_email: formData.email, // Visitor's email (akki12@gmail.com)
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email, // Important: This allows you to reply directly to visitor
      attachment: formData.file ? formData.file.name : "No file attached",
      phone: "+91 9075425869",
      timestamp: new Date().toLocaleString(),

      // Additional info for better organization
      visitor_email: formData.email,
      visitor_name: formData.name,
    };

    return emailjs.send(serviceID, templateID, templateParams, publicKey);
  };

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
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I'm always open to discussing new opportunities and interesting
            projects
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.h3
              className="text-3xl font-bold text-white"
              variants={itemVariants}
            >
              Let's Connect
            </motion.h3>

            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. Feel free to reach
              out through any of the channels below.
            </motion.p>

            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">yashwadkar079@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300">+91 9075425869</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Pune, Maharashtra, India</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex space-x-4" variants={itemVariants}>
              <motion.a
                href="https://github.com/Yashwadkar2121"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/yash-wadkar-2a2114224"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* File Upload Section */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Attach Document (Optional)
                </label>
                <div className="space-y-3">
                  {!formData.file ? (
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-600 rounded-lg cursor-pointer hover:border-cyan-500 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF, DOC, DOCX, TXT, JPEG, PNG, PPT (MAX. 5MB)
                          </p>
                        </div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.ppt,.pptx"
                        />
                      </label>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-6 h-6 text-cyan-400" />
                        <div>
                          <p className="text-white text-sm font-medium">
                            {formData.file.name}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="text-red-400 hover:text-red-300 transition-colors p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                >
                  <p className="text-green-400 text-sm text-center">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                >
                  <p className="text-red-400 text-sm text-center">
                    ❌ Failed to send message. Please try again or contact me
                    directly via email.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
