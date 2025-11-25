import { cn } from "@/lib/utils";
import type { Icon as LucideIcon } from "lucide-react";

export default function CaseCard({
  title,
  summary,
  Icon,
  className
}: {
  title: string;
  summary: string;
  Icon?: LucideIcon;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-lg border border-white/10 bg-surface/30 p-5 hover:border-primary transition-colors break-words [hyphens:auto]",
        className
      )}
    >
      <div className="flex items-start gap-3">
        {Icon ? <Icon className="h-5 w-5 text-primary mt-0.5" /> : null}
        <div className="space-y-2">
          <h3 className="font-semibold text-text-main">{title}</h3>
          <p className="text-sm text-text-muted leading-relaxed">{summary}</p>
        </div>
      </div>
    </article>
  );
}