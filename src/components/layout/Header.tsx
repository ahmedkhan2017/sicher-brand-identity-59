import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-silver/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.span 
              className="text-2xl font-bold tracking-tight text-white uppercase"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              SICHER
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300 py-2 uppercase tracking-wider",
                  isActive(link.path)
                    ? "text-white"
                    : "text-silver hover:text-white"
                )}
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-silver rounded-full"
                  initial={false}
                  animate={{ width: isActive(link.path) ? "100%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              asChild 
              className="bg-white text-black hover:bg-silver border-0 btn-glow rounded-full px-6 font-medium uppercase tracking-wider text-sm"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <motion.nav 
                className="py-6 space-y-1 border-t border-silver/10"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.1 } },
                  closed: {},
                }}
              >
                {mainNavLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 uppercase tracking-wider",
                        isActive(link.path)
                          ? "text-white bg-white/10"
                          : "text-silver hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="pt-4"
                >
                  <Button 
                    asChild 
                    className="w-full bg-white text-black hover:bg-silver rounded-full font-medium uppercase tracking-wider"
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get in Touch
                    </Link>
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
