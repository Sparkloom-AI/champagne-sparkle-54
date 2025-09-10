import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-sl-obsidian relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-accent opacity-60" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to <span className="text-accent">Transform?</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Book your demo today and discover how we can revolutionize your operations in just 30 days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-surface border-border-accent animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get Started Today</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">First Name</label>
                  <Input 
                    className="bg-sl-graphite-700 border-border text-foreground focus:border-accent" 
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Last Name</label>
                  <Input 
                    className="bg-sl-graphite-700 border-border text-foreground focus:border-accent" 
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Email</label>
                <Input 
                  type="email"
                  className="bg-sl-graphite-700 border-border text-foreground focus:border-accent" 
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Company</label>
                <Input 
                  className="bg-sl-graphite-700 border-border text-foreground focus:border-accent" 
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Tell us about your project</label>
                <Textarea 
                  className="bg-sl-graphite-700 border-border text-foreground focus:border-accent min-h-[120px]" 
                  placeholder="Describe your automation challenges and goals..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent-light shadow-glow py-3 font-semibold"
              >
                Book Your Demo
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-text-muted leading-relaxed mb-8">
                Ready to slash costs and automate your workflows? Our experts are standing by to discuss 
                your specific needs and show you exactly how we can transform your operations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center border border-border-accent">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-text-muted">hello@sparklooomai.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center border border-border-accent">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-text-muted">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center border border-border-accent">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Office</p>
                  <p className="text-text-muted">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-lg border border-border-accent">
              <h4 className="font-semibold text-foreground mb-3">Response Time</h4>
              <p className="text-text-muted text-sm">
                We typically respond within 2 hours during business hours (9 AM - 6 PM PST, Monday - Friday).
                For urgent inquiries, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;