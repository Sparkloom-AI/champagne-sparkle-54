import { navigateToSection } from "@/lib/navigation";

const Footer = () => {
  return <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-r from-accent to-accent-light rounded-lg flex items-center justify-center">
                <span className="text-sl-obsidian font-bold text-base">SP</span>
              </div>
              <span className="text-xl font-bold text-foreground">SparkloomAI</span>
            </div>
            <p className="text-text-muted leading-relaxed max-w-md">To empower organizations with accessible AI tools that solve real business problems and drive innovation.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateToSection('process-section')} className="text-text-muted hover:text-accent transition-colors">Process</button></li>
              <li><button onClick={() => navigateToSection('services')} className="text-text-muted hover:text-accent transition-colors">Services</button></li>
              <li><button onClick={() => navigateToSection('results-section')} className="text-text-muted hover:text-accent transition-colors">Results</button></li>
              <li><button onClick={() => navigateToSection('faq')} className="text-text-muted hover:text-accent transition-colors">FAQ</button></li>
              <li><button onClick={() => navigateToSection('contact')} className="text-text-muted hover:text-accent transition-colors">Contact</button></li>
              <li><a href="/our-mission" className="text-text-muted hover:text-accent transition-colors">Our Mission</a></li>
              <li><a href="/careers" className="text-text-muted hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-text-muted">
              <li>hello@sparklooomai.com</li>
              <li>5214F Diamond Heights Blvd</li>
              <li>94131 San Francisco, United States</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-subtle text-sm">© SparkloomAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-text-subtle hover:text-accent text-sm transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-text-subtle hover:text-accent text-sm transition-colors">Terms of Service</a>
            <a href="/cookie-policy" className="text-text-subtle hover:text-accent text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;