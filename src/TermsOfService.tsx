import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
          <h1 className="text-4xl font-serif text-gold uppercase tracking-tight mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 uppercase tracking-widest">Last Updated: April 2026</p>
        </header>

        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">1. Ticket Sales & Refunds</h2>
            <p>
              All ticket sales for JM Productions events are final. Because our events involve significant logistics and production costs, no refunds or exchanges will be issued for any reason, including weather conditions or event rescheduling.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">2. Will Call Procedure</h2>
            <p>
              Pre-sale tickets are managed via a digital Will Call list. To gain entry, you must present a valid photo ID that matches the name provided at checkout, along with a copy of your digital payment receipt. JM Productions is not responsible for lost or stolen digital receipts.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">3. Liability Waiver</h2>
            <p>
              By entering the event premises, attendees assume all risks related to personal injury or property damage. JM Productions, its staff, and the venue owners are not liable for any damage to vehicles, theft of personal property, or personal injury sustained during the course of the event.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">4. Attendee Conduct</h2>
            <p>
              We strive to maintain a family friendly environment. Any disruptive behavior, including but not limited to burnouts, excessive engine revving, or disorderly conduct, will result in immediate ejection from the premises without a refund.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">5. Photography & Media Release</h2>
            <p>
              By attending a JM Productions event, you consent to being photographed or filmed for promotional and marketing purposes. JM Productions retains all rights to media captured at the event.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">6. Contact Information</h2>
            <p>
              For questions regarding these terms or event logistics, please contact JM Productions at <strong className="text-white">Luxurious925@gmail.com</strong>.
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
