import { Building2, Wrench, Factory, Zap, Droplets, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const civilWorks = [
    { icon: Building2, title: "Residential Building", description: "Luxury apartments and housing complexes" },
    { icon: Factory, title: "Industrial Building", description: "Modern industrial facilities and warehouses" },
    { icon: Building2, title: "Commercial Projects", description: "Malls, multiplexes and shopping centers" },
  ];

  const services = [
    { icon: Zap, title: "Electrical Work", description: "Complete electrical installations and systems" },
    { icon: Droplets, title: "Plumbing Work", description: "Professional plumbing and water supply solutions" },
    { icon: Flame, title: "Fire Fighting", description: "Advanced fire safety systems and equipment" },
    { icon: Wrench, title: "Maintenance", description: "Comprehensive building maintenance services" },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive construction solutions for all your building needs
          </p>
        </div>

        {/* Civil Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold mb-8 text-primary">
            Civil Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {civilWorks.map((work, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-8 group hover:shadow-luxury"
              >
                <work.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-display font-semibold mb-2">{work.title}</h4>
                <p className="text-foreground/70">{work.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Services */}
        <div>
          <h3 className="text-2xl font-display font-semibold mb-8 text-primary">
            Technical Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-6 group hover:shadow-card"
              >
                <service.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-display font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-foreground/70">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Capabilities */}
        <div className="mt-16 p-8 bg-secondary rounded-lg border border-border">
          <h3 className="text-2xl font-display font-semibold mb-4 text-primary">
            Additional Capabilities
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-foreground/80">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <p>Mass Earth Work With Heavy Machines</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <p>Heavy Fabrication Works</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <p>External Development Work</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <p>Road, Drainage and Sewerage Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
