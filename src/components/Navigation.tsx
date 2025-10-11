import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navigateToSection, useHashNavigation } from "@/lib/navigation";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleHashChange } = useHashNavigation();
  
  // Handle initial hash navigation when page loads
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          const navHeight = 80;
          const elementPosition = element.offsetTop - navHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [isHomePage]);
  
  // Handle hash changes for browser back/forward navigation
  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleHashChange]);
  
  const handleNavigation = (id: string) => {
    navigateToSection(id);
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-lg flex items-center justify-center">
            <span className="text-sl-obsidian font-bold text-sm">SP</span>
          </div>
          <span className="text-xl font-bold text-foreground">SparkloomAI</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleNavigation('process-section')} className="text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors">
            Process
          </button>
          <button onClick={() => handleNavigation('services')} className="text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors">
            Services
          </button>
          <button onClick={() => handleNavigation('results-section')} className="text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors">
            Results
          </button>
          <button onClick={() => handleNavigation('faq')} className="text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors">
            FAQ
          </button>
          <button onClick={() => handleNavigation('contact')} className="text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors">
            Contact
          </button>
          <a href="/about" className={`text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors ${location.pathname === '/about' ? 'text-accent' : ''}`}>
            About
          </a>
          <a href="/careers" className={`text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors ${location.pathname === '/careers' ? 'text-accent' : ''}`}>
            Careers
          </a>
        </div>

        {/* Desktop CTA Button */}
        <Button 
          variant="outline" 
          className="hidden md:flex border-accent-neon text-accent-neon hover:bg-accent-neon hover:text-sl-obsidian hover:shadow-neon transition-all duration-300" 
          onClick={() => window.open('https://calendar.app.google/hnNuZRVCdZwq5cMU8', '_blank')}
        >
          Talk to an Expert
        </Button>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg">
          <div className="flex flex-col space-y-4 p-6">
            <button onClick={() => handleNavigation('process-section')} className="text-left text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors">
              Process
            </button>
            <button onClick={() => handleNavigation('services')} className="text-left text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors">
              Services
            </button>
            <button onClick={() => handleNavigation('results-section')} className="text-left text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors">
              Results
            </button>
            <button onClick={() => handleNavigation('faq')} className="text-left text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors">
              FAQ
            </button>
            <button onClick={() => handleNavigation('contact')} className="text-left text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors">
              Contact
            </button>
            <a href="/about" className={`text-left text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors ${location.pathname === '/about' ? 'text-accent' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="/careers" className={`text-left text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors ${location.pathname === '/careers' ? 'text-accent' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Careers
            </a>
            <Button 
              variant="outline" 
              className="mt-4 border-accent-neon text-accent-neon hover:bg-accent-neon hover:text-sl-obsidian hover:shadow-neon transition-all duration-300" 
              onClick={() => {
                window.open('https://calendar.app.google/hnNuZRVCdZwq5cMU8', '_blank');
                setIsMobileMenuOpen(false);
              }}
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;