import {
  Smartphone,
  Search,
  Gauge,
  Sparkles,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface Advantage {
  id: string;
  icon: LucideIcon;
}

export const ADVANTAGES: Advantage[] = [
  { id: "responsive", icon: Smartphone },
  { id: "seo", icon: Search },
  { id: "speed", icon: Gauge },
  { id: "animations", icon: Sparkles },
  { id: "stack", icon: Layers },
  { id: "delivery", icon: Rocket },
];
