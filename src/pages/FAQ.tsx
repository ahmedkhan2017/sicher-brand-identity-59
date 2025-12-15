import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    { question: "What does Sicher do?", answer: "Sicher is a premium import and export company based in Dubai, specializing in clothing and apparel." },
    { question: "What types of products does Sicher deal with?", answer: "We focus exclusively on clothing and apparel, including jackets, outerwear, and fashion garments." },
    { question: "Where is Sicher located?", answer: "Sicher is headquartered in Dubai, United Arab Emirates." },
    { question: "How can I partner with Sicher?", answer: "Please contact us through our Contact page to discuss partnership opportunities." },
    { question: "What markets does Sicher serve?", answer: "Sicher serves markets globally across multiple continents." },
    { question: "What are Sicher's quality standards?", answer: "We maintain rigorous quality control including material verification and pre-shipment checks." },
  ];

  return (
    <Layout>
      <section className="relative py-32 lg:py-40 overflow-hidden bg-hero-pattern">
        <FloatingShapes variant="hero" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Support</span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">FAQ</h1>
              <p className="mt-6 text-lg text-muted-foreground">Find answers to common questions about Sicher.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <FloatingShapes variant="subtle" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl px-6 shadow-soft">
                  <AccordionTrigger className="text-left hover:no-underline py-6"><span className="font-medium text-foreground">{faq.question}</span></AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
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
