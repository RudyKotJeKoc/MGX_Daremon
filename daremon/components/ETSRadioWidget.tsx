"use client";

import { useEffect, useRef, useState } from "react";
import { Radio, Play, Pause, ExternalLink } from "lucide-react";
import { ETS_STREAM_URL } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function ETSRadioWidget() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Determine availability first; hooks must always run before any early return
  const hasStream =
    typeof ETS_STREAM_URL === "string" && ETS_STREAM_URL.trim() !== "";

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, []);

  if (!hasStream) {
    // Hide widget if no URL configured
    return null;
  }

  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
    } else {
      el.pause();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "glass rounded-full p-3 sm:p-3.5",
          "hover:border-primary focus-visible:ring-2 focus-visible:ring-primary inline-flex items-center gap-2"
        )}
        aria-label="Radio ETS"
      >
        <Radio className="w-5 h-5 text-primary" />
        <span className="hidden sm:inline text-sm">Radio ETS</span>
      </button>

      {open && (
        <div className="mt-2 glass rounded-xl p-3 sm:p-4 w-64 sm:w-72">
          <p className="text-sm text-text-muted mb-2">Radio ETS</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="inline-flex items-center gap-2 rounded px-3 py-1.5 border border-white/10 hover:border-primary text-sm"
              aria-label={playing ? "Pauzeer" : "Speel af"}
            >
              {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{playing ? "Pauze" : "Play"}</span>
            </button>
            <a
              href={ETS_STREAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Live stream <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <audio ref={audioRef} src={ETS_STREAM_URL} preload="none" className="hidden" />
        </div>
      )}
    </div>
  );
}