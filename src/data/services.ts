import { RefreshCw, LayoutTemplate, ShoppingCart, Bot, type LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  priceMin: number;
  /** Upper end of the range, in USD. Omitted = an open-ended "від/from" price. */
  priceMax?: number;
  /**
   * Pre-discount reference price, shown struck through with the computed
   * percentage off. Only the one flagship service currently runs a discount
   * — the rest show a plain price, so this stays optional rather than
   * forcing every card through the same promo treatment.
   */
  originalPriceMin?: number;
  originalPriceMax?: number;
  /** Highlights this card as the recommended/most-picked option. */
  popular?: boolean;
}

export const SERVICES: Service[] = [
  { id: "update", icon: RefreshCw, priceMin: 50, priceMax: 100 },
  {
    id: "multipage",
    icon: LayoutTemplate,
    priceMin: 80,
    priceMax: 150,
    originalPriceMin: 160,
    originalPriceMax: 250,
    popular: true,
  },
  { id: "ecommerce", icon: ShoppingCart, priceMin: 200 },
  { id: "automation", icon: Bot, priceMin: 50, priceMax: 100 },
];
