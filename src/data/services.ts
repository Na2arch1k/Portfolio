import { Stethoscope, PanelsTopLeft, Bot, Workflow, type LucideIcon } from "lucide-react";

export type ServiceId = "cliniccard" | "websites" | "chatbots" | "crm";

export interface Service {
  id: ServiceId;
  icon: LucideIcon;
  index: string;
}

export const SERVICES: Service[] = [
  { id: "cliniccard", icon: Stethoscope, index: "01" },
  { id: "websites", icon: PanelsTopLeft, index: "02" },
  { id: "chatbots", icon: Bot, index: "03" },
  { id: "crm", icon: Workflow, index: "04" },
];
