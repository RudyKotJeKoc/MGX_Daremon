import { cn } from "@/lib/utils";

export default function PageHeader({
  title,
  subtitle,
  className
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-8")}>
      <h1 className={cn("text-3xl md:text-4xl font-semibold tracking-tight")}>
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 text-textMuted max-w-2xl">{subtitle}</p>
      ) : null}
    </header>
  );
}