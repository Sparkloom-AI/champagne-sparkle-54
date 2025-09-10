import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom AI Solutions",
      description: "Tailored AI-powered tools that automate your specific business processes and eliminate repetitive tasks.",
      results: "Saved $100K+ & Automated Hundreds of Orders Monthly",
      image: "🤖"
    },
    {
      title: "Deployment Systems",
      description: "Secure, scalable deployment infrastructure that replaces expensive SaaS fees with custom solutions.",
      results: "From $100K SaaS Fees to Custom System in 30 Days",
      image: "🚀"
    },
    {
      title: "Learning Platforms",
      description: "Break free from vendor lock-in with scalable learning and knowledge management platforms.",
      results: "From Locked-In to Launching Scalable Platform with $20K",
      image: "📚"
    }
  ];

  return (
    <section id="services" className="py-24 bg-sl-obsidian relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-accent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-accent opacity-50" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Empowering collaboration through workshops, regular syncs and transparent updates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-surface border-border hover:border-accent/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.image}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="bg-sl-graphite-700 p-4 rounded-lg mb-6 border-l-4 border-accent">
                  <p className="text-accent font-semibold text-sm">RESULT</p>
                  <p className="text-foreground font-medium">{service.results}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:scale-105 transition-all duration-300"
                >
                  See Case Study
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;