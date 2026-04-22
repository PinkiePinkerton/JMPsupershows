/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import Reno2026 from "./Reno2026";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Ticket, 
  Info, 
  Store,
} from "lucide-react";

const logo = "/jmp_logo.png?v=5";

const SOCIAL_LINKS = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/jm_productions_sw/", size: 150 },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/jmpsupershows/", size: 150 },
  { name: "TikTok", icon: ({ size, ...props }: any) => (
    <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ), url: "https://www.tiktok.com/@jm_productions_sw", size: 150 },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/channel/UCZ3GxXawVmKJemgPdtPKuqw", size: 150 },
];

const PRIORITY_LINKS = [
  { 
    name: "RENO SUPER SHOW INFO", 
    url: "/reno", 
    icon: Info, 
    className: "bg-gold text-dark border-gold text-[1.1rem]",
    isInternal: true
  },
  { 
    name: "BUY RENO SUPER SHOW TICKETS", 
    url: "https://book.stripe.com/eVq3cxgeO1bs0GRbZp18c00", 
    icon: Ticket, 
    className: "bg-white text-dark border-white text-[1.2rem] md:text-[1.25rem]",
    target: "_blank"
  },
  { 
    name: "RSVP ON FACEBOOK EVENT", 
    url: "https://www.facebook.com/share/19u6XNq6Ki/", 
    icon: Facebook, 
    className: "bg-gray-dark text-white border-[#1877F2] hover:bg-gray-800 hover:shadow-[0_0_15px_rgba(24,119,242,0.3)]",
    target: "_blank"
  },
  { 
    name: "VENDOR & VEHICLE REGISTRATION", 
    url: "#", 
    icon: Store, 
    className: "bg-gray-dark border-red-600/50 text-white/50",
    isSoldOut: true
  },
];

function Hub() {
  const CUTOFF_DATE = new Date("2026-05-15T00:00:00-07:00").getTime();
  const isPreSaleOver = Date.now() >= CUTOFF_DATE;

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

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-0 pb-4 md:px-6 md:pt-0 md:pb-4">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[120px] md:text-[280px] text-gold/[0.03] whitespace-nowrap pointer-events-none select-none tracking-[-5px] md:tracking-[-10px] z-0">
        JMP SHOWS
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 w-full max-w-[480px] bg-gray-dark/80 backdrop-blur-sm border border-gray-light rounded-[24px] p-6 md:p-10 text-center shadow-[0_30px_60px_rgba(0,0,0,0.5)] mt-4 md:-mt-20"
      >
        {/* Logo Section */}
        <motion.div variants={itemVariants} className="mb-4 flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <img 
              src={logo} 
              alt="JMP Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          variants={itemVariants}
          className="font-serif text-[2.2rem] md:text-[3.5rem] leading-[0.9] md:leading-[0.8] uppercase tracking-[-1px] mb-8 -mt-10 pl-[1px]"
        >
          PRODUCTIONS
          <span className="block text-gold text-[0.9rem] md:text-[1.1rem] tracking-[3px] md:tracking-[6px] mt-3 font-sans font-bold uppercase">premiere car shows</span>
        </motion.h1>

        <div className="w-full space-y-3 mb-6">
          {PRIORITY_LINKS.map((link, index) => {
            const Component = link.isInternal ? motion(Link) : motion.a;
            const props = link.isInternal 
              ? { to: link.url } 
              : { href: link.url, target: link.target, rel: link.target === "_blank" ? "noopener noreferrer" : undefined };

            return (
              <div key={index} className="relative group">
                <Component
                  {...props}
                  variants={itemVariants}
                  whileHover={link.isSoldOut || (link.name.includes("TICKETS") && isPreSaleOver) ? {} : { scale: 1.02 }}
                  whileTap={link.isSoldOut || (link.name.includes("TICKETS") && isPreSaleOver) ? {} : { scale: 0.98 }}
                  className={`flex items-center justify-center gap-3 w-full py-3.5 md:py-4 px-4 md:px-6 rounded-xl font-extrabold text-[0.9rem] md:text-[1rem] uppercase tracking-wider border transition-all ${
                    link.isSoldOut 
                      ? 'cursor-not-allowed grayscale-[0.5]' 
                      : (link.name.includes("TICKETS") && isPreSaleOver)
                        ? 'bg-gray-dark border-gold text-gold cursor-default'
                        : link.className
                  }`}
                  onClick={(e) => (link.isSoldOut || (link.name.includes("TICKETS") && isPreSaleOver)) && e.preventDefault()}
                >
                  {link.name.includes("TICKETS") && isPreSaleOver ? "Tickets Available at the Gate" : link.name}
                </Component>
                {link.isSoldOut && (
                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 -rotate-[5deg] pointer-events-none drop-shadow-[0_2px_10px_rgba(220,38,38,0.3)] flex justify-center">
                    <div className="border-[3px] border-red-600 bg-white/10 backdrop-blur-[1px] text-red-600 px-4 py-0.5 rounded-md font-black text-xl md:text-2xl uppercase tracking-tighter opacity-90 flex items-center justify-center">
                      <span className="relative z-10 text-nowrap">SOLD OUT</span>
                      <div className="absolute inset-0 bg-red-600/5 mix-blend-multiply" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Social Grid */}
        <div className="w-full grid grid-cols-2 gap-3 mb-8">
          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: "var(--color-gold)" }}
              whileTap={{ scale: 0.95 }}
              className="aspect-square flex flex-col items-center justify-center gap-2 md:gap-3 bg-gray-dark border border-gray-light rounded-2xl text-[0.75rem] md:text-[0.85rem] font-bold uppercase hover:text-gold transition-colors p-4"
            >
              <div className="w-full h-full max-w-[60px] max-height-[60px] md:max-w-none md:max-height-none flex items-center justify-center">
                <social.icon size="100%" strokeWidth={1.5} className="max-w-[80px] md:max-w-none" />
              </div>
              <span className="tracking-widest">{social.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Footer Meta */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-gray-light"
        >
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="mailto:Luxurious925@gmail.com" 
              className="text-gold hover:text-white transition-colors text-[0.85rem] font-bold uppercase"
            >
              Email
            </a>
            <a 
              href="tel:+19253250195" 
              className="text-gold hover:text-white transition-colors text-[0.85rem] font-bold uppercase"
            >
              Call
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-4 text-[9px] text-gray-500 uppercase tracking-widest font-bold">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>

          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} JM Productions
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname + location.search,
      page_title: "JM Productions"
    });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/reno" element={<Reno2026 />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  );
}



