"use client";
import { useStore } from "@/lib/useStore";
import { useState } from "react";

type Guest = { name: string; contact: string; invited: boolean; rsvp: string; dietary: string; giftGiven: boolean };
type GiftItem = { item: string; category: string; cost: string; priority: string; whereToBuy: string; received: boolean };

const defaultGifts: GiftItem[] = [
  { item: "Pram / Travel system", category: "Transport", cost: "£400–£900", priority: "Essential", whereToBuy: "Amazon/John Lewis", received: false },
  { item: "Car seat (group 0+)", category: "Transport", cost: "£80–£250", priority: "Essential", whereToBuy: "Amazon/John Lewis", received: false },
  { item: "Moses basket / crib", category: "Sleep", cost: "£50–£200", priority: "Essential", whereToBuy: "Amazon/John Lewis", received: false },
  { item: "Baby monitor", category: "Safety", cost: "£30–£150", priority: "Essential", whereToBuy: "Amazon/John Lewis", received: false },
  { item: "Nursing pillow", category: "Feeding", cost: "£30–£60", priority: "High", whereToBuy: "Amazon/John Lewis", received: false },
  { item: "Baby bath & stand", category: "Bath", cost: "£25–£80", priority: "High", whereToBuy: "Amazon/John Lewis", received: false },
  { item: "Bouncer / rocker", category: "Comfort", cost: "£40–£200", priority: "High", whereToBuy: "Amazon/John Lewis", received: false },
  { item: "Baby carrier / sling", category: "Transport", cost: "£30–£150", priority: "High", whereToBuy: "Amazon/John Lewis", received: false },
  { item: "Nappy changing unit", category: "Nappies", cost: "£50–£200", priority: "High", whereToBuy: "Amazon/John Lewis", received: false },
  { item: "Steriliser & bottle set", category: "Feeding", cost: "£25–£80", priority: "Medium", whereToBuy: "Amazon/John Lewis", received: false },
  { item: "Baby clothes 0–3m", category: "Clothing", cost: "£50–£150", priority: "Essential", whereToBuy: "Amazon/John Lewis", received: false },
  { item: "Muslins (pack)", category: "General", cost: "£15–£30", priority: "Essential", whereToBuy: "Amazon/John Lewis", received: false },
];

const emptyGuest = (): Guest => ({ name: "", contact: "", invited: false, rsvp: "", dietary: "", giftGiven: false });
const emptyGift = (): GiftItem => ({ item: "", category: "", cost: "", priority: "Medium", whereToBuy: "", received: false });

const priorityColour: Record<string, string> = {
  Essential: "bg-sky-100 text-sky-700",
  High: "bg-sky-50 text-sky-600",
  Medium: "bg-orange-50 text-orange-600",
};

export default function BabyShower() {
  const [guests, setGuests] = useStore<Guest[]>("pp-guests", []);
  const [gifts, setGifts] = useStore<GiftItem[]>("pp-gifts", defaultGifts);
  const [tab, setTab] = useState<"guests" | "registry">("guests");

  const addGuest = () => setGuests([...guests, emptyGuest()]);
  const updateGuest = (i: number, g: Guest) => setGuests(guests.map((x, j) => (j === i ? g : x)));
  const removeGuest = (i: number) => setGuests(guests.filter((_, j) => j !== i));

  const addGift = () => setGifts([...gifts, emptyGift()]);
  const toggleGift = (i: number) => setGifts(gifts.map((g, j) => (j === i ? { ...g, received: !g.received } : g)));
  const removeGift = (i: number) => setGifts(gifts.filter((_, j) => j !== i));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-sky-700">🎀 Baby Shower Planner</h1>
        <p className="text-sm text-gray-500 mt-1">Gifts, guests, RSVPs, vendors and party checklist</p>
      </div>

      <div className="flex gap-2">
        {(["guests", "registry"] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${tab === t ? "bg-sky-500 text-white" : "bg-white border border-sky-200 text-sky-600 hover:bg-sky-50"}`}
          >
            {t === "guests" ? `Guest List (${guests.length})` : `Gift Registry (${gifts.filter(g => g.received).length}/${gifts.length})`}
          </button>
        ))}
      </div>

      {tab === "guests" && (
        <div className="space-y-4">
          <button onClick={addGuest} className="px-4 py-2 bg-sky-500 text-white rounded-full text-sm hover:bg-sky-600 transition-colors">
            + Add Guest
          </button>
          {guests.length === 0 && <p className="text-sky-300 text-sm italic">No guests yet — add your first one above.</p>}
          <div className="space-y-3">
            {guests.map((g, i) => (
              <div key={i} className="bg-white rounded-xl border border-sky-100 shadow-sm p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <input className="border border-sky-200 rounded px-2 py-1 text-sm col-span-2 sm:col-span-1" placeholder="Guest name" value={g.name} onChange={e => updateGuest(i, { ...g, name: e.target.value })} />
                <input className="border border-sky-200 rounded px-2 py-1 text-sm" placeholder="Contact / Email" value={g.contact} onChange={e => updateGuest(i, { ...g, contact: e.target.value })} />
                <input className="border border-sky-200 rounded px-2 py-1 text-sm" placeholder="Dietary needs" value={g.dietary} onChange={e => updateGuest(i, { ...g, dietary: e.target.value })} />
                <div className="flex items-center gap-4 col-span-2 sm:col-span-3">
                  <label className="flex items-center gap-1.5 text-sm cursor-pointer">
                    <input type="checkbox" checked={g.invited} onChange={e => updateGuest(i, { ...g, invited: e.target.checked })} className="accent-sky-500" /> Invited
                  </label>
                  <select className="border border-sky-200 rounded px-2 py-1 text-sm" value={g.rsvp} onChange={e => updateGuest(i, { ...g, rsvp: e.target.value })}>
                    <option value="">RSVP?</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                  </select>
                  <label className="flex items-center gap-1.5 text-sm cursor-pointer">
                    <input type="checkbox" checked={g.giftGiven} onChange={e => updateGuest(i, { ...g, giftGiven: e.target.checked })} className="accent-sky-500" /> Gift given
                  </label>
                  <button onClick={() => removeGuest(i)} className="ml-auto text-sky-300 hover:text-sky-500 text-xs">Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "registry" && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <button onClick={addGift} className="px-4 py-2 bg-sky-500 text-white rounded-full text-sm hover:bg-sky-600 transition-colors">
              + Add Item
            </button>
            <span className="text-sm text-sky-400">{gifts.filter(g => g.received).length} of {gifts.length} received</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl border border-sky-100 shadow-sm overflow-hidden">
              <thead className="bg-sky-50 text-sky-600 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Item</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Est. Cost</th>
                  <th className="px-4 py-3 text-left">Priority</th>
                  <th className="px-4 py-3 text-left">Where to Buy</th>
                  <th className="px-4 py-3 text-center">Received</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {gifts.map((g, i) => (
                  <tr key={i} className={`border-t border-sky-50 ${g.received ? "opacity-50" : ""}`}>
                    <td className="px-4 py-2">{g.item}</td>
                    <td className="px-4 py-2 text-gray-500">{g.category}</td>
                    <td className="px-4 py-2 text-gray-500">{g.cost}</td>
                    <td className="px-4 py-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${priorityColour[g.priority] ?? "bg-gray-100 text-gray-500"}`}>{g.priority}</span>
                    </td>
                    <td className="px-4 py-2 text-gray-500">{g.whereToBuy}</td>
                    <td className="px-4 py-2 text-center">
                      <input type="checkbox" checked={g.received} onChange={() => toggleGift(i)} className="accent-sky-500 w-4 h-4" />
                    </td>
                    <td className="px-4 py-2">
                      <button onClick={() => removeGift(i)} className="text-sky-200 hover:text-sky-400 text-xs">✕</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
