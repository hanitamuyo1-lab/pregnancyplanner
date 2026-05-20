"use client";
import { useStore } from "@/lib/useStore";
import { useState } from "react";

type Entry = {
  date: string;
  feeling: string;
  development: string;
  symptoms: string;
  message: string;
};

const emptyEntry = (): Entry => ({ date: "", feeling: "", development: "", symptoms: "", message: "" });

const weeks = Array.from({ length: 40 }, (_, i) => i + 1);

export default function Journal() {
  const [entries, setEntries] = useStore<Record<number, Entry>>("pp-journal", {});
  const [selected, setSelected] = useState<number>(1);

  const entry = entries[selected] ?? emptyEntry();

  const update = (field: keyof Entry, value: string) => {
    setEntries({ ...entries, [selected]: { ...entry, [field]: value } });
  };

  const filled = Object.keys(entries).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-sky-700">📖 Pregnancy Journal</h1>
        <p className="text-sm text-gray-500 mt-1">Record your journey — one beautiful week at a time</p>
        <p className="text-xs text-sky-400 mt-1">{filled} of 40 weeks recorded</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {weeks.map(w => (
          <button
            key={w}
            onClick={() => setSelected(w)}
            className={`w-9 h-9 rounded-full text-xs font-medium transition-colors ${
              selected === w
                ? "bg-sky-500 text-white"
                : entries[w]?.feeling || entries[w]?.message
                ? "bg-sky-200 text-sky-800"
                : "bg-white border border-sky-200 text-sky-400 hover:bg-sky-50"
            }`}
          >
            {w}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-6 space-y-5">
        <h2 className="text-sky-700 font-medium">Week {selected}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-sky-500 uppercase tracking-wider">Date</label>
            <input
              type="date"
              className="border border-sky-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-300"
              value={entry.date}
              onChange={e => update("date", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-sky-500 uppercase tracking-wider">How I'm Feeling</label>
            <input
              className="border border-sky-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-300"
              value={entry.feeling}
              placeholder="e.g. Excited and a little tired..."
              onChange={e => update("feeling", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-sky-500 uppercase tracking-wider">Baby's Development</label>
          <input
            className="border border-sky-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-300"
            value={entry.development}
            placeholder="e.g. Baby is the size of a lemon..."
            onChange={e => update("development", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-sky-500 uppercase tracking-wider">Symptoms / Notes</label>
          <textarea
            rows={3}
            className="border border-sky-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-300 resize-none"
            value={entry.symptoms}
            placeholder="Any symptoms, appointments, or notes this week..."
            onChange={e => update("symptoms", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-sky-500 uppercase tracking-wider">Message to Baby</label>
          <textarea
            rows={4}
            className="border border-sky-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-300 resize-none"
            value={entry.message}
            placeholder="Dear baby, this week I want you to know..."
            onChange={e => update("message", e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          {selected > 1 && (
            <button
              onClick={() => setSelected(s => s - 1)}
              className="px-4 py-2 text-sm border border-sky-200 rounded-full hover:bg-sky-50 text-sky-600 transition-colors"
            >
              ← Week {selected - 1}
            </button>
          )}
          {selected < 40 && (
            <button
              onClick={() => setSelected(s => s + 1)}
              className="px-4 py-2 text-sm bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors ml-auto"
            >
              Week {selected + 1} →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
