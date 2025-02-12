"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Users, Github, Coffee, BookOpen } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl font-bold mb-6">
            About UT Dining Experience
          </h1>
          <p className="text-xl text-muted-foreground">
            We&apos;re a team of UT students passionate about making campus
            dining better for everyone.
          </p>
        </motion.div>
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl mb-20"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            To revolutionize the campus dining experience by providing students
            with real-time information, honest reviews, and a platform to make
            informed dining choices. We believe that good food fuels academic
            success, and every student deserves access to quality dining
            options.
          </p>
        </motion.div>
        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <Users className="w-8 h-8 text-primary" />,
              title: "Community First",
              description: "Built by students, for students",
            },
            {
              icon: <Github className="w-8 h-8 text-primary" />,
              title: "Open Source",
              description:
                "Committed to open source, collaboration, and quality",
            },
            {
              icon: <Coffee className="w-8 h-8 text-primary" />,
              title: "Innovation",
              description: "Constantly improving the experience",
            },
            {
              icon: <BookOpen className="w-8 h-8 text-primary" />,
              title: "Education",
              description: "Helping make informed choices",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 text-center"
            >
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
