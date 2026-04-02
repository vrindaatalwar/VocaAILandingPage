"use client"

import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
    return (
        <Sonner
            theme="system"
            className="toaster group"
            position="top-center"
            toastOptions={{
                classNames: {
                    toast:
                        "group toast group-[.toaster]:bg-background/80 group-[.toaster]:backdrop-blur-xl group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:!text-white data-[type=success]:!bg-green-900/40 data-[type=success]:!border-green-500/50 data-[type=error]:!bg-red-900/40 data-[type=error]:!border-red-500/50 data-[type=warning]:!bg-yellow-900/40 data-[type=warning]:!border-yellow-500/50",
                    description: "group-[.toast]:!text-white",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:!text-white",
                    cancelButton:
                        "group-[.toast]:bg-muted group-[.toast]:!text-white",
                },
            }}
            {...props}
        />
    )
}

export { Toaster }
