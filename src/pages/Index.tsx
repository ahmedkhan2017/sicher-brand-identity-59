import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Globe, Shield, Award, Users, ArrowRight } from "lucide-react";

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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-background">
        <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight">
              Premium Import & Export
              <span className="block mt-2 text-accent">Built on Trust and Quality</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sicher is a leading import and export company specializing in premium clothing and apparel. We connect global markets with excellence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Who We Are
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Sicher is a Dubai-based import and export company dedicated to delivering premium clothing and apparel to markets worldwide. With a commitment to quality and ethical business practices, we've established ourselves as a trusted partner in global trade.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-6">
                <span className="text-accent font-semibold">01</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To deliver exceptional quality apparel through reliable import and export services, fostering trust and long-term partnerships with our clients across the globe.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                <span className="text-primary font-semibold">02</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To become the most trusted name in global apparel trade, setting industry standards for quality, reliability, and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              What We Do
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Sicher specializes in the import and export of premium clothing and apparel—including jackets, outerwear, and fashion garments. We handle every aspect of international trade, from sourcing to delivery, ensuring quality at every step.
            </p>
            <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
              <Link to="/what-we-do">Discover Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-lg hover:bg-secondary transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight">
            Ready to Partner with Us?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Let's discuss how Sicher can support your import and export needs with quality and reliability.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;