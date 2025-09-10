import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, Target, Lightbulb, Rocket, Settings } from 'lucide-react';

const processSteps = [
  {
    number: 1,
    title: "AI Discovery Session",
    description: "Identifying opportunities and challenges in your organization.",
    icon: Search,
    color: "from-sl-auric-700 to-sl-auric-500"
  },
  {
    number: 2,
    title: "AI Scoping Programme", 
    description: "Defining clear objectives and implementation strategy.",
    icon: Target,
    color: "from-sl-pearl-100 to-sl-fog-300"
  },
  {
    number: 3,
    title: "Proof of Concept (PoC)",
    description: "Building a working prototype to validate the approach.",
    icon: Lightbulb,
    color: "from-sl-auric-700 to-sl-auric-500"
  },
  {
    number: 4,
    title: "Minimum Viable Product (MVP)",
    description: "Developing a scalable solution ready for deployment.",
    icon: Rocket,
    color: "from-sl-pearl-100 to-sl-fog-300"
  },
  {
    number: 5,
    title: "Ongoing Maintenance",
    description: "Continuous improvement and adaptation to changing needs.",
    icon: Settings,
    color: "from-sl-auric-700 to-sl-auric-500"
  }
];

const ProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger the animation of each step
          processSteps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

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
            The <span className="text-transparent bg-gradient-to-r from-sl-auric-700 to-sl-auric-500 bg-clip-text">5-Step Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology transforms your business in 30 days with structured AI implementation
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sl-auric-700/50 via-sl-auric-700/30 to-transparent transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isStepVisible = visibleSteps.includes(index);
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={step.number}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } ${isStepVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Step Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <Card className="bg-sl-slate-800/30 border-sl-iron-600/30 backdrop-blur-sm hover:bg-sl-slate-800/50 transition-all duration-300 group">
                      <CardContent className="p-8">
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-sl-obsidian font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                            {step.number}
                          </div>
                          <Icon className="w-6 h-6 text-sl-auric-700" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-sl-auric-700 transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Duration Badge */}
                        <div className={`inline-flex items-center gap-2 mt-4 px-3 py-1 bg-sl-auric-700/10 border border-sl-auric-700/30 rounded-full text-sm text-sl-auric-700`}>
                          <span className="w-2 h-2 bg-sl-auric-700 rounded-full animate-pulse"></span>
                          {index === 0 ? "Week 1" : index === 1 ? "Week 1-2" : index === 2 ? "Week 2-3" : index === 3 ? "Week 3-4" : "Ongoing"}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Central Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg border-4 border-background ${isStepVisible ? 'animate-scale-in' : 'scale-0'}`}>
                      <Icon className="w-8 h-8 text-sl-obsidian" />
                    </div>
                    
                    {/* Arrow to next step */}
                    {index < processSteps.length - 1 && (
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 ${isStepVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        <ArrowRight className="w-6 h-6 text-sl-auric-700/60 animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Spacer for even layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
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