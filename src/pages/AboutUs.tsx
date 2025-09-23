import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import nilsImage from "@/assets/nils-effmert-new.png";
import moritzImage from "@/assets/moritz-florian-new.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-orb animate-float"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                <span className="text-accent-neon">SparkloomAI:</span> AI for Real Life
              </h1>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16 max-w-6xl">
          {/* Founders Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 italic">Our Mission is to empower organizations with accessible AI tools that solve real business problems and drive innovation.</h2>
              <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              {/* Nils Effmert */}
              <Card className="bg-gradient-surface border-border-accent shadow-card hover:shadow-glow transition-all duration-500 group">
                <CardContent className="p-4 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                    <div className="flex-1 max-w-prose">
                      <blockquote className="text-2xl text-text-muted italic leading-relaxed mb-6">
                        "We're here to make AI actually useful. We build smart, quality tools that help people and businesses get things done and unlock their full potential. It's all about creating tech that genuinely helps."
                      </blockquote>
                      <h3 className="text-2xl font-bold text-accent-neon mb-2 group-hover:text-accent-neon-light transition-colors">
                        Nils Effmert
                      </h3>
                      <p className="text-accent font-medium">Founder</p>
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={nilsImage}
                        alt="Nils Effmert"
                        className="w-3/4 sm:w-64 aspect-square mx-auto sm:mx-0 rounded-2xl object-cover border-2 border-accent-neon"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Moritz Florian */}
              <Card className="bg-gradient-surface border-border-accent shadow-card hover:shadow-glow transition-all duration-500 group">
                <CardContent className="p-4 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                    <div className="flex-1 max-w-prose">
                      <blockquote className="text-2xl text-text-muted italic leading-relaxed mb-6">
                        "AI has the power to spark some incredible new ideas and services that can benefit us all. At SparkloomAI, we're excited to be a part of that, building a future where technology empowers everyone."
                      </blockquote>
                      <h3 className="text-2xl font-bold text-accent-neon mb-2 group-hover:text-accent-neon-light transition-colors">
                        Moritz Florian
                      </h3>
                      <p className="text-accent font-medium">Founder</p>
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={moritzImage}
                        alt="Moritz Florian"
                        className="w-3/4 sm:w-64 aspect-square mx-auto sm:mx-0 rounded-2xl object-cover border-2 border-accent-neon"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16 bg-gradient-surface rounded-xl border border-border-neon shadow-neon">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can solve your real-world challenges and unlock new opportunities.
            </p>
            <button 
              onClick={() => window.open('https://calendar.app.google/hnNuZRVCdZwq5cMU8', '_blank')}
              className="bg-gradient-neon text-sl-obsidian px-8 py-4 rounded-lg font-bold text-lg hover:shadow-neon-strong hover:scale-105 transition-all duration-300"
            >
              Talk to an Expert
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;