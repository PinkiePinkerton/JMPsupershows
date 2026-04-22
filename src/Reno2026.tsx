import { motion } from "motion/react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Clock, CreditCard, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const flyer = "/reno-flyer.jpg?v=6";

const SPONSORS = [
  "Baldy's Mixed Drinks",
  "Pizza Baron",
  "Galindo's Custom Lowrider Bikes",
  "RC Boulevard",
  "ABC Plating Inc.",
  "Tacos Lowras Reno",
  "La Gente Chicano Wear",
  "First Class Landscape Construction",
  "VMS (Vicious Motor Sports)",
  "Al's Rod & Custom",
  "Jack of All Fades",
  "Dream Catcher",
  "Street Juice",
  "Hey Mex Photography",
  "Apex Window Tinting",
  "Summit Racing Equipment",
  "Lowridaz Magazine",
  "Bull on the Road"
];

export default function Reno2026() {
  const [searchParams] = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';
  const CUTOFF_DATE = new Date("2026-05-15T00:00:00-07:00").getTime();
  const isPreSaleOver = Date.now() >= CUTOFF_DATE;

  useEffect(() => {
    if (isSuccess) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'purchase',
        'transaction_id': 'RENO-' + Math.floor(Math.random() * 1000000),
        'value': 30.00,
        'currency': 'USD'
      });
    }
  }, [isSuccess]);

  const handleInitiateCheckout = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'initiate_checkout',
      'platform': 'stripe'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl"
        >
          <div className="mb-8 inline-block p-4 rounded-full bg-gold/20 text-gold">
            <CheckCircle className="h-16 w-16" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic mb-4 font-display text-white">You're in the Show!</h1>
          <p className="text-xl text-gray-400 mb-8 font-sans">Your tickets are confirmed. We've added your name to the VIP Will Call list for May 16th. No physical tickets are required—just bring your ID to the gate.</p>
          <Link to="/" className="text-gold font-bold hover:underline font-sans uppercase tracking-[2px]">Return to Home Page</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-gold selection:text-dark">
      {/* Hero Section */}
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
        {/* Desktop Overlay */}
        <div className="absolute inset-0 bg-black/70 hidden lg:block h-0 w-[200px]" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-6 left-6 z-20"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-bold uppercase text-sm tracking-wider bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft size={16} />
            Back to Hub
          </Link>
        </motion.div>

      </section>
      
      {/* Story Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pt-[31px] pb-16 px-6 bg-[#0d0d0d] border-b border-white/5 text-center"
      >
        <div className="max-w-[500px] mx-auto space-y-6">
          <p className="font-sans font-medium text-lg md:text-[1.15rem] text-white leading-[1.6]">
            The sun dips behind the Sierras and the city lights take over, turning the Reno pavement into a mirror of neon and ambition. This isn't just a car show; it's a gathering of the tribe. 
          </p>
          <p className="font-sans font-medium text-lg md:text-[1.15rem] text-white leading-[1.6]">
            It's the rhythmic hiss of hydraulics and the scent of street tacos drifting through the air while <strong className="text-gold">RBL Posse</strong> provides the soundtrack to a thousand polished dreams. 
          </p>
          <p className="font-sans font-medium text-lg md:text-[1.15rem] text-white leading-[1.6] pt-0 pb-0 mb-[-20px]">
            When John Munoz puts his name on an event, he’s not just parking cars in a hall. He is curating a gallery of chrome and candy paint that tells the story of the Biggest Little City in the World.
          </p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[600px] mx-auto px-6 py-12 space-y-8"
      >
        {/* Action Card */}
        <motion.div 
          variants={itemVariants}
          className={`p-8 rounded-2xl border text-center shadow-2xl ${
            isPreSaleOver 
              ? 'bg-gray-dark border-gold' 
              : 'bg-[#161616] border-white/10'
          }`}
        >
          {isPreSaleOver ? (
            <div id="ticket-button-container">
              <p className="text-gold font-bold uppercase tracking-widest mb-2">Pre-Sale Ended</p>
              <p className="text-white text-3xl font-black uppercase italic leading-tight">Tickets Available at the Gate</p>
              <p className="text-gray-400 text-sm mt-4 uppercase tracking-widest font-bold">Box Office opens May 15th at 11:00 AM</p>
            </div>
          ) : (
            <div id="ticket-button-container">
              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-400 mb-2">Advance Will Call Special</h3>
              <span className="text-6xl font-black text-gold block my-4">$30.00</span>
              <p className="text-gray-400 mb-8">Save $8.00 per ticket when you book in advance through JM Productions.</p>
              <motion.a 
                href="https://book.stripe.com/eVq3cxgeO1bs0GRbZp18c00" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleInitiateCheckout}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block w-full bg-gold text-dark py-5 rounded-xl font-black text-2xl uppercase tracking-wider shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all"
              >
                Get Advance Tickets
              </motion.a>
              <p className="text-xs mt-6 text-gray-500 uppercase tracking-widest font-black">
                Early Bird Pricing Ends May 14 at Midnight
              </p>
            </div>
          )}
        </motion.div>

        {/* Logistics Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="bg-[#222] p-5 rounded-xl border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-gold" size={16} />
              <strong className="text-gold text-[0.75rem] uppercase tracking-widest">When</strong>
            </div>
            <p className="text-sm leading-relaxed">
              Saturday, May 16<br />11:00 AM – 6:00 PM
            </p>
          </div>
          <div className="bg-[#222] p-5 rounded-xl border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-gold" size={16} />
              <strong className="text-gold text-[0.75rem] uppercase tracking-widest">Where</strong>
            </div>
            <p className="text-sm leading-relaxed">
              Reno-Sparks Convention Center
            </p>
          </div>
          <div className="bg-[#222] p-5 rounded-xl border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="text-gold" size={16} />
              <strong className="text-gold text-[0.75rem] uppercase tracking-widest">Parking</strong>
            </div>
            <p className="text-sm leading-relaxed">
              $10 On-Site / Free at Atlantis Lot
            </p>
          </div>
          <div className="bg-[#222] p-5 rounded-xl border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="text-gold" size={16} />
              <strong className="text-gold text-[0.75rem] uppercase tracking-widest">Door Price</strong>
            </div>
            <p className="text-sm leading-relaxed">
              $38 General / $33 Military & Seniors
            </p>
          </div>
        </motion.div>

        {/* Culture Returns Section */}
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-12 items-center pt-8"
        >
          <div>
            <h3 className="text-4xl font-black mb-6 uppercase italic text-gold font-display">The Culture Returns</h3>
            <p className="text-gray-400 text-lg leading-relaxed font-sans">600 custom builds. The rhythmic thump of a deep bassline. The unmistakable shimmer of candy paint under the arena lights.</p>
          </div>
          <div className="bg-[#161616] border border-white/5 p-8 rounded-3xl">
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest">Event Features</h4>
            <ul className="space-y-3 text-gray-400 font-sans">
              <li className="flex items-center gap-2">
                <span className="text-gold font-bold text-xl">•</span>
                <span>RBL Posse Featuring Black C</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold font-bold text-xl">•</span>
                <span>Blue Tunes Live</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold font-bold text-xl">•</span>
                <span>Premiere Car Show & Competition</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold font-bold text-xl">•</span>
                <span>Kids 10 & Under Free</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Performers */}
        <motion.div 
          variants={itemVariants}
          className="border-l-4 border-gold pl-6 py-2"
        >
          <h2 className="text-2xl font-serif text-gold uppercase tracking-wider mb-4">Live Performances</h2>
          <div className="space-y-2">
            <p className="text-lg"><strong className="text-white">RBL Posse</strong> featuring Black C</p>
            <p className="text-lg"><strong className="text-white">Blue Tunes</strong></p>
            <p className="text-sm italic text-gray-500 mt-4">Plus, DJ RC Boulevard</p>
          </div>
        </motion.div>

        {/* Note Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-[#161616] p-6 rounded-xl border border-dashed border-gray-700 text-center"
        >
          <p className="text-sm text-gray-400">
            <strong className="text-white">Note:</strong> No outside food or drinks allowed inside the venue. Thank you for keeping the Supershow family friendly!
          </p>
        </motion.div>

        {/* Sponsors */}
        <motion.div 
          variants={itemVariants}
          className="pt-12"
        >
          <h3 className="text-[0.75rem] uppercase tracking-[3px] text-gray-600 mb-8 font-bold text-center">Official Partners</h3>
          <div className="grid grid-cols-2 gap-3">
            {SPONSORS.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-[#1a1a1a] p-4 rounded-lg border border-white/5 flex items-center justify-center text-center min-h-[80px]"
              >
                <span className="text-gold font-sans font-bold text-xs md:text-sm uppercase tracking-wider">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          variants={itemVariants}
          className="text-center pt-12 pb-8 border-t border-white/5"
        >
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            &copy; 2026 JM Productions &bull; All Sales Final &bull; No Refunds
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
}
