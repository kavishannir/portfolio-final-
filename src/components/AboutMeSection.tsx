import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Award } from "lucide-react";

const AboutMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Code2, label: "Projects Completed", value: "15+" },
    { icon: Rocket, label: "Years Experience", value: "3+" },
    { icon: Award, label: "Certifications", value: "5+" },
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 bg-primary top-20 left-10 opacity-20" />
      <div className="floating-orb w-80 h-80 bg-secondary bottom-20 right-10 opacity-20" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-animate">About Me</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a passionate developer with expertise in Salesforce, web technologies, and DevOps practices. 
              My journey in tech has been driven by curiosity and a constant desire to learn and build 
              innovative solutions.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              With a strong foundation in software development and cloud technologies, I specialize in 
              creating scalable applications and implementing efficient workflows. I'm currently expanding 
              my skills in containerization and CI/CD pipelines.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-purple-blue flex items-center justify-center glow-purple">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden glass-premium p-8"
            >
              <div className="aspect-square bg-gradient-purple-blue rounded-2xl flex items-center justify-center glow-purple">
                <span className="text-9xl font-bold text-white">K</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
