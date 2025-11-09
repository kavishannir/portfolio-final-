import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import companyLogo from "../images.jpg";

// Helper function to format achievements with bold key metrics
const formatAchievement = (text: string) => {
  return text
    .replace(/(\d+%|\d+x|\d+\.\d+%)/g, '<strong>$1</strong>')
    .replace(/(AWS\/Azure|microservices platform|monolithic legacy application|cloud-native|database queries|application logic|user traffic|server scaling|system latency|developer deployment speed|infrastructure costs|uptime)/gi, '<strong>$1</strong>');
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

  const experiences = [
    {
      company: "CODEVITA Pvt Ltd",
      role: "QA Software Engineer",
      duration: "2025 - Present",
      location: "Jaffna, Sri Lanka",
      description: "Leading full-cycle software delivery for a leading tech company, from architecting robust backend systems to crafting responsive, user-centric front-end interfaces that drive product engagement.",
      achievements: [
        "Led cross-functional team to deliver new microservices platform, cutting latency 40% and boosting deployment speed 3x.",
        "Migrated monolithic app to cloud-native architecture on AWS/Azure, slashing infrastructure costs 60% while maintaining 99.9% uptime.",
        "Optimized database queries and application logic, supporting 300% user growth without additional server scaling.",
      ],
      logo: "T",
      logoImage: companyLogo,
    },
  ];

  return (
    <section id="experience" ref={ref} className="min-h-screen py-20 relative overflow-hidden">
      <div className="floating-orb w-80 h-80 bg-primary top-20 left-10 opacity-20" style={{ animationDelay: '1s' }} />
      <div className="floating-orb w-96 h-96 bg-secondary bottom-20 right-10 opacity-20" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            stiffness: 100
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-gradient-animate underline decoration-primary">Experience</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            My professional journey
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 100, scale: 0.9, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, x: 0 } : {}}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 80
              }}
              className="relative"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="glass-card rounded-2xl p-8 glow-hover"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-purple-blue flex items-center justify-center text-3xl font-bold text-white glow-purple flex-shrink-0 overflow-hidden"
                  >
                    {exp.logoImage ? (
                      <img 
                        src={exp.logoImage} 
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      exp.logo
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 underline decoration-primary">{exp.role}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 text-secondary" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-secondary" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">Key Achievements:</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + 0.1 + i * 0.05 }}
                            className="flex items-start gap-3 text-sm text-foreground/70"
                          >
                            <span className="w-2 h-2 rounded-full bg-gradient-purple-blue mt-2 flex-shrink-0" />
                            <span 
                              className="font-medium"
                              dangerouslySetInnerHTML={{
                                __html: formatAchievement(achievement)
                              }} 
                            />
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
