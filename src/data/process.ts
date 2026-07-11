import {
  MessagesSquare,
  ChartNoAxesCombined,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  step: number;
  id: string;
  icon: LucideIcon;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, id: "discovery", icon: MessagesSquare },
  { step: 2, id: "analysis", icon: ChartNoAxesCombined },
  { step: 3, id: "design", icon: PenTool },
  { step: 4, id: "development", icon: Code2 },
  { step: 5, id: "testing", icon: FlaskConical },
  { step: 6, id: "launch", icon: Rocket },
];
