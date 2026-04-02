import Prism from "@/components/background/Prism";
import { HeroBadge } from "@/components/hero/HeroBadge";
import { HeroText } from "@/components/hero/HeroText";
import { WaitlistForm } from "@/components/form/WaitlistForm";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">

      {/* Prism Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Prism
          animationType="rotate"
          timeScale={0.2}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={0.4}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col items-center gap-4 px-4"
      >
        <HeroBadge />
        <HeroText />
        <WaitlistForm />
      </motion.div>

      {/* Footer info */}
      <div className="absolute bottom-6 text-center text-white/20 text-sm font-light z-10">
        © 2025 AI Agents. All rights reserved.
      </div>
      <Toaster position="top-center" />
    </div>
  );
}


