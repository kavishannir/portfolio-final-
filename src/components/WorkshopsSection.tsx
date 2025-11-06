import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const WorkshopsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const workshops = [
    {
      title: "Salesforce Developer Workshop",
      organizer: "Salesforce Community",
      date: "March 2024",
      location: "Colombo, Sri Lanka",
      attendees: "50+",
      description: "Comprehensive workshop on Lightning Web Components and Apex development best practices.",
      side: "left",
    },
    {
      title: "Docker & Kubernetes Bootcamp",
      organizer: "Linux Foundation",
      date: "January 2024",
      location: "Online",
      attendees: "200+",
      description: "Intensive training on containerization, orchestration, and cloud-native application deployment.",
      side: "right",
    },
    {
      title: "React Advanced Patterns",
      organizer: "Tech Meetup Sri Lanka",
      date: "November 2023",
      location: "Kandy, Sri Lanka",
      attendees: "75+",
      description: "Deep dive into React performance optimization, custom hooks, and modern state management.",
      side: "left",
    },
    {
      title: "DevOps & CI/CD Pipeline",
      organizer: "Cloud Academy",
      date: "September 2023",
      location: "Online",
      attendees: "150+",
      description: "Hands-on workshop covering Jenkins, GitLab CI, and automated deployment strategies.",
      side: "right",
    },
  ];

  return (
    <section id="workshops" ref={ref} className="min-h-screen py-20 relative overflow-hidden gradient-blur-blue">
      <div className="floating-orb w-96 h-96 bg-accent top-40 right-20 opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-animate">Workshops & Events</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Continuous learning through community engagement
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-16">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, x: workshop.side === "left" ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center ${
                  workshop.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${workshop.side === "left" ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, x: workshop.side === "left" ? 10 : -10 }}
                    className="glass-premium rounded-2xl p-6 glow-hover"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-purple-blue flex items-center justify-center glow-purple">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{workshop.title}</h3>
                        <p className="text-sm text-primary">{workshop.organizer}</p>
                      </div>
                    </div>

                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {workshop.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-secondary" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-secondary" />
                        <span>{workshop.attendees} Participants</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-purple-blue border-4 border-background glow-purple" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
