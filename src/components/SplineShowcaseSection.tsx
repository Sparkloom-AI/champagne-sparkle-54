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
  return;
}
export default SplineShowcaseSection;