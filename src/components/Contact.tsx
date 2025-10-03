import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today for a consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-secondary border-border"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-luxury shadow-luxury">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card border-border p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-foreground/70">+91-9811684777</p>
                  <p className="text-foreground/70">+91-9811684666</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Email</h3>
                  <p className="text-foreground/70">vishalassociates777@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Address</h3>
                  <p className="text-foreground/70">
                    D-110, Sector 61<br />
                    Noida, G.B. Nagar<br />
                    Uttar Pradesh - 201301
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-luxury p-6 shadow-luxury">
              <h3 className="font-display font-bold text-lg mb-2 text-primary-foreground">
                Business Hours
              </h3>
              <p className="text-primary-foreground/90">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-primary-foreground/90">Sunday: Closed</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
