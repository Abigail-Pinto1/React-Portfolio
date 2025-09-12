import React from "react";
import { 
  Code, Palette, Server, Smartphone, Globe, Database, Cloud, Lock 
} from "lucide-react"; // Lucide icons
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Responsive, scalable websites using React, Tailwind, and Node.js.",
      icon: <Code className="w-10 h-10 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description: "Clean, modern, and user-friendly designs tailored to your brand.",
      icon: <Palette className="w-10 h-10 text-secondary" />,
    },
    {
      title: "Backend Development",
      description: "Robust APIs and server-side apps built with Node.js, Express, and MongoDB.",
      icon: <Server className="w-10 h-10 text-accent" />,
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile apps with React Native for iOS and Android.",
      icon: <Smartphone className="w-10 h-10 text-warning" />,
    },
    {
      title: "SEO Optimization",
      description: "Boost your website ranking and visibility with modern SEO practices.",
      icon: <Globe className="w-10 h-10 text-success" />,
    },
    {
      title: "Database Management",
      description: "Efficient data modeling, migrations, and scaling solutions.",
      icon: <Database className="w-10 h-10 text-pink-500" />,
    },
    {
      title: "Cloud Deployment",
      description: "Deploying apps on AWS, Vercel, or DigitalOcean with CI/CD pipelines.",
      icon: <Cloud className="w-10 h-10 text-indigo-400" />,
    },
    {
      title: "Cybersecurity",
      description: "Secure coding, encryption, and vulnerability testing for apps.",
      icon: <Lock className="w-10 h-10 text-red-500" />,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      features: ["Basic website (up to 3 pages)", "Responsive design", "SEO setup", "Delivery: 1 week"],
      color: "primary",
    },
    {
      name: "Pro",
      price: "$599",
      features: ["Full website (up to 8 pages)", "API integration", "Database support", "Delivery: 2 weeks"],
      color: "secondary",
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Complex web app", "Mobile app + backend", "Cloud deployment", "Dedicated support"],
      color: "accent",
    },
  ];

  const workProcess = [
     { step: "Research", detail: "Understanding the client's needs & goals." },
    { step: "Planning", detail: "Creating a clear roadmap & design outline." },
    { step: "Design", detail: "Building intuitive and elegant UI/UX designs." },
    { step: "Development", detail: "Coding with best practices and scalability." },
    { step: "Testing", detail: "Ensuring everything works seamlessly." },
    { step: "Delivery", detail: "Launching the product and ongoing support." },
  ];

  const containerRef = useRef(null);

  // Scroll animation hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Animate the line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="min-h-screen bg-base-100 text-base-content px-6 py-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary"
      >
        My Services
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="card bg-base-200 shadow-xl p-6 text-center hover:scale-105 transition"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-500">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Pricing Plans */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center text-secondary"
      >
        Pricing Plans
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`card bg-base-200 shadow-xl border-t-4 border-${plan.color} p-6 flex flex-col`}
          >
            <h4 className="text-2xl font-bold text-center mb-4">{plan.name}</h4>
            <p className="text-3xl font-extrabold text-center mb-6">{plan.price}</p>
            <ul className="flex-1 space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600 flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className={`btn btn-${plan.color} w-full`}>Get Started</button>
          </motion.div>
        ))}
      </div>

    <section className="py-16 px-6 bg-base-100 text-base-content">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center text-accent"
      >
        My Work Process
      </motion.h3>

      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        {/* Animated vertical line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-6 top-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full origin-top"
        ></motion.div>

        {workProcess.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative mb-12 flex items-start gap-4"
          >
            {/* Step circle with glow effect */}
            <motion.div
              initial={{ scale: 0.8, boxShadow: "0 0 0px rgba(0,0,0,0)" }}
              whileInView={{
                scale: 1,
                boxShadow: "0 0 20px rgba(255,215,0,0.7)",
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10 w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full font-bold shadow-md"
            >
              {i + 1}
            </motion.div>

            {/* Step content */}
            <div className="ml-4">
              <h4 className="text-lg font-semibold">{step.step}</h4>
              <p className="text-gray-500">{step.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    </section>
  );
};

export default Services;
