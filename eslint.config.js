import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lm2xvrp",   // 👉 replace with your EmailJS Service ID
        "template_q9bwk4s",   // 👉 replace with your EmailJS Template ID
        formRef.current,
        "17wkEHpO8kjH217X-"   // 👉 replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          formRef.current.reset(); // clear form
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-base-100 text-base-content flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center text-primary"
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-secondary">Let’s Talk!</h3>
          <p className="leading-relaxed text-base-content/80">
            Whether you’re starting a new project, need help with development, 
            or just want to say hi 👋, drop me a message!
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary text-xl" />
              <a
                href="mailto:youremail@example.com"
                className="hover:text-primary transition"
              >
                youremail@example.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-4 text-2xl">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-base-200 p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
