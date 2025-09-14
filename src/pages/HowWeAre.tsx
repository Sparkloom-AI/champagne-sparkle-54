import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MeshGradientBackground } from "@/components/ui/mesh-gradient";
import nilsImage from "@/assets/nils-effmert.png";
import moritzImage from "@/assets/moritz-florian.jpg";

const HowWeAre = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <MeshGradientBackground speed={0.2} opacity={0.3} />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            We're using AI to solve real problems and make life easier.
          </h1>
        </div>
      </section>

      {/* Nils Effmert Section */}
      <section className="py-16 relative">
        <MeshGradientBackground speed={0.15} opacity={0.2} />
        <div className="container mx-auto px-6 relative z-10">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
                    "We make AI genuinely useful, building quality tools that help everyone reach their full potential."
                  </blockquote>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-accent">Nils Effmert</h3>
                    <p className="text-lg text-muted-foreground">Founder</p>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden bg-background">
                    <img 
                      src={nilsImage} 
                      alt="Nils Effmert, Founder of SparkloomAI" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Moritz Florian Section */}
      <section className="py-16 relative">
        <MeshGradientBackground speed={0.1} opacity={0.15} />
        <div className="container mx-auto px-6 relative z-10">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
                    "We're using AI to spark innovation and create helpful new services that benefit us all."
                  </blockquote>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-accent">Moritz Florian</h3>
                    <p className="text-lg text-muted-foreground">Founder</p>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden bg-background">
                    <img 
                      src={moritzImage} 
                      alt="Moritz Florian, Founder of SparkloomAI" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowWeAre;