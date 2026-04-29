import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "language",
    title: "Websites",
    description:
      "Custom-built, responsive web applications optimized for speed, SEO, and user engagement.",
    features: ["React & Next.js Development", "CMS Integration"],
  },
  {
    icon: "shopping_cart",
    title: "E-commerce",
    description:
      "Robust digital storefronts that convert visitors into loyal customers through seamless UX.",
    features: ["Shopify & Custom Platforms", "Secure Payment Gateways"],
  },
  {
    icon: "campaign",
    title: "Marketing",
    description:
      "Data-driven digital marketing strategies to amplify your brand voice and market reach.",
    features: ["Performance Marketing", "Content Strategy"],
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group p-8 border border-outline-variant rounded-lg hover:border-primary transition-all bg-white hover:shadow-lg"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="w-14 h-14 bg-surface-container-low flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary-container transition-colors"
      >
        <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
          {service.icon}
        </span>
      </motion.div>

      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-base text-on-surface-variant mb-6 leading-relaxed">
        {service.description}
      </p>

      <ul className="space-y-3 mb-8">
        {service.features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
            className="flex items-center gap-2 text-sm text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-xs text-primary">
              check_circle
            </span>
            {feature}
          </motion.li>
        ))}
      </ul>

      <motion.a
        whileHover={{ gap: "1rem" }}
        href="#"
        className="text-primary font-bold text-sm flex items-center gap-2 transition-all"
      >
        Learn More
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="material-symbols-outlined text-sm"
        >
          arrow_forward
        </motion.span>
      </motion.a>
    </motion.div>
  );
}

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
        >
          <div className="max-w-xl">
            <h4 className="font-semibold text-xs tracking-wider text-primary mb-2">
              OUR EXPERTISE
            </h4>
            <h2 className="font-display text-4xl font-bold text-on-background">
              Comprehensive Solutions for Modern Enterprises
            </h2>
          </div>

          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`w-12 h-1 ${i === 0 ? "bg-primary" : "bg-surface-container-highest"}`}
                style={{ transformOrigin: "left" }}
              />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
