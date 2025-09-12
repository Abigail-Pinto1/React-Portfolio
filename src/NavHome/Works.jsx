import React from 'react'
import { motion } from "framer-motion";
import { Code, Palette, Server, Smartphone } from "lucide-react"; // Icons for services


  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack online store with cart, authentication, and payment integration.",
      image: "/projects/ecommerce.png", // Replace with your image
      link: "https://github.com/yourusername/ecommerce",
    },
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio showcasing skills, projects, and contact details.",
      image: "/projects/portfolio.png",
      link: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app using Socket.io and MongoDB for live messaging.",
      image: "/projects/chat.png",
      link: "https://github.com/yourusername/chat-app",
    },
  ];
const Works = () => {
  return (
    <div>
         {/* Selected Works */}
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-bold mb-10 text-center text-secondary"
              >
                Selected Works
              </motion.h3>
        
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="card bg-base-200 shadow-xl overflow-hidden hover:shadow-2xl transition"
                  >
                    <figure>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </figure>
                    <div className="card-body">
                      <h4 className="card-title">{project.title}</h4>
                      <p>{project.description}</p>
                      <div className="card-actions justify-end">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
    </div>
  )
}

export default Works