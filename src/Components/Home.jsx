import React from "react";
import { motion } from "framer-motion";
import Abbys from "../assets/Abbys.svg";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import Testimonials from "../Pages/Testimonials";
import Specialities from "../Pages/Specialities";
import { CheckCircle } from "lucide-react";
import bgv from "../assets/bgv.mp4";

const items = [
  {
    title: "Interactive Portfolio",
    desc: "Framer Motion transitions, dynamic content.",
    tags: ["React", "Framer Motion", "Vite"],
    image: "src/assets/b1.svg",
    link: "#",
    repo: "#",
  },
  {
    title: "E-commerce App",
    desc: "Full-stack store with auth + payments.",
    tags: ["React", "Node", "Stripe"],
    image: "src/assets/b3.svg",
    link: "#",
    repo: "#",
  },
  {
    title: "API Dashboard",
    desc: "Realtime charts and team roles.",
    tags: ["React", "WebSockets", "Recharts"],
    image: "src/assets/b77.svg",
    link: "#",
    repo: "#",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    features: [
      "Basic website (up to 3 pages)",
      "Responsive design",
      "SEO setup",
      "Delivery: 1 week",
    ],
    color: "primary",
  },
  {
    name: "Pro",
    price: "$599",
    features: [
      "Full website (up to 8 pages)",
      "API integration",
      "Database support",
      "Delivery: 2 weeks",
    ],
    color: "secondary",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Complex web app",
      "Mobile app + backend",
      "Cloud deployment",
      "Dedicated support",
    ],
    color: "accent",
  },
];

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 text-base-content overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-0"
          src={bgv}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/70 via-secondary/50 to-transparent -z-10"></div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_40px_theme(colors.primary)]"
        >
          <img src={Abbys} alt="Profile" className="w-full h-full object-cover" />
        </motion.div>

        {/* Text Section */}
        <div className="relative z-10 mt-8 md:ml-10 text-center md:text-left">
          <p className="text-base-content/70 font-bold font-serif">Hello, I'm</p>
          <h1 className="text-3xl md:text-4xl font-bold">Abigail Pinto</h1>

          <TypeAnimation
            sequence={[
              "Software Developer",
              1000,
              "I love Web Development 😍",
              2000,
              "Let's build something amazing!",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              display: "inline-block",
            }}
          />

          <p className="text-base-content/70 mt-3 max-w-md mx-auto md:mx-0">
            I create beautiful and functional websites that help businesses grow.
            Let's work together to bring your ideas to life!
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-5 text-3xl justify-center md:justify-start">
            <div className="flex space-x-4 mt-2">
              {[
                { icon: <FaGithub size={24} />, url: "https://github.com/Abigail-Pinto1" },
                { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/abigail-pinto-838836128" },
                { icon: <FaTwitter size={24} />, url: "https://x.com/smarty_pinto" },
                { icon: <FaYoutube size={24} />, url: "https://www.youtube.com/@abigailpinto7330" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="hover:text-primary"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a href="mailto:abigailpnt@gmail.com">
              <button className="btn btn-primary">Hire Me</button>
            </a>
            <a href="Pinto-Abigail-CV.pdf" download="CV-Pinto-Abigail.pdf">
              <button className="btn btn-secondary">Get Resume</button>
            </a>
          </div>
        </div>
      </section>

      {/* Specialities Section */}
      <Specialities />

      {/* Selected Work Section */}
      <section id="work" className="py-22 px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl font-bold text-primary">Selected Work</h2>
          <a
            className="text-secondary hover:text-accent transition"
            href="https://github.com/yourname"
            target="_blank"
            rel="noreferrer"
          >
            View all →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-base-200 border border-neutral/40 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 rounded-xl overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover hover:scale-110 transition duration-500"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-base-content/70 text-sm mt-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="badge badge-outline text-xs py-1 px-3"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <a className="btn btn-sm btn-outline" href={p.repo}>
                    Code
                  </a>
                  <a className="btn btn-sm btn-primary" href={p.link}>
                    Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Working Process Section */}
      <section className="flex flex-col items-center justify-center py-12 px-4 bg-base-200 text-base-content">
        <h2 className="font-bold text-3xl mb-8 text-center">Working Process</h2>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
          {/* Horizontal Line (desktop) */}
          <div className="absolute hidden md:block top-1/2 left-0 right-0 h-1 bg-base-content/40 z-0"></div>
          {/* Vertical Line (mobile) */}
          <div className="absolute block md:hidden left-1/2 top-0 bottom-0 w-1 bg-base-content/40 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center bg-base-100 text-base-content shadow-lg hover:shadow-2xl transition p-6 rounded-xl w-64">
            <CheckCircle className="w-10 h-10 text-success mb-3" />
            <h2 className="card-title text-xl font-bold mb-2">Step 1</h2>
            <h4 className="font-semibold mb-2">Send up your project</h4>
            <p className="text-sm">
              Bring out your idea into a workable application. I am here to take
              it up.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center bg-base-100 text-base-content shadow-lg hover:shadow-2xl transition p-6 rounded-xl w-64">
            <CheckCircle className="w-10 h-10 text-warning mb-3" />
            <h2 className="card-title text-xl font-bold mb-2">Step 2</h2>
            <h4 className="font-semibold mb-2">Get it delivered on time</h4>
            <p className="text-sm">
              A good stack delivered in a timely manner is great for business.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center bg-base-100 text-base-content shadow-lg hover:shadow-2xl transition p-6 rounded-xl w-64">
            <CheckCircle className="w-10 h-10 text-info mb-3" />
            <h2 className="card-title text-xl font-bold mb-2">Step 3</h2>
            <h4 className="font-semibold mb-2">Take on more clients & scale up</h4>
            <p className="text-sm">
              Help with maintenance and new features while growing your stack.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-18 px-6 bg-base-200 text-base-content">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Pricing</h1>
          <p className="mt-2 text-base-content/70">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`card bg-base-100 shadow-xl border-t-4 border-${plan.color} p-6 flex flex-col`}
            >
              <h4 className={`text-2xl font-bold text-center mb-4 text-${plan.color}`}>
                {plan.name}
              </h4>
              <p className="text-3xl font-extrabold text-center mb-6">
                {plan.price}
              </p>
              <ul className="flex-1 space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-base-content/70 flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn btn-${plan.color} w-full`}>Get Started</button>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Hero;
