import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Zap, Cpu, Sparkles } from "lucide-react";

export function SplineShowcaseSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-sl-obsidian/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience AI <span className="text-transparent bg-gradient-to-r from-sl-auric-700 to-sl-auric-500 bg-clip-text">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interact with our 3D visualization to see how AI transforms your business processes
          </p>
        </div>

        <Card className="w-full h-[600px] bg-sl-obsidian/80 relative overflow-hidden border-sl-iron-600/30">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            size={300}
          />
          
          <div className="flex h-full flex-col lg:flex-row">
            {/* Left content */}
            <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-sl-auric-700" />
                  <span className="text-sl-auric-700 font-semibold">Interactive Demo</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-sl-pearl-100 to-sl-fog-300">
                  AI-Powered Solutions
                </h1>
                
                <p className="text-lg text-sl-fog-300 max-w-lg leading-relaxed">
                  Bring your business to life with intelligent automation. 
                  Our AI solutions create immersive experiences that capture attention 
                  and deliver measurable results in just 30 days.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-sl-auric-700" />
                    <span className="text-sl-pearl-100">Advanced Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-sl-auric-700" />
                    <span className="text-sl-pearl-100">Real-time Processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-sl-auric-700" />
                    <span className="text-sl-pearl-100">Seamless Integration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content - 3D Scene */}
            <div className="flex-1 relative min-h-[300px] lg:min-h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
              
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-sl-obsidian/20 pointer-events-none lg:hidden" />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sl-auric-700/10 border border-sl-auric-700/30 rounded-lg backdrop-blur-sm">
              <span className="w-2 h-2 bg-sl-auric-700 rounded-full animate-pulse"></span>
              <span className="text-sl-auric-700 text-sm font-medium">Click and drag to interact</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}