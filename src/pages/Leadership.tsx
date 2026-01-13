import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const Leadership = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/85" />
        
        <FloatingShapes variant="hero" />
        
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                Our Team
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">
                Leadership
              </h1>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="text-lg text-silver leading-relaxed">
                Meet the team driving Sicher's vision for excellence in global apparel trade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership Content */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <FloatingShapes variant="section" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="p-10 lg:p-16 text-center">
              <motion.div 
                className="relative w-40 h-40 rounded-3xl overflow-hidden mb-8 mx-auto border border-silver/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt="CEO Portrait"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wide">Founder & CEO</h2>
              <p className="mt-2 inline-block px-4 py-1 rounded-full border border-silver/30 text-silver font-medium text-sm uppercase tracking-wider">
                Chief Executive Officer
              </p>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="text-lg text-silver leading-relaxed max-w-2xl mx-auto">
                With a deep passion for quality and international trade, our founder established Sicher with a vision to transform the apparel import and export industry. Bringing years of experience in global commerce, supply chain management, and business development, they have built Sicher into a trusted name in premium apparel trade.
              </p>
              <p className="mt-6 text-silver leading-relaxed max-w-2xl mx-auto">
                Their commitment to ethical business practices, quality assurance, and building long-term partnerships defines the company's culture and approach to every business relationship.
              </p>
              
              {/* Decorative element */}
              <div className="mt-10 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-silver/30" />
                <span className="w-2 h-2 rounded-full bg-silver/50" />
                <span className="w-2 h-2 rounded-full bg-silver" />
                <span className="w-2 h-2 rounded-full bg-silver/50" />
                <span className="w-2 h-2 rounded-full bg-silver/30" />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
