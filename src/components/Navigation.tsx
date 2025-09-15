import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const handleNavigation = (id: string) => {
    if (isHomePage) {
      // If on homepage, scroll to section
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // If on other pages, navigate to homepage with anchor
      window.location.href = `/#${id}`;
    }
  };

  return <nav className="fixed top-0 left-0 right-0 z-50 bg-sl-obsidian/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-lg flex items-center justify-center">
            <span className="text-sl-obsidian font-bold text-sm">SP</span>
          </div>
          <span className="text-xl font-bold text-foreground">SparkloomAI</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleNavigation('process-section')} className="text-text-muted hover:text-accent transition-colors">
            Process
          </button>
          <button onClick={() => handleNavigation('services')} className="text-text-muted hover:text-accent transition-colors">
            Services
          </button>
          <button onClick={() => handleNavigation('results-section')} className="text-text-muted hover:text-accent transition-colors">
            Results
          </button>
          <button onClick={() => handleNavigation('faq')} className="text-text-muted hover:text-accent transition-colors">
            FAQ
          </button>
          <button onClick={() => handleNavigation('contact')} className="text-text-muted hover:text-accent transition-colors">
            Contact
          </button>
          <a href="/about" className={`text-text-muted hover:text-accent transition-colors ${location.pathname === '/about' ? 'text-accent' : ''}`}>
            About
          </a>
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