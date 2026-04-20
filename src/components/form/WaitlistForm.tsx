import React from "react";
import { motion } from "framer-motion";
import MultiStateMorphButton from "@/components/ui/multi-state-morph-button";

export const WaitlistForm: React.FC = () => {
    const handleTryNow = () => {
        // Mock async action or navigation
        console.log("Try Now clicked");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-md mx-auto mt-0 px-4 flex justify-center"
        >
            <MultiStateMorphButton
                label="TRY NOW"
                onClick={handleTryNow}
                height={40}
                width={undefined}
                containerClassName="w-full sm:w-[110px]"
                className="text-black font-sans tracking-tighter font-semibold rounded-xl transition-all duration-300 hover:!bg-white/90"
                colors={{
                    idle: "#ffffff",
                    success: "#ffffff",
                    error: "#ffffff",
                }}
            />
        </motion.div>
    );
};
