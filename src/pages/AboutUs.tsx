import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import moritzPhoto from "@/assets/moritz-florian.png";
import nilsPhoto from "@/assets/nils-effmert.png";
const AboutUs = () => {
  return <div className="min-h-screen bg-background">
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

        
      </main>
      <Footer />
    </div>;
};
export default AboutUs;