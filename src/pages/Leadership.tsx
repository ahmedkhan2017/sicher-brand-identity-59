import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import GlassCard from "@/components/ui/GlassCard";
import { User } from "lucide-react";
import { motion } from "framer-motion";

const Leadership = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-hero-pattern">
        <FloatingShapes variant="hero" />
        
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Team
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                Leadership
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Meet the team driving Sicher's vision for excellence in global apparel trade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership Content */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <FloatingShapes variant="section" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="p-10 lg:p-16 text-center">
              <motion.div 
                className="inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-muted to-secondary mb-8 shadow-soft-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <User className="w-16 h-16 text-primary" />
              </motion.div>
              <h2 className="text-3xl font-bold text-foreground">Founder & CEO</h2>
              <p className="mt-2 inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Chief Executive Officer
              </p>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                With a deep passion for quality and international trade, our founder established Sicher with a vision to transform the apparel import and export industry. Bringing years of experience in global commerce, supply chain management, and business development, they have built Sicher into a trusted name in premium apparel trade.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Their commitment to ethical business practices, quality assurance, and building long-term partnerships defines the company's culture and approach to every business relationship.
              </p>
              
              {/* Decorative element */}
              <div className="mt-10 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/30" />
                <span className="w-2 h-2 rounded-full bg-primary/50" />
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="w-2 h-2 rounded-full bg-primary/50" />
                <span className="w-2 h-2 rounded-full bg-primary/30" />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
