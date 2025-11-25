import GlassPanel from "./GlassPanel";
import AnimatedSection from "./AnimatedSection";
import type { LucideIcon } from "lucide-react";

export default function CaseCard({
  title,
  summary,
  Icon
}: {
  title: string;
  summary: string;
  Icon: LucideIcon;
}) {
  return (
    <AnimatedSection>
      <GlassPanel className="p-5 h-full">
        <div className="flex items-start gap-3">
          <Icon className="w-5 h-5 text-accent mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-textMuted">{summary}</p>
          </div>
        </div>
      </GlassPanel>
    </AnimatedSection>
  );
}