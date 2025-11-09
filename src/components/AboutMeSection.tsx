import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Award } from "lucide-react";
import aboutImage from "../WhatsApp Image 2025-11-07 at 11.36.54 AM.jpeg";

const AboutMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Code2, label: "Projects Completed", value: "15+" },
    { icon: Rocket, label: "Years Experience", value: "3+" },
    { icon: Award, label: "Certifications", value: "5+" },
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
      {/* Visual Separator/Divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#6C63FF]/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/80 via-background/40 to-transparent" />
      
      {/* Stylish Background with Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0f0f1a] to-[#0a0a0f] pt-32">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-56 left-10 w-72 h-72 bg-[#6C63FF] rounded-full blur-2xl opacity-6"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#00FFFF] rounded-full blur-2xl opacity-8"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#D1C4E9] rounded-full blur-2xl opacity-6"
        />
      </div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(108, 99, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(108, 99, 255, 0.1) 87.5%, rgba(108, 99, 255, 0.1)),
            linear-gradient(150deg, rgba(0, 255, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(0, 255, 255, 0.1) 87.5%, rgba(0, 255, 255, 0.1)),
            linear-gradient(30deg, rgba(108, 99, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(108, 99, 255, 0.1) 87.5%, rgba(108, 99, 255, 0.1)),
            linear-gradient(150deg, rgba(0, 255, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(0, 255, 255, 0.1) 87.5%, rgba(0, 255, 255, 0.1))
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-animate inline-block px-4 py-2 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/20">
                <span className="underline decoration-primary">About</span>
                {' '}
                <span className="underline decoration-primary">Me</span>
              </span>
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
                  className="text-center p-4 rounded-xl"
                  style={{
                    background: 'rgba(108, 99, 255, 0.05)',
                    boxShadow: '0 0 20px rgba(108, 99, 255, 0.08), inset 0 0 20px rgba(108, 99, 255, 0.03)'
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      y: [0, -8, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8
                    }}
                    className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-purple-blue flex items-center justify-center"
                    style={{
                      boxShadow: '0 0 10px rgba(108, 99, 255, 0.2), 0 0 20px rgba(108, 99, 255, 0.1)'
                    }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
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
              className="relative rounded-3xl overflow-hidden glass-premium p-6 max-w-lg mx-auto"
            >
              <div className="aspect-square rounded-2xl overflow-hidden glow-purple">
                <img 
                  src={aboutImage} 
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
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
