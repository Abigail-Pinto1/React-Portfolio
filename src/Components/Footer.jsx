import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10 mt-16 shadow-inner">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand */}
        <motion.div whileHover={{ scale: 1.05 }} className="space-y-3">
          <h2 className="text-2xl font-bold text-primary">PINGAIL</h2>
          <p className="text-base-content/70">
            Crafting digital experiences with passion and precision.
          </p>
        </motion.div>

        {/* Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2 text-secondary">Quick Links</h3>
          {["Home", "About", "Blog", "Contact"].map((link, i) => (
            <motion.a
              key={i}
              href={`/${link.toLowerCase()}`}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="hover:text-primary transition-colors duration-300"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-secondary">Social Media</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            {[
              { icon: <FaGithub size={24} />, url: "https://github.com/" },
              { icon: <FaLinkedin size={24} />, url: "https://linkedin.com" },
              { icon: <FaTwitter size={24} />, url: "https://twitter.com" },
              { icon: <FaYoutube size={24} />, url: "https://youtube.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-base-content hover:text-primary transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-base-300 mt-8 pt-6 text-center text-sm text-base-content/70">
        © {new Date().getFullYear()} PINGAIL. All rights reserved.
      </div>
    </footer>
  );
}
