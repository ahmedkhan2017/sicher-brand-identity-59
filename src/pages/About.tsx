import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import GlassCard from "@/components/ui/GlassCard";
import { Target, Eye, Heart, Users, Globe, Shield, Lightbulb, Award } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    { icon: Shield, title: "Integrity", description: "Honest and transparent in all our dealings" },
    { icon: Award, title: "Excellence", description: "Committed to the highest standards" },
    { icon: Users, title: "Partnership", description: "Building lasting relationships" },
    { icon: Globe, title: "Global Vision", description: "Thinking globally, acting locally" },
    { icon: Heart, title: "Passion", description: "Driven by love for what we do" },
    { icon: Lightbulb, title: "Innovation", description: "Continuously improving our processes" },
  ];

  const timeline = [
    { year: "Founded", title: "Company Established", description: "Sicher was founded in Dubai with a vision for quality trade." },
    { year: "Growth", title: "Market Expansion", description: "Expanded operations to multiple international markets." },
    { year: "Today", title: "Industry Leader", description: "Recognized as a trusted partner in global apparel trade." },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/85" />
        
        <FloatingShapes variant="hero" />
        
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">
                About Sicher
              </h1>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="text-lg text-silver leading-relaxed">
                We are a premium import and export company built on trust, quality, and a commitment to excellence in global apparel trade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <FloatingShapes variant="subtle" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <GlassCard className="p-10 lg:p-16">
                <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">Company Overview</h2>
                <div className="silver-divider my-6" />
                <p className="text-lg text-silver leading-relaxed">
                  Sicher is a Dubai-based import and export company specializing in premium clothing and apparel. Founded with a commitment to quality and ethical business practices, we have grown to become a trusted partner for businesses seeking reliable sourcing and distribution of fashion garments, jackets, and outerwear. Our team brings together expertise in international trade, quality assurance, and logistics to deliver exceptional service to our clients worldwide.
                </p>
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
            alt="Decorative abstract background"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <GlassCard className="p-8 lg:p-10" delay={0.1}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-silver/30 mb-6">
                <Target className="w-8 h-8 text-silver" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Mission Statement</h3>
              <div className="silver-divider my-4" />
              <p className="text-silver leading-relaxed">
                To deliver exceptional quality apparel through reliable import and export services, fostering trust and long-term partnerships with our clients. We strive to exceed expectations by maintaining the highest standards in sourcing, quality control, and customer service.
              </p>
            </GlassCard>
            
            <GlassCard className="p-8 lg:p-10" delay={0.2}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-silver/30 mb-6">
                <Eye className="w-8 h-8 text-silver" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Vision Statement</h3>
              <div className="silver-divider my-4" />
              <p className="text-silver leading-relaxed">
                To become the most trusted name in global apparel trade, setting industry standards for quality, reliability, and ethical business practices. We envision a world where trade is seamless, sustainable, and built on mutual respect.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <FloatingShapes variant="section" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                What We Stand For
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">
                Our Values
              </h2>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="text-silver text-lg">
                The principles that define who we are
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <GlassCard key={value.title} className="p-6" delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-silver/30 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-silver" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-wide">{value.title}</h3>
                    <p className="mt-1 text-sm text-silver">{value.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                Our History
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">
                Our Journey
              </h2>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
            </div>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="w-14 h-14 rounded-2xl border border-silver/30 flex items-center justify-center text-white font-bold text-sm"
                      whileHover={{ scale: 1.1, borderColor: 'hsl(0 0% 75%)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-24 bg-gradient-to-b from-silver/50 to-transparent mt-4" />
                    )}
                  </div>
                  <div className="pb-12 pt-1">
                    <span className="inline-block px-3 py-1 rounded-full border border-silver/30 text-xs font-semibold text-silver mb-2 uppercase tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">{item.title}</h3>
                    <p className="mt-2 text-silver">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
