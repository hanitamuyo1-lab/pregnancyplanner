import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Terms & Conditions — Pregnancy Planner Suite",
};

const sections = [
  {
    title: "1. Acceptance of terms",
    content: `By accessing or using Pregnancy Planner Suite (the "App"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use the App. These terms apply to all visitors and users of the App.`,
  },
  {
    title: "2. Description of the service",
    content: `Pregnancy Planner Suite is a free, browser-based web application that provides tools to help users organise and record their pregnancy journey. Features include a weekly journal, appointment tracker, baby shower planner, wellness plan, trimester to-do lists, budget tracker, and activities planner. The App is provided free of charge and without any warranty of continued availability.`,
  },
  {
    title: "3. Not medical advice",
    content: `The content provided in Pregnancy Planner Suite — including but not limited to appointment schedules, wellness suggestions, nutrition tips, and to-do lists — is intended for general organisational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always consult your GP, midwife, or qualified healthcare professional regarding any medical questions or concerns during your pregnancy. Never disregard professional medical advice or delay seeking it because of something you have read or recorded in this App.`,
  },
  {
    title: "4. User responsibilities",
    content: `You are solely responsible for all content you enter into the App and for how you use the information it provides. You agree not to use the App for any unlawful purpose. You are responsible for maintaining the security of the device on which you use the App, and for ensuring that other people with access to your device cannot view your planner data without your consent.`,
  },
  {
    title: "5. Data and privacy",
    content: `All data you enter into the App is stored locally on your device using browser local storage. We do not collect, store, or have access to any of your personal data. Please refer to our Privacy Policy for full details. You acknowledge that clearing your browser's local storage will permanently delete your planner data, and we cannot recover it.`,
  },
  {
    title: "6. Intellectual property",
    content: `The design, code, layout, and content of Pregnancy Planner Suite are the intellectual property of the App's creator. You may use the App for personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative works from the App or its content without prior written permission.`,
  },
  {
    title: "7. Disclaimer of warranties",
    content: `Pregnancy Planner Suite is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the App will be error-free, uninterrupted, secure, or free of viruses or other harmful components. We make no warranty as to the accuracy, completeness, or suitability of any content within the App.`,
  },
  {
    title: "8. Limitation of liability",
    content: `To the fullest extent permitted by law, the creator of Pregnancy Planner Suite shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the App, including but not limited to loss of data, loss of profits, or harm arising from reliance on any content in the App. Your use of the App is entirely at your own risk.`,
  },
  {
    title: "9. Third-party services",
    content: `The App is hosted on Vercel. By using the App, you acknowledge that Vercel's own terms of service and privacy policy apply to the hosting infrastructure. We are not responsible for the practices or content of any third-party services.`,
  },
  {
    title: "10. Changes to the service",
    content: `We reserve the right to modify, suspend, or discontinue the App at any time without notice. We may also update these Terms and Conditions from time to time. The effective date at the top of this page will reflect the most recent update. Continued use of the App after any changes constitutes acceptance of the new terms.`,
  },
  {
    title: "11. Governing law",
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: "12. Contact",
    content: `If you have any questions about these Terms and Conditions, please reach out via the GitHub repository for this project.`,
  },
];

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <BackButton />
      <div className="py-8 space-y-3">
        <h1 className="text-3xl font-semibold text-pink-700">Terms & Conditions</h1>
        <p className="text-sm text-gray-400">Effective date: 20 May 2026</p>
        <p className="text-gray-600 leading-relaxed">
          Please read these Terms and Conditions carefully before using Pregnancy Planner Suite. By using the App you agree to these terms.
        </p>
      </div>

      <div className="bg-pink-50 border border-pink-100 rounded-2xl px-6 py-5 flex gap-4">
        <div className="text-2xl shrink-0">⚕️</div>
        <div>
          <div className="font-semibold text-pink-700 mb-1">Important — not medical advice</div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Nothing in this app constitutes medical advice. Always consult your GP, midwife, or qualified healthcare professional for any medical questions during your pregnancy.
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
