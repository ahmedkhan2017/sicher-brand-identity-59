import Layout from "@/components/layout/Layout";
import { User } from "lucide-react";

const Leadership = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              Leadership
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Meet the team driving Sicher's vision for excellence in global apparel trade.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Content */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-lg p-8 lg:p-12 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted mb-6">
                <User className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Founder & CEO</h2>
              <p className="mt-2 text-accent font-medium">Chief Executive Officer</p>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                With a deep passion for quality and international trade, our founder established Sicher with a vision to transform the apparel import and export industry. Bringing years of experience in global commerce, supply chain management, and business development, they have built Sicher into a trusted name in premium apparel trade.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Their commitment to ethical business practices, quality assurance, and building long-term partnerships defines the company's culture and approach to every business relationship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;