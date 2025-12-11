import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Package, Truck, Globe, CheckCircle, ArrowRight } from "lucide-react";

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
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              What We Do
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Sicher specializes in the import and export of premium clothing and apparel—delivering quality, reliability, and expertise in global trade.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-background rounded-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                  Our Focus: Clothing & Apparel
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Sicher imports and exports its own range of premium clothing, jackets, and apparel. We focus exclusively on fashion garments, ensuring deep expertise and specialization in this sector.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our team understands the nuances of the apparel industry—from fabric quality and construction to market trends and compliance requirements. This specialization allows us to deliver exceptional value to our partners.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">Why Choose Sicher</h3>
                <ul className="space-y-4">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Our Process
            </h2>
            <p className="mt-4 text-muted-foreground">
              A streamlined approach to quality trade
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Understand your needs" },
                { step: "02", title: "Sourcing", desc: "Find quality products" },
                { step: "03", title: "Quality Check", desc: "Rigorous inspection" },
                { step: "04", title: "Delivery", desc: "Timely shipment" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight">
            Ready to Work Together?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Let's discuss how Sicher can support your apparel import and export needs.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;