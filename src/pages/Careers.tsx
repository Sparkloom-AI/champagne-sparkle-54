import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Mail, TrendingUp, Globe, Zap, X } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teamMember1 from "@/assets/team-member-1.png";
import teamMember2 from "@/assets/new-team-member-2.png";
import teamMember3 from "@/assets/team-member-3.png";
import teamMember4 from "@/assets/team-member-4.png";
import teamMember5 from "@/assets/team-member-5.png";
import teamMember6 from "@/assets/team-member-6.png";
const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  
  const jobs = [
    {
      title: "Full Stack Engineer",
      location: "100% Remote",
      department: "Engineering",
      experience: "3+ years",
      description: "Build end-to-end AI solutions and prototypes for diverse client projects",
      fullDescription: {
        whoWeAre: "At SparkloomAI, we bridge the gap between the potential of Artificial Intelligence and real-world business results. We're an AI consulting startup that partners with companies to design, build, and deploy custom AI solutions that solve their most pressing challenges. Our goal is to cut through the hype and deliver practical, high-impact systems that work.\n\nWe are a passionate team of builders, problem-solvers, and strategists who thrive in a dynamic, collaborative environment. If you're excited by the prospect of applying cutting-edge technology to a variety of business domains, you'll fit right in.",
        role: "We're looking for a versatile Full Stack Engineer to be a foundational member of our technical team. This isn't a role where you'll be working on a single product for years. Instead, you'll be on the front lines, designing and building a diverse range of AI-powered solutions and applications for our clients.\n\nYou'll be a key player in the entire project lifecycle, from initial technical discovery and whiteboarding with clients to hands-on development and deployment. This role is perfect for a builder who loves variety and wants to make a tangible impact on different businesses.",
        responsibilities: [
          "Build End-to-End Solutions: Architect, develop, and deploy full-stack applications that serve as the backbone for our client's AI initiatives.",
          "Rapid Prototyping: Quickly build functional prototypes and proofs-of-concept to demonstrate the value and feasibility of an AI solution.",
          "Integrate Cutting-Edge Tech: Work directly with large language models (LLMs) and other machine learning APIs, integrating them seamlessly into new and existing applications.",
          "Collaborate and Advise: Work closely with our consultants and clients to understand their needs, offer technical insights, and help shape the final product.",
          "Drive Technical Excellence: Help establish best practices for our development process, ensuring what we build is scalable, maintainable, and robust."
        ],
        qualifications: [
          "3+ years of professional experience in full-stack development, with a portfolio of web applications you've helped build.",
          "Strong proficiency in our core stack: TypeScript, Python, React, and Node.js.",
          "Solid experience with cloud platforms and deploying applications.",
          "A firm grasp of system design, APIs (REST/GraphQL), and relational databases.",
          "A bachelor's degree in Computer Science is great, but we're more interested in what you can build.",
          "Prior experience or a strong, demonstrable interest in working with AI/ML models is a huge plus."
        ],
        idealCandidate: [
          "A Natural Problem-Solver: You enjoy breaking down complex, ambiguous problems into manageable steps and finding elegant solutions.",
          "Adaptable and Curious: You're excited by the prospect of jumping into new projects, learning new technologies, and working across different industries.",
          "A Strong Communicator: You can clearly explain technical concepts to non-technical stakeholders and enjoy a collaborative process.",
          "Product-Minded: You don't just write code; you think about the end-user and the business goals, building products that are both powerful and intuitive."
        ],
        perks: [
          "Meaningful Work: You'll see the direct impact of your work on our clients' success and be at the forefront of the AI revolution.",
          "Constant Learning: The variety of projects ensures you'll never be bored and will constantly be adding new skills to your toolkit.",
          "A 4-Day Work Week: We're serious about work-life balance. Enjoy a three-day weekend, every week.",
          "Generous Time Off: With 25 paid holidays and a solid PTO package, we encourage you to disconnect and recharge.",
          "Flexibility: We offer flexible schedules and remote work options. We trust you to get your work done."
        ]
      }
    },
    {
      title: "Senior Full Stack Engineer", 
      location: "100% Remote",
      department: "Engineering",
      experience: "7+ years",
      description: "Lead complex projects and mentor engineers while architecting scalable solutions",
      fullDescription: {
        whoWeAre: "At SparkloomAI, we bridge the gap between the potential of Artificial Intelligence and real-world business results. We're an AI consulting startup that partners with companies to design, build, and deploy custom AI solutions that solve their most pressing challenges. Our goal is to cut through the hype and deliver practical, high-impact systems that work.",
        role: "As a Senior Full Stack Engineer, you will be a technical cornerstone of our consulting team. You'll take the lead on our most complex client projects, architecting robust solutions and guiding them from initial concept to full-scale deployment. This role is for a seasoned builder who is passionate about not only solving challenging technical problems but also mentoring others and shaping the technical direction of our projects.",
        responsibilities: [
          "Architect and Lead: Design and lead the development of sophisticated, scalable full-stack applications for our diverse clientele.",
          "Drive Technical Strategy: Make critical decisions on architecture, frameworks, and tooling for client projects, ensuring long-term success and scalability.",
          "Mentor and Guide: Act as a technical mentor for other engineers, sharing your expertise, performing code reviews, and fostering a culture of quality and growth.",
          "Solve the Hard Problems: Tackle the most ambiguous and challenging technical hurdles, from complex AI integrations to performance optimization at scale.",
          "Client Collaboration: Serve as a key technical advisor in client conversations, helping translate business needs into a clear technical vision and roadmap."
        ],
        qualifications: [
          "7+ years of professional experience in full-stack development, with a track record of leading complex projects from start to finish.",
          "Expert-level proficiency in our core stack: TypeScript, Python, React, and Node.js.",
          "A deep understanding of system architecture, cloud platforms (GCP, AWS or Azure), CI/CD, and security best practices.",
          "Proven experience designing and building complex systems, working with APIs (REST/GraphQL), and managing databases.",
          "Experience or a strong passion for integrating AI/ML models into applications."
        ],
        idealCandidate: [
          "A natural leader and a force multiplier for the team.",
          "You are comfortable with ambiguity and can chart a path forward on complex, loosely defined problems.",
          "You have a strategic mindset, always thinking about the long-term impact of your technical decisions."
        ],
        perks: [
          "Meaningful Work: You'll see the direct impact of your work on our clients' success and be at the forefront of the AI revolution.",
          "A 4-Day Work Week: We're serious about work-life balance. Enjoy a three-day weekend, every week.",
          "Generous Time Off: With 25 paid holidays and a solid PTO package, we encourage you to disconnect and recharge.",
          "Flexibility: We offer flexible schedules and remote work options. We trust you to get your work done."
        ]
      }
    },
    {
      title: "Software Developer",
      location: "100% Remote", 
      department: "Engineering",
      experience: "1-2 years",
      description: "Learn and contribute to AI-powered applications with mentorship from senior engineers",
      fullDescription: {
        whoWeAre: "At SparkloomAI, we bridge the gap between the potential of Artificial Intelligence and real-world business results. We're an AI consulting startup that partners with companies to design, build, and deploy custom AI solutions that solve their most pressing challenges. Our goal is to cut through the hype and deliver practical, high-impact systems that work.",
        role: "As a Software Developer, you are a rising talent eager to build foundational skills and grow with us. You will be a vital member of our project teams, contributing to the development of innovative AI-powered applications for our clients. This is an incredible opportunity to learn from senior engineers, work with cutting-edge technology, and build a strong foundation for your career in software and AI.",
        responsibilities: [
          "Contribute to Core Projects: Write clean, well-tested code for new features and applications under the guidance of senior engineers.",
          "Learn and Apply: Quickly learn and apply best practices in modern web development, cloud deployment, and AI integration.",
          "Assist in Development: Support the team by debugging issues, writing documentation, and assisting in the build-out of prototypes and client solutions.",
          "Collaborate Actively: Participate in team meetings, code reviews, and brainstorming sessions, bringing a fresh perspective and a hunger to learn.",
          "Tackle New Challenges: Work on a variety of tasks across the stack, gaining exposure to front-end, back-end, and cloud infrastructure."
        ],
        qualifications: [
          "1-2 years of software development experience, or exceptional university, bootcamp, or personal project work.",
          "A solid foundation in programming languages like JavaScript/TypeScript or Python.",
          "Familiarity with web development concepts and frameworks (experience with React or Node.js is a plus).",
          "A basic understanding of Git, APIs, and databases.",
          "An immense passion for technology and an eagerness to learn and grow."
        ],
        idealCandidate: [
          "You are highly curious, motivated, and a fast learner.",
          "You thrive in a collaborative environment and are not afraid to ask questions.",
          "You have a can-do attitude and are excited to contribute to a growing startup."
        ],
        perks: [
          "Meaningful Work: You'll see the direct impact of your work on our clients' success and be at the forefront of the AI revolution.",
          "A 4-Day Work Week: We're serious about work-life balance. Enjoy a three-day weekend, every week.",
          "Generous Time Off: With 25 paid holidays and a solid PTO package, we encourage you to disconnect and recharge.",
          "Flexibility: We offer flexible schedules and remote work options. We trust you to get your work done."
        ]
      }
    }
  ];
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

  const handleApply = (jobTitle: string) => {
    window.open(`mailto:hello@sparkloomai.com?subject=Application for ${jobTitle}&body=Hi, I would like to apply for the ${jobTitle} position.`, '_blank');
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-30">
          {/* Desktop Layout - Grid with headline and images */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:grid-rows-4 lg:gap-6 lg:h-[600px] items-center">
            {/* Headline area */}
            <div className="lg:col-span-2 lg:row-span-2 lg:row-start-2 flex flex-col justify-center">
              <p className="text-primary text-lg font-medium mb-4">CAREERS</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">Join us now!</h1>
            </div>
            
            {/* Image collage layout */}
            <div className="lg:col-start-3 lg:row-start-1 lg:w-48 lg:h-48 animate-fade-in hover-scale" style={{animationDelay: '0s'}}>
              <img src={teamMember1} alt="Team member 1" className="w-full h-full object-cover rounded-3xl" />
            </div>
            <div className="lg:col-start-5 lg:row-start-1 lg:w-56 lg:h-56 animate-fade-in hover-scale" style={{animationDelay: '0.2s'}}>
              <img src={teamMember3} alt="Team member 3" className="w-full h-full object-cover rounded-3xl" />
            </div>
            <div className="lg:col-start-4 lg:row-start-2 lg:w-52 lg:h-52 animate-fade-in hover-scale" style={{animationDelay: '0.4s'}}>
              <img src={teamMember2} alt="Team member 2" className="w-full h-full object-cover rounded-3xl" />
            </div>
            <div className="lg:col-start-3 lg:row-start-3 lg:w-60 lg:h-60 animate-fade-in hover-scale" style={{animationDelay: '0.6s'}}>
              <img src={teamMember4} alt="Team member 4" className="w-full h-full object-cover rounded-3xl" />
            </div>
            <div className="lg:col-start-5 lg:row-start-3 lg:w-48 lg:h-48 animate-fade-in hover-scale" style={{animationDelay: '0.8s'}}>
              <img src={teamMember5} alt="Team member 5" className="w-full h-full object-cover rounded-3xl" />
            </div>
            <div className="lg:col-start-4 lg:row-start-4 lg:w-52 lg:h-52 animate-fade-in hover-scale" style={{animationDelay: '1s'}}>
              <img src={teamMember6} alt="Team member 6" className="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>

          {/* Tablet Layout - 2 column grid */}
          <div className="hidden md:block lg:hidden">
            <div className="text-center mb-12">
              <p className="text-primary text-lg font-medium mb-4">CAREERS</p>
              <h1 className="text-5xl font-bold text-foreground mb-8 leading-tight">Join us now!</h1>
            </div>
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="w-48 h-48 mx-auto animate-fade-in hover-scale" style={{animationDelay: `${index * 0.2}s`}}>
                  <img src={member.image} alt={`Team member ${index + 1}`} className="w-full h-full object-cover rounded-3xl" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Single column */}
          <div className="block md:hidden">
            <div className="text-center mb-12">
              <p className="text-primary text-lg font-medium mb-4">CAREERS</p>
              <h1 className="text-4xl font-bold text-foreground mb-8 leading-tight">Join us now!</h1>
            </div>
            <div className="flex flex-col space-y-6 items-center">
              {teamMembers.slice(0, 4).map((member, index) => (
                <div key={index} className="w-40 h-40 animate-fade-in hover-scale" style={{animationDelay: `${index * 0.2}s`}}>
                  <img src={member.image} alt={`Team member ${index + 1}`} className="w-full h-full object-cover rounded-3xl" />
                </div>
              ))}
            </div>
          </div>
        </div>

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
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {jobs.map((job, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50 bg-card">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.department}</span>
                            <span>•</span>
                            <span>{job.experience}</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {job.description}
                          </p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                      {job.title}
                    </DialogTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.experience}</span>
                    </div>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Who We Are</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {job.fullDescription.whoWeAre}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">The Role</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {job.fullDescription.role}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">What You'll Be Doing</h3>
                      <ul className="space-y-2">
                        {job.fullDescription.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed">
                            • {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">What You Bring to the Table</h3>
                      <ul className="space-y-2">
                        {job.fullDescription.qualifications.map((qualification, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed">
                            • {qualification}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Who You Are</h3>
                      <ul className="space-y-2">
                        {job.fullDescription.idealCandidate.map((trait, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed">
                            • {trait}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Why SparkloomAI?</h3>
                      <ul className="space-y-2">
                        {job.fullDescription.perks.map((perk, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed">
                            • {perk}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t">
                      <Button 
                        onClick={() => handleApply(job.title)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Apply for this position
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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