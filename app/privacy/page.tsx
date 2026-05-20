export const metadata = {
  title: "Privacy Policy — Pregnancy Planner Suite",
};

const sections = [
  {
    title: "1. Who we are",
    content: `Pregnancy Planner Suite is a free web application designed to help you organise and record your pregnancy journey. This Privacy Policy explains how the app handles your information. Because this app stores all data locally on your own device, we collect no personal information from you whatsoever.`,
  },
  {
    title: "2. What data the app collects",
    content: `Pregnancy Planner Suite does not collect, store, or transmit any personal data to any server, database, or third party. All information you enter — including your name, due date, journal entries, appointment details, budget figures, and any other content — is stored exclusively in your browser's local storage on your own device. It never leaves your device.`,
  },
  {
    title: "3. Local storage",
    content: `The app uses your browser's built-in local storage to save your data between sessions. This is a standard browser feature that works similarly to cookies, but the data is only ever read and written by the app running in your browser. No one else — including us — can access it. If you clear your browser's local storage or cache, your planner data will be permanently deleted from your device.`,
  },
  {
    title: "4. No accounts or registration",
    content: `Pregnancy Planner Suite does not require you to create an account, provide an email address, or register in any way. There is no login, no profile, and no user database. You can use the app fully and freely without identifying yourself to us.`,
  },
  {
    title: "5. Cookies",
    content: `This app does not use cookies for tracking, advertising, or analytics purposes. The only browser storage used is local storage (described in Section 3 above), which is used solely to save your planner data on your device.`,
  },
  {
    title: "6. Third-party services",
    content: `The app is hosted on Vercel, a cloud platform. When you visit the app, Vercel may log standard server access data such as your IP address, browser type, and the pages you request. This is standard practice for web hosting and is governed by Vercel's own Privacy Policy. We do not receive or store this data ourselves. No advertising networks, tracking pixels, or analytics services are used in this app.`,
  },
  {
    title: "7. Children's privacy",
    content: `This app is intended for use by adults who are pregnant or planning a pregnancy. We do not knowingly collect any information from children under the age of 13. As no data is collected by us at all, there is no specific risk to children's privacy from using this app.`,
  },
  {
    title: "8. Data security",
    content: `Because your data is stored only on your own device and never transmitted to us, the security of your data depends on the security of your own device and browser. We recommend keeping your device secure with a password or PIN, and keeping your browser up to date. If you share your device with others, be aware that they may be able to access the app and see your planner data.`,
  },
  {
    title: "9. Your rights",
    content: `Since we hold no personal data about you, there is nothing for us to provide, correct, or delete on our end. You are in complete control of your data at all times. You can view, edit, or delete all your data directly within the app, or by clearing your browser's local storage in your browser settings.`,
  },
  {
    title: "10. Changes to this policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically. Continued use of the app after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: "11. Contact",
    content: `If you have any questions about this Privacy Policy or how the app handles your information, you are welcome to reach out via the GitHub repository for this project.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">

      <div className="py-8 space-y-3">
        <h1 className="text-3xl font-semibold text-pink-700">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Effective date: 20 May 2026</p>
        <p className="text-gray-600 leading-relaxed">
          Your privacy is important to us. This policy explains clearly and plainly how Pregnancy Planner Suite handles your information — in short, we don't collect any.
        </p>
      </div>

      <div className="bg-pink-50 border border-pink-100 rounded-2xl px-6 py-5 flex gap-4">
        <div className="text-2xl shrink-0">🔒</div>
        <div>
          <div className="font-semibold text-pink-700 mb-1">The short version</div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Everything you type into this app stays on your device. We collect no personal data, use no tracking, require no account, and send nothing to any server. Your pregnancy journey is completely private.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {sections.map(({ title, content }) => (
          <div key={title} className="bg-white rounded-2xl border border-pink-100 shadow-sm px-6 py-5 space-y-2">
            <h2 className="font-semibold text-pink-700">{title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
          </div>
        ))}
      </div>

      <div className="text-center text-pink-300 text-sm pb-6">
        Pregnancy Planner Suite — built with care, designed for privacy 🌸
      </div>

    </div>
  );
}
