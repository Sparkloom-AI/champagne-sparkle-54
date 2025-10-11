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
    <section id="process-section" className="py-20 bg-gradient-to-b from-sl-obsidian/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The 5-Step Process
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven methodology transforms your business in 30 days with structured AI implementation
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={step.number} 
                className={`bg-sl-slate-800/50 border-sl-iron-600/30 backdrop-blur-sm hover:bg-sl-slate-800/70 hover:-translate-y-2 transition-all duration-500 group h-full animate-fade-in-up ${
                  step.isNeon ? 'hover:shadow-neon hover:border-accent-neon/50' : 'hover:shadow-glow'
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Large Number */}
                  <div className={`text-6xl font-bold mb-4 ${
                    step.isNeon ? 'text-accent-neon/30' : 'text-muted-foreground/30'
                  }`}>
                    {step.number.toString().padStart(2, '0')}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className={`w-8 h-8 ${
                      step.isNeon ? 'text-accent-neon' : 'text-sl-auric-700'
                    }`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl md:text-2xl font-semibold text-foreground mb-3 leading-snug transition-colors duration-500 ${
                    step.isNeon ? 'group-hover:text-accent-neon' : 'group-hover:text-sl-auric-700'
                  }`}>
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm leading-normal text-muted-foreground flex-grow">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-neon/20 to-sl-auric-700/20 border border-accent-neon/30 rounded-2xl backdrop-blur-sm hover:shadow-neon transition-all duration-300">
            <div className="w-3 h-3 bg-accent-neon rounded-full animate-pulse"></div>
            <span className="text-foreground font-semibold text-lg">
              Complete transformation in just 30 days
            </span>
            <div className="w-3 h-3 bg-accent-neon rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProcessSection;