import {
  Workflow,
  ShieldCheck,
  Gauge,
  MousePointer2,
  Blocks,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export interface Advantage {
  id: string;
  icon: LucideIcon;
}

export const ADVANTAGES: Advantage[] = [
  { id: "responsive", icon: Workflow },
  { id: "seo", icon: ShieldCheck },
  { id: "speed", icon: Gauge },
  { id: "animations", icon: MousePointer2 },
  { id: "stack", icon: Blocks },
  { id: "delivery", icon: Headphones },
];
