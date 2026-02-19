import { ShoppingBag, Menu, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl tracking-wider"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="text-[#8B6F47]">NIVIRRAS</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#shop">Shop</NavLink>
            <NavLink href="#scents">Scents</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-[#8B6F47]/10 rounded-full transition-colors"
            >
              <Search className="w-5 h-5 text-[#6B5743]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-[#8B6F47]/10 rounded-full transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5 text-[#6B5743]" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#C9A66B] text-white text-xs flex items-center justify-center rounded-full">
                0
              </span>
            </motion.button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              <Menu className="w-6 h-6 text-[#6B5743]" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 border-t border-[#E8DFD4]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <div className="flex flex-col gap-4">
              <NavLink href="#home" mobile>Home</NavLink>
              <NavLink href="#shop" mobile>Shop</NavLink>
              <NavLink href="#scents" mobile>Scents</NavLink>
              <NavLink href="#about" mobile>About</NavLink>
              <NavLink href="#contact" mobile>Contact</NavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children, mobile }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      className={`text-[#6B5743] hover:text-[#8B6F47] transition-colors ${
        mobile ? "text-base" : "text-sm"
      }`}
    >
      {children}
    </motion.a>
  );
}
