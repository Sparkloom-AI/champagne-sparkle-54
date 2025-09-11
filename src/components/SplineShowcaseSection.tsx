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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Interactive Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our cutting-edge 3D showcase powered by advanced technology
          </p>
        </div>
        
        <div ref={splineRef} className="relative">
          <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" />
          
          <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Lightning Fast</h3>
                    <p className="text-sm text-muted-foreground">Optimized performance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Advanced Tech</h3>
                    <p className="text-sm text-muted-foreground">Cutting-edge solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Interactive</h3>
                    <p className="text-sm text-muted-foreground">Engaging experiences</p>
                  </div>
                </div>
              </div>
              
              <div className="h-96 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
                {shouldLoadSpline ? (
                  <Suspense fallback={
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                      <span className="text-muted-foreground">Loading 3D Experience...</span>
                    </div>
                  }>
                    <SplineScene scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" className="w-full h-full" />
                  </Suspense>
                ) : (
                  <div className="text-center">
                    <div className="animate-pulse">
                      <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4"></div>
                      <p className="text-muted-foreground">3D Experience Loading...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
export default SplineShowcaseSection;