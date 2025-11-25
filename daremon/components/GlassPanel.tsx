import { cn } from "@/lib/utils";

export default function GlassPanel({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-md border border-white/10 shadow-sm rounded-xl break-words [hyphens:auto]",
        className
      )}
    >
      {children}
    </div>
  );
}