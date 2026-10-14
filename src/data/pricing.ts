import { Bot, PanelsTopLeft, PencilRuler, Stethoscope, Workflow, type LucideIcon } from "lucide-react";

export type PricingId = "siteEdit" | "newWebsite" | "crm" | "clinwide" | "chatbot";

export interface PricingItem {
  id: PricingId;
  icon: LucideIcon;
  index: string;
  featured?: boolean;
}

export const PRICING_ITEMS: PricingItem[] = [
  { id: "clinwide", icon: Stethoscope, index: "01", featured: true },
  { id: "newWebsite", icon: PanelsTopLeft, index: "02", featured: true },
  { id: "crm", icon: Workflow, index: "03" },
  { id: "siteEdit", icon: PencilRuler, index: "04" },
  { id: "chatbot", icon: Bot, index: "05" },
];
