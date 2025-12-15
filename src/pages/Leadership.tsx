import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const Leadership = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-hero-pattern">
        {/* PLACEHOLDER IMAGE: Leadership Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
        <span className="absolute top-4 left-4 text-xs bg-primary/80 text-white px-3 py-1 rounded z-10">PLACEHOLDER IMAGE: Leadership Background</span>
        
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
              {/* PLACEHOLDER IMAGE: Portrait */}
              <motion.div 
                className="relative w-40 h-40 rounded-3xl overflow-hidden mb-8 shadow-soft-lg mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt="PLACEHOLDER: CEO Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] bg-primary/80 text-white px-2 py-0.5 rounded">PLACEHOLDER</span>
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
