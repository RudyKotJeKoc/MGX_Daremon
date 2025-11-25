import PageHeader from "@/components/PageHeader";
import GlassPanel from "@/components/GlassPanel";
import { over } from "@/lib/content";

export const metadata = {
  title: "Over het bureau – Daremon"
};

export default function OverPage() {
  return (
    <div>
      <PageHeader title={over.title} />
      <div className="grid gap-4">
        <GlassPanel className="p-6">
          <div className="space-y-4 text-textMuted">
            {over.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel className="p-6">
          <h2 className="text-lg font-medium mb-3">Korte lijn</h2>
          <ul className="list-disc pl-5 space-y-2 text-textMuted">
            {over.timeline.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </GlassPanel>
      </div>
    </div>
  );
}