import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Назарій",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#090908",
    theme_color: "#ff5b33",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
