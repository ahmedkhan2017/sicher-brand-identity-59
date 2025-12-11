import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, Users, Globe, Shield, Lightbulb, Award } from "lucide-react";

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
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              About Sicher
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We are a premium import and export company built on trust, quality, and a commitment to excellence in global apparel trade.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground text-center mb-8">Company Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              Sicher is a Dubai-based import and export company specializing in premium clothing and apparel. Founded with a commitment to quality and ethical business practices, we have grown to become a trusted partner for businesses seeking reliable sourcing and distribution of fashion garments, jackets, and outerwear. Our team brings together expertise in international trade, quality assurance, and logistics to deliver exceptional service to our clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            <div className="bg-secondary rounded-lg p-8 lg:p-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Mission Statement</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To deliver exceptional quality apparel through reliable import and export services, fostering trust and long-term partnerships with our clients. We strive to exceed expectations by maintaining the highest standards in sourcing, quality control, and customer service.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-8 lg:p-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Vision Statement</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To become the most trusted name in global apparel trade, setting industry standards for quality, reliability, and ethical business practices. We envision a world where trade is seamless, sustainable, and built on mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Our Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that define who we are
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4 p-6 bg-background rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Our Journey
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-full bg-border mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm font-medium text-accent">{item.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;