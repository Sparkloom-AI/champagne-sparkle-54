import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const teamMembers = [
    { src: "/src/assets/team-member-1.png", alt: "Team Member 1" },
    { src: "/src/assets/new-team-member-2.png", alt: "Team Member 2" },
    { src: "/src/assets/team-member-3.png", alt: "Team Member 3" },
    { src: "/src/assets/team-member-4.png", alt: "Team Member 4" },
    { src: "/src/assets/team-member-5.png", alt: "Team Member 5" },
    { src: "/src/assets/team-member-6.png", alt: "Team Member 6" },
  ];

  const jobs = [
    {
      title: "Full Stack Engineer",
      details: "100% Remote • Engineering • 3+ years",
      description: "Build end-to-end AI solutions and prototypes for diverse client projects"
    },
    {
      title: "Senior Full Stack Engineer", 
      details: "100% Remote • Engineering • 7+ years",
      description: "Lead complex projects and mentor engineers while architecting scalable solutions"
    },
    {
      title: "Software Developer",
      details: "100% Remote • Engineering • 1-2 years", 
      description: "Learn and contribute to AI-powered applications with mentorship from senior engineers"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Join us <span className="text-accent-neon">now!</span>
          </h1>
          
          {/* Team Photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {teamMembers.map((member, index) => (
              <OptimizedImage
                key={index}
                src={member.src}
                alt={member.alt}
                className="w-full h-32 object-cover rounded-lg"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
            ))}
          </div>

          {/* Benefits */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              If you're passionate about AI and driven to shape the future, we offer:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-accent-neon/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">M</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cutting-edge AI innovation</h3>
                <p className="text-text-muted">
                  Work with the latest AI technologies and push the boundaries of what's possible.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-accent-neon/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Revolutionary AI platform</h3>
                <p className="text-text-muted">
                  Build products that transform how people interact with AI.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-accent-neon/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Shape AI's future</h3>
                <p className="text-text-muted">
                  Help democratize AI and make it accessible to everyone.
                </p>
              </Card>
            </div>
          </div>

          {/* Jobs */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Jobs</h2>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <Card key={index} className="p-6 hover:bg-surface-hover transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-text-muted text-sm">{job.details}</p>
                      <p className="text-text-muted mt-2">{job.description}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Apply →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;