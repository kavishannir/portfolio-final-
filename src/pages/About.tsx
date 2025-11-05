import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const About = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-[#0077B5]" },
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-foreground" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-[#1DA1F2]" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-primary text-lg font-semibold mb-2">Hello, I'm</h2>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="text-gradient">Kavishan</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Developer | Salesforce Enthusiast | DevOps Learner
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-foreground/80 text-lg leading-relaxed"
              >
                Passionate full-stack developer with a strong focus on Salesforce development and modern web technologies. 
                I specialize in creating innovative solutions that bridge cloud platforms with cutting-edge frontend frameworks. 
                Currently expanding my expertise in DevOps practices and cloud infrastructure.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-accent text-primary-foreground glow-gold-hover group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download CV
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-4 pt-4"
              >
                <span className="text-muted-foreground">Connect with me:</span>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-secondary transition-all ${social.color} glow-gold-hover`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary glow-gold relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                    alt="Kavishan - Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/30 rounded-full blur-xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20 grid md:grid-cols-3 gap-8"
          >
            {[
              { number: "5+", label: "Projects Completed" },
              { number: "10+", label: "Workshops Attended" },
              { number: "3+", label: "Certifications" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="glass rounded-2xl p-8 text-center glow-gold-hover"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
