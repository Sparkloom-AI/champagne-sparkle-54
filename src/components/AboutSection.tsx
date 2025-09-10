import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      title: "30-Day Delivery",
      description: "Custom AI-powered solutions delivered fast, with every milestone tracked transparently.",
      icon: "⚡"
    },
    {
      title: "Cost Optimization",
      description: "Slash operational costs and eliminate expensive manual processes with intelligent automation.",
      icon: "💰"
    },
    {
      title: "Enterprise Grade",
      description: "Secure, scalable solutions built for enterprise operations teams craving transformation.",
      icon: "🛡️"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Real Results. <span className="text-accent">Real Impact.</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Endless manual tasks, skyrocketing operational costs, and software projects that drag on forever—
            it's exhausting and expensive. But what if building transformative software didn't have to be?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-surface border-border-accent hover:shadow-glow transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block px-8 py-4 bg-sl-slate-800 rounded-full border border-border-accent">
            <p className="text-accent font-semibold text-lg">
              The only thing left? Booking your demo before someone else takes your spot this month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;