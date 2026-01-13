import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", subscribe: false });
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
      <section className="relative py-32 lg:py-40 overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/90" />
        
        <FloatingShapes variant="hero" />
        
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-silver uppercase tracking-wider mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">
                Contact Us
              </h1>
              <div className="silver-divider my-8 max-w-xs mx-auto" />
              <p className="text-lg text-silver leading-relaxed">
                Get in touch with our team. We're here to answer your questions and discuss partnership opportunities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <FloatingShapes variant="section" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <AnimatedSection direction="left">
                <GlassCard className="p-8 lg:p-10">
                  <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">Send a Message</h2>
                  <div className="silver-divider mb-8" />
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-silver mb-2 uppercase tracking-wider">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Your name"
                        className="h-12 rounded-xl bg-black/50 border-silver/30 text-white placeholder:text-silver/50 focus:border-silver focus:ring-silver/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-silver mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="your@email.com"
                        className="h-12 rounded-xl bg-black/50 border-silver/30 text-white placeholder:text-silver/50 focus:border-silver focus:ring-silver/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-silver mb-2 uppercase tracking-wider">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 XX XXX XXXX"
                        className="h-12 rounded-xl bg-black/50 border-silver/30 text-white placeholder:text-silver/50 focus:border-silver focus:ring-silver/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-silver mb-2 uppercase tracking-wider">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        placeholder="How can we help?"
                        className="h-12 rounded-xl bg-black/50 border-silver/30 text-white placeholder:text-silver/50 focus:border-silver focus:ring-silver/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-silver mb-2 uppercase tracking-wider">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className="rounded-xl bg-black/50 border-silver/30 text-white placeholder:text-silver/50 focus:border-silver focus:ring-silver/20 transition-colors resize-none"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="subscribe"
                        checked={formData.subscribe}
                        onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked as boolean })}
                        className="border-silver/30 data-[state=checked]:bg-silver data-[state=checked]:border-silver"
                      />
                      <label htmlFor="subscribe" className="text-sm text-silver cursor-pointer">
                        Subscribe to updates
                      </label>
                    </div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-white text-black hover:bg-silver rounded-xl btn-glow text-base font-medium uppercase tracking-wider"
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
                    <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Get in Touch</h2>
                    <div className="silver-divider mb-6" />
                    <p className="text-silver leading-relaxed">
                      Our team is ready to assist you with any inquiries about our import and export services. Reach out to us through any of the channels below.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <GlassCard key={item.title} className="p-6" delay={index * 0.1}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-silver/30 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-silver" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white uppercase tracking-wide">{item.title}</h3>
                            {item.details.map((detail) => (
                              <p key={detail} className="text-silver mt-1">{detail}</p>
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

      {/* Location Section */}
      <section className="relative h-80 lg:h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(0 0% 75%) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(0 0% 75%) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedSection>
            <div className="text-center">
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl border border-silver/30 bg-black/50 backdrop-blur-sm mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin className="w-10 h-10 text-silver" />
              </motion.div>
              <p className="text-lg font-medium text-white uppercase tracking-wide">Dubai, United Arab Emirates</p>
              <p className="text-silver mt-1">Our headquarters</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
