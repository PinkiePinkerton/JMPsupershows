import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark text-gray-300 font-sans p-6 md:p-12 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-bold uppercase text-sm tracking-wider"
        >
          <ArrowLeft size={16} />
          Back to Hub
        </Link>

        <header className="border-b border-gray-800 pb-6">
          <h1 className="text-4xl font-serif text-gold uppercase tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 uppercase tracking-widest">Last Updated: April 2026</p>
        </header>

        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-white/90">
            JM Productions respects your privacy. This policy explains how we handle the information you provide when purchasing tickets, registering vehicles, or interacting with our digital platforms.
          </p>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">1. Information We Collect</h2>
            <p>
              We collect names, email addresses, and phone numbers provided during the ticket purchase or vendor registration process. We also collect payment confirmation details via third party platforms like Venmo or PayPal to facilitate event entry.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">2. How We Use Your Information</h2>
            <p>Your information is used strictly for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Verifying your entry at the event Will Call gate.</li>
              <li>Sending important updates regarding specific event logistics.</li>
              <li>Notifying you of upcoming JM Productions events. You may opt out of these updates at any time by following the instructions in the message or contacting us directly.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">3. Data Sharing & Security</h2>
            <p>
              We do not sell, rent, or share your personal information with third party marketers. Your data is only accessible to JM Productions staff for event management and promotional purposes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">4. Your Rights</h2>
            <p>
              If you would like to be removed from our marketing list or have your personal data deleted from our records, please contact us at <strong className="text-white">Luxurious925@gmail.com</strong>. We will process your request within 48 hours.
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
