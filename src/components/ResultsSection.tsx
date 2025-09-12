import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ResultsSection = () => {
  const caseStudies = [
    {
      client: "DUDE WIPES",
      title: "Saved $100K+ & Automated Hundreds of Orders Monthly with a Custom Internal Tool",
      completionTime: "60 Days",
      scope: "Custom Software",
      description: "By staying lean and building their own software, Dude wipes avoided contract lock-ins and high per-seat pricing, replacing an entire ops role and creating a system that processes hundreds of orders every month.",
      backgroundImage: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    },
    {
      client: "MADRASA",
      title: "From Locked-In to Launching a Scalable Learning Platform with $20K in Weeks",
      completionTime: "4 Weeks",
      scope: "Learning Platform",
      description: "Transformed from vendor dependency to launching an independent, scalable learning platform that generated $20K in revenue within weeks of launch.",
      backgroundImage: "bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900"
    },
    {
      client: "TEKEVER",
      title: "From $100K SaaS Fees to a Secure Custom Deployment System in 30 Days",
      completionTime: "30 Days",
      scope: "Custom Deployment",
      description: "Eliminated expensive SaaS dependencies by building a secure, custom deployment system that reduced operational costs by $100K annually.",
      backgroundImage: "bg-gradient-to-br from-red-900 via-slate-800 to-slate-900"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-sl-obsidian to-sl-graphite-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-light/20 to-accent/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results. <span className="text-accent">Real Impact.</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            See how we've transformed businesses with AI automation, delivering measurable results and exceptional ROI.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={`relative h-96 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 animate-fade-in ${study.backgroundImage}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Pattern/Texture */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top Section - Completion Time & Scope */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="text-xs text-white/70 uppercase tracking-wide">Completion Time</div>
                    <div className="text-sm font-semibold text-white">{study.completionTime}</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-xs text-white/70 uppercase tracking-wide">Scope of Work</div>
                    <div className="text-sm font-semibold text-white">{study.scope}</div>
                  </div>
                </div>
                
                {/* Main Title */}
                <div className="flex-1 flex items-center">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {study.title}
                  </h3>
                </div>
                
                {/* Bottom Section - Client & CTA */}
                <div className="flex justify-between items-end">
                  <div className="text-2xl font-bold text-white tracking-wider">
                    {study.client}
                  </div>
                  <Button 
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 backdrop-blur-sm"
                  >
                    <span className="text-lg mr-2">+</span>
                    See case study
                  </Button>
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-text-muted mb-6">
            Ready to see similar results for your business?
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-light text-accent-foreground"
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