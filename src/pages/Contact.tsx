import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import GlassCard from "@/components/ui/GlassCard";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Dubai, United Arab Emirates"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sicher.com"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+971 4 XXX XXXX"],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-hero-pattern">
        <FloatingShapes variant="hero" />
        
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Get in touch with our team. We're here to answer your questions and discuss partnership opportunities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <FloatingShapes variant="section" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <AnimatedSection direction="left">
                <GlassCard className="p-8 lg:p-10">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Your name"
                        className="h-12 rounded-xl border-border/50 bg-white/50 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="your@email.com"
                        className="h-12 rounded-xl border-border/50 bg-white/50 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="How can we help you?"
                        rows={5}
                        className="rounded-xl border-border/50 bg-white/50 focus:bg-white transition-colors resize-none"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-primary hover:bg-primary/90 rounded-xl shadow-blue btn-glow text-base font-medium"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </form>
                </GlassCard>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection direction="right">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our team is ready to assist you with any inquiries about our import and export services. Reach out to us through any of the channels below.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <GlassCard key={item.title} className="p-6" delay={index * 0.1}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            {item.details.map((detail) => (
                              <p key={detail} className="text-muted-foreground mt-1">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="relative h-80 lg:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-muted to-secondary" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedSection>
            <div className="text-center">
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-soft-lg mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin className="w-10 h-10 text-primary" />
              </motion.div>
              <p className="text-lg font-medium text-foreground">Dubai, United Arab Emirates</p>
              <p className="text-muted-foreground mt-1">Our headquarters</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
