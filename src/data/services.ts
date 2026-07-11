import {
  LayoutTemplate,
  Building2,
  Store,
  RefreshCw,
  Search,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  { id: "landing", icon: LayoutTemplate },
  { id: "corporate", icon: Building2 },
  { id: "niche", icon: Store },
  { id: "redesign", icon: RefreshCw },
  { id: "seo", icon: Search },
  { id: "support", icon: LifeBuoy },
];
