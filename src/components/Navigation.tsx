import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    href: "/",
    label: "Home"
  }, {
    href: "/about",
    label: "About"
  }, {
    href: "/portfolio",
    label: "Portfolio"
  }, {
    href: "/contact",
    label: "Contact"
  }];
  return <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">Hunain Riasat</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.href} to={item.href} className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === item.href ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"}`}>
                {item.label}
              </Link>)}
            <ThemeToggle />
          </div>

          <div className="hidden md:flex">
            <Button asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map(item => <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === item.href ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"}`}>
                  {item.label}
                </Link>)}
              <Button asChild className="mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;