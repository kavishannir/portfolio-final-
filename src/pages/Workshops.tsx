import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import GlassCubesGallery from "@/components/GlassCubesGallery";
import s1Image from "../s1.jpg";
import s22Image from "../s2.jpeg";
import s3Image from "../s3.jpeg";
import s4Image from "../s4.jpeg";
import s5Image from "../s5.jpeg";
import s6Image from "../s6.jpeg";
import s7Image from "../s7.jpeg";

const Workshops = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const workshops = [
    {
      id: "w1",
      title: "Introduction to Employability Skills Development",
      organizer: " Lecturer: Ms. Vishaliney Pirath",
      date: "  1st Feb 2025",
      location: "Lecture hall, SLIIT",
      attendees: "full",
      description: "introduced the ESD module, explaining its objectives and the importance of employability skills in today’s job market.",
      color: "#00A1E0",
      image: s1Image,
    },
    {
      id: "w2",
      title: "company low & business low",
      organizer: "Resource Person: Ms. Vaishnavy Shanmuganathan ",
      date: " 202 22nd Mar 2025",
      location: "Lecture hall, SLIIT",
      attendees: "full",
      description: "The Startup Survival Kit: Contracts, IP, and Legal Structures.",
      color: "#2496ED",
      image: s22Image,
    },
    {
      id: "w3",
      title: "Selecting a Career Path'",
      organizer: "Resource Person: Mr. Gajarthan Thevarajah (CEO, Bohar Solutions)",
      date: "2025",
      location: "Lecture hall, SLIIT",
      attendees:"full",
      description: "The roadmap from Just Curious to Hired Developer",
      color: "#61DAFB",
      image: s3Image,
    },
    {
      id: "w4",
      title: "Non-IT Career Opportunitie",
      organizer: "Resource Person: Ms. Sarmila Sivaraja (CEO, 2SF Labs & Google WTM Ambassador)",
      date: " 2025",
      location: "Lecture hall, SLIIT",
      attendees: "full",
      description: "Expanding horizons: Entrepreneurship & Public Speaking.",
      color: "#6C63FF",
      image: s4Image,
    },
    {
      id: "w5",
      title: "HR Expectations & Industry Attitudes",
      organizer:  "Resource Person: Mr. Mahinthan",
      date: " 2025",
      location: "Lecture hall, SLIIT",
      attendees:"full",
      description: "Resource Person: Mr. Mahinthan,Cracking the HR Code: Resumes, Interviews, & Corporate Culture",
      color: "#3178C6",
      image: s5Image,
    },
    {
      id: "w6",
      title: "Managing Stress & Work-Life Balance",
      organizer: "Resource Person: Mr. Kuga",
      date: " 2025",
      location: "Lecture hall, SLIIT",
      attendees: "full",
      description: "Resource Person: Mr. Kuga,Mastering the art of staying cool under pressure.",
      color: "#68A063",
      image: s6Image,
    },
    {
      id: "w7",
      title: "Modern tech roles and what the industry demands",
      organizer: "Resource Person: Mr. Ravichelvan Kanagasabapathy (Tech Lead, HCLTech)",
      date: "2025",
      location: "Lecture hall, SLIIT",
      attendees: "full",
      description: "Modern tech roles and what the industry demands.",
      color: "#FF9900",
      image: s7Image,
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
