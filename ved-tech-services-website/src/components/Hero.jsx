import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[819px] flex items-center bg-white overflow-hidden">
      {/* Mobile: Background Image with Overlay */}
      <div className="absolute inset-0 lg:hidden">
        <img
          className="w-full h-full object-cover opacity-15"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbeS6qXYhfpZpK3Et_E_0i4jJxEoYLZJu0U3YbZMdz5rKVl7Fi8fQYyh70U3252uDmnneDVJJRbd2UeCAknG_UHkuYs2GYcp2B-NUfhdS1Hdy8BJtZwcR-Iz5ZDDIvj86t0hLCSJkbk8V2mgoFPMjKhNzvliP4ZYEO17GoTD704S4aFggMYYHyd0ZhQNauet80F1rCrSkqMmGkQXKCyNM5DomddMlqAKBl4UCz8MAhf20NwS8eWAO7MRmZcVgg6_KIvjTEuy1KrZc8"
          alt=""
        />
      </div>

      {/* Desktop: Background Decorative Element */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-surface-container-low skew-x-[-12deg] translate-x-1/4" />

      <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-12 lg:py-0"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-semibold text-xs tracking-wider rounded mb-6"
          >
            DRIVING DIGITAL TRANSFORMATION
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-on-background mb-6 leading-tight"
          >
            Your Growth, <span className="text-primary">Our Technology</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed"
          >
            We empower businesses with cutting-edge digital solutions designed
            for scalability, security, and superior performance.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 61, 155, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-on-primary px-6 lg:px-8 py-3 lg:py-4 rounded font-bold text-sm lg:text-base transition-all"
            >
              View Our Portfolio
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(0, 61, 155, 0.05)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-6 lg:px-8 py-3 lg:py-4 rounded font-bold text-sm lg:text-base transition-all"
            >
              Our Solutions
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Desktop: Image with Floating Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-outline-variant"
          >
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbeS6qXYhfpZpK3Et_E_0i4jJxEoYLZJu0U3YbZMdz5rKVl7Fi8fQYyh70U3252uDmnneDVJJRbd2UeCAknG_UHkuYs2GYcp2B-NUfhdS1Hdy8BJtZwcR-Iz5ZDDIvj86t0hLCSJkbk8V2mgoFPMjKhNzvliP4ZYEO17GoTD704S4aFggMYYHyd0ZhQNauet80F1rCrSkqMmGkQXKCyNM5DomddMlqAKBl4UCz8MAhf20NwS8eWAO7MRmZcVgg6_KIvjTEuy1KrZc8"
              alt="Modern tech office"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl border border-outline-variant shadow-lg max-w-[200px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary">
                trending_up
              </span>
              <span className="font-semibold text-xs tracking-wider text-primary">
                GROWTH
              </span>
            </div>
            <div className="text-2xl font-bold text-on-background mb-1">
              +150%
            </div>
            <div className="text-xs text-on-surface-variant leading-tight">
              Average client revenue increase through tech optimization
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
