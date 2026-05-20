"use client";
import { useState } from "react";
import BackButton from "@/components/BackButton";

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I get started with the app?",
        a: "Head to the Dashboard and fill in your personal details — your name, due date, midwife, and GP. From there, use the navigation at the top to explore each section. We recommend starting with the Journal and Appointments pages early in your pregnancy.",
      },
      {
        q: "Do I need to create an account?",
        a: "No. Pregnancy Planner Suite requires no account, no email address, and no registration of any kind. You can use the full app immediately without identifying yourself.",
      },
      {
        q: "Is the app free to use?",
        a: "Yes, completely free. There are no subscriptions, no premium tiers, and no hidden charges.",
      },
      {
        q: "Does the app work on my phone?",
        a: "Yes. The app is fully responsive and works on any modern browser — on your phone, tablet, laptop, or desktop computer.",
      },
    ],
  },
  {
    category: "Your Data",
    items: [
      {
        q: "Where is my data stored?",
        a: "All your data is stored in your browser's local storage — on your device only. Nothing is uploaded to any server or database. We have no access to anything you enter.",
      },
      {
        q: "Will my data be there when I come back?",
        a: "Yes, as long as you use the same browser on the same device and have not cleared your browser's local storage or cache. If you use a different browser or device, your data will not be there as it has not been synced anywhere.",
      },
      {
        q: "Can I use the app on multiple devices?",
        a: "Currently, data is stored locally per device and browser, so it does not automatically sync between devices. To use the app on another device, you would need to re-enter your information on that device.",
      },
      {
        q: "What happens if I clear my browser cache?",
        a: "Clearing your browser's cache or local storage will permanently delete all your planner data. We recommend using the app regularly on one device and avoiding clearing local storage if you want to keep your data.",
      },
      {
        q: "Can you recover my data if I accidentally delete it?",
        a: "Unfortunately, no. Because your data is stored only on your device and we have no access to it, we are unable to recover it if it is deleted. Always be careful when clearing your browser storage.",
      },
    ],
  },
  {
    category: "Using the App",
    items: [
      {
        q: "How do I edit my personal details on the Dashboard?",
        a: "On the Dashboard page, click the 'Edit' button next to 'Your Details'. Fill in or update your information, then click 'Save' when you're done.",
      },
      {
        q: "Can I add my own tasks to the Trimester To-Do list?",
        a: "Yes. At the bottom of each trimester section on the To-Do page, click '+ Add task' to add your own custom tasks with a category and priority level.",
      },
      {
        q: "Can I add extra appointments beyond the pre-loaded ones?",
        a: "Yes. On the Appointments page, click '+ Add Appointment' to add any extra scans, consultant visits, or other appointments with your own date, time, and notes.",
      },
      {
        q: "How do I track my baby shower gifts?",
        a: "Go to the Baby Shower page and switch to the 'Gift Registry' tab. The page comes pre-loaded with common items — tick the 'Received' checkbox as gifts arrive. You can also add your own items with the '+ Add Item' button.",
      },
      {
        q: "How does the Budget tracker work?",
        a: "The Budget page shows a list of common pregnancy and baby purchases with estimated costs pre-filled. Enter your actual spend in the 'Actual' column as you buy things. The totals at the top update in real time to show your remaining balance.",
      },
      {
        q: "Can I edit the Wellness Plan grid?",
        a: "Yes. Every cell in the 7-day Wellness Plan table is editable. Click into any cell and type your own plan for that day and category. Your changes are saved automatically.",
      },
    ],
  },
  {
    category: "Privacy & Safety",
    items: [
      {
        q: "Is my pregnancy data private?",
        a: "Yes. Your data never leaves your device. We collect no personal information, use no tracking, and have no access to what you enter. See our Privacy Policy for full details.",
      },
      {
        q: "Is this app safe to use during pregnancy?",
        a: "Yes. The app is a digital organisational tool — it poses no physical risk. However, please remember that nothing in the app constitutes medical advice. Always follow the guidance of your GP, midwife, or healthcare team.",
      },
      {
        q: "What if someone else uses my device?",
        a: "Anyone with access to your device and browser can open the app and see your planner data. If you share your device, we recommend using a private/incognito browser window, or ensuring your device is secured with a password.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        q: "Which browsers does the app support?",
        a: "The app works in all modern browsers including Chrome, Safari, Firefox, and Edge on both desktop and mobile. Older browsers may not support all features.",
      },
      {
        q: "Why are my changes not saving?",
        a: "The app saves automatically as you type — there is no save button needed on most pages. If changes are not persisting, your browser may have local storage disabled or restricted. Check your browser's privacy settings.",
      },
      {
        q: "The app looks broken or is not loading properly. What should I do?",
        a: "Try refreshing the page. If the issue persists, try clearing your browser cache and reloading. If you continue to experience problems, try a different browser.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-pink-50 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left"
      >
        <span className={`text-sm font-medium leading-relaxed ${open ? "text-pink-700" : "text-gray-700"}`}>
          {q}
        </span>
        <span className={`text-pink-400 shrink-0 mt-0.5 transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      {open && (
        <p className="text-sm text-gray-500 leading-relaxed pb-4 pr-6">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <BackButton />
      <div className="py-8 space-y-3">
        <h1 className="text-3xl font-semibold text-pink-700">Frequently Asked Questions</h1>
        <p className="text-gray-500 leading-relaxed">
          Everything you need to know about using Pregnancy Planner Suite. Can't find your answer? Check the About page or reach out via GitHub.
        </p>
      </div>

      {faqs.map(({ category, items }) => (
        <div key={category} className="bg-white rounded-2xl border border-pink-100 shadow-sm overflow-hidden">
          <div className="bg-pink-50 px-6 py-3 border-b border-pink-100">
            <h2 className="font-semibold text-pink-700 text-sm uppercase tracking-wider">{category}</h2>
          </div>
          <div className="px-6">
            {items.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      ))}

      <div className="bg-pink-50 rounded-2xl border border-pink-100 px-6 py-5 flex gap-4">
        <div className="text-2xl shrink-0">💬</div>
        <div>
          <div className="font-semibold text-pink-700 mb-1">Still have a question?</div>
          <p className="text-sm text-gray-600">
            Visit the{" "}
            <a href="/about" className="text-pink-500 underline underline-offset-2 hover:text-pink-700">About page</a>
            {" "}for more detail on how the app works, or check our{" "}
            <a href="/privacy" className="text-pink-500 underline underline-offset-2 hover:text-pink-700">Privacy Policy</a>
            {" "}and{" "}
            <a href="/terms" className="text-pink-500 underline underline-offset-2 hover:text-pink-700">Terms & Conditions</a>.
          </p>
        </div>
      </div>

      <div className="text-center text-pink-300 text-sm pb-6">
        Pregnancy Planner Suite — built with care, designed for privacy 🌸
      </div>

    </div>
  );
}
