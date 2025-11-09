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

      {/* Profile Image - Right Upper Part */}
      <motion.div
        animate={imageControls}
        className="absolute right-12 top-24 md:right-20 md:top-32 z-20"
      >
        <div className="relative group">
          <img
            src={profileImage}
            alt="Kavishan Profile"
            className="w-60 h-76 md:w-[18rem] md:h-[22rem] lg:w-[22rem] lg:h-[26rem] object-cover relative z-10 rounded-3xl brightness-90 border-[6px] border-[#6C63FF]"
            style={{
              boxShadow: '0 0 10px rgba(108, 99, 255, 0.4), 0 0 80px rgba(108, 99, 255, 0.3), 0 0 120px rgba(108, 99, 255, 0.2)',
            }}
          />
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
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <div className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-xl bg-[#6C63FF]/20 border border-[#6C63FF]/40">
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
              className="text-lg md:text-2xl lg:text-3xl text-muted-foreground mb-4"
            >
              <span className="border-b-2 border-[#6C63FF]">Developer</span>
              {' | '}
              <span className="border-b-2 border-[#6C63FF]">Salesforce Enthusiast</span>
              {' | '}
              <span className="border-b-2 border-[#6C63FF]">DevOps Learner</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8"
            >
              <span 
                className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg lg:text-xl font-medium text-[#E0D9FF]"
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
              className="flex gap-4 justify-start items-center mb-12"
            >
              <a
                href="https://github.com/kavishannir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center glow-hover"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kavishan-krishan-243a83300"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center glow-hover"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/kavisha29512457?t=AK_B9S8ndFBByaQpVkPcxw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center glow-hover"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center glow-hover"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-4 justify-start flex-wrap"
            >
              <Link
                to="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold glow-purple hover:scale-105 transition-transform"
              >
                Get In Touch
              </Link>
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
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-base md:text-lg font-bold text-muted-foreground">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
