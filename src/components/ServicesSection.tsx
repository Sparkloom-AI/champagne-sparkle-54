import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const ServicesSection = () => {
  const plans = [{
    name: "Starter",
    price: "$15,000",
    period: "one-time",
    description: "Perfect for small automation projects",
    features: ["Single AI automation solution", "30-day delivery guarantee", "Basic integration support", "Email support", "Documentation included"],
    popular: false
  }, {
    name: "Enterprise",
    price: "$45,000",
    period: "one-time",
    description: "Complete transformation for your operations",
    features: ["Custom AI-powered platform", "30-day delivery guarantee", "Full system integration", "Priority support & training", "Ongoing maintenance (3 months)", "Performance analytics", "Dedicated project manager"],
    popular: true
  }, {
    name: "Enterprise Plus",
    price: "Custom",
    period: "quote",
    description: "Large-scale implementations",
    features: ["Multiple AI solution suite", "Phased delivery approach", "Enterprise-grade security", "24/7 premium support", "Ongoing maintenance (12 months)", "Advanced analytics & reporting", "Dedicated development team"],
    popular: false
  }];
  return <section id="services" className="py-24 bg-gradient-surface relative">
      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-orb animate-pulse-glow opacity-20" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-orb animate-float opacity-15" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            Comprehensive AI solutions tailored to your business needs. From simple automation to enterprise transformation.
          </p>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-6xl mx-auto">
          {plans.map((plan, index) => <Card key={index} className={`relative p-8 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up ${plan.popular ? 'bg-surface border-accent-neon shadow-neon scale-105 hover:shadow-neon-strong' : 'bg-surface border-border hover:border-accent/50 hover:shadow-glow'}`} style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-neon text-sl-obsidian px-4 py-2 rounded-full text-sm font-semibold shadow-neon">
                    Most Popular
                  </span>
                </div>}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                <p className="text-text-muted">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-text-muted">{feature}</span>
                  </li>)}
              </ul>

              <div className="text-center">
                <Button 
                  variant={plan.popular ? "neon" : "outline"}
                  className={`w-full ${plan.popular ? '' : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'}`}
                  onClick={() => {
                    window.open('https://calendar.app.google/hnNuZRVCdZwq5cMU8', '_blank');
                  }}
                >
                  Talk to an Expert
                </Button>
              </div>
              
            </Card>)}
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{
        animationDelay: '0.8s'
      }}>
          <p className="text-text-muted mb-4">All services include our 30-day delivery guarantee</p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-accent" />
              <span className="text-sm text-text-muted">No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-accent" />
              <span className="text-sm text-text-muted">Milestone Tracking</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-accent" />
              <span className="text-sm text-text-muted">Full Transparency</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;