import React from "react";
import { motion } from "framer-motion";

export const HeroText: React.FC = () => {
    return (
        <div className="text-center space-y-4 max-w-4xl mx-auto px-4">
            <motion.h1
                initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-normal tracking-tighter text-gray-200 leading-tight font-sans"
            >
                VocaAI - Next generation
                <br />of<span className="font-sans font-semibold text-white"> hospitality</span>.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-sans tracking-tighter"
            >
                Intelligent voice AI solutions designed to transform the guest experience and streamline operations.
            </motion.p>
        </div>
    );
};
