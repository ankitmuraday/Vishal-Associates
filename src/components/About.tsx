import { Card } from "@/components/ui/card";
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    { icon: Award, title: "Excellence", description: "Uncompromising quality in every project" },
    { icon: Users, title: "Trust", description: "Building lasting relationships with clients" },
    { icon: TrendingUp, title: "Innovation", description: "Modern techniques and materials" },
    { icon: CheckCircle2, title: "Reliability", description: "On-time delivery, every time" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-gradient">Vishal Associates</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Vishal Associates stands as a testament to excellence in construction, bringing 
              prestigious ventures to life in prime locations across Delhi NCR. Our portfolio 
              includes iconic projects like Panchsheel Wellington, Gaur Cascades, and Panchsheel 
              Green, each reflecting our commitment to quality and innovation.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              With decades of experience and a team of skilled professionals, we specialize in 
              comprehensive construction services from industrial buildings to luxury residences, 
              delivering projects that exceed expectations.
            </p>

            <div className="bg-secondary p-6 rounded-lg border border-border mb-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-primary">
                Company Information
              </h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex justify-between border-b border-border/30 pb-2">
                  <span className="font-medium">Location:</span>
                  <span>D-110, Sector 61, Noida, UP</span>
                </div>
                <div className="flex justify-between border-b border-border/30 pb-2">
                  <span className="font-medium">Proprietor:</span>
                  <span>Mr. Ram Kishan Muraday</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">GSTIN:</span>
                  <span>09 AIEPB0927D1ZT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-lg font-display font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-foreground/70">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
