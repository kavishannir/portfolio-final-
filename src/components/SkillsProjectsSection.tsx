import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const SkillsProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "Salesforce",
      category: "Platform",
      projects: ["Event Management App", "Lead Generation System"],
      color: "from-[#00A1E0] to-[#0070D2]",
    },
    {
      name: "React",
      category: "Frontend",
      projects: ["Portfolio Website", "Task Manager"],
      color: "from-[#61DAFB] to-[#21A1C4]",
    },
    {
      name: "Docker",
      category: "DevOps",
      projects: ["Containerized Apps", "CI/CD Pipeline"],
      color: "from-[#2496ED] to-[#0DB7ED]",
    },
    {
      name: "Node.js",
      category: "Backend",
      projects: ["REST API", "Real-time Chat"],
      color: "from-[#68A063] to-[#43853D]",
    },
    {
      name: "TypeScript",
      category: "Language",
      projects: ["Type-safe Apps", "API Client"],
      color: "from-[#3178C6] to-[#235A97]",
    },
    {
      name: "Python",
      category: "Language",
      projects: ["Data Analysis", "Automation Scripts"],
      color: "from-[#3776AB] to-[#FFD43B]",
    },
  ];

  const projects = [
    {
      title: "Event Management System",
      description: "Comprehensive Salesforce application for managing events, registrations, and attendee tracking.",
      tech: ["Salesforce", "Apex", "Lightning"],
      github: "#",
      demo: "#",
    },
    {
      title: "Shipment Management",
      description: "Real-time tracking system for shipments with automated notifications and analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Android Flag Quiz",
      description: "Interactive mobile quiz game with gamification elements and leaderboard system.",
      tech: ["Android", "Java", "Firebase"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="skills-projects" ref={ref} className="min-h-screen py-20 relative overflow-hidden gradient-blur-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-animate">Skills & Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Click on a skill to see related projects
          </p>
        </motion.div>

        {/* Skills Graph */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                className={`relative cursor-pointer`}
              >
                <div className={`glass-premium rounded-2xl p-6 text-center glow-hover ${
                  selectedSkill === skill.name ? 'ring-2 ring-primary' : ''
                }`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl font-bold text-white`}>
                    {skill.name.charAt(0)}
                  </div>
                  <h3 className="font-bold mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                  
                  {/* Connection lines */}
                  {selectedSkill === skill.name && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-2 left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Related Projects */}
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 glass-card rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-4">
                Projects using {selectedSkill}:
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.find(s => s.name === selectedSkill)?.projects.map((project) => (
                  <span
                    key={project}
                    className="px-4 py-2 bg-secondary/20 border border-secondary rounded-lg text-sm"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Featured Projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-gradient"
        >
          Featured Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass-premium rounded-2xl p-6 glow-hover"
            >
              <div className="aspect-video bg-gradient-purple-blue rounded-xl mb-4 flex items-center justify-center text-6xl font-bold text-white/20">
                {project.title.charAt(0)}
              </div>
              
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 glass-card rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsProjectsSection;
