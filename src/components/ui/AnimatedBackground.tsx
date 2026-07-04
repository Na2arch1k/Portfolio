import { cn } from "@/lib/utils";

export function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
      <div className="animate-aurora absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
      <div className="animate-float-slow absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-[100px]" />
      <div className="animate-float-slower absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[110px]" />
      <div className="noise-overlay" />
    </div>
  );
}
