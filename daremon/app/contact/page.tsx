import PageHeader from "@/components/PageHeader";
import GlassPanel from "@/components/GlassPanel";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/content";

export const metadata = {
  title: "Contact – Daremon"
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact"
        subtitle={contact.intro}
      />
      <GlassPanel className="p-6">
        <ContactForm />
      </GlassPanel>
    </div>
  );
}