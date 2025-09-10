import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</h2>
              <p className="text-text-muted mb-6">
                These Terms of Service ("Terms") govern your use of SparkLoom AI's website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-text-muted">
                By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Description of Service</h2>
              <div className="text-text-muted space-y-4">
                <p>SparkLoom AI provides:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI-powered automation solutions</li>
                  <li>Business process optimization</li>
                  <li>Custom AI implementation services</li>
                  <li>Consulting and support services</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">User Obligations</h2>
              <div className="text-text-muted">
                <p className="mb-4">You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services legally and ethically</li>
                  <li>Not interfere with our systems or services</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain confidentiality of any credentials provided</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-text-muted">
                All content, features, and functionality of our services are owned by SparkLoom AI and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Availability</h2>
              <p className="text-text-muted">
                We strive to maintain high service availability but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue services with reasonable notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-text-muted">
                SparkLoom AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
              <p className="text-text-muted">
                Either party may terminate the service agreement with appropriate notice. Upon termination, your right to use the services will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-text-muted">
                These Terms shall be governed by and construed in accordance with the laws of California, United States.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-text-muted">
                For questions about these Terms of Service, please contact us at hello@sparklooomai.com
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;