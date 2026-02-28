import Calculator from "@/components/Calculator";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-[100dvh] w-full bg-zinc-50 dark:bg-[#0A0E27] text-foreground flex flex-col selection:bg-primary/20"
      style={{
        paddingTop: "max(1rem, env(safe-area-inset-top))",
        paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))",
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))",
      }}
    >
      <main className="h-[90dvh] w-full flex flex-col min-h-0 overflow-y-auto overflow-x-hidden">
        <Calculator />
      </main>

      <footer className="h-[10dvh] min-h-[50px] w-full max-w-md mx-auto flex flex-col items-center justify-center gap-1.5 text-[9px] text-muted-foreground font-medium flex-none overflow-hidden pb-1">
        <p className="leading-none text-[8.5px]">Built for SL shoppers. Not affiliated with Koko.</p>
        <div className="flex items-center gap-1.5 leading-none">
          <p>
            Designed by{" "}
            <a href="https://github.com/NaveenAkalanka" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
              Naveen Akalanka
            </a>
          </p>
          <span className="opacity-40">•</span>
          <p className="text-[8px] opacity-70">CC BY-NC-SA 4.0</p>
        </div>
        <a
          href="https://www.buymeacoffee.com/naveenakalanka"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 inline-flex items-center gap-1 px-2.5 py-1 bg-[#FFDD00] text-black rounded-md font-bold hover:opacity-90 transition-opacity shadow-sm"
        >
          <span className="text-[10px]">☕</span> <span className="text-[10px]">Buy me a coffee</span>
        </a>
      </footer>
    </div>
  );
}
