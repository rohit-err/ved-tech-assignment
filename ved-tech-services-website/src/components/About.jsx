import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    icon: "analytics",
    title: "Strategic Consultancy",
    description:
      "We don't just build; we strategize. Our team analyzes your business workflow to identify bottlenecks and implement digital architectures that streamline operations and maximize ROI.",
    colSpan: "md:col-span-2",
    variant: "white",
  },
  {
    icon: "verified_user",
    title: "Security First",
    description:
      "Enterprise-grade security integrated into every line of code we write.",
    colSpan: "",
    variant: "primary",
  },
  {
    icon: "groups",
    label: "PARTNERSHIP",
    title: "Dedicated support teams for long-term scalability.",
    colSpan: "",
    variant: "white",
  },
  {
    icon: null,
    title: "Our Vision",
    description:
      "To be the global benchmark for corporate digital transformation through minimalist design and maximum functional efficiency.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvrU5P7jTVL_q5imIIeordwbbkvAW28wA7G5u5jP-c7VsXydrAKFFytY1PCxO8F5TuE1ibfA1c6VEW4jGMXf3-TBkY_qcCii4DChQgcYrzPcxyNmicKWwZu913L597RuPuEl3XsqH3hY1qULOlRufqVvD3q9ZpbVtLNXaNO8Ks5uBuJ10V2TDxnrQh9l0SvkINZShg1p5Oc2sgdP949g58uH5VE8tq8B6d1THMmjzIKMPlK4eu3s9Y3ezUc2DKvXIHml5XPrUvjAwC",
    colSpan: "md:col-span-2",
    variant: "gray",
  },
];

function AboutCard({ card, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`${card.colSpan} ${
        card.variant === "primary"
          ? "bg-primary text-on-primary"
          : card.variant === "gray"
            ? "bg-surface-container-high border border-outline-variant"
            : "bg-white border border-outline-variant hover:shadow-md"
      } rounded-xl p-8 transition-shadow ${
        card.image
          ? "flex flex-col md:flex-row gap-8 items-center"
          : "flex flex-col"
      }`}
    >
      {card.icon && (
        <motion.span
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className={`material-symbols-outlined text-4xl mb-4 ${
            card.variant === "primary" ? "text-white" : "text-primary"
          }`}
        >
          {card.icon}
        </motion.span>
      )}

      <div className={card.image ? "flex-1" : ""}>
        {card.label && (
          <h4 className="font-semibold text-xs tracking-wider text-primary mb-2">
            {card.label}
          </h4>
        )}
        <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
        {card.description && (
          <p
            className={`text-base ${card.variant === "primary" ? "opacity-90" : "text-on-surface-variant"}`}
          >
            {card.description}
          </p>
        )}
      </div>

      {card.image && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden grayscale"
        >
          <img
            className="w-full h-full object-cover"
            src={card.image}
            alt="Corporate meeting room"
          />
        </motion.div>
      )}
    </motion.div>
  );
}

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-on-background mb-4">
            Precision-Driven Digital Excellence
          </h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
            Ved Tech Services bridges the gap between complex business
            challenges and innovative technological solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <AboutCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
