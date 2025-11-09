import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { GraduationCap, Trophy, Medal, Award } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import stpLogo from "../images stp.jpg";
import stJohnsLogo from "../st johns.jpg";
import sliitLogo from "../1683543978063.jpg";
import platformDeveloperCert from "../platform developer.jpeg";
import hackforceCert from "../hackforce.jpeg";
// import journeyToSalesforceCert from "../journey to salesforce.jpeg"; // File not found - using placeholder
import ukiCert from "../uki.jpeg";
import salesForceAICert from "../sales force ai.jpeg";
import libraryCert from "../library.jpeg";
import cyberSecurityCert from "../cyber security.jpeg";
import growingUpVideo from "../growing-up.mp4";

const FloatingTrophies = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[0.6, 32, 32]} position={[-2, 1, 0]}>
          <MeshDistortMaterial color="#6C63FF" distort={0.4} speed={2} />
        </Sphere>
      </Float>
      <Float speed={3} rotationIntensity={2} floatIntensity={3}>
        <Sphere args={[0.4, 32, 32]} position={[2, -1, 0]}>
          <MeshDistortMaterial color="#00FFFF" distort={0.5} speed={3} />
        </Sphere>
      </Float>
    </>
  );
};

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const isVideoInView = useInView(videoContainerRef, { once: false, amount: 0.5 });

  useEffect(() => {
    if (isVideoInView && videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented, which is normal in some browsers
        console.log("Autoplay prevented:", error);
      });
    } else if (!isVideoInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isVideoInView]);

  const education = [
    {
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      qualification: "Higher National Diploma in Information Technology",
      duration: "2024 - 2025",
      description: "Comprehensive IT program covering software development, database management, web technologies, and system analysis.",
      subjects: [
        "Advanced Programming",
        "Database Design",
        "Web Development",
        "Software Engineering",
        "Network Administration",
      ],
      achievements: [
         "Best Final Year Project ",
      ],
      logoImage: sliitLogo,
    },
    {
      institution: "ST. JOHN'S COLLEGE",
      qualification: "Grade 10-Advanced Level - Maths Stream",
      duration: "2018 - 2020",
      description: "Focused on Mathematics, Physics, and Chemistry with strong analytical foundation.",
      subjects: ["Combined Mathematics", "Physics", "Chemistry", "ICT"],
      achievements: ["Swimming Champion (Inter-House Competitions)", "Awarded Honours for academic performance"],
      logoImage: stJohnsLogo,
    },
    {
      institution: "ST. PETER'S COLLEGE",
      qualification: "Grades: 1 – 9",
      duration: "2007 - 2016",
      description: "Foundation studies in core subjects with excellence in Mathematics, Science, and Information Technology.",
      subjects: ["Mathematics", "Science", "Information Technology", "English", "Sinhala"],
      achievements: ["Distinguished results in Mathematics and IT", "erved as School Prefect for the section"],
      logoImage: stpLogo,
    },
  ];

  const achievements = [
    {
      title: "Salesforce Platform Foundation",
      issuer: "Salesforce",
      year: "2025",
      icon: Trophy,
      color: "from-[#00A1E0] to-[#0070D2]",
      image: platformDeveloperCert,
    },
    {
      title: "Hackforce finalist",
      issuer: "Salesforce Ohana",
      year: "2025",
      icon: Award,
      color: "from-[#FF9900] to-[#EC7211]",
      image: hackforceCert,
    },
    {
      title: "Journey To Salesforce",
      issuer: "SalesforceOhana",
      year: "2025",
      icon: Medal,
      color: "from-[#2496ED] to-[#0DB7ED]",
      image: hackforceCert, // Using hackforceCert as placeholder until journey to salesforce image is available
    },
    {
      title: "UKI Inovation",
      issuer: "UKI Educations",
      year: "2025",
      icon: Trophy,
      color: "from-[#6C63FF] to-[#00FFFF]",
      image: ukiCert,
    },
    {
      title: "AI Associate",
      issuer: "Salesforce",
      year: "2024",
      icon: Award,
      color: "from-[#6C63FF] to-[#00FFFF]",
      image: salesForceAICert,
    },
    {
      title: "E-library USA",
      issuer: "American Spaces",
      year: "2025",
      icon: Medal,
      color: "from-[#6C63FF] to-[#00FFFF]",
      image: libraryCert,
    },
    {
      title: "Interduction to Cybersecurity",
      issuer: "CISCO",
      year: "2025",
      icon: Trophy,
      color: "from-[#6C63FF] to-[#00FFFF]",
      image: cyberSecurityCert,
    },
  ];

  return (
    <section 
      id="education" 
      ref={ref} 
      className="min-h-screen py-12 sm:py-16 md:py-20 relative overflow-visible sm:overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(108, 99, 255, 0.05) 0%, rgba(0, 255, 255, 0.05) 50%, rgba(108, 99, 255, 0.05) 100%)',
      }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <FloatingTrophies />
        </Canvas>
      </div>

      {/* Gradient beams */}
      <div className="absolute inset-0 -z-10 neon-beam opacity-20" />
      <div className="floating-orb w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary top-10 right-4 sm:top-20 sm:right-10 opacity-20" />
      <div className="floating-orb w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-secondary bottom-10 left-4 sm:bottom-20 sm:left-10 opacity-20" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-gradient-animate">
              <span className="underline decoration-primary">Education</span>
              {' & '}
              <span className="underline decoration-primary">Achievements</span>
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4">
            Academic journey and professional milestones
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-8 sm:mb-10 md:mb-12 inline-block"
          >
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg border-2 border-primary/40 relative"
              style={{
                boxShadow: '0 0 15px rgba(108, 99, 255, 0.3), inset 0 0 15px rgba(108, 99, 255, 0.1)',
                background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(108, 99, 255, 0.05))',
              }}
            >
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
              <span className="text-gradient-animate text-sm sm:text-base md:text-lg">Academic Background</span>
            </motion.h3>
          </motion.div>
          
          {/* Connecting Timeline Line - Positioned to connect all items */}
          <div className="absolute left-4 sm:left-6 md:left-8 lg:left-12 top-16 sm:top-20 bottom-4 w-0.5">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-b from-[#6C63FF] via-[#00FFFF] to-[#6C63FF] opacity-70"
              style={{ transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-6 sm:space-y-8 ml-8 sm:ml-10 md:ml-12 lg:ml-16 relative z-10">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ x: 10 }}
                className="glass-premium rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 glow-hover relative"
              >
                {/* Horizontal Connector Line from card to timeline */}
                <div 
                  className="absolute top-8 sm:top-10 h-0.5 bg-gradient-to-r from-[#6C63FF]/70 to-[#00FFFF]/70 opacity-70 z-5"
                  style={{
                    left: '-0.75rem',
                    width: '0.75rem',
                  }}
                />
                
                {/* Connection Node on timeline */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, type: "spring", stiffness: 200 }}
                  className="absolute top-8 sm:top-10 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] border-2 sm:border-4 border-background z-10 shadow-lg shadow-[#6C63FF]/60"
                  style={{ 
                    left: '-0.75rem',
                    transform: 'translateX(-50%)',
                  }}
                />
                
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-purple-blue flex items-center justify-center flex-shrink-0 glow-purple overflow-hidden"
                  >
                    {edu.logoImage ? (
                      <img 
                        src={edu.logoImage} 
                        alt={edu.institution}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    )}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 break-words">{edu.qualification}</h3>
                    <p className="text-base sm:text-lg text-primary font-semibold mb-1 break-words">{edu.institution}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{edu.duration}</p>

                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-secondary mb-2">Key Subjects:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-3 py-1 glass-card rounded-lg text-sm border border-secondary/30"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-secondary mb-2">Notable Achievements:</p>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                            <span className="text-primary mt-1">✦</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="mb-8 inline-block"
          >
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg border-2 border-primary/40 relative"
              style={{
                boxShadow: '0 0 15px rgba(108, 99, 255, 0.3), inset 0 0 15px rgba(108, 99, 255, 0.1)',
                background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(108, 99, 255, 0.05))',
              }}
            >
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-primary" />
              <span className="text-gradient-animate text-sm sm:text-base md:text-lg">Certifications & Awards</span>
            </motion.h3>
          </motion.div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="glass-premium rounded-xl sm:rounded-2xl p-3 sm:p-4 glow-hover"
              >
                {/* Certificate Image Area - Same as Projects */}
                <div className="aspect-video bg-gradient-purple-blue rounded-xl mb-3 flex items-center justify-center overflow-hidden relative">
                  {achievement.image ? (
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-contain scale-110"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className={`w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2`}
                      >
                        <achievement.icon className="w-10 h-10 text-white" />
                      </motion.div>
                    <p className="text-xs text-white/40">Certificate Image</p>
                  </div>
                )}
              </div>
                
                <h4 className="text-sm sm:text-base md:text-lg font-bold mb-1 break-words">{achievement.title}</h4>
                <p className="text-xs text-foreground/70 mb-1 break-words">{achievement.issuer}</p>
                <p className="text-xs text-primary font-semibold">{achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Growing-Up Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 mb-10"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <span className="text-gradient-animate">Growing Up</span>
          </motion.h3>
          <div className="flex justify-center">
            <motion.div
              className="glass-premium rounded-2xl p-4 max-w-4xl w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div ref={videoContainerRef} className="aspect-video rounded-xl overflow-hidden relative">
                <video
                  ref={videoRef}
                  src={growingUpVideo}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{
                    boxShadow: '0 0 30px rgba(108, 99, 255, 0.3), 0 0 60px rgba(108, 99, 255, 0.15)',
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

