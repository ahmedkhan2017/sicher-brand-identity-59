import Layout from "@/components/layout/Layout";
import { CheckCircle, Shield, Leaf, Award } from "lucide-react";

const Quality = () => {
  const standards = [
    {
      icon: Shield,
      title: "Rigorous Quality Control",
      description: "Every product undergoes thorough inspection to ensure it meets our exacting standards before shipment.",
    },
    {
      icon: Award,
      title: "Material Excellence",
      description: "We source only premium materials, ensuring durability, comfort, and superior finish in all our apparel.",
    },
    {
      icon: Leaf,
      title: "Ethical Sourcing",
      description: "Our supply chain adheres to ethical standards, supporting fair labor practices and responsible manufacturing.",
    },
  ];

  const checkpoints = [
    "Fabric quality and composition verification",
    "Construction and stitching inspection",
    "Color fastness and durability testing",
    "Size and fit consistency checks",
    "Packaging and labeling compliance",
    "Pre-shipment final inspection",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              Quality & Standards
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our commitment to excellence ensures every product meets the highest standards of quality and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((standard) => (
              <div key={standard.title} className="bg-background rounded-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <standard.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{standard.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-foreground tracking-tight">
                  Our Quality Assurance Process
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Quality is at the heart of everything we do at Sicher. Our comprehensive quality assurance process ensures that every product we import or export meets international standards and exceeds customer expectations.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  From initial sourcing to final delivery, we maintain strict oversight and conduct multiple checkpoints to guarantee product excellence.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">Quality Checkpoints</h3>
                <ul className="space-y-4">
                  {checkpoints.map((item) => (
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

      {/* Import/Export Standards */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-foreground tracking-tight">
              Import & Export Compliance
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Sicher adheres to all international trade regulations and compliance requirements. We ensure proper documentation, customs clearance, and adherence to import/export laws in every market we operate. Our team stays updated on changing regulations to provide seamless, compliant trade services.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;