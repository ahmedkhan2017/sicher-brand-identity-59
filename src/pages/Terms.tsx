import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              Terms & Conditions
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
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-lg p-8 lg:p-12 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the Sicher website, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The content on this website, including text, graphics, logos, and images, is the property of Sicher and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Sicher be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms & Conditions, please contact us at info@sicher.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;