"use client";
import { useStore } from "@/lib/useStore";

type Activity = {
  activity: string;
  description: string;
  trimester: string;
  type: string;
  withPartner: string;
  done: boolean;
  dateDone: string;
};

const defaultActivities: Activity[] = [
  { activity: "Babymoon weekend away", description: "A relaxing break for two before baby arrives — spa, meals, slow mornings", trimester: "2nd / 3rd", type: "Romantic / Gentle", withPartner: "Yes", done: false, dateDone: "" },
  { activity: "Prenatal yoga or stretching", description: "Gentle class or home YouTube session. Partner can join for support", trimester: "Any", type: "Gentle / Wellbeing", withPartner: "Optional", done: false, dateDone: "" },
  { activity: "Build the baby memory box", description: "Collect scan photos, notes, cards & mementoes in a keepsake box", trimester: "Any", type: "Creative / Indoors", withPartner: "Optional", done: false, dateDone: "" },
  { activity: "Bump photo shoot", description: "Golden-hour outdoor shoot or cosy indoor session — hire a photographer", trimester: "2nd / 3rd", type: "Creative / Outdoors", withPartner: "Yes", done: false, dateDone: "" },
  { activity: "Scenic walk in nature", description: "Gentle stroll in a park, along the coast or through woodland", trimester: "Any", type: "Outdoor / Gentle", withPartner: "Optional", done: false, dateDone: "" },
  { activity: "Make a baby name shortlist", description: "A cosy evening, notepad and your favourite drink — surprisingly fun!", trimester: "Any", type: "Indoors / Relaxed", withPartner: "Yes", done: false, dateDone: "" },
  { activity: "Decorate the nursery", description: "Paint walls, hang prints, build flat-pack — a huge milestone", trimester: "2nd / 3rd", type: "Creative / Indoors", withPartner: "Yes", done: false, dateDone: "" },
  { activity: "Bake together", description: "Batch cook for the freezer or bake something indulgent together", trimester: "Any", type: "Indoors / Creative", withPartner: "Yes", done: false, dateDone: "" },
  { activity: "Antenatal / hypnobirthing", description: "Learn together what to expect and reduce birth anxiety as a team", trimester: "2nd / 3rd", type: "Educational", withPartner: "Yes", done: false, dateDone: "" },
  { activity: "Visit a botanical garden", description: "Peaceful, accessible and beautiful — pick spring blossom season", trimester: "Any", type: "Outdoor / Gentle", withPartner: "Optional", done: false, dateDone: "" },
  { activity: "Pregnancy journalling", description: "Write weekly bump updates, feelings and messages to your baby", trimester: "Any", type: "Indoors / Creative", withPartner: "No", done: false, dateDone: "" },
  { activity: "Watercolour art afternoon", description: "Paint something for the nursery — florals, landscapes, baby's name", trimester: "Any", type: "Indoors / Creative", withPartner: "Optional", done: false, dateDone: "" },
  { activity: "Swim or aqua aerobics", description: "Weightlessness is bliss when pregnant — deeply relaxing", trimester: "Any", type: "Gentle / Exercise", withPartner: "Optional", done: false, dateDone: "" },
  { activity: "Road trip or day trip", description: "Visit a village or coastline you've been meaning to explore", trimester: "1st / 2nd", type: "Outdoor / Adventure", withPartner: "Yes", done: false, dateDone: "" },
  { activity: "Newborn prep movie marathon", description: "Watch parenting films on your list in one cosy evening together", trimester: "3rd", type: "Indoors / Relaxed", withPartner: "Yes", done: false, dateDone: "" },
  { activity: "Write a letter to your baby", description: "A heartfelt note about who you are now and what you hope for them", trimester: "Any", type: "Indoors / Creative", withPartner: "No", done: false, dateDone: "" },
  { activity: "Meal prep freezer haul", description: "Sunday batch cooking — soups, stews, bakes. Future-you will be grateful!", trimester: "3rd", type: "Indoors / Practical", withPartner: "Yes", done: false, dateDone: "" },
  { activity: "Picnic in the park", description: "A blanket, your favourite snacks, and a sunny spot — simple and lovely", trimester: "1st / 2nd", type: "Outdoor / Gentle", withPartner: "Yes", done: false, dateDone: "" },
  { activity: "Pottery or ceramics class", description: "Relaxed beginner class — make something beautiful for the nursery", trimester: "1st / 2nd", type: "Creative / Indoors", withPartner: "Yes", done: false, dateDone: "" },
  { activity: "Pregnancy / antenatal massage", description: "Book a massage for mum — especially wonderful in the third trimester", trimester: "2nd / 3rd", type: "Self-Care / Gentle", withPartner: "No", done: false, dateDone: "" },
];

const partnerColour: Record<string, string> = {
  Yes: "bg-sky-100 text-sky-700",
  Optional: "bg-sky-50 text-sky-500",
  No: "bg-gray-100 text-gray-500",
};

export default function Activities() {
  const [activities, setActivities] = useStore<Activity[]>("pp-activities", defaultActivities);

  const toggle = (i: number) =>
    setActivities(activities.map((a, j) => j === i ? { ...a, done: !a.done, dateDone: !a.done ? new Date().toISOString().split("T")[0] : "" } : a));

  const updateDate = (i: number, date: string) =>
    setActivities(activities.map((a, j) => j === i ? { ...a, dateDone: date } : a));

  const done = activities.filter(a => a.done).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-sky-700">🌸 Pregnancy Activities Planner</h1>
        <p className="text-sm text-gray-500 mt-1">20 beautiful pregnancy activities with progress tracker</p>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex-1 bg-sky-100 rounded-full h-2">
            <div className="bg-sky-400 h-2 rounded-full transition-all" style={{ width: `${(done / activities.length) * 100}%` }} />
          </div>
          <span className="text-sm text-sky-500 shrink-0">{done} / {activities.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {activities.map((a, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl border shadow-sm p-5 transition-all ${a.done ? "border-sky-100 opacity-60" : "border-sky-200 hover:shadow-md"}`}
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={a.done}
                onChange={() => toggle(i)}
                className="accent-sky-500 w-4 h-4 mt-1 shrink-0 cursor-pointer"
              />
              <div className="flex-1 min-w-0">
                <div className={`font-medium text-sm ${a.done ? "line-through text-gray-400" : "text-sky-800"}`}>{a.activity}</div>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{a.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs bg-sky-50 text-sky-500 px-2 py-0.5 rounded-full">{a.trimester}</span>
                  <span className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full">{a.type}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${partnerColour[a.withPartner]}`}>
                    Partner: {a.withPartner}
                  </span>
                </div>
                {a.done && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-sky-400">Done on:</span>
                    <input
                      type="date"
                      className="text-xs border border-sky-200 rounded px-2 py-0.5"
                      value={a.dateDone}
                      onChange={e => updateDate(i, e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
