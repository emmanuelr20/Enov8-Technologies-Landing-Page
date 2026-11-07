import { ogSize, renderOg } from "@/lib/og";

export const alt = "Enov8 Technologies — Software & IT solutions that move business forward";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    eyebrow: "Software & IT Solutions",
    title: "Technology that moves business forward.",
    subtitle: "Custom software, cyber security, AI, ERP and enterprise infrastructure.",
  });
}
