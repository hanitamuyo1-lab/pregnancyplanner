import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Support — Pregnancy Planner Suite",
  description: "Get help with Pregnancy Planner Suite. Contact us at pregnancysuite@outlook.com.",
};

const SUPPORT_EMAIL = "pregnancysuite@outlook.com";

const faqs = [
  {
    q: "How do I contact support?",
    a: `Email us at ${SUPPORT_EMAIL} and we will get back to you within 24 hours.`,
  },
  {
    q: "I lost access after buying the iOS app — what do I do?",
    a: "Tap 'Restore purchase' on the purchase screen. Make sure you are signed in to the same Apple ID used for the original purchase.",
  },
  {
    q: "How do I request a refund?",
    a: "Refunds for the iOS app are handled by Apple. Visit reportaproblem.apple.com, select the purchase, and request a refund.",
  },
  {
    q: "My data has disappeared — can you help?",
    a: "Data is stored in your browser's local storage. If you cleared your browser cache or switched browsers it may not be visible. Email us and we will do our best to help.",
  },
  {
    q: "How do I delete my account or data?",
    a: `Email us at ${SUPPORT_EMAIL} with the subject 'Delete my data' and we will process your request within 48 hours.`,
  },
  {
    q: "I found a bug or something isn't working.",
    a: `Please email us at ${SUPPORT_EMAIL} with a short description of the issue and the device/browser you are using. Screenshots are always helpful.`,
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <BackButton />

      <div className="py-8 space-y-3">
        <h1 className="text-3xl font-semibold text-pink-700">Support</h1>
        <p className="text-gray-500 leading-relaxed">
          We are here to help. Reach out any time and we will get back to you as soon as possible.
        </p>
      </div>

      {/* Contact card */}
      <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 flex flex-col items-center text-center gap-4">
        <div className="text-4xl">✉️</div>
        <div>
          <p className="text-sm uppercase tracking-wider text-pink-400 font-semibold mb-1">Email us</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Support Request`}
            className="text-xl font-semibold text-pink-600 hover:text-pink-800 underline underline-offset-4 transition-colors"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
        <p className="text-sm text-gray-400">We typically reply within 24 hours.</p>
        <a
          href={`mailto:${SUPPORT_EMAIL}?subject=Support Request`}
          className="mt-2 inline-block bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors shadow-sm"
        >
          Send an email
        </a>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-lg font-semibold text-pink-700 mb-4">Common questions</h2>
        <div className="bg-white rounded-2xl border border-pink-100 shadow-sm overflow-hidden divide-y divide-pink-50">
          {faqs.map(({ q, a }) => (
            <div key={q} className="px-6 py-5">
              <p className="text-sm font-semibold text-gray-700 mb-1">{q}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback nudge */}
      <div className="bg-pink-50 rounded-2xl border border-pink-100 px-6 py-5 flex gap-4">
        <div className="text-2xl shrink-0">💬</div>
        <div>
          <div className="font-semibold text-pink-700 mb-1">Have a suggestion?</div>
          <p className="text-sm text-gray-600">
            We love hearing from our users. Email us at{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Feedback`}
              className="text-pink-500 underline underline-offset-2 hover:text-pink-700"
            >
              {SUPPORT_EMAIL}
            </a>{" "}
            with your ideas — your feedback shapes future updates.
          </p>
        </div>
      </div>

      <div className="text-center text-pink-300 text-sm pb-6">
        Pregnancy Planner Suite — built with care, designed for privacy 🌸
      </div>
    </div>
  );
}
