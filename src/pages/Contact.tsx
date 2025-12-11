import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone } from "lucide-react";

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
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Get in touch with our team. We're here to answer your questions and discuss partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-background rounded-lg p-8 lg:p-10">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h2>
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
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team is ready to assist you with any inquiries about our import and export services. Reach out to us through any of the channels below.
                  </p>
                </div>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        {item.details.map((detail) => (
                          <p key={detail} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-64 lg:h-96 bg-muted flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Dubai, United Arab Emirates</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;