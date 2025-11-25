import { cn } from "@/lib/utils";
import type { Icon as LucideIcon } from "lucide-react";

export default function ServiceCard({
  title,
  description,
  Icon,
  className
}: {
  title: string;
  description?: string;
  Icon?: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-surface/30 p-5 hover:border-primary transition-colors break-words [hyphens:auto]",
        className
      )}
    >
      <div className="flex items-start gap-3">
        {Icon ? <Icon className="h-5 w-5 text-primary mt-0.5" /> : null}
        <div className="space-y-2">
          <h3 className="font-semibold text-text-main">{title}</h3>
          {description ? (
            <p className="text-sm text-text-muted leading-relaxed">{description}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}