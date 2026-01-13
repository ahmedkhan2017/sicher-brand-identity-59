import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import GlassCard from "@/components/ui/GlassCard";
import { Package, Truck, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const services = [
    {
      icon: Package,
      title: "Premium Apparel Sourcing",
      description: "We source high-quality clothing, jackets, and fashion garments from trusted manufacturers, ensuring every product meets our rigorous standards.",
    },
    {
      icon: Globe,
      title: "Global Import Services",
      description: "Seamless import operations connecting international suppliers with your business. We handle documentation, customs, and compliance.",
    },
    {
      icon: Truck,
      title: "Export Solutions",
      description: "Efficient export services to markets worldwide. We manage logistics, shipping, and delivery to ensure your products reach their destination.",
    },
  ];

  const highlights = [
    "Quality-controlled sourcing processes",
    "End-to-end logistics management",
    "Customs and compliance expertise",
    "Dedicated account management",
    "Competitive pricing structures",
    "Timely delivery guarantees",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/85" />
        
        <FloatingShapes variant="hero" />
        
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">
                What We Do
              </h1>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="text-lg text-silver leading-relaxed">
                We import and export our own clothing & apparel items—delivering quality, reliability, and expertise in global trade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <FloatingShapes variant="section" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassCard key={service.title} className="p-8 text-center" delay={index * 0.15}>
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl border border-silver/30 mb-6"
                  whileHover={{ scale: 1.05, borderColor: 'hsl(0 0% 75%)' }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-9 h-9 text-silver" />
                </motion.div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">{service.title}</h3>
                <div className="silver-divider my-4" />
                <p className="text-silver leading-relaxed">{service.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection direction="left">
                <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                  Specialization
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">
                  Our Focus: Clothing & Apparel
                </h2>
                <div className="silver-divider my-6" />
                <p className="text-lg text-silver leading-relaxed">
                  Sicher imports and exports its own range of premium clothing, jackets, and apparel. We focus exclusively on fashion garments, ensuring deep expertise and specialization in this sector.
                </p>
                <p className="mt-4 text-silver leading-relaxed">
                  Our team understands the nuances of the apparel industry—from fabric quality and construction to market trends and compliance requirements. This specialization allows us to deliver exceptional value to our partners.
                </p>
              </AnimatedSection>
              
              <AnimatedSection direction="right">
                <GlassCard className="p-8 lg:p-10">
                  <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Why Choose Sicher</h3>
                  <div className="silver-divider mb-6" />
                  <ul className="space-y-4">
                    {highlights.map((item, index) => (
                      <motion.li 
                        key={item} 
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg border border-silver/30 flex items-center justify-center">
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
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <FloatingShapes variant="subtle" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                How We Work
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">
                Our Process
              </h2>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="text-lg text-silver">
                A streamlined approach to quality trade
              </p>
            </div>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Understand your needs" },
                { step: "02", title: "Sourcing", desc: "Find quality products" },
                { step: "03", title: "Quality Check", desc: "Rigorous inspection" },
                { step: "04", title: "Delivery", desc: "Timely shipment" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-silver/30 text-white font-bold text-lg mb-4"
                    whileHover={{ scale: 1.1, borderColor: 'hsl(0 0% 75%)' }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="font-bold text-white uppercase tracking-wide">{item.title}</h3>
                  <p className="mt-2 text-sm text-silver">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Work Together?
            </h2>
            <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto">
              Let's discuss how Sicher can support your apparel import and export needs.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="mt-10 bg-black text-white hover:bg-black/80 shadow-lg rounded-full px-10 h-14 text-base font-semibold uppercase tracking-wider"
              >
                <Link to="/contact">
                  Get in Touch
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

export default WhatWeDo;
