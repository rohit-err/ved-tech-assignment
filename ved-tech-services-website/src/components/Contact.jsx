import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: "mail",
    label: "EMAIL US",
    value: "vedtechservices@gmail.com",
  },
  {
    icon: "call",
    label: "CALL US",
    value: "+91 7858971869",
  },
  {
    icon: "location_on",
    label: "OFFICE",
    value: "Samastipur, Tech Hub, Bihar, India",
  },
];

const initialForm = { name: "", email: "", message: "" };

function Contact() {
  const mobileRef = useRef(null);
  const desktopRef = useRef(null);
  const isMobileInView = useInView(mobileRef, { once: true, margin: "-100px" });
  const isDesktopInView = useInView(desktopRef, {
    once: true,
    margin: "-100px",
  });

  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = [];

    if (!formData.name.trim()) errors.push("Full name is required");
    if (!formData.email.trim()) {
      errors.push("Email address is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("Enter a valid email address");
    }

    if (errors.length > 0) {
      toast.error(errors.map((msg, i) => `${i + 1}. ${msg}`).join("\n"));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/submission`, {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });
      toast.success("Message sent! We will get back to you soon.");
      setFormData(initialForm);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-semibold text-xs tracking-wider text-on-surface-variant mb-2">
          FULL NAME <span className="text-error">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          disabled={isSubmitting}
          className="w-full border-b-2 border-surface-container-highest focus:border-primary bg-transparent py-2 outline-none transition-colors disabled:opacity-50"
        />
      </div>

      <div>
        <label className="block font-semibold text-xs tracking-wider text-on-surface-variant mb-2">
          EMAIL ADDRESS <span className="text-error">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          disabled={isSubmitting}
          className="w-full border-b-2 border-surface-container-highest focus:border-primary bg-transparent py-2 outline-none transition-colors disabled:opacity-50"
        />
      </div>

      <div>
        <label className="block font-semibold text-xs tracking-wider text-on-surface-variant mb-2">
          MESSAGE
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          rows="4"
          disabled={isSubmitting}
          className="w-full border-b-2 border-surface-container-highest focus:border-primary bg-transparent py-2 outline-none transition-colors resize-none disabled:opacity-50"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-on-primary py-4 rounded font-bold transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </form>
  );

  return (
    <section id="contact" className="py-12 lg:py-20 xl:py-32 bg-background">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Mobile: Stacked Layout */}
        <div className="md:hidden space-y-8">
          <motion.div
            ref={mobileRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isMobileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl font-bold text-on-background mb-4">
              Ready to Scale Your Digital Presence?
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Contact our team today for a comprehensive audit of your digital
              ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isMobileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-4"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-outline-variant flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    {info.icon}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-on-surface-variant mb-1">
                    {info.label}
                  </p>
                  <p className="font-semibold text-sm text-on-background">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isMobileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl border border-outline-variant p-6"
          >
            {formFields}
          </motion.div>
        </div>

        {/* Desktop: Side-by-Side Layout */}
        <motion.div
          ref={desktopRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isDesktopInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6 }}
          className="hidden md:flex bg-white rounded-2xl border border-outline-variant overflow-hidden shadow-sm"
        >
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isDesktopInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 p-10 lg:p-16 bg-primary text-on-primary"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
              Ready to Scale Your Digital Presence?
            </h2>
            <p className="text-sm lg:text-base opacity-80 mb-12 leading-relaxed">
              Contact our team today for a comprehensive audit of your digital
              ecosystem.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isDesktopInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <span className="material-symbols-outlined">{info.icon}</span>
                  <div>
                    <p className="text-xs font-semibold tracking-wider opacity-60 mb-1">
                      {info.label}
                    </p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isDesktopInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2 p-10 lg:p-16"
          >
            {formFields}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
