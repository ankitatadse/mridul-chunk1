import { Shirt, Truck, MessageCircle, ShieldCheck } from "lucide-react";

const BENEFITS = [
  {
    icon: Shirt,
    title: "Quality fabrics",
    body: "Thoughtfully selected fabrics made for comfort and everyday wear.",
  },
  {
    icon: Truck,
    title: "Pan-India delivery",
    body: "Reliable delivery to your doorstep.",
  },
  {
    icon: MessageCircle,
    title: "Easy support",
    body: "Need help choosing your saree? We're here.",
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    body: "Safe and convenient payment options.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="border-y border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {BENEFITS.map((b) => (
          <div key={b.title} className="flex flex-col gap-3">
            <b.icon size={20} strokeWidth={1.4} />
            <div>
              <p className="text-[14px] mb-1">{b.title}</p>
              <p className="text-[13px] text-muted leading-relaxed">{b.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
