import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import MultiStateMorphButton from "@/components/ui/multi-state-morph-button";
import { toast } from "sonner";
import { ListBox, ListBoxItem } from "@/components/ui/listbox";

const submittedEmails = new Set<string>();

export const WaitlistForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [suggestedDomains, setSuggestedDomains] = useState<string[]>([]);
    const [activeDomain, setActiveDomain] = useState<Set<React.Key>>(new Set());

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const handleSubscribe = async () => {
        if (!email) {
            toast.error("Please enter your email address");
            throw new Error("Email required");
        }
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address");
            throw new Error("Invalid email format");
        }
        if (submittedEmails.has(email)) {
            toast.warning("Looks like you’re already signed up. We’ve got you covered.");
            setEmail("");
            throw new Error("Duplicate email");
        }

        // Mock async action
        await new Promise((resolve) => setTimeout(resolve, 200));

        submittedEmails.add(email);
        toast.success("Thanks for the interest! We can't wait to show you what we're building.");
        setEmail("");
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setActiveDomain(new Set());

        if (!value) {
            setSuggestedDomains([]);
            return;
        }

        const atIndex = value.indexOf('@');
        const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'icloud.com'];

        if (atIndex > 0) {
            const localPart = value.substring(0, atIndex);
            const domainPart = value.substring(atIndex + 1);

            const filteredDomains = domains.filter(d => d.startsWith(domainPart));
            setSuggestedDomains(filteredDomains.map(d => `${localPart}@${d}`));
        } else if (atIndex === -1) {
            setSuggestedDomains(domains.map(d => `${value}@${d}`));
        } else {
            setSuggestedDomains([]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (suggestedDomains.length === 0) return;

        const currentActiveInfo = Array.from(activeDomain)[0] as string | undefined;
        const currentIndex = currentActiveInfo ? suggestedDomains.indexOf(currentActiveInfo) : -1;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            const nextIndex = currentIndex < suggestedDomains.length - 1 ? currentIndex + 1 : 0;
            setActiveDomain(new Set([suggestedDomains[nextIndex]]));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : suggestedDomains.length - 1;
            setActiveDomain(new Set([suggestedDomains[prevIndex]]));
        } else if (e.key === "Enter" && currentActiveInfo) {
            e.preventDefault();
            setEmail(currentActiveInfo);
            setSuggestedDomains([]);
            setActiveDomain(new Set());
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Since the button handles its own click, we might not need this unless we keep the form structure
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-md mx-auto mt-0 px-4"
        >
            <motion.form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col sm:flex-row gap-2 relative z-10 items-center justify-center w-full"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >

                <div className="relative w-full sm:flex-1">
                    <Input
                        type="email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={handleEmailChange}
                        onKeyDown={handleKeyDown}
                        spellCheck={false}
                        className="h-10 w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl focus-visible:ring-white/20 focus-visible:border-white/40 hover:bg-white/15 transition-all duration-300 backdrop-blur-md"
                    />
                    {suggestedDomains.length > 0 && (
                        <div className="absolute top-full left-0 w-full mt-1 z-50">
                            <ListBox
                                aria-label="Email suggestions"
                                selectionMode="single"
                                selectedKeys={activeDomain as any}
                                onSelectionChange={(selection: any) => {
                                    const selected = Array.from(selection)[0];
                                    if (selected) {
                                        setEmail(selected.toString());
                                        setSuggestedDomains([]);
                                        setActiveDomain(new Set());
                                    }
                                }}
                                className="bg-black/60 backdrop-blur-xl border border-white/10 text-white rounded-xl p-1 shadow-lg"
                            >
                                {suggestedDomains.map((domain) => (
                                    <ListBoxItem
                                        key={domain}
                                        id={domain}
                                        textValue={domain}
                                        className="cursor-pointer rounded-lg px-3 py-2 text-sm outline-none text-white/90 data-[focus-visible]:bg-white/10 data-[selected=true]:bg-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        {domain}
                                    </ListBoxItem>
                                ))}
                            </ListBox>
                        </div>
                    )}
                </div>
                <MultiStateMorphButton
                    label="Get Notified"
                    onClick={handleSubscribe}
                    height={40}
                    width={undefined}
                    containerClassName="w-full sm:w-[110px]"
                    className="text-black font-sans tracking-tighter font-normal rounded-xl transition-all duration-300 hover:!bg-white/90"
                    colors={{
                        idle: "#ffffff",
                        success: "#ffffffff",
                        error: "#ffffffff",
                    }}
                />
            </motion.form>
        </motion.div>
    );
};
