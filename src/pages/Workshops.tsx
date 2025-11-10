import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import GlassCubesGallery from "@/components/GlassCubesGallery";
import week1Image from "../week1-1.jpeg";
import week2Image from "../week2-2.jpeg";
import week3Image from "../123kavi.jpeg";
import week4Image from "../WhatsApp Image 2025-10-13 at 8.35.40 PM.jpeg";
import week6Image from "../week6 (1).jpeg";
import week7Image from "../week7 (1).jpeg";
import week8Image from "../week8 (1).jpeg";
import week9Image from "../week9 (1).jpeg";
import week10Image from "../week10 (1).jpeg";
import week11Image from "../week11 (1).jpeg";

const Workshops = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const workshops = [
    {
      id: "w1",
      title: "Professional Skills",
      organizer: "SLIIT",
      date: " 2025",
      location: "Colombo, Sri Lanka",
      attendees: "full",
      description: "Learned how to develop core abilities like communication, teamwork, and time management needed for workplace success.",
      color: "#00A1E0",
      image: week1Image,
    },
    {
      id: "w2",
      title: "employbility skills",
      organizer: "SLIIT",
      date: " 2025",
      location: "Online",
      attendees: "full",
      description: "Understood what makes a candidate job-ready — including adaptability, problem-solving, and presentation skills..",
      color: "#2496ED",
      image: week2Image,
    },
    {
      id: "w3",
      title: "Mock interview",
      organizer: "Tech Meetup Sri Lanka",
      date: "2025",
      location: "Kandy, Sri Lanka",
      attendees:"full",
      description: "Learned the importance of positive attitude, ethics, and personal integrity in shaping professional behavior..",
      color: "#61DAFB",
      image: week3Image,
    },
    {
      id: "w4",
      title: "CV writinge",
      organizer: "Cloud Academy",
      date: " 2025",
      location: "Online",
      attendees: "full",
      description: "Gained knowledge on creating a well-structured, attractive CV that highlights strengths and achievements.",
      color: "#6C63FF",
      image: week4Image,
    },
    {
      id: "w5",
      title: "Interview manners (good and bad)",
      organizer: "JavaScript Community",
      date: " 2025",
      location: "Jaffna, Sri Lanka",
      attendees:"full",
      description: "Gained knowledge on creating a well-structured, attractive CV that highlights strengths and achievements.",
      color: "#3178C6",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
    },
    {
      id: "w6",
      title: "Portfolio",
      organizer: "Backend Developers",
      date: " 2025",
      location: "Colombo, Sri Lanka",
      attendees: "full",
      description: "Learned how to design a professional portfolio that showcases skills, certificates, and personal projects.",
      color: "#68A063",
      image: week6Image,
    },
    {
      id: "w7",
      title: "Meeting and speaking skis",
      organizer: "AWS User Group",
      date: "2025",
      location: "Online",
      attendees: "full",
      description: "Improved confidence in public speaking and learned how to communicate ideas effectively during meetings.",
      color: "#FF9900",
      image: week7Image,
    },
    {
      id: "w8",
      title: "Email writing etiquttes",
      organizer: "Mobile Developers",
      date: " 2025",
      location: "Kandy, Sri Lanka",
      attendees:"full",
      description: "Learned to prepare clear and convincing proposals with proper structure, purpose, and persuasive language.",
      color: "#61DAFB",
      image: week8Image,
    },
    {
      id: "w9",
      title: "Proposal writing",
      organizer: "Database Experts",
      date: " 2025",
      location: "Online",
      attendees: "full",
      description: "Optimize database queries, indexing strategies, and learn NoSQL database fundamentals.",
      color: "#00FFFF",
      image: week9Image,
    },
    {
      id: "w10",
      title: "Team and leadership",
      organizer: "AI Research Lab",
      date: " 2025",
      location: "Colombo, Sri Lanka",
      attendees: "full",
      description: "Explored how to collaborate effectively, take initiative, and motivate others in group environments.",
      color: "#FF6B6B",
      image: week10Image,
    },
    {
      id: "w11",
      title: "Emotional intelligence",
      organizer: "Security Professionals",
      date: " 2025",
      location: "Online",
      attendees:"full",
      description: "Learned to manage emotions, show empathy, and build better interpersonal relationships in professional settings",
      color: "#9D4EDD",
      image: week11Image,
    },
  ];

  return (
    <PageTransition>
      <section id="workshops" ref={ref} className="min-h-screen py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient-animate">Workshops & Events</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Continuous learning through community engagement
            </p>
          </motion.div>

          {/* Floating Glass Cubes Gallery */}
          <GlassCubesGallery workshops={workshops} />
        </div>
      </section>
    </PageTransition>
  );
};

export default Workshops;
