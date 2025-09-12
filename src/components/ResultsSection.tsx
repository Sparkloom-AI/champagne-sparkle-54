import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ResultsSection = () => {
  const caseStudies = [
    {
      client: "Built for Venus",
      metric: "75% Reduction in Processing Time",
      description: "Automated order processing and customer support workflows, handling 500+ orders daily",
      techStack: ["AI", "Process Automation", "Customer Support AI"],
      deliveryTime: "45 days",
      isNeon: true
    },
    {
      client: "Nimos AI",
      metric: "$400K Annual Savings",
      description: "Implemented AI-powered customer support system reducing response times by 60%",
      techStack: ["AI Chatbots", "NLP", "Integration APIs"],
      deliveryTime: "30 days",
      isNeon: false
    },
    {
      client: "Customer Support Hub",
      metric: "3x ROI in 90 Days",
      description: "Automated 85% of routine customer inquiries with intelligent routing and responses",
      techStack: ["Machine Learning", "Automation", "CRM Integration"],
      deliveryTime: "60 days",
      isNeon: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-sl-obsidian to-sl-graphite-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-neon/20 to-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-accent-neon/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results. <span className="text-accent-neon">Real Impact.</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            See how we've transformed businesses with AI automation, delivering measurable results and exceptional ROI.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className={`bg-sl-graphite-800/50 border-border backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 group animate-fade-in ${
                study.isNeon ? 'hover:shadow-neon hover:border-accent-neon/50' : 'hover:shadow-glow'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    study.isNeon ? 'bg-gradient-neon' : 'bg-gradient-to-r from-accent to-accent-light'
                  }`}>
                    <span className="text-sl-obsidian font-bold text-sm">
                      {study.client.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <span className="text-xs text-text-muted bg-sl-graphite-700 px-2 py-1 rounded-full">
                    {study.deliveryTime}
                  </span>
                </div>
                <CardTitle className="text-lg mb-2">{study.client}</CardTitle>
                <div className={`text-2xl font-bold mb-2 ${
                  study.isNeon ? 'text-accent-neon' : 'text-accent'
                }`}>
                  {study.metric}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-text-muted text-sm mb-4 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-6">
                  {study.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`text-xs px-2 py-1 rounded-full ${
                        study.isNeon ? 'bg-accent-neon/10 text-accent-neon' : 'bg-accent/10 text-accent'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline"
                  size="sm"
                  className={`w-full transition-all duration-300 ${
                    study.isNeon 
                      ? 'border-accent-neon/30 text-accent-neon hover:bg-accent-neon hover:text-sl-obsidian group-hover:border-accent-neon hover:shadow-neon' 
                      : 'border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground group-hover:border-accent'
                  }`}
                >
                  See Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-text-muted mb-6">
            Ready to see similar results for your business?
          </p>
          <Button 
            variant="neon"
            size="lg"
            onClick={() => {
              window.open('https://calendar.app.google/hnNuZRVCdZwq5cMU8', '_blank');
            }}
          >
            Schedule Your Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;