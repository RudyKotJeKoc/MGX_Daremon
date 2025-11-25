import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { diensten } from "@/lib/content";
import { CircuitBoard, Landmark, MessageSquare, FileText } from "lucide-react";

const icons = [CircuitBoard, Landmark, MessageSquare, FileText];

export const metadata = {
  title: "Diensten – Daremon"
};

export default function DienstenPage() {
  return (
    <div>
      <PageHeader
        title="Diensten"
        subtitle="Kernactiviteiten beschreven in concrete, technische termen."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {diensten.map((d, i) => (
          <ServiceCard
            key={d.title}
            title={d.title}
            description={d.description}
            Icon={icons[i] ?? CircuitBoard}
          />
        ))}
      </div>
    </div>
  );
}