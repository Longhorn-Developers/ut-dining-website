"use client";
import { Navbar } from "@/components/NavBar";
import useKC_DABR_WASM from "kc-dabr-wasm";

export default function PrivacyPolicy() {
  useKC_DABR_WASM();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="container px-4 flex flex-col items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Privacy Policy
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center">
            UT Dining does not collect user data.
          </p>
        </div>
      </section>
    </div>
  );
}
