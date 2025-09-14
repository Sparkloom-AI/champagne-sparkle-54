import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import moritzPhoto from "@/assets/moritz-florian.png";
import nilsPhoto from "@/assets/nils-effmert.png";

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
              <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
                Hey there, we're SparkloomAI. We're all about using AI to tackle real-world problems and just make everyday life a bit easier. Think of us as the bridge between complicated tech and useful, everyday solutions.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16 max-w-6xl">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-surface border-border-accent shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-accent-neon rounded-full mr-3"></div>
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-text-muted leading-relaxed">
                  To use AI to help solve some of society's biggest challenges and make life simpler and better for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-surface border-border-accent shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-text-muted leading-relaxed">
                  We see a future where AI is a positive force in the world, helping people everywhere to be more creative, productive, and inspired.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Founders Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">A Few Words From Us</h2>
              <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
            </div>

            <div className="space-y-16">
              {/* Nils Effmert */}
              <Card className="bg-gradient-surface border-border-accent shadow-card hover:shadow-glow transition-all duration-500 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0 items-center min-h-[400px]">
                    <div className="p-12 md:p-16">
                      <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-3 group-hover:text-accent-neon transition-colors">
                        Nils Effmert
                      </h3>
                      <p className="text-xl text-accent font-medium mb-8">Founder</p>
                      <blockquote className="text-xl md:text-2xl text-text-muted leading-relaxed font-light">
                        "We're here to make AI actually useful. We build smart, quality tools that help people and businesses get things done and unlock their full potential. It's all about creating tech that genuinely helps."
                      </blockquote>
                    </div>
                    <div className="relative h-full min-h-[400px]">
                      <img 
                        src={nilsPhoto} 
                        alt="Nils Effmert, Founder of SparkloomAI"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Moritz Florian */}
              <Card className="bg-gradient-surface border-border-accent shadow-card hover:shadow-glow transition-all duration-500 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0 items-center min-h-[400px]">
                    <div className="p-12 md:p-16">
                      <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-3 group-hover:text-accent-neon transition-colors">
                        Moritz Florian
                      </h3>
                      <p className="text-xl text-accent font-medium mb-8">Founder</p>
                      <blockquote className="text-xl md:text-2xl text-text-muted leading-relaxed font-light">
                        "AI has the power to spark some incredible new ideas and services that can benefit us all. At SparkloomAI, we're excited to be a part of that, building a future where technology empowers everyone."
                      </blockquote>
                    </div>
                    <div className="relative h-full min-h-[400px]">
                      <img 
                        src={moritzPhoto} 
                        alt="Moritz Florian, Founder of SparkloomAI"
                        className="w-full h-full object-cover"
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