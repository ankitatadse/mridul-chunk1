import { MessageCircle } from "lucide-react";
import { STORE_CONFIG } from "@/lib/config";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(
        "Hi! I need help choosing a saree."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-30 w-12 h-12 rounded-full bg-ink text-cream flex items-center justify-center shadow-lg hover:bg-wine transition-colors"
    >
      <MessageCircle size={20} />
    </a>
  );
}
