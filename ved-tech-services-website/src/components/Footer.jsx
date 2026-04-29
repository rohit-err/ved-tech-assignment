import { motion } from "framer-motion";

const footerLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];
const socialIcons = ["share", "mail"];

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="text-sm font-bold text-slate-900 font-display">
              Ved Tech Services
            </div>
            <p className="text-xs text-slate-500">
              © 2024 Ved Tech Services. Corporate Minimalism & Precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-8"
          >
            {footerLinks.map((link, index) => (
              <motion.a
                key={link}
                whileHover={{ y: -2 }}
                href="#"
                className="text-xs text-slate-500 hover:text-blue-600 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialIcons.map((icon, index) => (
              <motion.div
                key={icon}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-secondary-container transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">
                  {icon}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
