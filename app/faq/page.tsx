"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqItems = [
    {
      question: "What is UT Dining?",
      answer:
        "UT Dining is a mobile app designed specifically for UT Austin students to explore, rate, and discover campus dining options. It provides real-time information about wait times, menus, and student reviews.",
    },
    {
      question: "How do I download the app?",
      answer:
        "The app is available on both iOS App Store and Google Play Store. You can also access it through our web version. Visit our Downloads page to get started.",
    },
    {
      question: "Do I need a UT email to use the app?",
      answer:
        "Yes, you need a valid utexas.edu email address to create an account. This helps us maintain a community of authentic UT students.",
    },
    {
      question: "How accurate are the wait times?",
      answer:
        "Wait times are updated in real-time based on user check-ins and our automated monitoring system. They typically reflect actual waiting times within a 5-minute margin.",
    },
    {
      question: "Can I filter for dietary restrictions?",
      answer:
        "Yes! You can filter meals by various dietary requirements including vegetarian, vegan, gluten-free, halal, and more.",
    },
    {
      question: "How can I report an issue?",
      answer:
        "You can report issues directly through the app's Help section or by emailing support@utdining.com. We typically respond within 24 hours.",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about UT Dining
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="glass">
                    <AccordionTrigger className="text-lg px-6">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
