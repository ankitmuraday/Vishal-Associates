import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import panchsheelWellington from "@/assets/projects/panchsheel-wellington.jpg";
import panchsheelGreens from "@/assets/projects/panchsheel-greens.jpg";
import gaurCascades from "@/assets/projects/gaur-cascades.jpg";
import ajnaraGenx from "@/assets/projects/ajnara-genx.jpg";
import gaurHome from "@/assets/projects/gaur-home.jpg";
import spsResidence from "@/assets/projects/sps-residence.jpg";

const Projects = () => {
  const projects = [
    {
      name: "Panchsheel Wellington",
      location: "Crossings Republik, Ghaziabad",
      type: "Residential",
      status: "Completed",
      description: "Premium residential complex with modern amenities",
      image: panchsheelWellington,
    },
    {
      name: "Panchsheel Green I & II",
      location: "Greater Noida West",
      type: "Residential",
      status: "Completed",
      description: "Eco-friendly residential township",
      image: panchsheelGreens,
    },
    {
      name: "Gaur Cascades",
      location: "Raj Nagar Extension, Ghaziabad",
      type: "Residential",
      status: "Completed",
      description: "Luxury high-rise apartments",
      image: gaurCascades,
    },
    {
      name: "Ajnara JanX",
      location: "Noida Extension",
      type: "Residential",
      status: "Completed",
      description: "Modern residential apartments",
      image: ajnaraGenx,
    },
    {
      name: "Gaur Home",
      location: "Sector 62, Noida",
      type: "Residential",
      status: "Completed",
      description: "Contemporary living spaces",
      image: gaurHome,
    },
    {
      name: "SPS Residence",
      location: "Delhi NCR",
      type: "Residential",
      status: "Completed",
      description: "Premium residential project",
      image: spsResidence,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Prestigious developments we've brought to life across Delhi NCR
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group hover:shadow-luxury"
            >
              <div className="h-48 overflow-hidden border-b border-border">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-display font-semibold">{project.name}</h3>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-foreground/60 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  {project.type}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
