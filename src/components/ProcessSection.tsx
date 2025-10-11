import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, Target, Lightbulb, Rocket, Settings } from 'lucide-react';
const processSteps = [{
  number: 1,
  title: "AI Discovery Session",
  description: "Identifying opportunities and challenges in your organization.",
  icon: Search,
  color: "from-sl-neon-pink-500 to-sl-neon-pink-400",
  isNeon: true
}, {
  number: 2,
  title: "AI Scoping Programme",
  description: "Defining clear objectives and implementation strategy.",
  icon: Target,
  color: "from-sl-auric-700 to-sl-auric-500",
  isNeon: false
}, {
  number: 3,
  title: "Proof of Concept (PoC)",
  description: "Building a working prototype to validate the approach.",
  icon: Lightbulb,
  color: "from-sl-neon-pink-500 to-sl-neon-pink-400",
  isNeon: true
}, {
  number: 4,
  title: "Minimum Viable Product (MVP)",
  description: "Developing a scalable solution ready for deployment.",
  icon: Rocket,
  color: "from-sl-auric-700 to-sl-auric-500",
  isNeon: false
}, {
  number: 5,
  title: "Ongoing Maintenance",
  description: "Continuous improvement and adaptation to changing needs.",
  icon: Settings,
  color: "from-sl-neon-pink-500 to-sl-neon-pink-400",
  isNeon: true
}];
const ProcessSection = () => {
  return (
    <section id="process-section" className="py-28 md:py-32 bg-gradient-to-b from-sl-obsidian/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            The 5-Step Process
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-loose">
            Our proven methodology transforms your business in 30 days with structured AI implementation
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={step.number} 
                className="bg-sl-slate-800/50 border-sl-iron-600/30 backdrop-blur-sm hover:bg-sl-slate-800/70 hover:-translate-y-2 hover:border-accent/30 transition-all duration-200 group h-full animate-fade-in-up hover:shadow-lg"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Large Number */}
                  <div className="text-6xl font-bold mb-4 text-muted-foreground/20">
                    {step.number.toString().padStart(2, '0')}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4 leading-snug transition-colors duration-200 group-hover:text-accent">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground flex-grow">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-accent/5 border border-accent/20 rounded-2xl backdrop-blur-sm">
            <span className="text-foreground font-medium text-base md:text-lg">
              Complete transformation in just 30 days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProcessSection;