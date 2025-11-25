"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Brak backendu — tylko potwierdzenie
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Bericht verzonden",
        description: "Wij nemen contact op voor een eerste analyse."
      });
      (e.target as HTMLFormElement).reset();
    }, 500);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label="Contactformulier">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Naam</Label>
          <Input
            id="name"
            name="name"
            placeholder="Uw naam"
            required
            aria-label="Naam"
            className="focus-visible:ring-2 focus-visible:ring-accent"
          />
        </div>
        <div>
          <Label htmlFor="email">E-mailadres</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="naam@domein.nl"
            required
            aria-label="E-mailadres"
            className="focus-visible:ring-2 focus-visible:ring-accent"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="subject">Onderwerp</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Onderwerp"
          required
          aria-label="Onderwerp"
          className="focus-visible:ring-2 focus-visible:ring-accent"
        />
      </div>
      <div>
        <Label htmlFor="message">Uw vraag of situatie</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Korte beschrijving"
          rows={6}
          required
          aria-label="Uw vraag of situatie"
          className="focus-visible:ring-2 focus-visible:ring-accent"
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="bg-accent text-black hover:bg-accent/90"
        aria-label="Verstuur bericht"
      >
        {loading ? "Versturen..." : "Verstuur bericht"}
      </Button>
    </form>
  );
}