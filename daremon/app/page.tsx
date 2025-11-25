import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import GlassPanel from "@/components/GlassPanel";
import AnimatedSection from "@/components/AnimatedSection";
import { homeGrid } from "@/lib/content";
import { CircuitBoard, Landmark, MessageSquare } from "lucide-react";

const icons = [CircuitBoard, Landmark, MessageSquare];

export default function Page() {
  return (
    <>
      <AnimatedSection className="mt-2">
        <HeroSection />
      </AnimatedSection>
      <section className="mt-8">
        <GlassPanel className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeGrid.map((title, idx) => {
              const Icon = icons[idx] ?? CircuitBoard;
              return (
                <AnimatedSection key={title}>
                  <ServiceCard title={title} Icon={Icon} />
                </AnimatedSection>
              );
            })}
          </div>
        </GlassPanel>
      </section>
    </>
  );
}