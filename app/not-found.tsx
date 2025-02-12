"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Home, ChevronRight, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import useKC_DABR_WASM from "kc-dabr-wasm";

interface SuggestedLink {
  href: string;
  label: string;
}

const suggestedLinks = [
  { href: "/", label: "Home" },
  { href: "/reviews", label: "Browse Reviews" },
  { href: "/downloads", label: "Download App" },
  { href: "/about", label: "About Us" },
] as const satisfies SuggestedLink[];

export default function NotFound() {
  useKC_DABR_WASM();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Icon */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="flex justify-center"
            >
              <Coffee className="w-20 h-20 md:w-24 md:h-24 text-primary" />
            </motion.div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Oops! Page Not Found
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Looks like this page took a coffee break. Let&apos;s get you
                back on track!
              </p>
            </div>

            {/* Primary Action */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="pt-4"
            >
              <Link href="/">
                <Button size="lg" className="gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>

            {/* Suggested Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-12"
            >
              <h2 className="text-lg font-semibold mb-4">
                You might be looking for:
              </h2>
              <div className="glass p-4 md:p-6 max-w-md mx-auto">
                <ul className="space-y-2">
                  {suggestedLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary transition-colors group"
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
