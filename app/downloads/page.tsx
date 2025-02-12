"use client";

import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Apple, Smartphone, Globe, Monitor, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { JSX } from "react";
import useKC_DABR_WASM from "kc-dabr-wasm";

interface DownloadOption {
  id: string;
  title: string;
  subtitle: string;
  icon: JSX.Element;
  href: string;
}

const mobileApps = [
  {
    id: "ios",
    title: "iOS App",
    subtitle: "Download on the App Store",
    icon: <Apple className="w-6 md:w-8 h-6 md:h-8" />,
    href: "#ios",
  },
  {
    id: "android",
    title: "Android App",
    subtitle: "Get it on Google Play",
    icon: <Smartphone className="w-6 md:w-8 h-6 md:h-8" />,
    href: "#android",
  },
] as const satisfies DownloadOption[];

const desktopApps = [
  {
    id: "windows",
    title: "Windows",
    subtitle: "Windows 10/11",
    icon: <Monitor className="w-6 md:w-8 h-6 md:h-8" />,
    href: "#windows",
  },
  {
    id: "macos",
    title: "macOS",
    subtitle: "macOS 10.15+",
    icon: <Apple className="w-6 md:w-8 h-6 md:h-8" />,
    href: "#macos",
  },
  {
    id: "linux",
    title: "Linux",
    subtitle: ".deb, .rpm, AppImage",
    icon: <Terminal className="w-6 md:w-8 h-6 md:h-8" />,
    href: "#linux",
  },
] as const satisfies DownloadOption[];

const DownloadCard = ({ option }: { option: DownloadOption }) => (
  <motion.a
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    href={option.href}
    className={cn(
      "flex items-center gap-4 p-4 md:p-6 rounded-lg border",
      "hover:bg-secondary transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      "active:bg-secondary/80",
    )}
  >
    {option.icon}
    <div className="text-left">
      <h3 className="font-semibold">{option.title}</h3>
      <p className="text-sm text-muted-foreground">{option.subtitle}</p>
    </div>
  </motion.a>
);

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

export default function Downloads() {
  useKC_DABR_WASM();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Download UT Dining
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Available for all your devices. Start exploring campus dining
              options today.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 md:mt-16 space-y-8 md:space-y-12"
          >
            {/* Mobile Section */}
            <motion.div variants={itemVariants} className="glass p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Mobile Apps
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {mobileApps.map((app) => (
                  <DownloadCard key={app.id} option={app} />
                ))}
              </div>
            </motion.div>

            {/* Desktop Section */}
            <motion.div variants={itemVariants} className="glass p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Desktop Apps
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {desktopApps.map((app) => (
                  <DownloadCard key={app.id} option={app} />
                ))}
              </div>
            </motion.div>

            {/* Web Version */}
            <motion.div variants={itemVariants} className="glass p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Web Version
              </h2>
              <div className="max-w-md">
                <DownloadCard
                  option={{
                    id: "web",
                    title: "Web App",
                    subtitle: "Access from any browser",
                    icon: <Globe className="w-6 md:w-8 h-6 md:h-8" />,
                    href: "https://github.com/Longhorn-Developers/ut-dining-website", // TODO: Update link
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
