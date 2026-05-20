"use client";
import { useStore } from "@/lib/useStore";
import BackButton from "@/components/BackButton";

type Task = { task: string; category: string; priority: "High" | "Medium" | "Low"; done: boolean };

const t1: Task[] = [
  { task: "Book GP appointment to confirm pregnancy", category: "Health", priority: "High", done: false },
  { task: "Register with a midwife", category: "Health", priority: "High", done: false },
  { task: "Start taking folic acid 400mcg daily", category: "Health", priority: "High", done: false },
  { task: "Begin pregnancy journal", category: "Personal", priority: "High", done: false },
  { task: "Tell your partner / close family", category: "Personal", priority: "Medium", done: false },
  { task: "Stop smoking / alcohol / limit caffeine", category: "Health", priority: "Medium", done: false },
  { task: "Book 12-week dating scan", category: "Medical", priority: "Medium", done: false },
  { task: "Research maternity leave entitlements", category: "Admin", priority: "Medium", done: false },
  { task: "Start a pregnancy budget spreadsheet", category: "Finance", priority: "Medium", done: false },
  { task: "Buy or download a pregnancy tracker app", category: "Personal", priority: "Medium", done: false },
  { task: "Schedule combined screening test", category: "Medical", priority: "Medium", done: false },
  { task: "Check travel & health insurance", category: "Admin", priority: "Medium", done: false },
];

const t2: Task[] = [
  { task: "Book 20-week anomaly scan", category: "Medical", priority: "High", done: false },
  { task: "Find out baby's sex (optional)", category: "Personal", priority: "High", done: false },
  { task: "Start researching prams, car seats & cots", category: "Shopping", priority: "High", done: false },
  { task: "Begin planning the nursery", category: "Home", priority: "High", done: false },
  { task: "Research antenatal & NCT classes", category: "Education", priority: "Medium", done: false },
  { task: "Plan baby shower or ask someone to organise", category: "Social", priority: "Medium", done: false },
  { task: "Start writing a birth preferences document", category: "Medical", priority: "Medium", done: false },
  { task: "Research cord blood banking options", category: "Medical", priority: "Medium", done: false },
  { task: "Review & update your will", category: "Admin", priority: "Medium", done: false },
  { task: "Tell employer & arrange maternity leave", category: "Work", priority: "Medium", done: false },
  { task: "Set up a baby registry / wish list", category: "Shopping", priority: "Medium", done: false },
  { task: "Take bump photos — document the journey!", category: "Personal", priority: "Medium", done: false },
  { task: "Research childcare options", category: "Admin", priority: "Medium", done: false },
];

const t3: Task[] = [
  { task: "Attend antenatal / hypnobirthing classes", category: "Education", priority: "High", done: false },
  { task: "Pack hospital bag", category: "Prep", priority: "High", done: false },
  { task: "Install & check car seat", category: "Safety", priority: "High", done: false },
  { task: "Finalise birth plan with midwife", category: "Medical", priority: "High", done: false },
  { task: "Freeze batch cook meals", category: "Practical", priority: "Medium", done: false },
  { task: "Set up nursery & baby's sleep space", category: "Home", priority: "High", done: false },
  { task: "Download contraction timer app", category: "Prep", priority: "Medium", done: false },
  { task: "Arrange pet / childcare cover for birth day", category: "Admin", priority: "Medium", done: false },
];

const priorityBadge: Record<string, string> = {
  High: "bg-pink-100 text-pink-700",
  Medium: "bg-pink-50 text-pink-500",
  Low: "bg-gray-100 text-gray-500",
};

const sections = [
  { key: "t1", label: "1st Trimester", sub: "Weeks 1–12", default: t1 },
  { key: "t2", label: "2nd Trimester", sub: "Weeks 13–26", default: t2 },
  { key: "t3", label: "3rd Trimester", sub: "Weeks 27–40", default: t3 },
];

function TaskList({ storeKey, defaultTasks }: { storeKey: string; defaultTasks: Task[] }) {
  const [tasks, setTasks] = useStore<Task[]>(storeKey, defaultTasks);

  const toggle = (i: number) => setTasks(tasks.map((t, j) => (j === i ? { ...t, done: !t.done } : t)));
  const add = () => setTasks([...tasks, { task: "", category: "", priority: "Medium", done: false }]);
  const update = (i: number, field: keyof Task, value: string | boolean) =>
    setTasks(tasks.map((t, j) => (j === i ? { ...t, [field]: value } : t)));
  const remove = (i: number) => setTasks(tasks.filter((_, j) => j !== i));

  const done = tasks.filter(t => t.done).length;

  return (
    <div className="space-y-2">
      <div className="text-xs text-pink-400 mb-3">{done} of {tasks.length} done</div>
      {tasks.map((t, i) => (
        <div key={i} className={`flex items-start gap-3 bg-white rounded-lg border px-4 py-3 transition-colors ${t.done ? "border-pink-50 opacity-60" : "border-pink-100"}`}>
          <input
            type="checkbox"
            checked={t.done}
            onChange={() => toggle(i)}
            className="accent-pink-500 mt-0.5 w-4 h-4 shrink-0"
          />
          <div className="flex-1 min-w-0">
            <input
              className={`w-full text-sm bg-transparent border-none outline-none ${t.done ? "line-through text-gray-400" : "text-gray-800"}`}
              value={t.task}
              onChange={e => update(i, "task", e.target.value)}
              placeholder="Task description"
            />
            <div className="flex gap-2 mt-1">
              <input
                className="text-xs text-gray-400 bg-transparent border-none outline-none w-24"
                value={t.category}
                onChange={e => update(i, "category", e.target.value)}
                placeholder="Category"
              />
              <select
                className="text-xs bg-transparent border-none outline-none text-gray-400"
                value={t.priority}
                onChange={e => update(i, "priority", e.target.value)}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${priorityBadge[t.priority]}`}>{t.priority}</span>
          <button onClick={() => remove(i)} className="text-pink-200 hover:text-pink-400 text-xs shrink-0">✕</button>
        </div>
      ))}
      <button onClick={add} className="text-sm text-pink-400 hover:text-pink-600 mt-2">+ Add task</button>
    </div>
  );
}

export default function Todo() {
  return (
    <div className="space-y-8">
      <BackButton />
      <div>
        <h1 className="text-2xl font-semibold text-pink-700">✅ Trimester To-Do List</h1>
        <p className="text-sm text-gray-500 mt-1">Essential tasks broken down by trimester</p>
      </div>

      {sections.map(({ key, label, sub, default: def }) => (
        <div key={key} className="space-y-3">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-medium text-pink-700">{label}</h2>
            <span className="text-sm text-pink-400">{sub}</span>
          </div>
          <TaskList storeKey={`pp-todo-${key}`} defaultTasks={def} />
        </div>
      ))}
    </div>
  );
}
