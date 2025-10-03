import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="text-2xl font-display font-bold text-gradient">
              Vishal Associates
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="bg-gradient-luxury shadow-luxury">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="w-full mt-2 bg-gradient-luxury">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
