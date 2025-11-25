"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight break-words [hyphens:auto]">
          Daremon – Bureau voor Systeem- en Narratieve Analyse
        </h1>
        <p className="text-text-muted max-w-3xl break-words [hyphens:auto]">
          Analyse van techniek, instituties en narratieven met een sobere, systemische benadering.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-white/10 hover:border-primary px-4 py-2 text-sm"
          >
            Neem contact op
          </Link>
          <Link
            href="/methodiek-ai"
            className="inline-flex items-center rounded-md border border-white/10 hover:border-primary px-4 py-2 text-sm"
          >
            Methodiek &amp; AI
          </Link>
        </div>
      </motion.div>
    </section>
  );
}