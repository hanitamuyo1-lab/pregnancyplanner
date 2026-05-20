"use client";
import { useStore } from "@/lib/useStore";
import { useState } from "react";

type Details = {
  mumName: string;
  dueDate: string;
  partnerName: string;
  midwife: string;
  hospital: string;
  gp: string;
};

const empty: Details = { mumName: "", dueDate: "", partnerName: "", midwife: "", hospital: "", gp: "" };

export default function DetailsForm() {
  const [details, setDetails] = useStore<Details>("pp-details", empty);
  const [editing, setEditing] = useState(false);

  const field = (label: string, key: keyof Details) => (
    <div className="flex flex-col gap-1" key={key}>
      <label className="text-xs text-pink-500 uppercase tracking-wider">{label}</label>
      {editing ? (
        <input
          className="border border-pink-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-300"
          value={details[key]}
          onChange={e => setDetails({ ...details, [key]: e.target.value })}
        />
      ) : (
        <span className="text-sm">{details[key] || <span className="text-pink-300 italic">—</span>}</span>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-pink-100">
      <div className="bg-gradient-to-r from-pink-500 to-rose-400 px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-white">Your Details</h2>
          <p className="text-pink-100 text-xs mt-0.5">Your pregnancy at a glance</p>
        </div>
        <button
          onClick={() => setEditing(!editing)}
          className="text-xs bg-white/20 hover:bg-white/30 text-white border border-white/30 px-4 py-1.5 rounded-full transition-colors font-medium"
        >
          {editing ? "Save" : "Edit"}
        </button>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {field("Mum's Name", "mumName")}
        {field("Due Date", "dueDate")}
        {field("Partner's Name", "partnerName")}
        {field("Midwife", "midwife")}
        {field("Hospital / Birth Centre", "hospital")}
        {field("GP / Doctor Name", "gp")}
      </div>
    </div>
  );
}
