"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Users, Github, Coffee, BookOpen, Star, Clock } from "lucide-react";
import { JSX } from "react";
import useKC_DABR_WASM from "kc-dabr-wasm";

interface TeamValue {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const teamValues = [
  {
    icon: <Users className="w-6 md:w-8 h-6 md:h-8 text-primary" />,
    title: "Community First",
    description: "Built by students, for students",
  },
  {
    icon: <Github className="w-6 md:w-8 h-6 md:h-8 text-primary" />,
    title: "Open Source",
    description: "Committed to open source, collaboration, and quality",
  },
  {
    icon: <Coffee className="w-6 md:w-8 h-6 md:h-8 text-primary" />,
    title: "Innovation",
    description: "Constantly improving the experience",
  },
  {
    icon: <BookOpen className="w-6 md:w-8 h-6 md:h-8 text-primary" />,
    title: "Education",
    description: "Helping make informed choices",
  },
] as const satisfies TeamValue[];

const milestones = [
  {
    year: "2025",
    title: "Launch",
    description:
      "Initial release of UT Dining app for iOS, Android, Desktop, and Web",
  },
  {
    year: "2026",
    title: "Growth",
    description: "Reached 10,000+ active users",
  },
] as const satisfies Milestone[];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function About() {
  useKC_DABR_WASM();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 md:pt-24 pb-12 md:pb-20">
        {/* Hero Section */}
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-20 space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold">
              About UT Dining Experience
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We&apos;re a team of UT students passionate about making campus
              dining better for everyone.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 md:mb-20"
          >
            {[
              { icon: <Users />, value: "10,000+", label: "Active Users" },
              { icon: <Star />, value: "4.8", label: "App Rating" },
              { icon: <Coffee />, value: "10+", label: "Dining Locations" },
              { icon: <Clock />, value: "Real-time", label: "Menu Updates" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-4 text-center space-y-2"
              >
                <div className="flex justify-center text-primary">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-6 md:p-8 rounded-2xl mb-12 md:mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              To revolutionize the campus dining experience by providing
              students with real-time information, honest reviews, and a
              platform to make informed dining choices. We believe that good
              food fuels academic success, and every student deserves access to
              quality dining options.
            </p>
          </motion.div>

          {/* Team Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20"
          >
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-4 md:p-6 text-center space-y-3"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
              Our Journey
            </h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass p-4 md:p-6 flex items-start gap-4"
                >
                  <div className="font-bold text-primary">{milestone.year}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
