"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import {
  Database,
  Palette,
  Box,
  Package,
  Workflow,
  GitBranch,
  Command,
  Smartphone,
} from "lucide-react";

export default function Docs() {
  const sections = [
    {
      title: "Getting Started",
      icon: <Command className="w-6 h-6" />,
      content: `Our tech stack is carefully chosen to provide the best development experience while maintaining high performance and reliability. Here's what you need to get started:

1. Install Node.js (v18+)
2. Install pnpm: npm install -g pnpm
3. Clone the repository
4. Run pnpm install
5. Start the development server`,
    },
    {
      title: "Framework",
      icon: <Smartphone className="w-6 h-6" />,
      content: `We use Expo and React Native as our primary framework. This allows us to:
- Develop for both iOS and Android simultaneously
- Leverage native device features
- Use hot reloading for faster development
- Access Expo's extensive library of pre-built components`,
    },
    {
      title: "State Management",
      icon: <Workflow className="w-6 h-6" />,
      content: `Zustand is our choice for state management because it's:
- Simple and lightweight
- TypeScript-friendly
- Has minimal boilerplate
- Supports middleware and devtools
- Perfect for both local and global state`,
    },
    {
      title: "Styling",
      icon: <Palette className="w-6 h-6" />,
      content: `We use NativeWind (powered by Tailwind CSS) for styling:
- Utility-first CSS approach
- Consistent design system
- Responsive layouts
- Dark mode support
- Custom theme configuration`,
    },
    {
      title: "Build Tools",
      icon: <Package className="w-6 h-6" />,
      content: `Our build process is handled by:
- pnpm: Fast, disk space efficient package manager
- Metro bundler: React Native's default bundler
- Custom build scripts for different environments`,
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      content: `Supabase powers our backend infrastructure:
- PostgreSQL database
- Real-time subscriptions
- Row Level Security
- Authentication
- Storage for media files`,
    },
    {
      title: "Architecture",
      icon: <Box className="w-6 h-6" />,
      content: `Our app follows a modular architecture:
- Feature-based directory structure
- Atomic design principles
- Custom hooks for business logic
- Service layer for API interactions
- Type-safe data fetching`,
    },
    {
      title: "Contributing",
      icon: <GitBranch className="w-6 h-6" />,
      content: `We welcome contributions! Please follow our guidelines:
1. Fork the repository
2. Create a feature branch
3. Follow our coding standards
4. Write tests
5. Submit a pull request`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about UT Dining&apos;s technical
              implementation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                </div>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-sm text-muted-foreground">
                    {section.content}
                  </pre>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
