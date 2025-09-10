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
    <section className="py-24 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to revolutionize your business operations and drive growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-6">{service.image}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <div className="bg-primary/10 p-4 rounded-lg mb-6">
                <p className="text-sm font-semibold text-primary">{service.results}</p>
              </div>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;