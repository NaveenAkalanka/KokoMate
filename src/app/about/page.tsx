"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
    return (
        <div
            className="h-[100dvh] w-full bg-zinc-50 dark:bg-[#0A0E27] text-foreground flex flex-col selection:bg-primary/20"
            style={{
                paddingTop: "max(1rem, env(safe-area-inset-top))",
                paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
                paddingLeft: "max(1rem, env(safe-area-inset-left))",
                paddingRight: "max(1rem, env(safe-area-inset-right))",
            }}
        >
            <header className="flex items-center p-4 border-b border-zinc-200 dark:border-zinc-800">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => { window.location.href = "../index.html"; }}
                    className="rounded-full shadow-sm bg-white dark:bg-zinc-900 border"
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <h1 className="flex-1 text-center font-bold text-lg -ml-10">About KokoMate</h1>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-6 text-center gap-6">
                <div className="flex flex-col items-center gap-3">
                    <div className="bg-white rounded-[1.5rem] shadow-sm border border-zinc-100 p-4 flex items-center justify-center">
                        <Image src="/logo_icon.svg" width={64} height={64} alt="KokoMate Icon" className="drop-shadow-md" />
                    </div>
                    <Image src="/logo_full.svg" width={160} height={30} alt="KokoMate Full Logo" className="mt-2" />
                    <p className="text-sm text-muted-foreground mt-2 font-medium max-w-[250px]">
                        The exact installment & merchant fee calculator. Built for Sri Lankan shoppers.
                    </p>
                    <p className="text-xs text-zinc-400 mt-2 italic">Not affiliated with Koko.</p>
                </div>

                <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-2" />

                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm">
                        Designed & Developed with ❤️ by
                    </p>
                    <a href="https://github.com/NaveenAkalanka" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold text-lg">
                        Naveen Akalanka
                    </a>
                    <p className="text-xs opacity-70 mt-1">License: CC BY-NC-SA 4.0</p>
                </div>

                <a
                    href="https://www.buymeacoffee.com/naveenakalanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#FFDD00] text-black rounded-xl font-bold hover:opacity-90 transition-all shadow-md active:scale-95"
                >
                    <span className="text-xl">☕</span> <span className="text-base">Buy me a coffee</span>
                </a>
            </main>
        </div>
    );
}
