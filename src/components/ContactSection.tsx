import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-sl-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full h-[1000px] sm:h-[600px] bg-sl-obsidian/80 relative overflow-hidden border-sl-iron-600/30 rounded-2xl hover:border-accent-neon/20 hover:shadow-neon/30 transition-all duration-500">
          
          <div className="flex h-full flex-col lg:flex-row">
            {/* Left content */}
            <div className="flex-none sm:flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-sl-pearl-100 to-sl-fog-300">
                  Bring your business to life with intelligent automation.
                </h1>
                
                <p className="text-lg text-sl-fog-300 max-w-lg leading-relaxed">
                  Our AI solutions create immersive experiences that capture attention 
                  and deliver measurable results in just 30 days.
                </p>

                {/* Interactive Button */}
                <div className="pt-8">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-neon/10 to-sl-auric-700/10 border border-accent-neon/30 rounded-lg backdrop-blur-sm hover:bg-accent-neon/20 hover:shadow-neon transition-all duration-300 cursor-pointer group" onClick={() => {
                  window.open('https://calendar.app.google/hnNuZRVCdZwq5cMU8', '_blank');
                }}>
                    <span className="w-2 h-2 bg-accent-neon rounded-full animate-pulse group-hover:shadow-neon-strong"></span>
                    <span className="text-accent-neon font-medium group-hover:text-accent-neon-light transition-colors">Talk to an Expert</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right content - 3D Robot Scene */}
            <div className="flex-1 relative h-[800px] py-8 lg:h-auto lg:py-0 lg:min-h-full">
              <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
              
              {/* Overlay gradient for better text readability on mobile */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-sl-obsidian/20 pointer-events-none lg:hidden" />
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default ContactSection;