import { motion, useAnimation } from "framer-motion";
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useEffect, useState } from "react";

const FloatingIcons = () => {
  return (
    <>
      {/* Salesforce Icon - Purple Sphere */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.6, 32, 32]} position={[-3, 1, -1]}>
          <MeshDistortMaterial color="#6C63FF" distort={0.3} speed={2} emissive="#6C63FF" emissiveIntensity={0.5} />
        </Sphere>
      </Float>
      
      {/* React Icon - Blue Sphere */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[0.5, 32, 32]} position={[3, -0.5, 0]}>
          <MeshDistortMaterial color="#00FFFF" distort={0.4} speed={3} emissive="#00FFFF" emissiveIntensity={0.6} />
        </Sphere>
      </Float>
      
      {/* Java/GitHub Icon - Lavender Sphere */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5}>
        <Sphere args={[0.4, 32, 32]} position={[2, 2, -2]}>
          <MeshDistortMaterial color="#D1C4E9" distort={0.35} speed={2.5} emissive="#D1C4E9" emissiveIntensity={0.4} />
        </Sphere>
      </Float>
      
      {/* Cloud Icon - Purple Glow */}
      <Float speed={2.2} rotationIntensity={1.2} floatIntensity={1.8}>
        <Sphere args={[0.45, 32, 32]} position={[-2, -1.5, 0]}>
          <MeshDistortMaterial color="#6C63FF" distort={0.3} speed={2.2} emissive="#6C63FF" emissiveIntensity={0.5} />
        </Sphere>
      </Float>
      
      {/* Additional Tech Icon - Neon Blue */}
      <Float speed={2.8} rotationIntensity={1.3} floatIntensity={2.2}>
        <Sphere args={[0.35, 32, 32]} position={[-1, 1.5, 1]}>
          <MeshDistortMaterial color="#00FFFF" distort={0.38} speed={2.8} emissive="#00FFFF" emissiveIntensity={0.5} />
        </Sphere>
      </Float>
    </>
  );
};

const HeroSection = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    // Trigger animation after 4 seconds
    const timer = setTimeout(() => {
      setAnimationTriggered(true);
      textControls.start({
        x: "25%",
        transition: { duration: 1, ease: "easeInOut" }
      });
      imageControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" }
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, [textControls, imageControls]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background with Glowing Icons */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#6C63FF" />
          <pointLight position={[-10, -10, 5]} intensity={1} color="#00FFFF" />
          <spotLight position={[0, 10, 0]} intensity={0.8} color="#D1C4E9" angle={0.3} />
          <FloatingIcons />
        </Canvas>
      </div>

      {/* Profile Image - Left Upper Part */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={imageControls}
        className="absolute left-8 top-24 md:left-16 md:top-32 z-20"
      >
        <div className="relative group">
          {/* Glass effect container */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden glass-premium glow-purple">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Kavishan Profile"
              className="w-full h-full object-cover relative z-10"
            />
            {/* 3D Glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10" />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, x: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={textControls}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-gradient-animate">Hi, I'm Kavishan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-2xl lg:text-3xl text-muted-foreground mb-8"
            >
              Developer | Salesforce Enthusiast | DevOps Learner
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4 justify-center md:justify-start items-center mb-12"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center glow-hover"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center glow-hover"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center glow-hover"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-4 justify-center md:justify-start flex-wrap"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold glow-purple hover:scale-105 transition-transform"
              >
                Get In Touch
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-3 glass-card rounded-full font-semibold glow-hover"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm text-muted-foreground">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
