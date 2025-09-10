import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const features = [{
    title: "30-Day Delivery",
    description: "Custom AI-powered solutions delivered fast, with every milestone tracked transparently.",
    icon: "⚡"
  }, {
    title: "Cost Optimization",
    description: "Slash operational costs and eliminate expensive manual processes with intelligent automation.",
    icon: "💰"
  }, {
    title: "Enterprise Grade",
    description: "Secure, scalable solutions built for enterprise operations teams craving transformation.",
    icon: "🛡️"
  }];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Our AI Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with cutting-edge AI automation that delivers real results
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;