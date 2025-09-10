import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Zap, Cpu, Sparkles } from "lucide-react";
export function SplineShowcaseSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <Spotlight className="absolute top-0 left-1/2 transform -translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Interactive AI Showcase</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of our AI solutions through interactive 3D demonstrations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lightning Fast Processing</h3>
                <p className="text-muted-foreground">Process thousands of requests per second with our optimized AI infrastructure.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Neural Networks</h3>
                <p className="text-muted-foreground">Leverage cutting-edge AI models trained on industry-specific datasets.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Intelligent Automation</h3>
                <p className="text-muted-foreground">Automate complex workflows with AI-powered decision making.</p>
              </div>
            </div>
          </div>
          
          <Card className="relative h-96 overflow-hidden">
            <SplineScene 
              scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
              className="w-full h-full"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}