import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teamMember1 from "@/assets/team-member-1.png";
import teamMember2 from "@/assets/team-member-2.png";
import teamMember3 from "@/assets/team-member-3.png";
import teamMember4 from "@/assets/team-member-4.png";
import teamMember5 from "@/assets/team-member-5.png";
import teamMember6 from "@/assets/team-member-6.png";

const Careers = () => {
  const jobs = [
    {
      title: "Full Stack Engineer",
      location: "100% Remote",
      department: "Engineering"
    }
  ];

  const teamMembers = [
    { image: teamMember1, position: "top-20 right-1/2", size: "w-48 h-48" },
    { image: teamMember2, position: "top-60 left-1/3", size: "w-40 h-40" },
    { image: teamMember3, position: "bottom-60 left-1/2", size: "w-44 h-44" },
    { image: teamMember4, position: "top-20 right-1/4", size: "w-96 h-96" },
    { image: teamMember5, position: "bottom-20 right-1/3", size: "w-60 h-60" },
    { image: teamMember6, position: "bottom-20 right-1/6", size: "w-52 h-52" }
  ];

  const handleEmailCV = () => {
    window.open('mailto:hello@sparkloomai.com?subject=CV Submission&body=Hi, I would like to submit my CV for consideration.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <p className="text-primary text-lg font-medium mb-4">CAREERS</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Join us in changing the world
            </h1>
          </div>
        </div>

        {/* Floating Team Member Cards */}
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className={`absolute ${member.position} ${member.size} bg-sl-slate-800/50 border-sl-iron-600/30 backdrop-blur-sm rounded-3xl p-4 animate-fade-in hover-scale hidden lg:block z-20 hover:bg-sl-slate-800/70 hover:-translate-y-2 transition-all duration-500 hover:shadow-neon hover:border-accent-neon/50`}
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