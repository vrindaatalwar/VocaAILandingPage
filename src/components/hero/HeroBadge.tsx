import React from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { motion } from "framer-motion";

export const HeroBadge: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 40 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
        >
            <LiquidButton
                variant="default"
                size="sm"
                className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/90 hover:scale-100 cursor-default"
            >
                <span>VocaAI</span>
            </LiquidButton>
        </motion.div>
    );
};
