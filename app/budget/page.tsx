"use client";
import { useState } from "react";
import { useStore } from "@/lib/useStore";

type BudgetItem = {
  item: string;
  category: string;
  budget: string;
  actual: string;
  whereToBuy: string;
  purchased: boolean;
};

const defaultItems: BudgetItem[] = [
  { item: "Private scans / extra ultrasounds", category: "Maternity Healthcare", budget: "150", actual: "", whereToBuy: "", purchased: false },
  { item: "Prenatal vitamins (full term)", category: "Maternity Healthcare", budget: "80", actual: "", whereToBuy: "", purchased: false },
  { item: "Antenatal classes (NCT etc.)", category: "Maternity Healthcare", budget: "300", actual: "", whereToBuy: "", purchased: false },
  { item: "Hypnobirthing course", category: "Maternity Healthcare", budget: "200", actual: "", whereToBuy: "", purchased: false },
  { item: "Pregnancy massage sessions", category: "Maternity Healthcare", budget: "150", actual: "", whereToBuy: "", purchased: false },
  { item: "Dental check-ups", category: "Maternity Healthcare", budget: "60", actual: "", whereToBuy: "", purchased: false },
  { item: "Maternity support belt", category: "Maternity Healthcare", budget: "30", actual: "", whereToBuy: "", purchased: false },
  { item: "Cot / crib / Moses basket", category: "Nursery & Home", budget: "200", actual: "", whereToBuy: "", purchased: false },
  { item: "Mattress", category: "Nursery & Home", budget: "80", actual: "", whereToBuy: "", purchased: false },
  { item: "Bedding set x3", category: "Nursery & Home", budget: "90", actual: "", whereToBuy: "", purchased: false },
  { item: "Nursery furniture (wardrobe/drawers)", category: "Nursery & Home", budget: "400", actual: "", whereToBuy: "", purchased: false },
  { item: "Baby monitor", category: "Nursery & Home", budget: "80", actual: "", whereToBuy: "", purchased: false },
  { item: "Blackout blinds", category: "Nursery & Home", budget: "40", actual: "", whereToBuy: "", purchased: false },
  { item: "Room thermometer", category: "Nursery & Home", budget: "15", actual: "", whereToBuy: "", purchased: false },
  { item: "Nursery decorating / painting", category: "Nursery & Home", budget: "200", actual: "", whereToBuy: "", purchased: false },
  { item: "Pram / travel system", category: "Transport", budget: "600", actual: "", whereToBuy: "", purchased: false },
  { item: "Car seat (group 0+)", category: "Transport", budget: "150", actual: "", whereToBuy: "", purchased: false },
  { item: "Pram rain cover / sun shade", category: "Transport", budget: "40", actual: "", whereToBuy: "", purchased: false },
  { item: "Newborn clothing (0–3m)", category: "Clothing & Essentials", budget: "100", actual: "", whereToBuy: "", purchased: false },
  { item: "3–6m clothing bundle", category: "Clothing & Essentials", budget: "80", actual: "", whereToBuy: "", purchased: false },
  { item: "Baby muslins x10", category: "Clothing & Essentials", budget: "25", actual: "", whereToBuy: "", purchased: false },
  { item: "Hats, mittens, socks bundle", category: "Clothing & Essentials", budget: "20", actual: "", whereToBuy: "", purchased: false },
  { item: "Baby sleeping bags x2", category: "Clothing & Essentials", budget: "50", actual: "", whereToBuy: "", purchased: false },
  { item: "Nursing bras x3", category: "Feeding", budget: "60", actual: "", whereToBuy: "", purchased: false },
  { item: "Breast pump (electric)", category: "Feeding", budget: "120", actual: "", whereToBuy: "", purchased: false },
  { item: "Breast pads & nipple cream", category: "Feeding", budget: "25", actual: "", whereToBuy: "", purchased: false },
  { item: "Bottle set & steriliser", category: "Feeding", budget: "60", actual: "", whereToBuy: "", purchased: false },
  { item: "Nursing pillow", category: "Feeding", budget: "40", actual: "", whereToBuy: "", purchased: false },
  { item: "Baby bath & stand", category: "Bathing & Grooming", budget: "50", actual: "", whereToBuy: "", purchased: false },
  { item: "Baby toiletries set", category: "Bathing & Grooming", budget: "30", actual: "", whereToBuy: "", purchased: false },
  { item: "Baby nail kit", category: "Bathing & Grooming", budget: "12", actual: "", whereToBuy: "", purchased: false },
  { item: "Towels & flannels", category: "Bathing & Grooming", budget: "25", actual: "", whereToBuy: "", purchased: false },
  { item: "Maternity jeans x2", category: "Mum's Maternity Items", budget: "100", actual: "", whereToBuy: "", purchased: false },
  { item: "Maternity tops x4", category: "Mum's Maternity Items", budget: "80", actual: "", whereToBuy: "", purchased: false },
  { item: "Maternity nightwear", category: "Mum's Maternity Items", budget: "50", actual: "", whereToBuy: "", purchased: false },
];

const categories = [...new Set(defaultItems.map(i => i.category))];
const emptyItem = (): BudgetItem => ({ item: "", category: categories[0], budget: "", actual: "", whereToBuy: "", purchased: false });

function toNum(v: string): number {
  const n = parseFloat(v);
  return isNaN(n) ? 0 : n;
}

export default function Budget() {
  const [items, setItems] = useStore<BudgetItem[]>("pp-budget", defaultItems);
  const [filterCat, setFilterCat] = useState("All");

  const update = (idx: number, patch: Partial<BudgetItem>) =>
    setItems(items.map((x, j) => (j === idx ? { ...x, ...patch } : x)));

  const add = () => setItems([...items, emptyItem()]);
  const remove = (idx: number) => setItems(items.filter((_, j) => j !== idx));

  // Pair each item with its real index before filtering so updates always hit the right row.
  const indexed = items.map((item, idx) => ({ item, idx }));
  const visible = filterCat === "All" ? indexed : indexed.filter(({ item }) => item.category === filterCat);

  const totalBudget = items.reduce((s, i) => s + toNum(i.budget), 0);
  const totalActual = items.reduce((s, i) => s + toNum(i.actual), 0);
  const remaining = totalBudget - totalActual;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-pink-700">💰 Pregnancy & Baby Budget</h1>
        <p className="text-sm text-gray-500 mt-1">Full cost tracker — nursery, clothing, healthcare & more</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-pink-100 shadow-sm p-4 text-center">
          <div className="text-xs text-pink-400 uppercase tracking-wider">Total Budget</div>
          <div className="text-xl font-semibold text-pink-700 mt-1">£{totalBudget.toLocaleString()}</div>
        </div>
        <div className="bg-white rounded-xl border border-pink-100 shadow-sm p-4 text-center">
          <div className="text-xs text-pink-400 uppercase tracking-wider">Spent</div>
          <div className="text-xl font-semibold text-pink-700 mt-1">£{totalActual.toLocaleString()}</div>
        </div>
        <div className={`rounded-xl border shadow-sm p-4 text-center ${remaining >= 0 ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"}`}>
          <div className="text-xs uppercase tracking-wider text-gray-400">Remaining</div>
          <div className={`text-xl font-semibold mt-1 ${remaining >= 0 ? "text-green-600" : "text-red-500"}`}>
            {remaining >= 0 ? "£" : "-£"}{Math.abs(remaining).toLocaleString()}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["All", ...categories].map(c => (
          <button
            key={c}
            onClick={() => setFilterCat(c)}
            className={`px-3 py-1 rounded-full text-xs transition-colors ${filterCat === c ? "bg-pink-500 text-white" : "bg-white border border-pink-200 text-pink-500 hover:bg-pink-50"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-2xl border border-pink-100 shadow-sm">
        <table className="w-full text-sm bg-white min-w-[700px]">
          <thead className="bg-pink-50 text-xs text-pink-600 uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3 text-left">Item</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-right">Budget (£)</th>
              <th className="px-4 py-3 text-right">Actual (£)</th>
              <th className="px-4 py-3 text-right">Diff (£)</th>
              <th className="px-4 py-3 text-left">Where to Buy</th>
              <th className="px-4 py-3 text-center">Done</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {visible.map(({ item, idx }) => {
              const diff = toNum(item.budget) - toNum(item.actual);
              const hasActual = item.actual !== "";
              return (
                <tr key={idx} className={`border-t border-pink-50 hover:bg-pink-50/30 ${item.purchased ? "opacity-50" : ""}`}>
                  <td className="px-4 py-2">
                    <input
                      className="w-full bg-transparent outline-none text-sm focus:bg-pink-50 rounded px-1"
                      value={item.item}
                      onChange={e => update(idx, { item: e.target.value })}
                      placeholder="Item name"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <select
                      className="bg-transparent outline-none text-xs text-gray-500 focus:bg-pink-50 rounded"
                      value={item.category}
                      onChange={e => update(idx, { category: e.target.value })}
                    >
                      {categories.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </td>
                  <td className="px-4 py-2 text-right">
                    <input
                      className="w-20 bg-transparent outline-none text-sm text-right border-b border-transparent focus:border-pink-300"
                      type="number"
                      min="0"
                      value={item.budget}
                      onChange={e => update(idx, { budget: e.target.value })}
                      placeholder="0"
                    />
                  </td>
                  <td className="px-4 py-2 text-right">
                    <input
                      className="w-20 bg-transparent outline-none text-sm text-right border-b border-pink-200 focus:border-pink-400"
                      type="number"
                      min="0"
                      value={item.actual}
                      onChange={e => update(idx, { actual: e.target.value })}
                      placeholder="Enter amount"
                    />
                  </td>
                  <td className={`px-4 py-2 text-right text-xs font-medium ${diff >= 0 ? "text-green-500" : "text-red-400"}`}>
                    {hasActual ? (diff >= 0 ? `+£${diff.toFixed(0)}` : `-£${Math.abs(diff).toFixed(0)}`) : "—"}
                  </td>
                  <td className="px-4 py-2">
                    <input
                      className="w-full bg-transparent outline-none text-xs text-gray-400 focus:bg-pink-50 rounded px-1"
                      value={item.whereToBuy}
                      onChange={e => update(idx, { whereToBuy: e.target.value })}
                      placeholder="Where to buy"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={item.purchased}
                      onChange={e => update(idx, { purchased: e.target.checked })}
                      className="accent-pink-500 w-4 h-4 cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button onClick={() => remove(idx)} className="text-pink-200 hover:text-pink-500 text-xs">✕</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button onClick={add} className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600 transition-colors">
        + Add Item
      </button>
    </div>
  );
}
