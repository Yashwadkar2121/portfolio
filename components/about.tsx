"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div>
        <p className="mb-3">
          I graduated with a degree in{" "}
          <span className="font-medium">Electrical Engineering</span> from{" "}
          <span className="font-medium">Savitribai Phule Pune University</span>.
          My passion for web development led me to{" "}
          <span className="font-medium">full-stack web development</span>, and I
          enjoy working with <span className="font-bold">React.js</span> and{" "}
          <span className="font-bold">Node.js</span> to build dynamic
          applications. I have hands-on experience with technologies like{" "}
          <span className="font-medium">
            React.js, Node.js, Express.js, MongoDB, MySQL, and Tailwind CSS
          </span>
          . My previous projects include developing a{" "}
          <span className="font-medium">Medicine Remainder App</span>,{" "}
          <span className="font-medium">Primary Home Page Clone</span>, and{" "}
          <span className="font-medium">TableSprit Admin Dashboard</span>. I
          thrive in collaborative environments and am always eager to learn new
          technologies. I completed internships at{" "}
          <span className="font-medium">Hudbil Pvt. Ltd.</span> and{" "}
          <span className="font-medium">Cognizee Infobyte.in</span>, where I
          worked on{" "}
          <span className="font-medium">
            hudbil brand website, portfolio website development
          </span>
          , and building a{" "}
          <span className="font-medium">Flipkart homepage replica</span>,
          gaining valuable hands-on experience in web development, UI/UX design,
          and project management.
        </p>
        <p>
          When I&apos;m not coding, I enjoy exploring new frameworks, learning
          about software architecture, and honing my problem-solving skills.
          I&apos;m currently seeking a{" "}
          <span className="font-medium">full-time position</span> to apply my
          skills and grow as a developer.
        </p>
      </div>
    </motion.section>
  );
}
