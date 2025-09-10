import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Zap, Cpu, Sparkles } from "lucide-react";
export function SplineShowcaseSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-sl-obsidian/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience AI Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Interactive showcase of cutting-edge AI technology in action
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Instant AI responses" },
              { icon: Cpu, title: "Smart Processing", desc: "Advanced algorithms" },
              { icon: Sparkles, title: "Seamless Integration", desc: "Works with your systems" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-sl-slate-800/30 border-sl-iron-600/30 backdrop-blur-sm hover:bg-sl-slate-800/50 transition-all duration-300 group">
                  <div className="p-8">
                    <Icon className="w-12 h-12 text-sl-auric-700 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-sl-auric-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <Spotlight className="absolute top-0 left-0 w-full h-full pointer-events-none" />
    </section>
  );
}