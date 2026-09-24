"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { STORE_CONFIG } from "@/lib/config";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative bg-ink text-cream text-[13px] tracking-wide">
      <p className="text-center py-2.5 px-10">{STORE_CONFIG.announcement}</p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="focus-ring absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-70 hover:opacity-100 transition-opacity"
      >
        <X size={14} />
      </button>
    </div>
  );
}
