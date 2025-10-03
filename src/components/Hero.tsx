import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury construction projects by Vishal Associates"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center space-x-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase">
              Premium Construction Services
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Building Dreams,
            <br />
            <span className="text-gradient">Crafting Excellence</span>
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl">
            Leading builders, contractors and engineers delivering prestigious residential, 
            commercial and industrial projects across Delhi NCR with unmatched quality and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-luxury shadow-luxury text-lg px-8 py-6"
              onClick={() => scrollToSection('projects')}
            >
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-border/30">
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">20+</div>
              <div className="text-foreground/60">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">100+</div>
              <div className="text-foreground/60">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/60">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
