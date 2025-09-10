import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-sl-obsidian/60" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-orb animate-float opacity-40" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-orb animate-float opacity-30" style={{
      animationDelay: '2s'
    }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-orb animate-pulse-glow opacity-25" style={{
      animationDelay: '4s'
    }} />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
          <span className="bg-gradient-to-r from-text via-accent to-accent-light bg-clip-text text-transparent">
            Transform Your Ideas into
          </span>
          <br />
          <span className="text-accent">AI-Powered Solutions</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          Empowering enterprises to slash costs, boost efficiency, and automate workflows 
          with expertly crafted AI solutions delivered in just 30 days.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{
        animationDelay: '0.4s'
      }}>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-light transition-all duration-300 shadow-glow px-8 py-4 text-lg font-semibold">
            Start Your Transformation
          </Button>
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 px-8 py-4 text-lg font-semibold">
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{
        animationDelay: '0.6s'
      }}>
          
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;