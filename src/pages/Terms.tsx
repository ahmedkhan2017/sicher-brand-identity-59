import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import GlassCard from "@/components/ui/GlassCard";

const Terms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-black">
        <FloatingShapes variant="hero" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">Legal</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">
                Terms & Conditions
              </h1>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="text-lg text-silver">
                Last updated: December 2024
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <FloatingShapes variant="subtle" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Agreement to Terms</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    By accessing or using the Sicher website, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Intellectual Property</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    The content on this website, including text, graphics, logos, and images, is the property of Sicher and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Use of Website</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Disclaimer</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Limitation of Liability</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    In no event shall Sicher be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Governing Law</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Changes to Terms</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Contact</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    For questions about these Terms & Conditions, please contact us at info@sicher.com.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
