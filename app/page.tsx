import DetailsForm from "@/components/DetailsForm";

const sections = [
  { href: "/journal", icon: "📖", label: "Pregnancy Journal", desc: "Weekly diary — record feelings, symptoms & messages to baby" },
  { href: "/baby-shower", icon: "🎀", label: "Baby Shower List", desc: "Gifts, guests, RSVPs, vendors and party checklist" },
  { href: "/appointments", icon: "🩺", label: "Doctor Appointments", desc: "All scans, midwife visits, consultant notes & results" },
  { href: "/wellness", icon: "🌿", label: "Wellness Plan", desc: "7-day health routine: nutrition, exercise, rest & self-care" },
  { href: "/todo", icon: "✅", label: "Trimester To-Do", desc: "Essential tasks broken down by 1st, 2nd and 3rd trimester" },
  { href: "/budget", icon: "💰", label: "Pregnancy Budget", desc: "Full cost tracker — nursery, clothing, healthcare & more" },
  { href: "/activities", icon: "🌸", label: "Activities Planner", desc: "20 beautiful pregnancy activities with progress tracker" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-semibold text-white drop-shadow-md">Pregnancy Planner Suite</h1>
        <p className="text-white/80 mt-2 text-lg drop-shadow">Your complete companion from bump to baby</p>
      </div>

      <DetailsForm />

      <div>
        <h2 className="text-lg font-semibold text-white drop-shadow mb-4">What's Inside</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map(({ href, icon, label, desc }) => (
            <a
              key={href}
              href={href}
              className="bg-white rounded-2xl border border-sky-100 shadow-sm p-5 hover:shadow-md hover:border-sky-300 transition-shadow block"
            >
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-medium text-sky-700">{label}</div>
              <div className="text-xs text-gray-500 mt-1">{desc}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
