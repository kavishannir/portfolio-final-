import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, Medal } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

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

const EducationAchievements = () => {
  const education = [
    {
      institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
      qualification: "Higher National Diploma in Information Technology",
      duration: "2020 - 2023",
      description: "Comprehensive IT program covering software development, database management, web technologies, and system analysis.",
      subjects: [
        "Advanced Programming",
        "Database Design",
        "Web Development",
        "Software Engineering",
        "Network Administration",
      ],
      achievements: [
        "Top 10% of graduating class",
        "Best Final Year Project Award",
        "Dean's List - All semesters",
      ],
    },
    {
      institution: "Advanced Level - Science Stream",
      qualification: "G.C.E. Advanced Level",
      duration: "2018 - 2020",
      description: "Focused on Mathematics, Physics, and Chemistry with strong analytical foundation.",
      subjects: ["Combined Mathematics", "Physics", "Chemistry", "ICT"],
      achievements: ["District Rank in ICT", "School Colors for Academic Excellence"],
    },
  ];

  const achievements = [
    {
      title: "Salesforce Platform Developer I",
      issuer: "Salesforce",
      year: "2024",
      icon: Trophy,
      color: "from-[#00A1E0] to-[#0070D2]",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: Award,
      color: "from-[#FF9900] to-[#EC7211]",
    },
    {
      title: "Docker & Kubernetes Essentials",
      issuer: "Linux Foundation",
      year: "2023",
      icon: Medal,
      color: "from-[#2496ED] to-[#0DB7ED]",
    },
    {
      title: "Best Final Year Project",
      issuer: "SLIATE",
      year: "2023",
      icon: Trophy,
      color: "from-[#6C63FF] to-[#00FFFF]",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-16 relative">
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
        <div className="floating-orb w-96 h-96 bg-primary top-20 right-10 opacity-20" />
        <div className="floating-orb w-80 h-80 bg-secondary bottom-20 left-10 opacity-20" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient-animate">Education & Achievements</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Academic journey and professional milestones
            </p>
          </motion.div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8" />
              Academic Background
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                  className="glass-premium rounded-2xl p-8 glow-hover"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-purple-blue flex items-center justify-center flex-shrink-0 glow-purple">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{edu.qualification}</h3>
                      <p className="text-lg text-primary font-semibold mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-4">{edu.duration}</p>

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
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Trophy className="w-8 h-8" />
              Certifications & Awards
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className="glass-premium rounded-2xl p-6 text-center glow-hover"
                >
                  <motion.div
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center glow-purple`}
                  >
                    <achievement.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{achievement.issuer}</p>
                  <p className="text-sm text-primary font-semibold">{achievement.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default EducationAchievements;
