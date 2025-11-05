import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Education = () => {
  const education = [
    {
      institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
      qualification: "Higher National Diploma in Information Technology",
      duration: "2020 - 2023",
      description: "Comprehensive IT program covering software development, database management, web technologies, and system analysis.",
      subjects: [
        "Advanced Programming",
        "Database Design & Management",
        "Web Application Development",
        "Software Engineering",
        "Network Administration",
        "Project Management",
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
      description: "Focused on Mathematics, Physics, and Chemistry with strong analytical and problem-solving foundation.",
      subjects: [
        "Combined Mathematics",
        "Physics",
        "Chemistry",
        "Information & Communication Technology",
      ],
      achievements: [
        "District Rank in ICT",
        "School Colors for Academic Excellence",
      ],
    },
  ];

  const certifications = [
    {
      name: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      year: "2024",
      icon: "🏆",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️",
    },
    {
      name: "Docker & Kubernetes Essentials",
      issuer: "Linux Foundation",
      year: "2023",
      icon: "🐳",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 gradient-blur-navy relative">
        {/* Floating gradient orbs */}
        <div className="floating-orb w-80 h-80 bg-primary top-32 right-16" style={{ animationDelay: '1s' }} />
        <div className="floating-orb w-96 h-96 bg-accent bottom-32 left-16" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-animate">Education & Certifications</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic background and professional certifications
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-8">Academic Journey</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="glass-premium rounded-2xl p-6 glow-gold-hover"
                >
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">{edu.qualification}</h3>
                      <p className="text-primary font-semibold">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.duration}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Subjects */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-primary mb-2">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-3 py-1 bg-secondary rounded-lg text-sm border border-border"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Achievements:</p>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8">Professional Certifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
                  className="glass-premium rounded-2xl p-6 text-center glow-gold-hover"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl">
                    {cert.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-sm text-primary font-semibold">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;
