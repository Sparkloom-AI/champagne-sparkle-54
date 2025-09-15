const Footer = () => {
  return <footer className="bg-sl-basalt-900 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-lg flex items-center justify-center">
                <span className="text-sl-obsidian font-bold text-sm">SL</span>
              </div>
              <span className="text-xl font-bold text-foreground">SparkloomAI</span>
            </div>
            <p className="text-text-muted leading-relaxed max-w-md">To empower organizations with accessible AI tools that solve real business problems and drive innovation.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#process-section" className="text-text-muted hover:text-accent transition-colors">Process</a></li>
              <li><a href="#services" className="text-text-muted hover:text-accent transition-colors">Services</a></li>
              <li><a href="#results-section" className="text-text-muted hover:text-accent transition-colors">Results</a></li>
              <li><a href="#faq" className="text-text-muted hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-text-muted hover:text-accent transition-colors">Contact</a></li>
              <li><a href="/about" className="text-text-muted hover:text-accent transition-colors">About</a></li>
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