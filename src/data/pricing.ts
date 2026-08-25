import { Bot, PanelsTopLeft, PencilRuler, Stethoscope, Workflow, type LucideIcon } from "lucide-react";

export type PricingId = "siteEdit" | "newWebsite" | "crm" | "cliniccard" | "chatbot";

export interface PricingItem {
  id: PricingId;
  icon: LucideIcon;
  index: string;
  featured?: boolean;
}

export const PRICING_ITEMS: PricingItem[] = [
  { id: "siteEdit", icon: PencilRuler, index: "01" },
  { id: "newWebsite", icon: PanelsTopLeft, index: "02", featured: true },
  { id: "crm", icon: Workflow, index: "03" },
  { id: "cliniccard", icon: Stethoscope, index: "04", featured: true },
  { id: "chatbot", icon: Bot, index: "05" },
];
