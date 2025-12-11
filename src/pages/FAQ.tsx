import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What does Sicher do?",
      answer: "Sicher is a premium import and export company based in Dubai, specializing in clothing and apparel. We handle the sourcing, quality control, logistics, and delivery of fashion garments, jackets, and outerwear for businesses worldwide.",
    },
    {
      question: "What types of products does Sicher deal with?",
      answer: "We focus exclusively on clothing and apparel, including jackets, outerwear, and various fashion garments. This specialization allows us to maintain deep expertise and deliver exceptional quality in our product category.",
    },
    {
      question: "Where is Sicher located?",
      answer: "Sicher is headquartered in Dubai, United Arab Emirates. Our strategic location provides excellent access to global shipping routes and international markets.",
    },
    {
      question: "How can I partner with Sicher?",
      answer: "To discuss partnership opportunities, please contact us through our Contact page. Our team will review your inquiry and get back to you promptly to discuss how we can work together.",
    },
    {
      question: "What markets does Sicher serve?",
      answer: "Sicher serves markets globally. Our import and export services connect suppliers and buyers across multiple continents, with a focus on maintaining quality and reliability regardless of destination.",
    },
    {
      question: "What are Sicher's quality standards?",
      answer: "We maintain rigorous quality control processes including material verification, construction inspection, durability testing, and pre-shipment checks. Every product we handle must meet our exacting standards before delivery.",
    },
    {
      question: "Does Sicher offer custom sourcing?",
      answer: "Yes, we work closely with our partners to source specific products that meet their requirements. Contact us to discuss your custom sourcing needs.",
    },
    {
      question: "How long has Sicher been in business?",
      answer: "Sicher was founded with a vision for excellence in global apparel trade. Our team brings together extensive experience in international commerce, supply chain management, and quality assurance.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about Sicher and our services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-lg px-6 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;