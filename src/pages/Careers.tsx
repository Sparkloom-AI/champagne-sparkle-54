import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import moritzImage from "@/assets/moritz-florian-new.png";
import nilsImage from "@/assets/nils-effmert-new.png";

const Careers = () => {
  const jobs = [
    {
      title: "Full Stack Engineer",
      location: "100% Remote",
      department: "Engineering"
    }
  ];

  const teamMembers = [
    { image: moritzImage, bgColor: "bg-blue-400", position: "top-16 right-32" },
    { image: nilsImage, bgColor: "bg-purple-400", position: "top-32 right-4" },
    { image: moritzImage, bgColor: "bg-pink-400", position: "top-64 right-80" },
    { image: nilsImage, bgColor: "bg-blue-300", position: "bottom-32 right-48" },
    { image: moritzImage, bgColor: "bg-yellow-400", position: "bottom-16 right-16" }
  ];

  const handleEmailCV = () => {
    window.open('mailto:hello@sparkloomai.com?subject=CV Submission&body=Hi, I would like to submit my CV for consideration.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-primary text-lg font-medium mb-4">CAREERS</p>
            <h1 className="text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Join us in changing the world
            </h1>
          </div>
        </div>

        {/* Floating Team Member Cards */}
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className={`absolute ${member.position} w-32 h-32 lg:w-40 lg:h-40 ${member.bgColor} rounded-3xl p-4 animate-fade-in hover-scale hidden md:block`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img 
              src={member.image} 
              alt={`Team member ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      </section>

      {/* Jobs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground">
            Jobs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {jobs.map((job, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50 bg-card"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {job.location} • {job.department}
                      </p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nothing for you Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Nothing for you?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your CV and we'll keep you in mind for future opportunities.
            </p>
            <Button 
              onClick={handleEmailCV}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send us your CV
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;