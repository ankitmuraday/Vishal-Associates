import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">
              Vishal Associates
            </h3>
            <p className="text-foreground/70 mb-4">
              Premier builders, contractors and engineers delivering excellence 
              in construction across Delhi NCR since decades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Certifications</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>PAN: AIEPB0927D</li>
              <li>GSTIN: 09 AIEPB0927D1ZT</li>
              <li>EPF: MRNOI0045777000</li>
              <li>ESIC: 67000581670001009</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Vishal Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
