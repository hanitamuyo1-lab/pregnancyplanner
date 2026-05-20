const sections = [
  {
    icon: "📖",
    title: "Pregnancy Journal",
    desc: "A private weekly diary for weeks 1–40. Record how you're feeling, track your baby's development, note symptoms, and write personal messages to your baby that you can look back on forever.",
  },
  {
    icon: "🎀",
    title: "Baby Shower Planner",
    desc: "Manage your guest list with RSVP tracking, dietary notes, and gift given status. Build your gift registry with priority levels, estimated costs, and where to buy — all in one place.",
  },
  {
    icon: "🩺",
    title: "Doctor & Midwife Appointments",
    desc: "Pre-loaded with the full NHS recommended appointment schedule from week 8 to week 41. Add your own appointments, record dates, times, locations, and follow-up notes.",
  },
  {
    icon: "🌿",
    title: "Weekly Wellness Plan",
    desc: "A fully editable 7-day wellness grid covering nutrition, exercise, rest, hydration, mind & wellbeing, vitamins, and self-care. Also includes trimester-by-trimester wellness goals.",
  },
  {
    icon: "✅",
    title: "Trimester To-Do List",
    desc: "Essential tasks organised by 1st, 2nd, and 3rd trimester. Tick them off as you go, adjust priorities, and add your own tasks to personalise the list to your journey.",
  },
  {
    icon: "💰",
    title: "Pregnancy & Baby Budget",
    desc: "Track your budget against actual spending across every category — nursery, transport, clothing, feeding, healthcare and more. Live running totals show exactly how much you have left.",
  },
  {
    icon: "🌸",
    title: "Activities Planner",
    desc: "20 beautiful pregnancy activities to enjoy before baby arrives — from babymoons and bump photoshoots to pottery classes and writing a letter to your baby. Track which ones you've done.",
  },
];

const tips = [
  { tip: "Start with the Dashboard", detail: "Fill in your personal details — due date, midwife, GP — so everything is in one place from day one." },
  { tip: "Use the Journal every week", detail: "Even a few words each week builds a beautiful record of your pregnancy that you'll treasure forever." },
  { tip: "Check off appointments as you go", detail: "The appointments page comes pre-loaded — just add your dates and times as you book them." },
  { tip: "Your data is private", detail: "Everything is saved on your own device. Nothing is uploaded to any server — it stays completely with you." },
  { tip: "Works on any device", detail: "Open the app on your phone, tablet, or computer — it works in any modern browser." },
];

export default function About() {
  return (
    <div className="space-y-12 max-w-3xl mx-auto">

      {/* Hero */}
      <div className="text-center py-8 space-y-3">
        <div className="text-5xl">🌸</div>
        <h1 className="text-3xl font-semibold text-sky-700">About Pregnancy Planner Suite</h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Your complete companion from bump to baby — all in one beautiful, easy-to-use app.
        </p>
      </div>

      {/* What it is */}
      <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-8 space-y-4">
        <h2 className="text-xl font-semibold text-sky-700">What is this app?</h2>
        <p className="text-gray-600 leading-relaxed">
          Pregnancy Planner Suite is a free, private web app designed to support you through every stage of pregnancy. Whether you're in your first trimester or counting down the final weeks, it gives you a calm, organised space to track appointments, record memories, manage your budget, and take care of your wellbeing — all without needing to create an account or share any personal data.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Everything you enter is saved directly on your device, so your journey stays completely private and is always there when you need it.
        </p>
      </div>

      {/* Sections */}
      <div>
        <h2 className="text-xl font-semibold text-sky-700 mb-6">What's inside</h2>
        <div className="space-y-4">
          {sections.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl border border-sky-100 shadow-sm p-6 flex gap-5">
              <div className="text-3xl shrink-0">{icon}</div>
              <div>
                <h3 className="font-semibold text-sky-700 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-sky-50 rounded-2xl border border-sky-100 p-8 space-y-5">
        <h2 className="text-xl font-semibold text-sky-700">Tips for getting the most out of it</h2>
        <ul className="space-y-4">
          {tips.map(({ tip, detail }) => (
            <li key={tip} className="flex gap-3">
              <span className="text-sky-400 mt-1 shrink-0">✦</span>
              <div>
                <span className="font-medium text-sky-800">{tip} — </span>
                <span className="text-gray-600 text-sm">{detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Privacy */}
      <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-8 space-y-3">
        <h2 className="text-xl font-semibold text-sky-700">Privacy & your data</h2>
        <p className="text-gray-600 leading-relaxed text-sm">
          This app stores all of your information in your browser's local storage — on your device only. No accounts, no sign-ups, no data is ever sent to any server. If you clear your browser data, your planner data will be cleared too, so we recommend keeping the app open on a device you use regularly.
        </p>
      </div>

      {/* Footer note */}
      <div className="text-center text-sky-300 text-sm pb-4">
        Made with love for every mama on her journey 🌸
      </div>

    </div>
  );
}
