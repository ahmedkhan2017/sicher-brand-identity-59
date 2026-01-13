import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import GlassCard from "@/components/ui/GlassCard";
import { Globe, Shield, Award, Users, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting partnerships through transparency and reliability.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Uncompromising standards in every product we handle.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting markets across continents with efficiency.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Working closely with clients to exceed expectations.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Black Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/80" />
        
        <FloatingShapes variant="hero" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(0 0% 75%) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(0 0% 75%) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container relative mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={0.1}>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-silver/30 mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <span className="w-2 h-2 rounded-full bg-silver animate-pulse" />
                <span className="text-sm font-medium text-silver uppercase tracking-wider">Premium Import & Export</span>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase">
                Built on Trust
                <span className="block mt-2 text-silver">
                  and Quality
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p className="mt-8 text-lg md:text-xl text-silver max-w-2xl mx-auto leading-relaxed">
                Sicher is a leading import and export company specializing in premium clothing and apparel. We connect global markets with excellence.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-black hover:bg-silver border-0 btn-glow rounded-full px-8 h-14 text-base font-medium uppercase tracking-wider"
                >
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="rounded-full px-8 h-14 text-base border-silver/30 text-white hover:bg-white/10 hover:border-white uppercase tracking-wider"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-silver" />
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <FloatingShapes variant="subtle" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">
                Who We Are
              </h2>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="text-lg text-silver leading-relaxed">
                Sicher is a Dubai-based import and export company dedicated to delivering premium clothing and apparel to markets worldwide. With a commitment to quality and ethical business practices, we've established ourselves as a trusted partner in global trade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-black via-black/95 to-black relative overflow-hidden">
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <GlassCard className="p-8 lg:p-10" delay={0.1}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-silver/30 mb-6">
                <span className="text-white font-bold text-lg">01</span>
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Our Mission</h3>
              <p className="mt-4 text-silver leading-relaxed">
                To deliver exceptional quality apparel through reliable import and export services, fostering trust and long-term partnerships with our clients across the globe.
              </p>
            </GlassCard>
            
            <GlassCard className="p-8 lg:p-10" delay={0.2}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-silver/30 mb-6">
                <span className="text-white font-bold text-lg">02</span>
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Our Vision</h3>
              <p className="mt-4 text-silver leading-relaxed">
                To become the most trusted name in global apparel trade, setting industry standards for quality, reliability, and ethical business practices.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <FloatingShapes variant="section" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">
                What We Do
              </h2>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="text-lg text-silver leading-relaxed">
                We import and export our own clothing & apparel items. Sicher specializes in premium clothing and apparel—including jackets, outerwear, and fashion garments. We handle every aspect of international trade, from sourcing to delivery.
              </p>
              <Button 
                asChild 
                className="mt-10 bg-white text-black hover:bg-silver rounded-full px-8 btn-glow font-medium uppercase tracking-wider"
              >
                <Link to="/what-we-do">
                  Discover Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">
                Core Values
              </h2>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="mt-4 text-silver text-lg">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <GlassCard
                key={value.title}
                className="p-6 text-center"
                delay={index * 0.1}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-silver/30 mb-5">
                  <value.icon className="w-7 h-7 text-silver" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">{value.title}</h3>
                <p className="mt-3 text-sm text-silver leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container relative mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight uppercase">
              Ready to Partner with Us?
            </h2>
            <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto">
              Let's discuss how Sicher can support your import and export needs with quality and reliability.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="mt-10 bg-black text-white hover:bg-black/80 shadow-lg rounded-full px-10 h-14 text-base font-semibold uppercase tracking-wider"
              >
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
