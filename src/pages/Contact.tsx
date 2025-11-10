import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate email sending (replace with EmailJS integration)
    setTimeout(() => {
      toast({
        title: "Message Sent! ✉️",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kavishan@example.com",
      link: "mailto:kavishan@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0741607240",
      link: "tel:+94741607240",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "JAFFNA, SriLanka",
      link: null,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 gradient-blur-navy relative">
        {/* Floating gradient orbs - Smaller on mobile */}
        <div className="floating-orb w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary top-10 left-4 sm:top-20 sm:left-20 opacity-50 sm:opacity-100" style={{ animationDelay: '1s' }} />
        <div className="floating-orb w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-accent bottom-10 right-4 sm:bottom-20 sm:right-20 opacity-50 sm:opacity-100" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              <span className="text-gradient-animate">Let's Connect</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Have a project in mind? Let's create something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-premium rounded-2xl p-4 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-secondary border-border focus:border-primary text-black font-bold text-sm sm:text-base"
                    style={{ fontWeight: 500 }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-secondary border-border focus:border-primary text-black font-bold text-sm sm:text-base"
                    style={{ fontWeight: 500 }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="bg-secondary border-border focus:border-primary min-h-[120px] sm:min-h-[150px] text-black font-bold text-sm sm:text-base"
                    style={{ fontWeight: 500 }}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground glow-purple hover:scale-105 transition-transform"
                  size="lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2">⏳</span> Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info & CTA */}
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-premium rounded-2xl p-4 sm:p-6 md:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Contact Information</h2>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start space-x-3 sm:space-x-4"
                      >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-purple-blue flex items-center justify-center flex-shrink-0 glow-purple">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-sm sm:text-base text-foreground font-medium hover:text-primary transition-colors break-words"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm sm:text-base text-foreground font-medium break-words">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

{/* Download CV */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-premium rounded-2xl p-4 sm:p-6 md:p-8 text-center"
              >
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Interested in my work?</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Download my CV to learn more about my experience and qualifications.
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-accent text-primary-foreground glow-gold-hover w-full"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </motion.div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="glass-premium rounded-2xl p-4 sm:p-5 md:p-6 border border-primary/30"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-glow-pulse" />
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm sm:text-base font-semibold text-foreground">Available for opportunities</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Open to freelance projects and full-time roles</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
