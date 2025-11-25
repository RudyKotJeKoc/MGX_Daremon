export default function PageHeader({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="space-y-2">
      <h1 className="text-2xl font-semibold text-text-main break-words [hyphens:auto]">{title}</h1>
      {subtitle ? (
        <p className="text-text-muted max-w-3xl break-words [hyphens:auto]">{subtitle}</p>
      ) : null}
    </header>
  );
}