import { hero } from "@/lib/content";
import AnimatedSection from "./AnimatedSection";
import GlassPanel from "./GlassPanel";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <AnimatedSection className="mt-10">
      <GlassPanel className="mx-auto max-w-6xl p-8 md:p-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-4 text-lg text-textMuted">
            {hero.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-accent text-black hover:bg-accent/90">
              <Link href="/diensten" aria-label="Bekijk onze diensten">
                {hero.ctas[0]}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-text hover:text-text hover:border-accent bg-transparent hover:bg-transparent"
            >
              <Link href="/methodiek-ai" aria-label="Hoe wij werken">
                {hero.ctas[1]}
              </Link>
            </Button>
          </div>
        </div>
      </GlassPanel>
    </AnimatedSection>
  );
}