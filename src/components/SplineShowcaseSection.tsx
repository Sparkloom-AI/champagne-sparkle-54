import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Zap, Cpu, Sparkles } from "lucide-react";
import { useState, useEffect, useRef, lazy, Suspense } from "react";

// Dynamically import SplineScene only when needed
const SplineScene = lazy(() => import("@/components/ui/splite").then(module => ({
  default: module.SplineScene
})));
export function SplineShowcaseSection() {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const splineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoadSpline(true);
        observer.disconnect(); // Load only once
      }
    }, {
      threshold: 0.1
    });
    if (splineRef.current) {
      observer.observe(splineRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <section className="relative py-20 overflow-hidden">
      <Spotlight className="absolute inset-0" size={600} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interact with our cutting-edge 3D visualization
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
              </div>
              <p className="text-muted-foreground">
                Experience unprecedented performance with our optimized 3D engine.
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">AI Powered</h3>
              </div>
              <p className="text-muted-foreground">
                Advanced algorithms ensure smooth interactions and realistic rendering.
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Immersive</h3>
              </div>
              <p className="text-muted-foreground">
                Step into a world where digital meets reality with stunning visuals.
              </p>
            </Card>
          </div>
          
          <div ref={splineRef} className="relative h-[500px] rounded-lg overflow-hidden">
            {shouldLoadSpline ? (
              <Suspense 
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-card/50 backdrop-blur">
                    <div className="animate-pulse text-muted-foreground">Loading 3D Scene...</div>
                  </div>
                }
              >
                <SplineScene
                  scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                  className="w-full h-full"
                />
              </Suspense>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-card/50 backdrop-blur">
                <div className="text-muted-foreground">3D Scene Ready</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default SplineShowcaseSection;