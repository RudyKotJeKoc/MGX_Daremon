"use client";

import { useState } from "react";
import { Radio } from "lucide-react";
import { ETS_STREAM_URL } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function ETSRadioWidget() {
  if (!ETS_STREAM_URL) return null;

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "glass rounded-full p-3",
          "hover:border-accent focus-visible:ring-2 focus-visible:ring-accent"
        )}
        aria-label="Radio ETS"
      >
        <Radio className="w-5 h-5 text-accent" />
      </button>
      {open && (
        <div className="mt-2 glass rounded-xl p-3 w-72">
          <p className="text-sm text-textMuted mb-2">Radio ETS</p>
          <audio
            controls
            src={ETS_STREAM_URL}
            className="w-full"
            aria-label="Radio ETS speler"
          />
        </div>
      )}
    </div>
  );
}