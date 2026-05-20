"use client";
import { useState } from "react";
import BackButton from "@/components/BackButton";

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I get started with the app?",
        a: "Subscribe to Pregnancy Planner Suite to unlock full access. Once subscribed, head to the Dashboard and fill in your personal details — your name, due date, midwife, and GP. From there, use the navigation at the top to explore each section. We recommend starting with the Journal and Appointments pages early in your pregnancy.",
      },
      {
        q: "Do I need to create an account?",
        a: "Yes. A subscription account is required to access Pregnancy Planner Suite. Your account lets us verify your active subscription and, in future, will enable secure cloud sync so your data is available across all your devices.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes — we offer a 7-day free trial so you can explore the full app before committing. No charge is made until the trial ends. You can cancel at any time during the trial period and will not be billed.",
      },
      {
        q: "Does the app work on my phone?",
        a: "Yes. The app is fully responsive and works on any modern browser — on your phone, tablet, laptop, or desktop computer. A dedicated iOS app is also coming soon.",
      },
    ],
  },
  {
    category: "Subscription & Billing",
    items: [
      {
        q: "How much does a subscription cost?",
        a: "Pregnancy Planner Suite is available on a Monthly plan at £3.99/month, or an Annual plan at £29.99/year (saving over 35% compared to monthly). Prices may vary by region.",
      },
      {
        q: "What do I get with a subscription?",
        a: "Full access to all features: Pregnancy Journal (weeks 1–40), Baby Shower Planner, Doctor & Midwife Appointments tracker, Weekly Wellness Plan, Trimester To-Do lists, Pregnancy Budget tracker, and Activities Planner. Future updates and new features are included at no extra cost.",
      },
      {
        q: "How do I cancel my subscription?",
        a: "You can cancel at any time from your account settings. On iOS, manage your subscription through Settings → Apple ID → Subscriptions. On the web, cancel directly from your account page. Cancellation takes effect at the end of your current billing period — you will not be charged again after that.",
      },
      {
        q: "Will I be charged automatically?",
        a: "Yes. Subscriptions renew automatically at the end of each billing period (monthly or annual) unless cancelled beforehand. You will receive a reminder email before any renewal charge.",
      },
      {
        q: "Can I get a refund?",
        a: "If you subscribed via the App Store, refund requests are handled by Apple — visit reportaproblem.apple.com. If you subscribed via our website, contact us within 14 days of purchase for a refund under our satisfaction guarantee.",
      },
      {
        q: "Do you offer any discounts?",
        a: "We offer a 35%+ saving when you choose the Annual plan over Monthly. We also run occasional promotional offers — follow us to stay updated.",
      },
    ],
  },
  {
    category: "Your Data",
    items: [
      {
        q: "Where is my data stored?",
        a: "Currently your data is stored in your browser's local storage — on your device only. Nothing is uploaded to any server. Cloud sync across devices is coming in a future update for all subscribers.",
      },
      {
        q: "Will my data be there when I come back?",
        a: "Yes, as long as you use the same browser on the same device and have not cleared your browser's local storage or cache. With the upcoming cloud sync feature, your data will be available on any device you sign in to.",
      },
      {
        q: "What happens if I cancel my subscription?",
        a: "If you cancel, your access continues until the end of your paid period. After that, you will no longer be able to access the app's features. Your locally stored data remains on your device but cannot be accessed through the app.",
      },
      {
        q: "Is my data private?",
        a: "Yes. Your personal health information is treated with the utmost care. We do not sell or share your data with third parties. See our Privacy Policy for full details.",
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
        q: "How does the Budget tracker work?",
        a: "The Budget page shows a list of common pregnancy and baby purchases with estimated costs pre-filled. Enter your actual spend in the 'Actual' column as you buy things. The totals at the top update in real time to show your remaining balance.",
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
        a: "Try refreshing the page. If the issue persists, try clearing your browser cache and reloading. If you continue to experience problems, try a different browser or contact our support team.",
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
          Everything you need to know about Pregnancy Planner Suite — subscriptions, billing, features, and more. Can't find your answer? Get in touch via the contact details on our About page.
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
