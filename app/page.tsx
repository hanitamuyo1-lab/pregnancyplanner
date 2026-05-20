import DetailsForm from "@/components/DetailsForm";

const sections = [
  {
    href: "/journal", icon: "📖", label: "Pregnancy Journal",
    desc: "Weekly diary — record feelings, symptoms & messages to baby",
    border: "border-l-pink-400", iconBg: "bg-pink-100", labelColor: "text-pink-700", arrow: "text-pink-400",
  },
  {
    href: "/baby-shower", icon: "🎀", label: "Baby Shower List",
    desc: "Gifts, guests, RSVPs and gift registry all in one place",
    border: "border-l-rose-400", iconBg: "bg-rose-100", labelColor: "text-rose-700", arrow: "text-rose-400",
  },
  {
    href: "/appointments", icon: "🩺", label: "Doctor Appointments",
    desc: "All scans, midwife visits, consultant notes & results",
    border: "border-l-purple-400", iconBg: "bg-purple-100", labelColor: "text-purple-700", arrow: "text-purple-400",
  },
  {
    href: "/wellness", icon: "🌿", label: "Wellness Plan",
    desc: "7-day health routine: nutrition, exercise, rest & self-care",
    border: "border-l-emerald-400", iconBg: "bg-emerald-100", labelColor: "text-emerald-700", arrow: "text-emerald-400",
  },
  {
    href: "/todo", icon: "✅", label: "Trimester To-Do",
    desc: "Essential tasks broken down by 1st, 2nd and 3rd trimester",
    border: "border-l-violet-400", iconBg: "bg-violet-100", labelColor: "text-violet-700", arrow: "text-violet-400",
  },
  {
    href: "/budget", icon: "💰", label: "Pregnancy Budget",
    desc: "Full cost tracker — nursery, clothing, healthcare & more",
    border: "border-l-amber-400", iconBg: "bg-amber-100", labelColor: "text-amber-700", arrow: "text-amber-400",
  },
  {
    href: "/activities", icon: "🌸", label: "Activities Planner",
    desc: "20 beautiful pregnancy activities with progress tracker",
    border: "border-l-orange-400", iconBg: "bg-orange-100", labelColor: "text-orange-700", arrow: "text-orange-400",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Hero */}
      <div className="text-center py-10 px-6 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/50 shadow-sm">
        <div className="text-5xl mb-3">🌸</div>
        <h1 className="text-4xl font-bold text-pink-900 drop-shadow-sm">Pregnancy Planner Suite</h1>
        <p className="text-pink-700 mt-2 text-lg">Your complete companion from bump to baby</p>
      </div>

      <DetailsForm />

      <div>
        <h2 className="text-base font-bold text-pink-900 uppercase tracking-widest mb-4 drop-shadow-sm">What's Inside</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map(({ href, icon, label, desc, border, iconBg, labelColor, arrow }) => (
            <a
              key={href}
              href={href}
              className={`bg-white rounded-2xl border-l-4 ${border} shadow-sm p-5 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 block group`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`${iconBg} rounded-xl p-2.5 text-2xl shrink-0`}>{icon}</div>
                <span className={`${arrow} text-lg mt-1 opacity-0 group-hover:opacity-100 transition-opacity`}>→</span>
              </div>
              <div className={`font-bold text-base mt-3 ${labelColor}`}>{label}</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
