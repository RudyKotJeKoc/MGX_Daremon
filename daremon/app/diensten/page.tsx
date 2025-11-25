import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import { diensten } from "@/lib/content";
import { CircuitBoard, Landmark, MessageSquare, FileText } from "lucide-react";

const icons = [CircuitBoard, Landmark, MessageSquare, FileText];

export const metadata = {
  title: "Diensten – Daremon"
};

export default function DienstenPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Diensten"
        subtitle="Kernactiviteiten beschreven in concrete, technische termen."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {diensten.map((d, i) => (
          <AnimatedSection key={d.title}>
            <ServiceCard
              title={d.title}
              description={d.description}
              Icon={icons[i] ?? CircuitBoard}
            />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}