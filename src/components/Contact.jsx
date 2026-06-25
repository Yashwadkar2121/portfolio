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
  Check,
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
  const [copied, setCopied] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const emailConfig = {
    serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const cloudinaryConfig = {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  };

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
      transition: { duration: 0.5 },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToastNotification("File size must be less than 5MB");
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
        showToastNotification(
          "Please upload PDF, DOC, DOCX, TXT, JPEG, PNG, or PPT files only",
        );
        return;
      }

      setFormData((prev) => ({ ...prev, file: file }));
    }
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, file: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getResourceType = (fileType) => {
    if (fileType.startsWith("image/")) {
      return "image";
    } else {
      return "raw";
    }
  };

  const uploadFileToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", cloudinaryConfig.uploadPreset);

    const resourceType = getResourceType(file.type);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/${resourceType}/upload`,
        {
          method: "POST",
          body: data,
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = "Failed to upload file";
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error?.message || errorMessage;
        } catch (e) {
          errorMessage = response.statusText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();

      if (!result.secure_url) {
        throw new Error("No file URL returned from Cloudinary");
      }

      let fileUrl = result.secure_url;

      if (fileUrl.startsWith("https:/") && !fileUrl.startsWith("https://")) {
        fileUrl = fileUrl.replace("https:/", "https://");
      }

      if (resourceType === "raw") {
        if (fileUrl.includes("/image/upload/")) {
          fileUrl = fileUrl.replace("/image/upload/", "/raw/upload/");
        }
        if (
          fileUrl.includes("/upload/") &&
          !fileUrl.includes("/raw/upload/") &&
          !fileUrl.includes("/image/upload/")
        ) {
          fileUrl = fileUrl.replace("/upload/", "/raw/upload/");
        }
      }

      // console.log("Generated URL:", fileUrl);
      return fileUrl;
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      throw new Error(`File upload failed: ${error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !emailConfig.serviceID ||
      !emailConfig.templateID ||
      !emailConfig.publicKey
    ) {
      showToastNotification(
        "Email service is not configured. Please try emailing directly.",
      );
      setSubmitStatus("error");
      return;
    }

    if (
      formData.file &&
      (!cloudinaryConfig.cloudName || !cloudinaryConfig.uploadPreset)
    ) {
      showToastNotification(
        "File upload service is not configured. Please remove the file or try again later.",
      );
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");
    setUploadProgress(0);

    try {
      let attachmentUrl = "";
      let attachmentName = "No file attached";

      if (formData.file) {
        setUploadProgress(30);
        showToastNotification("Uploading file to Cloudinary...");

        attachmentUrl = await uploadFileToCloudinary(formData.file);
        attachmentName = formData.file.name;

        setUploadProgress(70);
        showToastNotification("File uploaded successfully!");

        // console.log("Final URL being sent:", attachmentUrl);
      }

      setUploadProgress(85);
      await sendEmailWithEmailJS(attachmentUrl, attachmentName);

      setUploadProgress(100);
      setSubmitStatus("success");
      showToastNotification("Message sent successfully! 🎉");

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

      setTimeout(() => setUploadProgress(0), 3000);
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      showToastNotification(
        error.message || "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendEmailWithEmailJS = (attachmentUrl, attachmentName) => {
    const { serviceID, templateID, publicKey } = emailConfig;

    let cleanUrl = attachmentUrl || "";
    if (cleanUrl) {
      if (cleanUrl.startsWith("https:/") && !cleanUrl.startsWith("https://")) {
        cleanUrl = cleanUrl.replace("https:/", "https://");
      }
      cleanUrl = cleanUrl.replace(/\/+$/, "");
    }

    // EmailJS has no {{#if}} support — build the conditional button as
    // ready-made HTML here instead, and inject it as one variable.
    const attachmentButton = cleanUrl
      ? `<a href="${cleanUrl}" target="_blank" style="display:inline-block; background-color:#ffffff; color:#0f172a; font-size:14px; font-weight:600; text-decoration:none; padding:12px 24px; border-radius:7px; border:1px solid #cbd5e1;">View Document</a>`
      : "";

    const templateParams = {
      to_name: "Yash",
      from_name: String(formData.name || "").trim(),
      from_email: String(formData.email || "").trim(),
      subject: String(formData.subject || "").trim(),
      message: String(formData.message || "").trim(),
      reply_to: String(formData.email || "").trim(),
      attachment_name: String(attachmentName || "No file attached").trim(),
      attachment_url: cleanUrl,
      attachment_button: attachmentButton,
      phone: "+91 9075425869",
      timestamp: new Date().toLocaleString(),
      visitor_email: String(formData.email || "").trim(),
      visitor_name: String(formData.name || "").trim(),
    };

    // console.log("Sending email with params:", templateParams);

    return emailjs.send(serviceID, templateID, templateParams, publicKey);
  };

  const showToastNotification = (message) => {
    const existingToast = document.getElementById("contact-toast");
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement("div");
    toast.id = "contact-toast";
    toast.className =
      "fixed top-6 right-6 bg-slate-800 border border-slate-700 text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-slideInRight transform transition-all duration-300 max-w-md";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove("animate-slideInRight");
      toast.classList.add("animate-slideOutRight");
      setTimeout(() => {
        if (toast.parentNode) {
          document.body.removeChild(toast);
        }
      }, 300);
    }, 3000);
  };

  const handleEmailClick = () => {
    const email = "yashwadkar079@gmail.com";
    const subject = "Portfolio Inquiry";
    const body =
      "Hello Yash,\n\nI came across your portfolio and wanted to connect regarding...";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+919075425869";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      copyToClipboard("+91 9075425869");
    }
  };

  const copyToClipboard = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          showToastNotification("Phone number copied!");
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          fallbackCopyToClipboard(text);
        });
    } else {
      fallbackCopyToClipboard(text);
    }
  };

  const fallbackCopyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      showToastNotification("Phone number copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      showToastNotification("Failed to copy. Phone: +91 9075425869");
    }

    document.body.removeChild(textArea);
  };

  const ProgressBar = ({ progress }) => {
    if (progress === 0) return null;
    return (
      <div className="w-full bg-slate-700 rounded-full h-2 mt-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full animate-pulse"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto animate-fadeIn"
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
          <div className="space-y-8">
            <motion.h3
              className="text-3xl font-bold text-white animate-fadeIn"
              variants={itemVariants}
            >
              Let's Connect
            </motion.h3>

            <motion.p
              className="text-gray-300 leading-relaxed animate-fadeIn delay-100"
              variants={itemVariants}
            >
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. Feel free to reach
              out through any of the channels below.
            </motion.p>

            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div
                className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-cyan-500/10 animate-slideInLeft"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailClick}
              >
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-all duration-300 group-hover:animate-pulse">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300 group-hover:text-cyan-300 transition-colors duration-200 select-none animate-fadeIn">
                    yashwadkar079@gmail.com
                  </p>
                  <p className="text-xs text-gray-400 mt-1 animate-fadeIn">
                    Click to send me an email
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-green-500/50 transition-all duration-300 group cursor-pointer relative animate-slideInLeft delay-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePhoneClick}
              >
                <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-all duration-300 group-hover:animate-pulse">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">Phone</h4>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-300 group-hover:text-green-300 transition-colors duration-200 select-none animate-fadeIn">
                      +91 9075425869
                    </p>
                    {copied && (
                      <div className="flex items-center text-green-400 text-xs animate-pulse animate-bounce">
                        <Check className="w-3 h-3 mr-1" />
                        Copied!
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-1 animate-fadeIn">
                    <span className="inline md:hidden">Tap to call</span>
                    <span className="hidden md:inline">
                      Click to copy on desktop
                    </span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 animate-slideInLeft delay-200"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-purple-500/20 rounded-lg hover:animate-pulse">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300 animate-fadeIn">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex space-x-4 animate-fadeInUp"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/Yashwadkar2121"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:animate-pulse"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/yash-wadkar-2a2114224"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:animate-pulse"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 animate-slideInRight hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-fadeIn">
                  <label className="block text-white text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-all duration-300 focus:ring-2 focus:ring-cyan-500/30"
                    placeholder="Your Name"
                  />
                </div>
                <div className="animate-fadeIn delay-100">
                  <label className="block text-white text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-all duration-300 focus:ring-2 focus:ring-cyan-500/30"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="animate-fadeIn delay-200">
                <label className="block text-white text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-all duration-300 focus:ring-2 focus:ring-cyan-500/30"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="animate-fadeIn delay-300">
                <label className="block text-white text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-all duration-300 focus:ring-2 focus:ring-cyan-500/30 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <div className="animate-fadeIn delay-400">
                <label className="block text-white text-sm font-medium mb-2">
                  Attach Document (Optional)
                </label>
                <div className="space-y-3">
                  {!formData.file ? (
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-600 rounded-lg cursor-pointer hover:border-cyan-500 transition-all duration-300 hover:animate-pulse">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-gray-400 animate-bounce" />
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
                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700 animate-fadeInUp">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-6 h-6 text-cyan-400 animate-pulse" />
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
                        className="text-red-400 hover:text-red-300 transition-colors p-1 hover:animate-pulse"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <ProgressBar progress={uploadProgress} />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed animate-fadeInUp hover:scale-[1.02] active:scale-[0.98]"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    {uploadProgress < 70
                      ? "Uploading file..."
                      : "Sending message..."}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 animate-pulse" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg animate-fadeInUp"
                >
                  <p className="text-green-400 text-sm text-center animate-pulse">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg animate-fadeInUp"
                >
                  <p className="text-red-400 text-sm text-center animate-pulse">
                    ❌ Failed to send message. Please try again or email me
                    directly.
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
