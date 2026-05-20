"use client";
import { useStore } from "@/lib/useStore";
import BackButton from "@/components/BackButton";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

type WellnessRow = { category: string; days: string[] };

const defaultPlan: WellnessRow[] = [
  { category: "🥗 Nutrition Focus", days: ["Iron-rich foods: spinach, lentils", "Protein: eggs, legumes", "Calcium: dairy or fortified", "Folate: broccoli, chickpeas", "Omega-3: salmon or walnuts", "Treat: fruit-based dessert", "Balanced meal prep day"] },
  { category: "🏃 Movement / Exercise", days: ["30-min prenatal yoga", "20-min gentle walk", "Aqua aerobics class", "Prenatal Pilates", "Light stretching routine", "Nature walk outdoors", "Rest or gentle swim"] },
  { category: "😴 Rest & Sleep", days: ["Lights out by 10pm", "Afternoon nap if needed", "Wind-down bath 8pm", "No screens after 9pm", "Pregnancy pillow position", "Lie-in & slow morning", "Early bedtime — rest up"] },
  { category: "💧 Hydration", days: ["8 glasses of water", "Herbal teas (safe kinds)", "Coconut water + water", "Fruit-infused water", "Track 2L intake", "Smoothie + 6 glasses", "Hydrating foods: cucumber"] },
  { category: "🧘 Mind & Wellbeing", days: ["Journal 10 mins", "Positive affirmations", "Call a friend or family", "Meditation 10 mins", "Hypnobirthing practice", "Screen-free morning", "Gratitude list — 3 things"] },
  { category: "💊 Vitamins & Supplements", days: ["Folic acid + Vit D", "Folic acid + iron", "Folic acid + Omega-3", "Folic acid + Vit D", "Folic acid + iron", "Folic acid + Omega-3", "Folic acid + Vit D"] },
  { category: "🌸 Self-Care Treat", days: ["Face mask evening", "Bump massage oil", "Pedicure or foot soak", "Read a favourite book", "Prenatal massage", "Date night with partner", "Slow cosy morning in"] },
];

type Goal = { fitness: string; nutrition: string; wellbeing: string; notes: string };
const emptyGoal = (): Goal => ({ fitness: "", nutrition: "", wellbeing: "", notes: "" });

const trimesterGoals: { label: string; preset: Goal }[] = [
  { label: "1st Trimester (Wks 1–12)", preset: { fitness: "Gentle walking daily\nYoga 3x per week", nutrition: "Start folic acid\nAvoid high-risk foods", wellbeing: "Combat nausea gently\nRest without guilt", notes: "" } },
  { label: "2nd Trimester (Wks 13–26)", preset: { fitness: "Aqua aerobics 2x/week\nPilates classes", nutrition: "Increase iron & protein\nTrack weight gain", wellbeing: "Hypnobirthing starts\nNursery planning joy", notes: "" } },
  { label: "3rd Trimester (Wks 27–40)", preset: { fitness: "Stretching & walking\nRest between activity", nutrition: "Freeze batch cooking\nHydrate well", wellbeing: "Birth visualisation\nBonding with partner", notes: "" } },
];

export default function Wellness() {
  const [plan, setPlan] = useStore<WellnessRow[]>("pp-wellness-plan", defaultPlan);
  const [goals, setGoals] = useStore<Goal[]>("pp-wellness-goals", trimesterGoals.map(t => t.preset));

  const updateCell = (row: number, day: number, value: string) => {
    const updated = plan.map((r, ri) =>
      ri === row ? { ...r, days: r.days.map((d, di) => (di === day ? value : d)) } : r
    );
    setPlan(updated);
  };

  const updateGoal = (i: number, field: keyof Goal, value: string) => {
    setGoals(goals.map((g, j) => (j === i ? { ...g, [field]: value } : g)));
  };

  return (
    <div className="space-y-8">
      <BackButton />
      <div>
        <h1 className="text-2xl font-semibold text-pink-700">🌿 Weekly Wellness Plan</h1>
        <p className="text-sm text-gray-500 mt-1">Nourish your body, mind and soul throughout your pregnancy journey</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-pink-100 shadow-sm">
        <table className="w-full text-xs bg-white min-w-[700px]">
          <thead className="bg-pink-50">
            <tr>
              <th className="px-4 py-3 text-left text-pink-600 font-medium w-40">Category</th>
              {days.map(d => (
                <th key={d} className="px-3 py-3 text-center text-pink-500 font-medium">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plan.map((row, ri) => (
              <tr key={ri} className="border-t border-pink-50 even:bg-pink-50/30">
                <td className="px-4 py-2 font-medium text-pink-700 whitespace-nowrap">{row.category}</td>
                {row.days.map((cell, di) => (
                  <td key={di} className="px-2 py-1">
                    <textarea
                      rows={2}
                      className="w-full border border-pink-100 rounded px-1.5 py-1 text-xs bg-white resize-none focus:outline-none focus:ring-1 focus:ring-pink-300"
                      value={cell}
                      onChange={e => updateCell(ri, di, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-lg font-medium text-pink-700 mb-4">Monthly Wellness Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trimesterGoals.map(({ label }, i) => (
            <div key={i} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5 space-y-3">
              <h3 className="font-medium text-pink-600 text-sm">{label}</h3>
              {(["fitness", "nutrition", "wellbeing", "notes"] as const).map(field => (
                <div key={field} className="flex flex-col gap-1">
                  <label className="text-xs text-pink-400 uppercase tracking-wider">{field === "wellbeing" ? "Mental Wellbeing" : field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <textarea
                    rows={2}
                    className="border border-pink-200 rounded px-2 py-1 text-xs resize-none focus:outline-none focus:ring-1 focus:ring-pink-300"
                    value={goals[i]?.[field] ?? ""}
                    onChange={e => updateGoal(i, field, e.target.value)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
