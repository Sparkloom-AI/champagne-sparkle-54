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
    <section className="py-20 bg-gradient-to-b from-sl-obsidian/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions that drive real business transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-sl-slate-800/30 border-sl-iron-600/30 backdrop-blur-sm hover:bg-sl-slate-800/50 transition-all duration-300 group">
              <div className="p-8">
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {service.image}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-sl-auric-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="bg-sl-auric-700/10 border border-sl-auric-700/30 rounded-xl p-4 mb-6">
                  <p className="text-sl-auric-700 font-semibold text-sm">
                    Real Results: {service.results}
                  </p>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-sl-auric-700 group-hover:text-sl-obsidian transition-colors duration-300">
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