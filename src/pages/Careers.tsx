import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, TrendingUp, Globe, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teamMember1 from "@/assets/team-member-1.png";
import teamMember2 from "@/assets/new-team-member-2.png";
import teamMember3 from "@/assets/team-member-3.png";
import teamMember4 from "@/assets/team-member-4.png";
import teamMember5 from "@/assets/team-member-5.png";
import teamMember6 from "@/assets/team-member-6.png";
const Careers = () => {
  const jobs = [{
    title: "Full Stack Engineer",
    location: "100% Remote",
    department: "Engineering",
    description: "We're looking for a versatile Full Stack Engineer to be a foundational member of our technical team. You'll be on the front lines, designing and building a diverse range of AI-powered solutions and applications for our clients.",
    responsibilities: [
      "Build End-to-End Solutions: Architect, develop, and deploy full-stack applications that serve as the backbone for our client's AI initiatives",
      "Rapid Prototyping: Quickly build functional prototypes and proofs-of-concept to demonstrate the value and feasibility of an AI solution",
      "Integrate Cutting-Edge Tech: Work directly with large language models (LLMs) and other machine learning APIs, integrating them seamlessly into new and existing applications",
      "Collaborate and Advise: Work closely with our consultants and clients to understand their needs, offer technical insights, and help shape the final product",
      "Drive Technical Excellence: Help establish best practices for our development process, ensuring what we build is scalable, maintainable, and robust"
    ],
    qualifications: [
      "3+ years of professional experience in full-stack development, with a portfolio of web applications you've helped build",
      "Strong proficiency in our core stack: TypeScript, Python, React, and Node.js",
      "Solid experience with cloud platforms (Netlify, Supabase, Google Cloud) and deploying applications",
      "A firm grasp of system design, APIs (REST/GraphQL), and relational databases",
      "Prior experience or a strong, demonstrable interest in working with AI/ML models is a huge plus"
    ],
    idealCandidate: [
      "A Natural Problem-Solver: You enjoy breaking down complex, ambiguous problems into manageable steps and finding elegant solutions",
      "Adaptable and Curious: You're excited by the prospect of jumping into new projects, learning new technologies, and working across different industries",
      "A Strong Communicator: You can clearly explain technical concepts to non-technical stakeholders and enjoy a collaborative process",
      "Product-Minded: You don't just write code; you think about the end-user and the business goals, building products that are both powerful and intuitive"
    ],
    perks: [
      "Meaningful Work: You'll see the direct impact of your work on our clients' success and be at the forefront of the AI revolution",
      "Constant Learning: The variety of projects ensures you'll never be bored and will constantly be adding new skills to your toolkit",
      "A 4-Day Work Week: We're serious about work-life balance. Enjoy a three-day weekend, every week",
      "Generous Time Off: With 25 paid holidays and a solid PTO package, we encourage you to disconnect and recharge",
      "Flexibility: We offer flexible schedules and remote work options. We trust you to get your work done"
    ]
  }];
  const teamMembers = [{
    image: teamMember1,
    position: "top-16 left-20",
    size: "w-56 h-56"
  }, {
    image: teamMember2,
    position: "top-32 right-20",
    size: "w-48 h-48"
  }, {
    image: teamMember3,
    position: "bottom-20 left-32",
    size: "w-64 h-64"
  }, {
    image: teamMember4,
    position: "top-80 right-32",
    size: "w-60 h-60"
  }, {
    image: teamMember5,
    position: "bottom-32 right-80",
    size: "w-52 h-52"
  }, {
    image: teamMember6,
    position: "bottom-80 left-80",
    size: "w-58 h-58"
  }];
  const handleEmailCV = () => {
    window.open('mailto:hello@sparkloomai.com?subject=CV Submission&body=Hi, I would like to submit my CV for consideration.', '_blank');
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <p className="text-primary text-lg font-medium mb-4">CAREERS</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">Join us now!</h1>
          </div>
        </div>

        {/* Floating Team Member Photos */}
        {teamMembers.map((member, index) => <div key={index} className={`absolute ${member.position} ${member.size} animate-fade-in hover-scale hidden lg:block z-20`} style={{
        animationDelay: `${index * 0.2}s`
      }}>
            <img src={member.image} alt={`Team member ${index + 1}`} className="w-full h-full object-cover rounded-3xl" />
          </div>)}

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              If you're passionate about AI and driven to shape the future, we offer:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Cutting-edge AI innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Work with the latest AI technologies and push the boundaries of what's possible. 
                Join a team that's defining the future of artificial intelligence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Revolutionary AI platform</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build products that transform how people interact with AI. Our platform 
                powers the next generation of intelligent applications.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Shape AI's future</h3>
              <p className="text-muted-foreground leading-relaxed">
                Help democratize AI and make it accessible to everyone. Your work will impact 
                millions and change how the world builds with artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground">
            Jobs
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">
                          {job.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          SparkloomAI • {job.location} • {job.department}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {job.description}
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-4">What You'll Be Doing:</h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-4">What You Bring to the Table:</h4>
                      <ul className="space-y-3">
                        {job.qualifications.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-4">Who You Are:</h4>
                      <ul className="space-y-3">
                        {job.idealCandidate.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-4">Why SparkloomAI?</h4>
                      <ul className="space-y-3">
                        {job.perks.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <Button 
                        onClick={() => window.open('mailto:hello@sparkloomai.com?subject=Full Stack Engineer Application&body=Hi, I would like to apply for the Full Stack Engineer position.', '_blank')}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
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
            <Button onClick={handleEmailCV} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Send us your CV
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Careers;