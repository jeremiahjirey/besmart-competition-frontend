import { useState } from "react";
import { Trophy, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Scheme", href: "#" },
    { name: "Competitions", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Trophy className="text-orange-500 fill-orange-500" size={28} />
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              CompeteNow
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-orange-500 font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-full font-bold transition-all shadow-md active:scale-95">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-semibold text-slate-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-orange-500 text-white px-4 py-3 rounded-full font-bold shadow-lg">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
