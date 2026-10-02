import { Terminal, Monitor, Laptop, type LucideIcon } from "lucide-react";

export type OSKey = "linux" | "windows" | "mac";

export const DATA: Record<OSKey, {
    label: string;
    icon: LucideIcon;
    accent: string;
    border: string;
    pros: string[];
    cons: string[];
}> = {
    linux: {
        label: "Linux",
        icon: Terminal,
        accent: "text-red-700",
        border: "border-red-700",
        pros: [
            "Open source and completely free",
            "Deep system customization",
            "Excellent performance on modest hardware",
            "Natural environment for development and servers",
        ],
        cons: [
            "Steeper learning curve for beginners",
            "Limited compatibility with some proprietary software",
            "Driver support may vary between distributions",
        ],
    },
    windows: {
        label: "Windows",
        icon: Monitor,
        accent: "text-blue-600",
        border: "border-blue-600",
        pros: [
            "Greater compatibility with software and games",
            "Familiar interface for most users",
            "Broad support from hardware manufacturers",
            "Good integration with corporate environments",
        ],
        cons: [
            "More frequently targeted by viruses and malware",
            "System updates can be intrusive",
            "Paid license for full use",
        ],
    },
    mac: {
        label: "macOS",
        icon: Laptop,
        accent: "text-emerald-700",
        border: "border-emerald-700",
        pros: [
            "Strong hardware and software integration",
            "A reference for audio and video production",
            "Connected ecosystem with other devices",
            "Stability and visual consistency",
        ],
        cons: [
            "High hardware cost",
            "Limited flexibility for customization",
            "Limited hardware upgrades on most models",
        ],
    },
};