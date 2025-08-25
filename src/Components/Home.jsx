import React from "react";
import { motion } from "framer-motion";
import Abbys from "../assets/Abbys.svg";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaYoutubeSquare, FaGooglePlusSquare } from "react-icons/fa";
import Testimonials from "../Pages/Testimonials";
import Specialities from "../Pages/Specialities";
import Navbar from "./Navbar";
import { CheckCircle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  const items = [
    {
      title: "Interactive Portfolio",
      desc: "Framer Motion transitions, dynamic content.",
      tags: ["React", "Framer Motion", "Vite"],
      image: "src/assets/b1.svg",
      link: "#",
      repo: "#"
    },
    {
      title: "E-commerce App",
      desc: "Full-stack store with auth + payments.",
      tags: ["React", "Node", "Stripe"],
      image: "src/assets/b3.svg",
      link: "#",
      repo: "#"
    },
    {
      title: "API Dashboard",
      desc: "Realtime charts and team roles.",
      tags: ["React", "WebSockets", "Recharts"],
      image: "src/assets/b77.svg",
      link: "#",
      repo: "#"
    },
  ];

  const plans = [
    { title: "Basic", price: "$29/hour", popular: false, features: [true, true, false, false, false, false] },
    { title: "Standard", price: "$39/hour", popular: true, features: [true, true, true, true, false, false] },
    { title: "Premium", price: "$59/hour", popular: false, features: [true, true, true, true, true, true] },
  ];

  const featuresList = [
    "High-resolution image generation",
    "Customizable style templates",
    "Batch processing capabilities",
    "AI-driven image enhancements",
    "Seamless cloud integration",
    "Real-time collaboration tools",
  ];

  return (
    <>
    <Navbar/>
      {/* Hero Section */}
      <div className="min-h-[100vh] bg-[#101b36] text-white flex flex-row md:flex-row items-center justify-center px-6">
              <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#00BFFF] shadow-[0_0_50px_#00BFFF] pulse-glow"
>
  <img src={Abbys} alt="Profile" className="w-full h-full object-cover" />
</motion.div>

        <div className="mt-8 md:ml-10 text-center md:text-left">
          <p className="text-gray-400 font-bold font-serif">Hello, I'm</p>
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
            style={{ fontSize: "2rem", fontWeight: "bold", display: "inline-block" }}
          />

          <p className="text-gray-400 mt-3 max-w-md mx-auto md:mx-0">
            I create beautiful and functional websites that help businesses grow. Let's work together to bring your ideas to life!
          </p>

          <div className="flex gap-5 mt-5 text-3xl justify-center md:justify-start">
            
            <a href="https://github.com/Abigail-Pinto1" className="hover:scale-110 transition"><FaGithubSquare className="text-gray-400" /></a>
            <a href="https://x.com/smarty_pinto" className="hover:scale-110 transition"><FaTwitterSquare className="text-blue-400" /></a>
            <a href="https://www.youtube.com/@abigailpinto7330" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
               <FaYoutubeSquare className="text-red-500" />
                </a>
            <a href="https://www.linkedin.com/in/abigail-pinto-838836128" className="hover:scale-110 transition"><FaLinkedin className="text-pink-500" /></a>
          </div>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a href="mailto:your-email@example.com">
              <button className="bg-blue-100 px-4 py-2 rounded-lg hover:bg-blue-200 transition">Hire Me</button>
            </a>
            <a href="Pinto-Abigail-CV.pdf" download="CV-Pinto-Abigail.pdf">
              <button className="bg-green-100 px-4 py-2 rounded-lg hover:bg-green-100 transition">Get Resume</button>
            </a>
          </div>
        </div>
      </div>

      



      {/* Specialities Section */}
      <Specialities />

      {/* Work Section */}
      <section id="work" className="py-206 px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl font-bold text-white">Selected Work</h2>
          <a className="text-blue-400 hover:text-blue-500 transition" href="https://github.com/yourname" target="_blank" rel="noreferrer">View all →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-base-200/40 border border-neutral/40 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 rounded-xl overflow-hidden"
            >
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((t) => <span key={t} className="badge badge-outline text-xs py-1 px-3">{t}</span>)}
                </div>
                <div className="flex gap-2 mt-4">
                  <a className="btn btn-sm btn-outline" href={p.repo}>Code</a>
                  <a className="btn btn-sm btn-primary" href={p.link}>Live</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

    <section className="flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h2 className="font-bold text-3xl mb-8 text-center">Working Process</h2>

      {/* Timeline Container */}
      <div className="relative flex flex-row md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        {/* Line Connector */}
        <div className="absolute hidden md:block top-1/2 left-0 right-0 h-1 bg-white opacity-40 z-0"></div>
        <div className="absolute block md:hidden left-1/2 top-0 bottom-0 w-1 bg-white opacity-40 z-0"></div>

        {/* Step 1 */}
        <div className="relative z-10 flex flex-col items-center text-center bg-white text-gray-800 shadow-lg hover:shadow-2xl transition p-6 rounded-xl w-64">
          <CheckCircle className="w-10 h-10 text-green-500 mb-3" />
          <h2 className="card-title text-xl font-bold mb-2">Step 1</h2>
          <h4 className="font-semibold mb-2">Send up your project</h4>
          <p className="text-sm">
            Bring out your idea into a workable application. I am here to take it up.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative z-10 flex flex-col items-center text-center bg-white text-gray-800 shadow-lg hover:shadow-2xl transition p-6 rounded-xl w-64">
          <CheckCircle className="w-10 h-10 text-yellow-500 mb-3" />
          <h2 className="card-title text-xl font-bold mb-2">Step 2</h2>
          <h4 className="font-semibold mb-2">Get it delivered on time</h4>
          <p className="text-sm">
            A good stack delivered in a timely manner is great for business.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative z-10 flex flex-col items-center text-center bg-white text-gray-800 shadow-lg hover:shadow-2xl transition p-6 rounded-xl w-64">
          <CheckCircle className="w-10 h-10 text-blue-500 mb-3" />
          <h2 className="card-title text-xl font-bold mb-2">Step 3</h2>
          <h4 className="font-semibold mb-2">Take on more clients & scale up</h4>
          <p className="text-sm">
            Help with maintenance and all new features needed while on another stack.
          </p>
        </div>
      </div>
    </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-base-200">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Pricing</h1>
          <p className="mt-2 text-gray-400">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`bg-base-100 shadow-lg rounded-xl p-6 hover:scale-105 transition ${plan.popular ? "border-2 border-blue-500" : ""}`}
            >
              {plan.popular && <span className="badge badge-warning mb-2">Most Popular</span>}
              <h2 className="text-2xl font-bold">{plan.title}</h2>
              <p className="text-xl mt-2">{plan.price}</p>

              <ul className="mt-6 space-y-2 text-sm">
                {featuresList.map((feature, i) => (
                  <li key={i} className={`flex items-center ${!plan.features[i] && "opacity-50 line-through"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 mr-2 ${plan.features[i] ? "text-green-500" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn btn-primary btn-block mt-6">Get Started Now</button>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Hero;
