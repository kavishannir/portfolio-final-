import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Salesforce Developer",
      duration: "2023 - Present",
      description: "Leading Salesforce development initiatives, creating custom Lightning components, and implementing automated workflows using Flow Builder and Apex triggers.",
      achievements: [
        "Developed 5+ Lightning web components improving user productivity by 40%",
        "Implemented automated workflows reducing manual tasks by 60%",
        "Mentored junior developers on Salesforce best practices",
      ],
    },
    {
      company: "Digital Innovations Ltd.",
      role: "Full-Stack Developer Intern",
      duration: "2022 - 2023",
      description: "Contributed to web application development using React and Node.js, collaborated with cross-functional teams, and participated in agile development processes.",
      achievements: [
        "Built responsive web applications serving 1000+ users",
        "Optimized database queries improving performance by 35%",
        "Participated in code reviews and sprint planning",
      ],
    },
    {
      company: "CloudTech Systems",
      role: "Junior Developer",
      duration: "2021 - 2022",
      description: "Assisted in developing and maintaining web applications, performed bug fixes, and contributed to documentation and testing efforts.",
      achievements: [
        "Resolved 50+ bug tickets with 95% success rate",
        "Created comprehensive technical documentation",
        "Collaborated with QA team for thorough testing",
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 gradient-blur-gold relative">
        {/* Floating gradient orbs */}
        <div className="floating-orb w-96 h-96 bg-accent top-24 left-10" style={{ animationDelay: '0s' }} />
        <div className="floating-orb w-80 h-80 bg-primary bottom-24 right-10" style={{ animationDelay: '2.5s' }} />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-animate">Work Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key contributions across different roles
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-gold z-10" />

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5, rotateY: 3 }}
                      className="glass-premium rounded-2xl p-6 glow-gold-hover"
                    >
                      {/* Header */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.duration}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">Key Achievements:</p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                              className="text-sm text-foreground/70 flex items-start"
                            >
                              <span className="text-primary mr-2">•</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;
