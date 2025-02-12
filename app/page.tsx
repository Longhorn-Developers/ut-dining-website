"use client";
import {
  Download,
  ChevronRight,
  Users,
  Star,
  Clock,
  Utensils,
  Clock3,
  Search,
  Filter,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import useKC_DABR_WASM from "kc-dabr-wasm";

export default function Home() {
  useKC_DABR_WASM();
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium inline-block"
            >
              Built by Longhorn Developers
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              The Ultimate Dining Experience for UT Students
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Discover, rate, and explore dining options across campus. Join
              thousands of Longhorns making informed dining choices.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link
                href="/downloads"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Now
              </Link>
              <a
                href="/about"
                className="w-full sm:w-auto px-6 py-3 rounded-full border hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                Learn More
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 md:py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-12"
          >
            Trusted by UT Students
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: (
                  <Users className="w-6 md:w-8 h-6 md:h-8 mx-auto text-primary" />
                ),
                stat: "10,000+",
                label: "Active Users",
              },
              {
                icon: (
                  <Star className="w-6 md:w-8 h-6 md:h-8 mx-auto text-primary" />
                ),
                stat: "4.8/5",
                label: "Average Rating",
              },
              {
                icon: (
                  <Clock className="w-6 md:w-8 h-6 md:h-8 mx-auto text-primary" />
                ),
                stat: "15min",
                label: "Time Saved per Meal",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass p-4 md:p-6 text-center space-y-2"
              >
                {item.icon}
                <div className="text-2xl md:text-3xl font-bold">
                  {item.stat}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Everything you need to find the perfect meal
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Comprehensive features designed to enhance your campus dining
              experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <Utensils className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                ),
                title: "Real-time Menu Updates",
                description:
                  "Stay informed with daily menu updates from all campus dining locations",
              },
              {
                icon: <Search className="w-5 md:w-6 h-5 md:h-6 text-primary" />,
                title: "Nutritional Information",
                description:
                  "See detailed nutritional information for every meal and dining location",
              },
              {
                icon: <Clock3 className="w-5 md:w-6 h-5 md:h-6 text-primary" />,
                title: "Wait Time Tracking",
                description:
                  "Know how busy each location is before you go with real-time wait estimates",
              },
              {
                icon: <Filter className="w-5 md:w-6 h-5 md:h-6 text-primary" />,
                title: "Dietary Filters",
                description:
                  "Easily find meals that match your dietary preferences and restrictions",
              },
              {
                icon: <Star className="w-5 md:w-6 h-5 md:h-6 text-primary" />,
                title: "Student Reviews",
                description:
                  "Make informed choices with authentic reviews from fellow Longhorns",
              },
              {
                icon: <Users className="w-5 md:w-6 h-5 md:h-6 text-primary" />,
                title: "Social Features",
                description:
                  "Connect with friends and share your favorite dining spots on campus",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-4 md:p-6 space-y-3 md:space-y-4"
              >
                <div className="h-10 md:h-12 w-10 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
