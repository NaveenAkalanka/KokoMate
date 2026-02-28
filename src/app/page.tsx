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
      <main className="h-full w-full flex flex-col min-h-0 overflow-y-auto overflow-x-hidden">
        <Calculator />
      </main>
    </div>
  );
}
