import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, Target, Lightbulb, Rocket, Settings } from 'lucide-react';
const processSteps = [{
  number: 1,
  title: "AI Discovery Session",
  description: "Identifying opportunities and challenges in your organization.",
  icon: Search,
  color: "from-sl-auric-700 to-sl-auric-500"
}, {
  number: 2,
  title: "AI Scoping Programme",
  description: "Defining clear objectives and implementation strategy.",
  icon: Target,
  color: "from-sl-pearl-100 to-sl-fog-300"
}, {
  number: 3,
  title: "Proof of Concept (PoC)",
  description: "Building a working prototype to validate the approach.",
  icon: Lightbulb,
  color: "from-sl-auric-700 to-sl-auric-500"
}, {
  number: 4,
  title: "Minimum Viable Product (MVP)",
  description: "Developing a scalable solution ready for deployment.",
  icon: Rocket,
  color: "from-sl-pearl-100 to-sl-fog-300"
}, {
  number: 5,
  title: "Ongoing Maintenance",
  description: "Continuous improvement and adaptation to changing needs.",
  icon: Settings,
  color: "from-sl-auric-700 to-sl-auric-500"
}];
const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    
    const section = document.getElementById('process-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process-section" className="py-20 bg-gradient-to-b from-sl-obsidian/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The 5-Step Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology transforms your business in 30 days with structured AI implementation
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={step.number} 
                className="bg-sl-slate-800/50 border-sl-iron-600/30 backdrop-blur-sm hover:bg-sl-slate-800/70 transition-all duration-300 group h-full"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Large Number */}
                  <div className="text-6xl font-bold text-muted-foreground/30 mb-4">
                    {step.number.toString().padStart(2, '0')}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-sl-auric-700" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-sl-auric-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sl-auric-700/20 to-sl-auric-500/20 border border-sl-auric-700/30 rounded-2xl backdrop-blur-sm">
            <div className="w-3 h-3 bg-sl-auric-700 rounded-full animate-pulse"></div>
            <span className="text-foreground font-semibold text-lg">
              Complete transformation in just 30 days
            </span>
            <div className="w-3 h-3 bg-sl-auric-700 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProcessSection;