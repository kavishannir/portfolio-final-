import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import blogImage from "../Blog.jpg";
import unnamedImage from "../unnamed (1).jpg";
import screenshotImage from "../Screenshot_1530800224.png";
import ecommerceImage from "../Screenshot 2025-11-08 153727.png";
import findYourCarImage from "../Find-your-car.jpg";
import taskManagementImage from "../189839770-7e7f9520-ec8a-4720-84e2-9f8e40f166b3.png";
import dashboardImage from "../Dashboard-1024x499.png";
import apiGatewayImage from "../Screenshot 2025-11-08 154806.png";
import fixoraImage from "../WhatsApp Image 2025-10-13 at 8.35.40 PM.jpeg";

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
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
    },
    {
      name: "React",
      category: "Frontend",
      projects: ["Portfolio Website", "Task Manager"],
      color: "from-[#61DAFB] to-[#21A1C4]",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Docker",
      category: "DevOps",
      projects: ["Containerized Apps", "CI/CD Pipeline"],
      color: "from-[#2496ED] to-[#0DB7ED]",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Node.js",
      category: "Backend",
      projects: ["REST API", "Real-time Chat"],
      color: "from-[#68A063] to-[#43853D]",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "TypeScript",
      category: "Language",
      projects: ["Type-safe Apps", "API Client"],
      color: "from-[#3178C6] to-[#235A97]",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      category: "Language",
      projects: ["Data Analysis", "Automation Scripts"],
      color: "from-[#3776AB] to-[#FFD43B]",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      category: "Language",
      projects: ["Enterprise Apps", "Android Development"],
      color: "from-[#ED8B00] to-[#F89820]",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C",
      category: "Language",
      projects: ["System Programming", "Embedded Systems"],
      color: "from-[#A8B9CC] to-[#00599C]",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      category: "Language",
      projects: ["Game Development", "Performance Apps"],
      color: "from-[#00599C] to-[#004482]",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "PHP",
      category: "Backend",
      projects: ["Web Applications", "Server Scripts"],
      color: "from-[#777BB4] to-[#4F5B93]",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "JavaScript",
      category: "Language",
      projects: ["Web Apps", "Interactive UI"],
      color: "from-[#F7DF1E] to-[#F0DB4F]",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      projects: ["Responsive Websites", "UI Components"],
      color: "from-[#7952B3] to-[#563D7C]",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
  ];

  const projects = [
    {
      title: "Event Management System",
      description: "Comprehensive Salesforce application for managing events, registrations, and attendee tracking.",
      tech: ["Salesforce", "Apex", "Lightning"],
      github: "https://trailhead.salesforce.com/content/learn/trails/become-an-agentblazer-champion",
      demo: "https://trailhead.salesforce.com/content/learn/trails/become-an-agentblazer-champion",
      image: blogImage,
    },
    {
      title: "Fixora",
      description: "Real-time tracking system for shipments with automated notifications and analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/kt-venujan/Fixora-User",
      demo: "https://github.com/kt-venujan/Fixora-User",
      image: fixoraImage,
    },
    {
      title: "Android Flag Quiz",
      description: "Interactive mobile quiz game with gamification elements and leaderboard system.",
      tech: ["Android", "Java", "Firebase"],
      github: "https://github.com/kavishannir/flaggame",
      demo: "https://github.com/kavishannir/flaggame",
      image: screenshotImage,
    },
    {
      title: "No-Stress Petroll",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      github: "https://github.com/kavishannir/No-stress-petrol",
      demo: "https://github.com/kavishannir/No-stress-petrol",
      image: ecommerceImage,
    },
    {
      title: "Hospital  Management App",
      description: "Collaborative task management application with real-time updates, notifications, and team collaboration features.",
      tech: ["React", "Python", "Docker", "Redis"],
      github: "mailto:krishankavishan221@agentforce.com",
      demo: "mailto:krishankavishan221@agentforce.com",
      image: taskManagementImage,
    },
    {
      title: "Student  Record System",
      description: "Interactive data visualization dashboard with real-time analytics, charts, and reporting capabilities.",
      tech: ["Python", "JavaScript", "Bootstrap", "MySQL"],
      github: "#",
      demo: "#",
      image: dashboardImage,
    },
    {
      title: "Car Buyer Simply",
      description: "DevOps tool for managing cloud resources, monitoring infrastructure, and automating deployments across multiple cloud providers.",
      tech: ["Docker", "Kubernetes", "Python", "AWS"],
      github: "https://github.com/kavishannir/car-project",
      demo: "https://github.com/kavishannir/car-project",
      image: findYourCarImage,
    },
    {
      title: "Figma- Moodele Design",
      description: "Microservices API gateway with authentication, rate limiting, and request routing for scalable backend architecture.",
      tech: ["Node.js", "TypeScript", "Redis", "Express"],
      github: "https://www.figma.com/design/w48RzqwAmsDYVliEoKFo7E/Login?node-id=0-1&p=f&t=1l46HFSNV0zXPIOp-0",
      demo: "https://www.figma.com/design/w48RzqwAmsDYVliEoKFo7E/Login?node-id=0-1&p=f&t=1l46HFSNV0zXPIOp-0",
      image: apiGatewayImage,
    },
  ];

  return (
    <section id="skills-projects" ref={ref} className="min-h-screen py-12 sm:py-16 md:py-20 relative overflow-visible sm:overflow-hidden gradient-blur-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-gradient-animate">
              <span className="underline decoration-primary">Skills</span>
              {' & '}
              <span className="underline decoration-primary">Projects</span>
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4">
            Click on a skill to see related projects
          </p>
        </motion.div>

        {/* Skills Graph */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                className={`relative cursor-pointer`}
              >
                {/* Frame with background glow */}
                <div className="absolute inset-0 rounded-2xl" 
                  style={{
                    background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.2), rgba(108, 99, 255, 0.1))',
                    border: '2px solid rgba(108, 99, 255, 0.4)',
                    boxShadow: '0 0 20px rgba(108, 99, 255, 0.3), inset 0 0 20px rgba(108, 99, 255, 0.1)',
                    filter: 'blur(1px)',
                  }}
                />
                
                <motion.div
                  className={`glass-premium rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center glow-hover relative z-10 ${
                    selectedSkill === skill.name ? 'ring-2 ring-primary' : ''
                  }`}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(108, 99, 255, 0)',
                      '0 0 25px rgba(108, 99, 255, 0.5), 0 0 50px rgba(108, 99, 255, 0.3), inset 0 0 30px rgba(108, 99, 255, 0.2)',
                      '0 0 0px rgba(108, 99, 255, 0)'
                    ]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.8,
                    repeatDelay: (skills.length - 1) * 0.8
                  }}
                >
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4">
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.8,
                        repeatDelay: (skills.length - 1) * 0.8
                      }}
                      style={{
                        background: 'radial-gradient(circle, rgba(108, 99, 255, 0.7) 0%, rgba(108, 99, 255, 0.3) 50%, transparent 70%)',
                        filter: 'blur(10px)',
                      }}
                    />
                    <motion.div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center p-1.5 sm:p-2 relative z-10 border-2 border-[#6C63FF]/30`}
                      animate={{
                        scale: [1, 1.15, 1],
                        y: [0, -8, 0]
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.8,
                        repeatDelay: (skills.length - 1) * 0.8
                      }}
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold mb-0.5 sm:mb-1">{skill.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{skill.category}</p>
                  
                  {/* Connection lines */}
                  {selectedSkill === skill.name && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-2 left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Featured Projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12"
        >
          <span className="text-gradient">
            <span className="underline decoration-primary">Featured</span>
            {' '}
            <span className="underline decoration-primary">Projects</span>
          </span>
        </motion.h3>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass-premium rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 glow-hover"
            >
              <div className="aspect-video bg-gradient-purple-blue rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl font-bold text-white/20">{project.title.charAt(0)}</span>
                )}
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 glass-card rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
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
