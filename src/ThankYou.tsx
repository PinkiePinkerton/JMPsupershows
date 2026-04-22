import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft, CheckCircle } from "lucide-react";

const flyer = "https://i.postimg.cc/dQfmQRjV/reno-flyer.jpg";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-gold selection:text-dark">
      {/* Hero Section (Same as Reno Page) */}
      <section 
        className="relative pt-0 pb-10 pl-[25px] pr-6 text-center border-b-4 border-gold overflow-hidden h-[320px] md:h-[600px] lg:h-[1060px]"
        style={{
          backgroundImage: `url(${flyer}), url('https://images.unsplash.com/photo-1514525253344-f814d074358a?q=80&w=1920&auto=format&fit=crop')`,
          backgroundSize: '100% auto',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#0a0a0a'
        }}
      >
        {/* Floating Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-4 left-4 z-50"
        >
          <Link 
            to="/" 
            className="flex items-center justify-center w-10 h-10 text-yellow-400 transition-all hover:scale-110 bg-black/50 backdrop-blur-md rounded-full border-2 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
            aria-label="Back to Hub"
          >
            <ChevronLeft size={24} />
          </Link>
        </motion.div>
      </section>

      {/* Thank You Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[700px] mx-auto px-6 py-16 text-center space-y-10"
      >
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
            className="p-4 rounded-full bg-gold/20 text-gold border border-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
          >
            <CheckCircle className="h-16 w-16" />
          </motion.div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight text-white font-display">
            You're In. <br />
            <span className="text-gold">Welcome to the Gold Standard.</span>
          </h1>
          
          <div className="space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed font-sans max-w-[600px] mx-auto">
            <p>
              Your tickets are at <strong className="text-white uppercase tracking-wider">will call</strong>. You can skip the box office and those lines when you arrive and go straight into the show entrance.
            </p>
            
            <p className="bg-[#161616] p-6 rounded-2xl border border-white/5 text-white/90 italic">
              "Just bring photo ID to claim your tickets. And don't worry, if you forget your ID, you can verify with your name and phone number."
            </p>

            <p className="pt-4 text-white font-medium">
              Get your speakers ready. The <span className="text-gold font-bold">RBL Posse</span> and <span className="text-gold font-bold">The Blue Tones</span> are waiting for you.
            </p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-10"
        >
          <Link 
            to="/" 
            className="inline-block text-gray-500 hover:text-gold uppercase tracking-[4px] font-bold text-xs transition-colors border-b border-gray-800 hover:border-gold pb-2"
          >
            Return to JM Hub
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer (Same as Reno Page) */}
      <footer className="text-center pb-12 opacity-40">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest">
          &copy; 2026 JM Productions &bull; All Sales Final &bull; No Refunds
        </p>
      </footer>
    </div>
  );
}
