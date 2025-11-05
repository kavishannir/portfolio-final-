import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const Projects = () => {
  const projects = [
    {
      title: "Event Management App",
      description: "A comprehensive Salesforce application for managing corporate events with real-time updates and automated workflows.",
      tech: ["Salesforce", "Lightning", "Apex", "Flow"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Android Flag Quiz Game",
      description: "Interactive mobile game built with Android Studio featuring multiple quiz modes and progressive difficulty levels.",
      tech: ["Java", "Android", "SQLite", "Material Design"],
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Shipment Management System",
      description: "Full-stack web application for tracking and managing shipments with real-time status updates and analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio featuring 3D elements, smooth animations, and interactive knowledge graph visualization.",
      tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">My Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work spanning web development, Salesforce solutions, and mobile applications
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-background/90 rounded-lg backdrop-blur-sm glow-gold-hover"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-background/90 rounded-lg backdrop-blur-sm glow-gold-hover"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary rounded-lg text-sm font-medium border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-accent text-primary-foreground flex-1 glow-gold-hover"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
