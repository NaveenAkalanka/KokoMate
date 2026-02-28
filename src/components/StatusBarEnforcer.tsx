"use client";

import { useEffect } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";

export default function StatusBarEnforcer() {
    useEffect(() => {
        const handleStatusBar = async () => {
            try {
                const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

                // Keep webview overlaid so the app stretches edge-to-edge under the selfie camera
                await StatusBar.setOverlaysWebView({ overlay: true });

                if (isDark) {
                    // Dark theme -> Style.Dark (provides LIGHT text for dark backgrounds in Capacitor)
                    await StatusBar.setStyle({ style: Style.Dark });
                } else {
                    // Light theme -> Style.Light (provides DARK text for light backgrounds in Capacitor)
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
