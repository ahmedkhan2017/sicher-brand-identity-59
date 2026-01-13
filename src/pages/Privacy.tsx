import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import GlassCard from "@/components/ui/GlassCard";

const Privacy = () => {
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
                Privacy Policy
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
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Introduction</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    Sicher ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Information We Collect</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    We may collect information about you in a variety of ways, including personal data you provide directly (such as name, email address, and phone number when you contact us) and automatically collected data (such as browser type, IP address, and usage patterns).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Use of Your Information</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    We use the information we collect to respond to your inquiries, provide our services, improve our website, and communicate with you about updates and opportunities relevant to our business relationship.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Disclosure of Your Information</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as required by law or to protect our rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Security</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Contact Us</h2>
                  <div className="silver-divider mb-4" />
                  <p className="text-silver leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at info@sicher.com.
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

export default Privacy;
