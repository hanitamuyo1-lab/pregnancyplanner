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
    <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-pink-700">Your Details</h2>
        <button
          onClick={() => setEditing(!editing)}
          className="text-xs bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded-full transition-colors"
        >
          {editing ? "Save" : "Edit"}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
