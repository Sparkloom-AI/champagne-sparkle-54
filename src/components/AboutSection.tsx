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
    <section className="py-20 bg-gradient-to-b from-background to-sl-obsidian/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with enterprise-grade AI that delivers results in record time
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-sl-slate-800/30 border-sl-iron-600/30 backdrop-blur-sm hover:bg-sl-slate-800/50 transition-all duration-300 group">
              <div className="p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-sl-auric-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;