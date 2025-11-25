import PageHeader from "@/components/PageHeader";
import MethodCard from "@/components/MethodCard";
import { methodiek } from "@/lib/content";
import { Brain, GitBranch, FileText, ScanText, CircuitBoard } from "lucide-react";

const iconMap = [CircuitBoard, GitBranch, FileText, ScanText, Brain];

export const metadata = {
  title: "Methodiek & AI – Daremon"
};

export default function MethodiekPage() {
  return (
    <div>
      <PageHeader
        title="Methodiek & AI"
        subtitle="Model, narratief, document, extractie. Alles controleerbaar en traceerbaar."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {methodiek.map((m, i) => (
          <MethodCard
            key={m.title}
            title={m.title}
            description={m.description}
            Icon={iconMap[i] ?? CircuitBoard}
          />
        ))}
      </div>
    </div>
  );
}