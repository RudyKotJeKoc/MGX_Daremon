import PageHeader from "@/components/PageHeader";
import CaseCard from "@/components/CaseCard";
import AnimatedSection from "@/components/AnimatedSection";
import { casussen } from "@/lib/content";
import { Factory, Scale, Landmark, GitBranch } from "lucide-react";

const icons = [Factory, Scale, Landmark, GitBranch];

export const metadata = {
  title: "Casussen – Daremon",
};

export default function CasussenPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Casussen"
        subtitle="Voorbeelden die methode, scope en beslislogica laten zien."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {casussen.map((c, i) => (
          <AnimatedSection key={c.title}>
            <CaseCard
              title={c.title}
              summary={c.summary}
              Icon={icons[i] ?? Factory}
            />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}