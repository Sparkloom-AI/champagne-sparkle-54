import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Zap, Cpu, Sparkles } from "lucide-react";
export function SplineShowcaseSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive 3D Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our cutting-edge Spline integrations that bring your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
            </div>
            <p className="text-muted-foreground">
              Optimized 3D rendering with exceptional performance
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Smart Processing</h3>
            </div>
            <p className="text-muted-foreground">
              Advanced algorithms for seamless 3D interactions
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Beautiful Design</h3>
            </div>
            <p className="text-muted-foreground">
              Stunning visual effects that captivate your audience
            </p>
          </Card>
        </div>
        
        <div className="mt-16 h-96 rounded-lg bg-muted/50 flex items-center justify-center">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default SplineShowcaseSection;