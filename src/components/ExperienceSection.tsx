import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      company: "Tech Solutions Ltd",
      role: "Salesforce Developer",
      duration: "2023 - Present",
      location: "Colombo, Sri Lanka",
      description: "Leading Salesforce implementation projects and developing custom Lightning components for enterprise clients.",
      achievements: [
        "Implemented automated workflows reducing manual processing by 60%",
        "Developed custom Lightning Web Components used across multiple departments",
        "Mentored junior developers in Apex and Salesforce best practices",
      ],
      logo: "T",
    },
    {
      company: "Digital Innovations",
      role: "Full Stack Developer",
      duration: "2021 - 2023",
      location: "Kandy, Sri Lanka",
      description: "Built responsive web applications using React, Node.js, and cloud technologies.",
      achievements: [
        "Developed REST APIs serving 10,000+ daily requests",
        "Optimized application performance resulting in 40% faster load times",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
      ],
      logo: "D",
    },
    {
      company: "StartUp Hub",
      role: "Junior Developer",
      duration: "2020 - 2021",
      location: "Remote",
      description: "Contributed to various web development projects and learned modern development practices.",
      achievements: [
        "Collaborated on 5+ client projects using React and TypeScript",
        "Wrote comprehensive unit tests achieving 85% code coverage",
        "Participated in code reviews and agile development processes",
      ],
      logo: "S",
    },
  ];

  return (
    <section id="experience" ref={ref} className="min-h-screen py-20 relative overflow-hidden">
      <div className="floating-orb w-80 h-80 bg-primary top-20 left-10 opacity-20" style={{ animationDelay: '1s' }} />
      <div className="floating-orb w-96 h-96 bg-secondary bottom-20 right-10 opacity-20" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-animate">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-8 glow-hover"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-purple-blue flex items-center justify-center text-3xl font-bold text-white glow-purple flex-shrink-0"
                  >
                    {exp.logo}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
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
                            <span>{achievement}</span>
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
