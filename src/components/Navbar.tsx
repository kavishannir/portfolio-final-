import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/", isScroll: true, scrollTo: "hero" },
    { name: "About", path: "/", isScroll: true, scrollTo: "about" },
    { name: "Skills", path: "/", isScroll: true, scrollTo: "skills-projects" },
    { name: "Workshops", path: "/", isScroll: true, scrollTo: "workshops" },
    { name: "Experience", path: "/", isScroll: true, scrollTo: "experience" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    if (item.isScroll) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(item.scrollTo!)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(item.scrollTo!)?.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card py-4 px-4 sm:px-6 lg:px-8 border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-gradient-animate">Kavishan</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = item.isScroll ? location.pathname === "/" : location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(item, e)}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.name}
                {isActive && (
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
          className="md:hidden text-foreground p-2 rounded-lg glass-card hover:bg-primary/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-2 glass-card rounded-xl p-4"
          >
            {navItems.map((item) => {
              const isActive = item.isScroll ? location.pathname === "/" : location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`block text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg ${
                    isActive ? "text-primary bg-primary/10" : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
