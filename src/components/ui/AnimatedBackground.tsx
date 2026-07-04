import { cn } from "@/lib/utils";

export function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
      <div className="animate-aurora absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/30 blur-[120px]" />
      <div className="animate-float-slow absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-[#3b82f6]/15 blur-[100px]" />
      <div className="animate-float-slower absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-[#1d4ed8]/20 blur-[110px]" />
      <div className="absolute right-1/4 top-1/2 h-[320px] w-[320px] rounded-full bg-accent-soft/10 blur-[100px]" />
      <div className="noise-overlay" />
    </div>
  );
}
