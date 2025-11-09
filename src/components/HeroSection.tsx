import { motion, useAnimation } from "framer-motion";
import { ChevronDown, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../WhatsApp Image 2025-10-16 at 2.14.37 PM.jpeg";

const ShiningParticles = () => {
  const colors = ['#6C63FF', '#00FFFF', '#D1C4E9', '#FFFFFF'];
  // Create more particles and bias towards purple
  const particles = Array.from({ length: 80 }, (_, i) => {
    // Bias color selection: 60% purple, 20% cyan, 15% lavender, 5% white
    const rand = Math.random();
    let colorIndex;
    if (rand < 0.6) {
      colorIndex = 0; // Purple
    } else if (rand < 0.8) {
      colorIndex = 1; // Cyan
    } else if (rand < 0.95) {
      colorIndex = 2; // Lavender
    } else {
      colorIndex = 3; // White
    }
    const moveX = (Math.random() - 0.5) * 40;
    const moveY = (Math.random() - 0.5) * 40;
    return {
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 50,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 3,
      color: colors[colorIndex],
      moveX,
      moveY,
    };
  });

  return (
    <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden pointer-events-none -z-[5]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            animation: `shine-${particle.id} ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <style>{`
        ${particles.map((particle) => `
          @keyframes shine-${particle.id} {
            0%, 100% {
              opacity: 0.3;
              transform: translate(0, 0) scale(1);
            }
            25% {
              opacity: 1;
              transform: translate(${particle.moveX * 0.5}px, ${particle.moveY * 0.5}px) scale(1.2);
            }
            50% {
              opacity: 0.6;
              transform: translate(${particle.moveX}px, ${particle.moveY}px) scale(0.8);
            }
            75% {
              opacity: 1;
              transform: translate(${particle.moveX * 0.75}px, ${particle.moveY * 0.75}px) scale(1.1);
            }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

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
    // Set initial values for image
    imageControls.set({ opacity: 0, scale: 0.8 });
    textControls.set({ x: "0%" });
    
    // Trigger animation after 2 seconds
    const timer = setTimeout(() => {
      setAnimationTriggered(true);
      textControls.start({
        x: "-5%",
        transition: { duration: 1, ease: "easeInOut" }
      });
      imageControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" }
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [textControls, imageControls]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Shining Particles in Upper Background */}
      <ShiningParticles />
      
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

      {/* Profile Image - Responsive positioning - Hidden on very small screens, shown from sm up */}
      <motion.div
        animate={imageControls}
        className="hidden sm:block absolute right-4 top-20 sm:right-8 sm:top-24 md:right-12 md:top-28 lg:right-20 lg:top-32 z-20"
      >
        <div className="relative group">
          <img
            src={profileImage}
            alt="Kavishan Profile"
            className="w-32 h-40 sm:w-40 sm:h-48 md:w-60 md:h-72 lg:w-[18rem] lg:h-[22rem] xl:w-[22rem] xl:h-[26rem] object-cover relative z-10 rounded-2xl sm:rounded-3xl brightness-90 border-2 sm:border-4 md:border-[6px] border-[#6C63FF]"
            style={{
              boxShadow: '0 0 10px rgba(108, 99, 255, 0.4), 0 0 80px rgba(108, 99, 255, 0.3), 0 0 120px rgba(108, 99, 255, 0.2)',
            }}
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50, x: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={textControls}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6"
            >
              <div className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-xl bg-[#6C63FF]/20 border border-[#6C63FF]/40">
                <span 
                  className="text-gradient-animate"
                  style={{
                    color: '#E0D9FF',
                    letterSpacing: '0.05em'
                  }}
                >
                  Hi, I'm Kavishan
                </span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-muted-foreground mb-3 sm:mb-4 flex flex-wrap gap-1 sm:gap-2"
            >
              <span className="border-b-2 border-[#6C63FF]">Developer</span>
              <span className="hidden sm:inline">{' | '}</span>
              <span className="border-b-2 border-[#6C63FF]">Salesforce Enthusiast</span>
              <span className="hidden sm:inline">{' | '}</span>
              <span className="border-b-2 border-[#6C63FF]">DevOps Learner</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-4 sm:mb-6 md:mb-8"
            >
              <span 
                className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-[#E0D9FF]"
                style={{
                  background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.15), rgba(108, 99, 255, 0.1))',
                  border: '2px solid rgba(108, 99, 255, 0.4)',
                  boxShadow: '0 0 15px rgba(108, 99, 255, 0.3), 0 0 30px rgba(108, 99, 255, 0.15), inset 0 0 20px rgba(108, 99, 255, 0.1)',
                }}
              >
                "Your Competitors Hope You Don't Hire Me.!!!"
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-2 sm:gap-3 md:gap-4 justify-start items-center mb-6 sm:mb-8 md:mb-12 flex-wrap"
            >
              <a
                href="https://github.com/kavishannir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center glow-hover"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kavishan-krishan-243a83300"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center glow-hover"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://x.com/kavisha29512457?t=AK_B9S8ndFBByaQpVkPcxw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center glow-hover"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center glow-hover"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-3 sm:gap-4 justify-start flex-wrap"
            >
              <Link
                to="/contact"
                className="px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 bg-primary text-primary-foreground rounded-full text-sm sm:text-base font-semibold glow-purple hover:scale-105 transition-transform"
              >
                Get In Touch
              </Link>
              <a
                href="/cv.pdf"
                download
                className="px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 glass-card rounded-full text-sm sm:text-base font-semibold glow-hover"
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
          className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground">Scroll Down</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
