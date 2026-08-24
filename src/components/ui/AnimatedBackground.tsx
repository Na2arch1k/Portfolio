import { cn } from "@/lib/utils";

export function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
      <div className="animate-aurora absolute left-1/2 top-[-10dvh] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-accent/30 blur-[70px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]" />
      <div className="animate-float-slow absolute -left-32 top-[33dvh] h-[250px] w-[250px] rounded-full bg-[#3b82f6]/15 blur-[60px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />
      <div className="animate-float-slower absolute -right-32 bottom-0 hidden h-[450px] w-[450px] rounded-full bg-[#1d4ed8]/20 blur-[110px] sm:block" />
      <div className="absolute right-1/4 top-[50dvh] hidden h-[320px] w-[320px] rounded-full bg-accent-soft/10 blur-[100px] sm:block" />
    </div>
  );
}
