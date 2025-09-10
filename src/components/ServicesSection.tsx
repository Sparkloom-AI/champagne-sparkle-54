import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const ServicesSection = () => {
  const services = [{
    title: "Custom AI Solutions",
    description: "Tailored AI-powered tools that automate your specific business processes and eliminate repetitive tasks.",
    results: "Saved $100K+ & Automated Hundreds of Orders Monthly",
    image: "🤖"
  }, {
    title: "Deployment Systems",
    description: "Secure, scalable deployment infrastructure that replaces expensive SaaS fees with custom solutions.",
    results: "From $100K SaaS Fees to Custom System in 30 Days",
    image: "🚀"
  }, {
    title: "Learning Platforms",
    description: "Break free from vendor lock-in with scalable learning and knowledge management platforms.",
    results: "From Locked-In to Launching Scalable Platform with $20K",
    image: "📚"
  }];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-6 text-center">{service.image}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                {service.description}
              </p>
              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm font-semibold text-accent text-center">
                  {service.results}
                </p>
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Learn More
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