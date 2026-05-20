"use client";
import { useStore } from "@/lib/useStore";
import BackButton from "@/components/BackButton";

type Appt = {
  week: string;
  type: string;
  date: string;
  time: string;
  location: string;
  notes: string;
  nextSteps: string;
  done: boolean;
};

const defaultAppts: Appt[] = [
  { week: "8", type: "GP Booking Appt", date: "", time: "", location: "", notes: "Confirm pregnancy, blood tests, referral to midwife", nextSteps: "", done: false },
  { week: "10", type: "Midwife Booking In", date: "", time: "", location: "", notes: "Full history, bloods, lifestyle advice, screening options", nextSteps: "", done: false },
  { week: "11", type: "Combined Screening", date: "", time: "", location: "", notes: "Blood test + nuchal scan (Down's, Edwards', Patau's)", nextSteps: "", done: false },
  { week: "12", type: "12-Week Dating Scan", date: "", time: "", location: "", notes: "Dating ultrasound, check number of babies", nextSteps: "", done: false },
  { week: "16", type: "Midwife Review", date: "", time: "", location: "", notes: "Blood pressure, urine, results of screening tests", nextSteps: "", done: false },
  { week: "20", type: "Anomaly Scan", date: "", time: "", location: "", notes: "Detailed scan of baby's organs & anatomy", nextSteps: "", done: false },
  { week: "25", type: "Midwife Check", date: "", time: "", location: "", notes: "Fundal height, blood pressure, fetal movements", nextSteps: "", done: false },
  { week: "28", type: "Glucose Tolerance Test", date: "", time: "", location: "", notes: "Gestational diabetes screening (if indicated)", nextSteps: "", done: false },
  { week: "28", type: "Anti-D Injection", date: "", time: "", location: "", notes: "If Rhesus negative blood group", nextSteps: "", done: false },
  { week: "31", type: "Midwife Review", date: "", time: "", location: "", notes: "Fundal height, position, birth preferences", nextSteps: "", done: false },
  { week: "34", type: "Midwife Check", date: "", time: "", location: "", notes: "Birth plan discussion, hospital bag advice", nextSteps: "", done: false },
  { week: "36", type: "Group B Strep Test", date: "", time: "", location: "", notes: "Optional swab test", nextSteps: "", done: false },
  { week: "38", type: "Midwife Check", date: "", time: "", location: "", notes: "Position, presentation, finalise birth plan", nextSteps: "", done: false },
  { week: "40", type: "Midwife / Consultant", date: "", time: "", location: "", notes: "Post-dates discussion if no labour yet", nextSteps: "", done: false },
  { week: "41", type: "Consultant Review", date: "", time: "", location: "", notes: "Induction discussion & monitoring", nextSteps: "", done: false },
];

const emptyAppt = (): Appt => ({ week: "", type: "", date: "", time: "", location: "", notes: "", nextSteps: "", done: false });

export default function Appointments() {
  const [appts, setAppts] = useStore<Appt[]>("pp-appointments", defaultAppts);
  const [expanded, setExpanded] = useStore<number | null>("pp-appt-expanded", null);

  const toggle = (i: number) => setExpanded(expanded === i ? null : i);
  const update = (i: number, a: Appt) => setAppts(appts.map((x, j) => (j === i ? a : x)));
  const addAppt = () => setAppts([...appts, emptyAppt()]);
  const removeAppt = (i: number) => setAppts(appts.filter((_, j) => j !== i));

  const done = appts.filter(a => a.done).length;

  return (
    <div className="space-y-6">
      <BackButton />
      <div>
        <h1 className="text-2xl font-semibold text-pink-700">🩺 Doctor & Midwife Appointments</h1>
        <p className="text-sm text-gray-500 mt-1">All scans, midwife visits, consultant notes & results</p>
        <p className="text-xs text-pink-400 mt-1">{done} of {appts.length} completed</p>
      </div>

      <button onClick={addAppt} className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600 transition-colors">
        + Add Appointment
      </button>

      <div className="space-y-3">
        {appts.map((a, i) => (
          <div key={i} className={`bg-white rounded-xl border shadow-sm overflow-hidden transition-all ${a.done ? "border-pink-100 opacity-60" : "border-pink-200"}`}>
            <div
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-pink-50"
              onClick={() => toggle(i)}
            >
              <input
                type="checkbox"
                checked={a.done}
                onChange={e => { e.stopPropagation(); update(i, { ...a, done: e.target.checked }); }}
                className="accent-pink-500 w-4 h-4 shrink-0"
              />
              <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full shrink-0">Wk {a.week || "?"}</span>
              <span className={`font-medium text-sm flex-1 ${a.done ? "line-through text-gray-400" : "text-pink-800"}`}>{a.type || "New appointment"}</span>
              {a.date && <span className="text-xs text-gray-400 shrink-0">{a.date}</span>}
              <span className="text-pink-300 text-xs">{expanded === i ? "▲" : "▼"}</span>
            </div>

            {expanded === i && (
              <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-pink-50">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-pink-400 uppercase tracking-wider mt-3">Week</label>
                  <input className="border border-pink-200 rounded px-2 py-1 text-sm" value={a.week} onChange={e => update(i, { ...a, week: e.target.value })} placeholder="e.g. 12" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-pink-400 uppercase tracking-wider mt-3">Type</label>
                  <input className="border border-pink-200 rounded px-2 py-1 text-sm" value={a.type} onChange={e => update(i, { ...a, type: e.target.value })} placeholder="Appointment type" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-pink-400 uppercase tracking-wider">Date</label>
                  <input type="date" className="border border-pink-200 rounded px-2 py-1 text-sm" value={a.date} onChange={e => update(i, { ...a, date: e.target.value })} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-pink-400 uppercase tracking-wider">Time</label>
                  <input type="time" className="border border-pink-200 rounded px-2 py-1 text-sm" value={a.time} onChange={e => update(i, { ...a, time: e.target.value })} />
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs text-pink-400 uppercase tracking-wider">Location / Clinic</label>
                  <input className="border border-pink-200 rounded px-2 py-1 text-sm" value={a.location} onChange={e => update(i, { ...a, location: e.target.value })} placeholder="Hospital or clinic name" />
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs text-pink-400 uppercase tracking-wider">Notes</label>
                  <textarea rows={2} className="border border-pink-200 rounded px-2 py-1 text-sm resize-none" value={a.notes} onChange={e => update(i, { ...a, notes: e.target.value })} />
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs text-pink-400 uppercase tracking-wider">Next Steps</label>
                  <input className="border border-pink-200 rounded px-2 py-1 text-sm" value={a.nextSteps} onChange={e => update(i, { ...a, nextSteps: e.target.value })} placeholder="Follow up actions..." />
                </div>
                <div className="sm:col-span-2 flex justify-end">
                  <button onClick={() => removeAppt(i)} className="text-xs text-pink-300 hover:text-pink-500">Remove appointment</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
