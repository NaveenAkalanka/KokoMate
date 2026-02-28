import Calculator from "@/components/Calculator";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-[100dvh] w-full bg-zinc-50 dark:bg-[#0A0E27] text-foreground flex flex-col selection:bg-primary/20"
      style={{
        paddingTop: "10dvh",
        paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))",
      }}
    >
      <main className="flex-1 w-full flex flex-col min-h-0 overflow-y-auto overflow-x-hidden">
        <Calculator />
      </main>

      <footer className="w-full max-w-md mx-auto text-center flex flex-col gap-2 items-center justify-center text-[10px] text-muted-foreground font-medium flex-none mt-2 pb-2">
        <p>Built for Sri Lankan shoppers. Not affiliated with Koko.</p>
        <div className="flex flex-col gap-0.5 items-center">
          <p>
            Designed & Developed with ❤️ by{" "}
            <a href="https://github.com/NaveenAkalanka" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all font-semibold">
              Naveen Akalanka
            </a>
          </p>
          <p className="text-[9px] opacity-70">License: CC BY-NC-SA 4.0</p>
        </div>
        <a
          href="https://www.buymeacoffee.com/naveenakalanka"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFDD00] text-black rounded-lg font-bold hover:opacity-90 transition-opacity shadow-sm"
        >
          <span className="text-xs">☕</span> Buy me a coffee
        </a>
      </footer>
    </div>
  );
}
