import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</h2>
              <p className="text-text-muted mb-6">
                This Privacy Policy describes how SparkLoom AI ("we," "our," or "us") collects, uses, and protects your information when you use our website and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <div className="text-text-muted space-y-4">
                <h3 className="text-xl font-medium text-foreground">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact us through our website forms</li>
                  <li>Schedule consultations</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request information about our services</li>
                </ul>
                
                <h3 className="text-xl font-medium text-foreground mt-6">Automatically Collected Information</h3>
                <p>We automatically collect certain information when you visit our website, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Device information</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <div className="text-text-muted">
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our AI automation services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you relevant updates and marketing communications</li>
                  <li>Analyze website usage and optimize user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
              <div className="text-text-muted">
                <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-text-muted">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <div className="text-text-muted">
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-text-muted">
                If you have any questions about this Privacy Policy, please contact us at hello@sparklooomai.com
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;