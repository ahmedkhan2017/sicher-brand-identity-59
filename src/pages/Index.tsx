import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import GlassCard from "@/components/ui/GlassCard";
import { Globe, Shield, Award, Users, ArrowRight, Sparkles } from "lucide-react";
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern">
        <FloatingShapes variant="hero" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container relative mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={0.1}>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Premium Import & Export</span>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Built on Trust
                <span className="block mt-2 bg-blue-gradient bg-clip-text text-transparent">
                  and Quality
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Sicher is a leading import and export company specializing in premium clothing and apparel. We connect global markets with excellence.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-blue btn-glow rounded-full px-8 h-14 text-base"
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
                  className="rounded-full px-8 h-14 text-base border-2 hover:bg-muted/50"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <FloatingShapes variant="subtle" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                Who We Are
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Sicher is a Dubai-based import and export company dedicated to delivering premium clothing and apparel to markets worldwide. With a commitment to quality and ethical business practices, we've established ourselves as a trusted partner in global trade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-section-gradient relative overflow-hidden">
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <GlassCard className="p-8 lg:p-10" delay={0.1}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-gradient mb-6">
                <span className="text-primary-foreground font-bold text-lg">01</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To deliver exceptional quality apparel through reliable import and export services, fostering trust and long-term partnerships with our clients across the globe.
              </p>
            </GlassCard>
            
            <GlassCard className="p-8 lg:p-10" delay={0.2}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary/70 mb-6">
                <span className="text-primary-foreground font-bold text-lg">02</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To become the most trusted name in global apparel trade, setting industry standards for quality, reliability, and ethical business practices.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <FloatingShapes variant="section" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                What We Do
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Sicher specializes in the import and export of premium clothing and apparel—including jackets, outerwear, and fashion garments. We handle every aspect of international trade, from sourcing to delivery, ensuring quality at every step.
              </p>
              <Button 
                asChild 
                className="mt-10 bg-primary hover:bg-primary/90 rounded-full px-8 shadow-blue btn-glow"
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
      <section className="py-24 lg:py-32 bg-section-gradient relative overflow-hidden">
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                Our Core Values
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Image Placeholder with Gradient Overlay */}
        <div className="absolute inset-0 bg-blue-gradient" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container relative mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground tracking-tight">
              Ready to Partner with Us?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Let's discuss how Sicher can support your import and export needs with quality and reliability.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="mt-10 bg-white text-primary hover:bg-white/90 shadow-lg rounded-full px-10 h-14 text-base font-semibold"
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
