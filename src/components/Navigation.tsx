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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
          <div className="w-9 h-9 bg-gradient-to-r from-accent to-accent-light rounded-lg flex items-center justify-center">
            <span className="text-sl-obsidian font-bold text-base">SP</span>
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">SparkloomAI</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <button onClick={() => handleNavigation('process-section')} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group">
            Process
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-neon transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => handleNavigation('services')} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-neon transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => handleNavigation('results-section')} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group">
            Results
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-neon transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => handleNavigation('faq')} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group">
            FAQ
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-neon transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => handleNavigation('contact')} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-neon transition-all duration-300 group-hover:w-full"></span>
          </button>
          <a href="/our-mission" className={`text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group ${location.pathname === '/our-mission' ? 'text-accent' : ''}`}>
            Our Mission
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-neon transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/careers" className={`text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group ${location.pathname === '/careers' ? 'text-accent' : ''}`}>
            Careers
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-neon transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Desktop CTA Button */}
        <Button 
          variant="default" 
          className="hidden md:flex bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105" 
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
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg">
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
            <a href="/our-mission" className={`text-left text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors ${location.pathname === '/our-mission' ? 'text-accent' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Our Mission
            </a>
            <a href="/careers" className={`text-left text-base font-semibold text-muted-foreground hover:text-accent-neon transition-colors ${location.pathname === '/careers' ? 'text-accent' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Careers
            </a>
            <Button 
              variant="default" 
              className="mt-4 bg-foreground text-background hover:bg-foreground/90 rounded-full w-full" 
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