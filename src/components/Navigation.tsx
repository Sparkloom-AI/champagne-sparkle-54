import { Button } from "@/components/ui/button";
const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-sl-obsidian/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-lg flex items-center justify-center">
            <span className="text-sl-obsidian font-bold text-sm">SP</span>
          </div>
          <span className="text-xl font-bold text-foreground">SparkloomAI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('process-section')} className="text-text-muted hover:text-accent transition-colors">
            Process
          </button>
          <button onClick={() => scrollToSection('services')} className="text-text-muted hover:text-accent transition-colors">
            Services
          </button>
          <a href="/about" className="text-text-muted hover:text-accent transition-colors">
            About
          </a>
          <button onClick={() => scrollToSection('faq')} className="text-text-muted hover:text-accent transition-colors">
            FAQ
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-text-muted hover:text-accent transition-colors">
            Contact
          </button>
        </div>

        <Button variant="outline" className="border-accent-neon text-accent-neon hover:bg-accent-neon hover:text-sl-obsidian hover:shadow-neon transition-all duration-300" onClick={() => {
        window.open('https://calendar.app.google/hnNuZRVCdZwq5cMU8', '_blank');
      }}>
          Talk to an Expert
        </Button>
      </div>
    </nav>;
};
export default Navigation;