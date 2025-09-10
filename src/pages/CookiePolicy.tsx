import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
          <div className="prose prose-invert max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</h2>
              <p className="text-text-muted mb-6">
                This Cookie Policy explains how SparkLoom AI uses cookies and similar technologies when you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
              <p className="text-text-muted">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work more efficiently and to provide reporting information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
              <div className="text-text-muted space-y-6">
                
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Essential Cookies</h3>
                  <p className="mb-2">These cookies are necessary for the website to function properly:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Basic functionality</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Analytics Cookies</h3>
                  <p className="mb-2">Help us understand how visitors interact with our website:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Analytics</li>
                    <li>Page visit statistics</li>
                    <li>User behavior analysis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Marketing Cookies</h3>
                  <p className="mb-2">Used to track visitors and display relevant advertisements:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ad targeting</li>
                    <li>Social media integration</li>
                    <li>Remarketing campaigns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Functional Cookies</h3>
                  <p className="mb-2">Enable enhanced functionality and personalization:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Language preferences</li>
                    <li>User interface customization</li>
                    <li>Form data retention</li>
                  </ul>
                </div>

              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
              <div className="text-text-muted">
                <p className="mb-4">We may also use cookies from third-party services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> Web analytics service</li>
                  <li><strong>Google Calendar:</strong> Appointment scheduling</li>
                  <li><strong>Social Media Platforms:</strong> Social sharing functionality</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
              <div className="text-text-muted space-y-4">
                <p>You can control and manage cookies in various ways:</p>
                
                <h3 className="text-xl font-medium text-foreground">Browser Settings</h3>
                <p>Most browsers allow you to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View cookies stored on your device</li>
                  <li>Delete cookies individually or all at once</li>
                  <li>Block cookies from specific websites</li>
                  <li>Set preferences for cookie acceptance</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mt-6">Opt-Out Options</h3>
                <p>You can opt out of certain cookie tracking:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline">Google Analytics Opt-out</a></li>
                  <li>Interest-based advertising: <a href="http://www.aboutads.info/choices/" className="text-accent hover:underline">AdChoices</a></li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie Consent</h2>
              <p className="text-text-muted">
                By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-text-muted">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-text-muted">
                If you have any questions about our use of cookies, please contact us at hello@sparklooomai.com
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;