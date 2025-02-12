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
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useKC_DABR_WASM from "kc-dabr-wasm";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const faqItems = [
  {
    question: "What is UT Dining?",
    answer:
      "UT Dining is a mobile app designed specifically for UT Austin students to explore, rate, and discover campus dining options. It provides real-time information about wait times, menus, and student reviews.",
    category: "general",
  },
  {
    question: "How do I download the app?",
    answer:
      "The app is available on both iOS App Store and Google Play Store. You can also access it through our web version. Visit our Downloads page to get started.",
    category: "technical",
  },
  {
    question: "Do I need a UT email to use the app?",
    answer:
      "Yes, you need a valid utexas.edu email address to create an account. This helps us maintain a community of authentic UT students.",
    category: "account",
  },
  {
    question: "How accurate are the wait times?",
    answer:
      "Wait times are updated in real-time based on user check-ins and our automated monitoring system. They typically reflect actual waiting times within a 5-minute margin.",
    category: "features",
  },
  {
    question: "Can I filter for dietary restrictions?",
    answer:
      "Yes! You can filter meals by various dietary requirements including vegetarian, vegan, gluten-free, halal, and more.",
    category: "features",
  },
  {
    question: "How can I report an issue?",
    answer:
      "You can report issues directly through the app's Help section or by emailing support@utdining.com. We typically respond within 24 hours.",
    category: "support",
  },
] as const satisfies FAQItem[];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Faq() {
  useKC_DABR_WASM();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-16 space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about UT Dining
            </p>

            {/* Search Input */}
            <div className="relative max-w-md mx-auto mt-8">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="rounded-lg overflow-hidden"
                  >
                    <AccordionItem value={`item-${index}`} className="glass">
                      <AccordionTrigger className="text-base md:text-lg px-4 md:px-6 py-4 hover:no-underline hover:bg-primary/5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 md:px-6 pb-4 text-muted-foreground text-sm md:text-base">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  variants={itemVariants}
                  className="text-center py-8 text-muted-foreground"
                >
                  No FAQs found matching your search.
                </motion.div>
              )}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
