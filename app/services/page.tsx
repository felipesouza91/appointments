import { ServiceBrowsePage } from "@/components/search";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore local services | Slotwise",
  description:
    "Browse popular service categories and find a time for your next appointment with Slotwise.",
};

export default function ServicesPage() {
  return <ServiceBrowsePage />;
}
