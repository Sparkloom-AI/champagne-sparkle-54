import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Clock, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";
const ResultsSection = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const caseStudies = [{
    client: "Built for Venus",
    metric: "75% Reduction in Processing Time",
    description: "Automated order processing and customer support workflows, handling 500+ orders daily",
    techStack: ["AI", "Process Automation", "Customer Support AI"],
    deliveryTime: "45 days",
    isNeon: true,
    problem: {
      title: "The Challenge",
      content: "Built for Venus was scaling rapidly but struggled with manual order processing that took hours to complete. Their team spent 80% of their time on repetitive tasks, leading to delayed customer responses and operational bottlenecks that limited growth potential."
    },
    solution: {
      title: "The Solution",
      content: "We implemented an AI-powered automation system that intelligently processes orders, handles customer inquiries, and manages inventory updates in real-time. The solution included custom ML models for demand prediction and automated workflow orchestration.",
      results: [{
        icon: Clock,
        label: "Processing Time",
        value: "From 4 hours to 1 hour"
      }, {
        icon: TrendingUp,
        label: "Daily Orders",
        value: "500+ handled automatically"
      }, {
        icon: Users,
        label: "Team Efficiency",
        value: "300% productivity increase"
      }]
    }
  }, {
    client: "Nimos AI",
    metric: "$400K Annual Savings",
    description: "Implemented AI-powered customer support system reducing response times by 60%",
    techStack: ["AI Chatbots", "NLP", "Integration APIs"],
    deliveryTime: "30 days",
    isNeon: false,
    problem: {
      title: "The Challenge",
      content: "Nimos AI's customer support team was overwhelmed with repetitive inquiries, leading to long response times and high operational costs. They needed a solution that could handle routine questions while maintaining the personal touch their customers expected."
    },
    solution: {
      title: "The Solution",
      content: "We developed an intelligent customer support AI that handles 85% of routine inquiries automatically while seamlessly escalating complex issues to human agents. The system learns from each interaction to continuously improve response quality.",
      results: [{
        icon: Zap,
        label: "Response Time",
        value: "60% faster responses"
      }, {
        icon: TrendingUp,
        label: "Cost Savings",
        value: "$400K annually"
      }, {
        icon: Users,
        label: "Customer Satisfaction",
        value: "94% satisfaction rate"
      }]
    }
  }, {
    client: "Customer Support Hub",
    metric: "3x ROI in 90 Days",
    description: "Automated 85% of routine customer inquiries with intelligent routing and responses",
    techStack: ["Machine Learning", "Automation", "CRM Integration"],
    deliveryTime: "60 days",
    isNeon: true,
    problem: {
      title: "The Challenge",
      content: "Customer Support Hub faced inefficient ticket routing and manual response processes that created delays and inconsistent service quality. Their growing customer base demanded faster, more accurate support solutions."
    },
    solution: {
      title: "The Solution",
      content: "We built a comprehensive AI system that intelligently routes tickets, generates contextual responses, and integrates seamlessly with their existing CRM. The solution includes predictive analytics for proactive customer service.",
      results: [{
        icon: TrendingUp,
        label: "ROI Achievement",
        value: "300% return in 90 days"
      }, {
        icon: Zap,
        label: "Automation Rate",
        value: "85% of inquiries automated"
      }, {
        icon: Users,
        label: "Agent Productivity",
        value: "250% efficiency gain"
      }]
    }
  }];
  return <section id="results-section" className="py-28 md:py-32 bg-gradient-to-b from-sl-obsidian to-sl-graphite-900 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Real Results. <span className="text-accent-neon">Real Impact.</span>
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-3xl mx-auto leading-loose">
            See how we've transformed businesses with AI automation, delivering measurable results and exceptional ROI.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="bg-sl-graphite-800 border-border hover:-translate-y-2 hover:border-accent/50 hover:shadow-lg transition-all duration-200 group animate-fade-in cursor-pointer overflow-hidden relative" style={{
              animationDelay: `${index * 150}ms`
            }}>
                  <CardHeader className="pb-4 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold text-sm">
                          {study.client.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <span className="text-xs text-text-muted bg-sl-graphite-700 px-3 py-1 rounded-full">
                        {study.deliveryTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-medium mb-2 leading-snug group-hover:text-accent transition-colors duration-200">{study.client}</CardTitle>
                    
                  </CardHeader>
                  
                  <CardContent className="pt-0 p-8">
                    <p className="text-sm md:text-base text-text-muted mb-6 leading-loose">
                      {study.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.techStack.map((tech, techIndex) => <span key={techIndex} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
                          {tech}
                        </span>)}
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-sl-obsidian border border-accent-neon/20 shadow-2xl">
                {/* Black overlay background */}
                <div className="fixed inset-0 bg-black/95 backdrop-blur-sm -z-10" />
                
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-semibold mb-6 leading-tight text-accent flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold">
                        {study.client.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    {study.client} Case Study
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-8">
                  {/* Metric Highlight */}
                  <div className="text-center p-8 bg-sl-graphite-800 rounded-lg">
                    <div className="text-4xl font-bold mb-3 text-accent">
                      {study.metric}
                    </div>
                    <p className="text-text-muted leading-loose">{study.description}</p>
                  </div>
                  
                  {/* Problem Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-medium text-accent flex items-center leading-snug">
                      ⚡ {study.problem.title}
                    </h3>
                    <p className="text-text-muted leading-loose bg-sl-graphite-800/50 p-6 rounded-lg">
                      {study.problem.content}
                    </p>
                  </div>
                  
                  {/* Solution Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-medium text-accent flex items-center leading-snug">
                      ✅ {study.solution.title}
                    </h3>
                    <p className="text-text-muted leading-loose bg-sl-graphite-800/50 p-6 rounded-lg">
                      {study.solution.content}
                    </p>
                    
                    {/* Results Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      {study.solution.results.map((result, resultIndex) => <div key={resultIndex} className="bg-sl-graphite-800 p-6 rounded-lg text-center">
                          <result.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                          <div className="text-sm text-text-muted mb-2">{result.label}</div>
                          <div className="font-semibold text-accent">
                            {result.value}
                          </div>
                        </div>)}
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech, techIndex) => <span key={techIndex} className="px-3 py-2 rounded-full text-sm bg-accent/10 text-accent">
                          {tech}
                        </span>)}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="text-center pt-8 border-t border-border">
                    <p className="text-text-muted mb-6 leading-loose">Interested in similar results for your business?</p>
                    <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90" onClick={() => {
                  window.open('https://calendar.app.google/hnNuZRVCdZwq5cMU8', '_blank');
                }}>
                      Schedule Your Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{
        animationDelay: '600ms'
      }}>
          <p className="text-text-muted mb-6 leading-loose">
            Ready to see similar results for your business?
          </p>
          <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90" onClick={() => {
          window.open('https://calendar.app.google/hnNuZRVCdZwq5cMU8', '_blank');
        }}>
            Schedule Your Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>;
};
export default ResultsSection;