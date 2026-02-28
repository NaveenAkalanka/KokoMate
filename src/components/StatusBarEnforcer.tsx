"use client";

import { useEffect } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";

export default function StatusBarEnforcer() {
    useEffect(() => {
        const handleStatusBar = async () => {
            try {
                const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

                await StatusBar.setOverlaysWebView({ overlay: false });

                if (isDark) {
                    // Dark background, White text
                    await StatusBar.setBackgroundColor({ color: "#0A0E27" });
                    await StatusBar.setStyle({ style: Style.Dark });
                } else {
                    // Light background, Dark text
                    await StatusBar.setBackgroundColor({ color: "#FAFAFA" }); // zinc-50
                    await StatusBar.setStyle({ style: Style.Light });
                }
            } catch (err) {
                // Ignored in browser environments
            }
        };

        handleStatusBar();

        // Listen for theme changes dynamically
        const matcher = window.matchMedia('(prefers-color-scheme: dark)');
        if (matcher?.addEventListener) {
            matcher.addEventListener('change', handleStatusBar);
        }
    }, []);

    return null;
}
