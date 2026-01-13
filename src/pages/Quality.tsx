import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import GlassCard from "@/components/ui/GlassCard";
import { CheckCircle, Shield, Leaf, Award } from "lucide-react";
import { motion } from "framer-motion";

const Quality = () => {
  const standards = [
    { icon: Shield, title: "Rigorous Quality Control", description: "Every product undergoes thorough inspection to ensure it meets our exacting standards before shipment." },
    { icon: Award, title: "Material Excellence", description: "We source only premium materials, ensuring durability, comfort, and superior finish in all our apparel." },
    { icon: Leaf, title: "Ethical Sourcing", description: "Our supply chain adheres to ethical standards, supporting fair labor practices and responsible manufacturing." },
  ];

  const checkpoints = [
    "Fabric quality and composition verification",
    "Construction and stitching inspection",
    "Color fastness and durability testing",
    "Size and fit consistency checks",
    "Packaging and labeling compliance",
    "Pre-shipment final inspection",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/85" />
        
        <FloatingShapes variant="hero" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">Standards</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">Quality & Standards</h1>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="text-lg text-silver leading-relaxed">Our commitment to excellence ensures every product meets the highest standards.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <FloatingShapes variant="section" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((s, i) => (
              <GlassCard key={s.title} className="p-8 text-center" delay={i * 0.15}>
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl border border-silver/30 mb-6" 
                  whileHover={{ scale: 1.05, borderColor: 'hsl(0 0% 75%)' }}
                >
                  <s.icon className="w-9 h-9 text-silver" />
                </motion.div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">{s.title}</h3>
                <div className="silver-divider my-4" />
                <p className="text-silver leading-relaxed">{s.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1/4 hidden lg:block overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
            alt="Quality fabric texture"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent" />
        </div>
        
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">Process</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">Our Quality Assurance Process</h2>
              <div className="silver-divider my-6" />
              <p className="text-silver leading-relaxed">Quality is at the heart of everything we do. Our comprehensive process ensures every product meets international standards.</p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <GlassCard className="p-8">
                <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Quality Checkpoints</h3>
                <div className="silver-divider mb-6" />
                <ul className="space-y-4">
                  {checkpoints.map((item, i) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-4" 
                      initial={{ opacity: 0, x: 20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="w-8 h-8 rounded-lg border border-silver/30 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-silver" />
                      </span>
                      <span className="text-silver">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
