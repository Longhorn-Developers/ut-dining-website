"use client";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Apple, Smartphone, Globe, Monitor, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Downloads() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl font-bold leading-tight">
              Download UT Dining
            </h1>
            <p className="text-xl text-muted-foreground">
              Available for all your devices. Start exploring campus dining
              options today.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 space-y-12"
          >
            {/* Mobile Section */}
            <motion.div variants={itemVariants} className="glass p-8">
              <h2 className="text-2xl font-semibold mb-6">Mobile Apps</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#ios"
                  className="flex items-center gap-4 p-6 rounded-lg border hover:bg-secondary transition-colors"
                >
                  <Apple className="w-8 h-8" />
                  <div className="text-left">
                    <h3 className="font-semibold">iOS App</h3>
                    <p className="text-sm text-muted-foreground">
                      Download on the App Store
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#android"
                  className="flex items-center gap-4 p-6 rounded-lg border hover:bg-secondary transition-colors"
                >
                  <Smartphone className="w-8 h-8" />
                  <div className="text-left">
                    <h3 className="font-semibold">Android App</h3>
                    <p className="text-sm text-muted-foreground">
                      Get it on Google Play
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Desktop Section */}
            <motion.div variants={itemVariants} className="glass p-8">
              <h2 className="text-2xl font-semibold mb-6">Desktop Apps</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#windows"
                  className="flex items-center gap-4 p-6 rounded-lg border hover:bg-secondary transition-colors"
                >
                  <Monitor className="w-8 h-8" />
                  <div className="text-left">
                    <h3 className="font-semibold">Windows</h3>
                    <p className="text-sm text-muted-foreground">
                      Windows 10/11
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#macos"
                  className="flex items-center gap-4 p-6 rounded-lg border hover:bg-secondary transition-colors"
                >
                  <Apple className="w-8 h-8" />
                  <div className="text-left">
                    <h3 className="font-semibold">macOS</h3>
                    <p className="text-sm text-muted-foreground">
                      macOS 10.15+
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#linux"
                  className="flex items-center gap-4 p-6 rounded-lg border hover:bg-secondary transition-colors"
                >
                  <Terminal className="w-8 h-8" />
                  <div className="text-left">
                    <h3 className="font-semibold">Linux</h3>
                    <p className="text-sm text-muted-foreground">
                      .deb, .rpm, AppImage
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Web Version */}
            <motion.div variants={itemVariants} className="glass p-8">
              <h2 className="text-2xl font-semibold mb-6">Web Version</h2>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://app.utdining.com"
                className="flex items-center gap-4 p-6 rounded-lg border hover:bg-secondary transition-colors max-w-md"
              >
                <Globe className="w-8 h-8" />
                <div className="text-left">
                  <h3 className="font-semibold">Web App</h3>
                  <p className="text-sm text-muted-foreground">
                    Access from any browser
                  </p>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
