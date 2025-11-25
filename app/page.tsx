import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import GlassPanel from "@/components/GlassPanel";
import { homeGrid } from "@/lib/content";
import { CircuitBoard, Landmark, MessageSquare } from "lucide-react";

const icons = [CircuitBoard, Landmark, MessageSquare];

export default function Page() {
  return (
    <>
      <HeroSection />
      <section className="mt-10">
        <GlassPanel className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {homeGrid.map((title, idx) => {
              const Icon = icons[idx] ?? CircuitBoard;
              return <ServiceCard key={title} title={title} Icon={Icon} />;
            })}
          </div>
        </GlassPanel>
      </section>
    </>
  );
}