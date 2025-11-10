import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/", isScroll: true, scrollTo: "hero" },
    { name: "About", path: "/", isScroll: true, scrollTo: "about" },
    { name: "Skills & Projects", path: "/", isScroll: true, scrollTo: "skills-projects" },
    { name: "Experience", path: "/", isScroll: true, scrollTo: "experience" },
    { name: "Education", path: "/", isScroll: true, scrollTo: "education" },
    { name: "Workshops", path: "/workshops" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    if (location.pathname === "/") {
      const sections = ["hero", "about", "skills-projects", "experience", "education"];
      
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const offset = 150; // Account for navbar and some offset
        
        // At the very top, set to hero
        if (scrollPosition < 100) {
          setActiveSection("hero");
          return;
        }
        
        // Check sections from bottom to top
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const sectionTop = section.offsetTop;
            // If we've scrolled past this section's top (with offset), this is the active section
            if (scrollPosition + offset >= sectionTop) {
              setActiveSection(sections[i]);
              return;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection("");
    }
  }, [location.pathname]);

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    if (item.isScroll) {
      e.preventDefault();
      setActiveSection(item.scrollTo || "");
      
      const scrollToSection = (sectionId: string, retries = 0) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const navbarHeight = 80; // Approximate navbar height
          const sectionTop = section.offsetTop - navbarHeight;
          window.scrollTo({
            top: Math.max(0, sectionTop),
            behavior: "smooth"
          });
        } else if (retries < 10) {
          // Retry if section not found (page might still be loading)
          setTimeout(() => scrollToSection(sectionId, retries + 1), 100);
        }
      };
      
      if (item.name === "Home") {
        if (location.pathname !== "/") {
          navigate("/");
          // Wait for navigation and then scroll to top
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 300);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        if (location.pathname !== "/") {
          navigate("/");
          // Wait for navigation and DOM to be ready
          setTimeout(() => {
            scrollToSection(item.scrollTo!);
          }, 400);
        } else {
          // Use requestAnimationFrame for smoother scrolling
          requestAnimationFrame(() => {
            scrollToSection(item.scrollTo!);
          });
        }
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card py-1.5 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 lg:px-8 border-b border-primary/20">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-base sm:text-xl md:text-2xl font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-gradient-animate">Kavishan</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = item.isScroll 
                ? (location.pathname === "/" && activeSection === item.scrollTo)
                : location.pathname === item.path;
              const hasFrame = item.name === "Workshops" || item.name === "Contact";
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`relative text-sm font-medium transition-all ${
                    hasFrame 
                      ? `px-4 py-2 rounded-lg border-2 ${
                          isActive 
                            ? "border-[#6C63FF] text-primary bg-[#6C63FF]/10 shadow-[0_0_15px_rgba(108,99,255,0.4)]" 
                            : "border-[#6C63FF]/40 text-foreground/80 hover:border-[#6C63FF]/60 hover:bg-[#6C63FF]/5"
                        }`
                      : `hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
                  }`}
                >
                  {item.name}
                  {!hasFrame && isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-purple-blue glow-purple"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden text-foreground p-2 rounded-lg glass-card hover:bg-primary/10 transition-colors z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 max-w-[75vw] bg-gradient-to-br from-background via-[#0a0a0f] to-[#0f0f1a] border-l border-primary/20 shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-3 border-b border-primary/20">
                <span className="text-lg font-bold text-gradient-animate">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-primary/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-3 space-y-1.5">
                {navItems.map((item, index) => {
                  const isActive = item.isScroll 
                    ? (location.pathname === "/" && activeSection === item.scrollTo)
                    : location.pathname === item.path;
                  const hasFrame = item.name === "Workshops" || item.name === "Contact";
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={(e) => handleNavClick(item, e)}
                        className={`block text-sm font-medium transition-all px-3 py-2 rounded-lg ${
                          hasFrame
                            ? `border-2 ${
                                isActive 
                                  ? "border-[#6C63FF] text-primary bg-[#6C63FF]/10 shadow-[0_0_15px_rgba(108,99,255,0.4)]" 
                                  : "border-[#6C63FF]/40 text-foreground/80 hover:border-[#6C63FF]/60 hover:bg-[#6C63FF]/5"
                              }`
                            : `hover:text-primary hover:bg-primary/10 ${
                                isActive ? "text-primary bg-primary/10" : "text-foreground/80"
                              }`
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
