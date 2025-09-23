import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import nilsImage from "@/assets/nils-effmert-new.png";
import moritzImage from "@/assets/moritz-florian-new.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Meet the <span className="text-accent-neon">Visionaries</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Nils */}
            <div className="space-y-6">
              <img
                src={nilsImage}
                alt="Nils Effmert - Founder"
                className="w-full h-80 object-cover rounded-lg"
                loading="eager"
                decoding="async"
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-accent">Nils Effmert</h2>
                <p className="text-text-muted">
                  We're here to make AI actually useful. We build smart, quality tools 
                  that help people and businesses get things done and unlock their full potential.
                </p>
              </div>
            </div>

            {/* Moritz */}
            <div className="space-y-6">
              <img
                src={moritzImage}
                alt="Moritz Florian - Founder"
                className="w-full h-80 object-cover rounded-lg"
                loading="eager"
                decoding="async"
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-accent">Moritz Florian</h2>
                <p className="text-text-muted">
                  AI has the power to spark some incredible new ideas and services that 
                  can benefit us all. At SparkloomAI, we're excited to be a part of that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;