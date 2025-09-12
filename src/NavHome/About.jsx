import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const About = () => {
  const skills = [
    "React", "Node.js", "MongoDB", "TailwindCSS", "Express",
    "Git & GitHub", "REST APIs", "Firebase", "GraphQL"
  ];

  const education = [
    {
      school: "University of Ghana",
      degree: "BSc. in Information Technology",
      year: "2015 - 2019",
      detail: "Focused on Network engineering, Database, and full-stack web development."
    },
    {
      school: "Developers in Vogue",
      degree: "Full-Stack Development",
      year: "2025",
      detail: "Completed online certifications in React, Node.js, and Cloud Deployment."
    }
  ];

  return (
    <section className="min-h-screen bg-base-100 text-base-content flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary"
      >
        Who I Am
      </motion.h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <img
              src="/Abbys.svg" 
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Abigail Pinto</span> 👋
          </h3>
          <p className="mb-4 leading-relaxed text-lg">
            I’m a passionate <span className="font-semibold">Software Developer</span> 
             who loves building interactive, modern, and scalable web applications.
          </p>
          <p className="mb-6 leading-relaxed text-lg">
            With experience in{" "}
            <span className="text-secondary font-medium">
              React, Node.js, MongoDB, and TailwindCSS
            </span>
            , I enjoy solving challenging problems and constantly learning new
            technologies.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-center md:text-left">
            <div>
              <h4 className="text-3xl font-bold text-primary">2+</h4>
              <p className="text-sm opacity-70">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">15+</h4>
              <p className="text-sm opacity-70">Projects</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">10+</h4>
              <p className="text-sm opacity-70">Happy Clients</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl mb-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaTwitter />
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-primary transition">
              <FaEnvelope />
            </a>
          </div>

          {/* Call-to-Actions */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="/resume.pdf" download>
              <button className="btn btn-primary">Download CV</button>
            </a>
            <a href="mailto:youremail@example.com">
              <button className="btn btn-outline btn-primary">Hire Me</button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-16 max-w-4xl w-full"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">Skills</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-primary text-primary-content font-semibold rounded-full shadow-md text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 max-w-4xl w-full"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">Education</h3>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-base-200 border border-base-300 rounded-lg p-6 shadow-md"
            >
              <h4 className="text-xl font-bold">{edu.degree}</h4>
              <p className="opacity-80">{edu.school} • {edu.year}</p>
              <p className="mt-2 opacity-70">{edu.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
