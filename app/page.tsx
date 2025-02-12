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

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
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
              className="text-5xl font-bold leading-tight"
            >
              The Ultimate Dining Experience for UT Students
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground"
            >
              Discover, rate, and explore dining options across campus. Join
              thousands of Longhorns making informed dining choices.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <Link
                href="/downloads"
                className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-hover transition-colors flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Now
              </Link>
              <a
                href="/about"
                className="px-6 py-3 rounded-full border hover:bg-secondary transition-colors flex items-center gap-2"
              >
                Learn More
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 relative">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-center mb-12"
          >
            Trusted by UT Students
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 mx-auto text-primary" />,
                stat: "10,000+",
                label: "Active Users",
              },
              {
                icon: <Star className="w-8 h-8 mx-auto text-primary" />,
                stat: "4.8/5",
                label: "Average Rating",
              },
              {
                icon: <Clock className="w-8 h-8 mx-auto text-primary" />,
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
                className="glass p-6 text-center space-y-2"
              >
                {item.icon}
                <div className="text-3xl font-bold">{item.stat}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Everything you need to find the perfect meal
            </h2>
            <p className="text-muted-foreground">
              Comprehensive features designed to enhance your campus dining
              experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Utensils className="w-6 h-6 text-primary" />,
                title: "Real-time Menu Updates",
                description:
                  "Stay informed with daily menu updates from all campus dining locations",
              },
              {
                icon: <Search className="w-6 h-6 text-primary" />,
                title: "Nutritional Information",
                description:
                  "See detailed nutritional information for every meal and dining location",
              },
              {
                icon: <Clock3 className="w-6 h-6 text-primary" />,
                title: "Wait Time Tracking",
                description:
                  "Know how busy each location is before you go with real-time wait estimates",
              },
              {
                icon: <Filter className="w-6 h-6 text-primary" />,
                title: "Dietary Filters",
                description:
                  "Easily find meals that match your dietary preferences and restrictions",
              },
              {
                icon: <Star className="w-6 h-6 text-primary" />,
                title: "Student Reviews",
                description:
                  "Make informed choices with authentic reviews from fellow Longhorns",
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
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
                className="glass p-6 space-y-4"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
