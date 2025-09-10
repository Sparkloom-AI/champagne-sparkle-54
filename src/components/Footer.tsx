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
              <span className="text-xl font-bold text-foreground">SparkLoom AI</span>
            </div>
            <p className="text-text-muted leading-relaxed max-w-md">
              Empowering enterprise operations teams to transform their workflows with 
              AI-powered solutions delivered in just 30 days.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-text-muted hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="text-text-muted hover:text-accent transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-text-muted hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-text-muted hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-text-muted">
              <li>hello@sparklooomai.com</li>
              
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-subtle text-sm">© SparkLoomAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-text-subtle hover:text-accent text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-subtle hover:text-accent text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-text-subtle hover:text-accent text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;