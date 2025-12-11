import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <div className="bg-background rounded-lg p-8 lg:p-12 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sicher ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect information about you in a variety of ways, including personal data you provide directly (such as name, email address, and phone number when you contact us) and automatically collected data (such as browser type, IP address, and usage patterns).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to respond to your inquiries, provide our services, improve our website, and communicate with you about updates and opportunities relevant to our business relationship.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Disclosure of Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as required by law or to protect our rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at info@sicher.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;