"use client";

import {
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface RippleState {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface SharedProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: undefined;
  };

type AnchorProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    href: string;
  };

type Props = ButtonProps | AnchorProps;

const base =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 disabled:animate-none disabled:shadow-none active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[linear-gradient(110deg,#2563eb_0%,#3b82f6_45%,#1d4ed8_100%)] bg-[length:200%_auto] bg-left text-white shadow-[0_6px_24px_-6px_rgba(37,99,235,0.55)] hover:bg-right hover:shadow-[0_10px_36px_-6px_rgba(59,130,246,0.7)] hover:brightness-[1.08] hover:animate-glow-pulse focus-visible:animate-glow-pulse",
  secondary:
    "glass text-white hover:border-accent/50 hover:bg-white/[0.08] hover:shadow-[0_8px_28px_-10px_rgba(37,99,235,0.4)]",
  ghost: "text-white/70 hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

function useRipple() {
  const [ripples, setRipples] = useState<RippleState[]>([]);

  function addRipple(event: MouseEvent<HTMLElement>) {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y, size }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }

  return { ripples, addRipple };
}

function RippleLayer({ ripples }: { ripples: RippleState[] }) {
  return (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/30 animate-[ripple_0.65s_ease-out]"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
          }}
        />
      ))}
    </>
  );
}

const CUSTOM_PROP_KEYS = ["variant", "size", "icon", "className", "children", "href", "onClick"] as const;

function omitCustomProps<T extends object>(source: T): Omit<T, (typeof CUSTOM_PROP_KEYS)[number]> {
  const rest = { ...source } as Record<string, unknown>;
  for (const key of CUSTOM_PROP_KEYS) delete rest[key];
  return rest as Omit<T, (typeof CUSTOM_PROP_KEYS)[number]>;
}

export function Button(props: Props) {
  const { variant = "primary", size = "md", icon, className, children } = props;
  const { ripples, addRipple } = useRipple();

  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const rest = omitCustomProps(props);
    return (
      <a
        href={props.href}
        className={classes}
        onClick={(e) => {
          addRipple(e);
          props.onClick?.(e);
        }}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <RippleLayer ripples={ripples} />
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
          {icon}
        </span>
      </a>
    );
  }

  const rest = omitCustomProps(props);
  return (
    <button
      className={classes}
      onClick={(e) => {
        addRipple(e);
        props.onClick?.(e);
      }}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <RippleLayer ripples={ripples} />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {icon}
      </span>
    </button>
  );
}
