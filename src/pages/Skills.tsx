import { motion } from "framer-motion";
import { Code, Database, Cloud, Wrench, Users, Brain } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "Apex"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Web Development",
      icon: Database,
      skills: ["React", "Node.js", "HTML/CSS", "Tailwind CSS", "REST APIs"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Salesforce",
      icon: Cloud,
      skills: ["Lightning", "Flow Builder", "Apex", "SOQL", "Platform Events"],
      color: "from-primary to-accent",
    },
    {
      title: "DevOps Tools",
      icon: Wrench,
      skills: ["Docker", "Git", "CI/CD", "Linux", "AWS Basics"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Collaboration", "Problem Solving", "Communication", "Agile", "Leadership"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Other Skills",
      icon: Brain,
      skills: ["AI Integration", "Data Analysis", "UI/UX Design", "Testing", "Documentation"],
      color: "from-indigo-500 to-violet-500",
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
              <span className="text-gradient">My Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="glass rounded-2xl p-6 glow-gold-hover"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="px-3 py-1.5 bg-secondary rounded-lg text-sm font-medium text-foreground border border-border hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Proficiency Levels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gradient mb-8 text-center">Proficiency Levels</h3>
            <div className="space-y-6">
              {[
                { skill: "React & Modern JavaScript", level: 90 },
                { skill: "Salesforce Development", level: 85 },
                { skill: "Backend Development", level: 75 },
                { skill: "DevOps & Cloud", level: 70 },
                { skill: "UI/UX Design", level: 80 },
              ].map((item, index) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-primary font-semibold">{item.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full glow-gold"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
