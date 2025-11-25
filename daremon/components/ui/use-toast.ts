"use client";

import { toast as sonnerToast } from "sonner";

type ToastOpts = { title?: string; description?: string };

export function useToast() {
  return {
    toast: ({ title, description }: ToastOpts) =>
      sonnerToast(title ?? "", { description })
  };
}

export { sonnerToast as toast };